import { useEffect, useState } from 'react';
import SeoJsonLd from '../../components/SeoJsonLd';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('boas-vindas');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPizzaOvenExpanded, setIsPizzaOvenExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://casaazulcapao.com';

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LodgingBusiness',
        '@id': `${siteUrl}/#lodging`,
        name: 'Casa Azul Capão',
        description: 'Casa completa no Vale do Capão, Chapada Diamantina. Hospedagem com 3 quartos, 4 camas, 2 banheiros para até 7 hóspedes. Wi-Fi rápido, vistas deslumbrantes e anfitriões Superhost.',
        image: [
          'https://a0.muscache.com/im/pictures/hosting/Hosting-32110116/original/41bc551c-bb51-47d2-85ac-43bdd0a1d1c0.jpeg',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-32110116/original/7e68a61b-cba6-41e0-b696-96b4535ead03.jpeg'
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Caeté-Açu',
          addressLocality: 'Vale do Capão',
          addressRegion: 'BA',
          addressCountry: 'BR',
          postalCode: '46900-000'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -12.53,
          longitude: -41.48
        },
        url: siteUrl,
        telephone: '+5571999452989',
        priceRange: '$$',
        starRating: {
          '@type': 'Rating',
          ratingValue: '4.89',
          bestRating: '5'
        },
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi', value: '263 Mbps' },
          { '@type': 'LocationFeatureSpecification', name: 'Estacionamento Gratuito', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Cozinha Completa', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Forno de Pizza', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Lareira', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Jardim Privado', value: true }
        ],
        numberOfRooms: 3,
        petsAllowed: false,
        smokingAllowed: false
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Casa Azul Capão',
        description: 'Guia completo de hospedagem para Casa Azul Capão no Vale do Capão, Chapada Diamantina',
        publisher: {
          '@type': 'Organization',
          name: 'Casa Azul Capão',
          logo: {
            '@type': 'ImageObject',
            url: 'https://static.readdy.ai/image/0df151d1946257bfef25b82377e83799/85008b4b599f305b222817d899e670f1.jpeg'
          }
        },
        inLanguage: 'pt-BR'
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Qual o horário de check-in e check-out?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Check-in após 15h e check-out até 11h. Você receberá as instruções de acesso por mensagem antes da sua chegada.'
            }
          },
          {
            '@type': 'Question',
            name: 'A Casa Azul tem Wi-Fi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sim! Temos Wi-Fi rápido de 263 Mbps, ideal para trabalho remoto e streaming. Nome da rede: CasaAzulCapao (sem senha).'
            }
          },
          {
            '@type': 'Question',
            name: 'Quantas pessoas a casa acomoda?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A Casa Azul acomoda até 7 hóspedes, com 3 quartos, 4 camas e 2 banheiros.'
            }
          },
          {
            '@type': 'Question',
            name: 'Como chegar à Casa Azul Capão?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Saindo de Palmeiras, pegue a estrada de asfalto para o Vale do Capão (40 min). Após a Pousada Lagoa das Cores, ande 900m e dobre à esquerda sentido trilha das Águas Claras. Continue por 500m, dobre à esquerda novamente, siga 100m e a Casa Azul estará no final da estrada do lado esquerdo.'
            }
          },
          {
            '@type': 'Question',
            name: 'Animais de estimação são permitidos?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Não, animais de estimação não são permitidos na Casa Azul Capão.'
            }
          },
          {
            '@type': 'Question',
            name: 'Quais trilhas ficam próximas à casa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A Cachoeira da Fumaça fica a 5 minutos de carro, o Riachinho de Lençóis a 30 minutos de caminhada, e a Lagoa dos Patos a 15 minutos de carro. Recomendamos contratar guias locais.'
            }
          }
        ]
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Início',
            item: siteUrl
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Boas-vindas',
            item: `${siteUrl}#boas-vindas`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Informações',
            item: `${siteUrl}#informacoes`
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Regras',
            item: `${siteUrl}#regras`
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Dicas Locais',
            item: `${siteUrl}#dicas-locais`
          }
        ]
      },
      {
        '@type': 'TouristAttraction',
        name: 'Cachoeira da Fumaça',
        description: 'A trilha mais famosa da região onde aventureiros encontrarão uma cachoeira incrível e uma vista de tirar o fôlego. A entrada fica a 5 minutos da Casa Azul.',
        image: 'https://static.readdy.ai/image/0df151d1946257bfef25b82377e83799/6516ec2841c510a6c633c675179528bf.webp',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -12.52,
          longitude: -41.47
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Vale do Capão',
          addressRegion: 'BA',
          addressCountry: 'BR'
        }
      },
      {
        '@type': 'Restaurant',
        name: 'Bistrô Pimenta Rosa',
        description: 'Comida afetiva no Vale do Capão no bairro dos Campos. Uma experiência gastronômica única com ingredientes locais.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Bairro dos Campos',
          addressLocality: 'Vale do Capão',
          addressRegion: 'BA',
          addressCountry: 'BR'
        },
        servesCuisine: 'Brasileira'
      }
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFB] to-white">
      <SeoJsonLd data={jsonLdData} />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://a0.muscache.com/im/pictures/hosting/Hosting-32110116/original/41bc551c-bb51-47d2-85ac-43bdd0a1d1c0.jpeg"
            alt="Casa Azul Capão"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="mb-6 sm:mb-8 flex justify-center">
            <img
              src="https://static.readdy.ai/image/0df151d1946257bfef25b82377e83799/85008b4b599f305b222817d899e670f1.jpeg"
              alt="Casa Azul Logo"
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full object-cover border-4 border-white/30 shadow-2xl"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif mb-4 sm:mb-6 tracking-tight px-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Bem-vindo à Casa Azul Capão
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 font-light tracking-wide px-4">
            Tudo o que você precisa para uma estadia perfeita
          </p>
          <button
            onClick={() => scrollToSection('boas-vindas')}
            className="bg-[#2F6F8F] hover:bg-[#245670] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            Começar a Explorar
          </button>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="ri-arrow-down-line text-white text-2xl sm:text-3xl"></i>
        </div>
      </section>

      {/* Fixed Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3 sm:py-4' : 'bg-transparent py-4 sm:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src="https://static.readdy.ai/image/0df151d1946257bfef25b82377e83799/85008b4b599f305b222817d899e670f1.jpeg"
                alt="Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
              />
              <span className={`text-base sm:text-lg md:text-xl font-semibold ${isScrolled ? 'text-[#2F6F8F]' : 'text-white'}`} style={{ fontFamily: 'Playfair Display, serif' }}>
                Casa Azul Capão
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {[
                { id: 'boas-vindas', icon: 'ri-home-heart-line', label: 'Boas-vindas' },
                { id: 'informacoes', icon: 'ri-information-line', label: 'Informações' },
                { id: 'regras', icon: 'ri-file-list-3-line', label: 'Regras' },
                { id: 'dicas-locais', icon: 'ri-map-pin-line', label: 'Dicas Locais' },
                { id: 'extras', icon: 'ri-star-line', label: 'Extras' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-3 xl:px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-[#2F6F8F] text-white'
                      : isScrolled
                      ? 'text-gray-700 hover:text-[#2F6F8F]'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <i className={`${item.icon} text-base xl:text-lg`}></i>
                  <span className="text-xs xl:text-sm font-medium">{item.label}</span>
                </button>
              ))}

              {/* Botão Reservar - Desktop */}
              <a
                href="https://airbnb.com.br/h/casaazulcapao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#2F6F8F] hover:bg-[#245670] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                <i className="ri-calendar-check-line text-base"></i>
                <span>Reservar</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer ${
                isScrolled ? 'text-[#2F6F8F]' : 'text-white'
              }`}
            >
              <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
              {[
                { id: 'boas-vindas', icon: 'ri-home-heart-line', label: 'Boas-vindas' },
                { id: 'informacoes', icon: 'ri-information-line', label: 'Informações' },
                { id: 'regras', icon: 'ri-file-list-3-line', label: 'Regras' },
                { id: 'dicas-locais', icon: 'ri-map-pin-line', label: 'Dicas Locais' },
                { id: 'extras', icon: 'ri-star-line', label: 'Extras' }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-6 py-4 transition-all duration-300 cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-[#2F6F8F] text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  } ${index !== 0 ? 'border-t border-gray-100' : ''}`}
                >
                  <i className={`${item.icon} text-xl`}></i>
                  <span className="text-base font-medium">{item.label}</span>
                </button>
              ))}

              {/* Botão Reservar - Mobile */}
              <a
                href="https://airbnb.com.br/h/casaazulcapao"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 px-6 py-4 bg-[#2F6F8F] text-white hover:bg-[#245670] transition-all duration-300 cursor-pointer border-t border-white/20"
              >
                <i className="ri-calendar-check-line text-xl"></i>
                <span className="text-base font-semibold">Reservar no Airbnb</span>
                <i className="ri-external-link-line text-sm ml-auto"></i>
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Boas-vindas Section */}
      <section id="boas-vindas" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 sm:mb-6 text-[#2F6F8F]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Seja Bem-vindo!
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#2F6F8F] mx-auto mb-6 sm:mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16">
            <div>
              <img
                src="https://a0.muscache.com/im/pictures/hosting/Hosting-32110116/original/7e68a61b-cba6-41e0-b696-96b4535ead03.jpeg"
                alt="Interior Casa Azul"
                className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                A Casa Azul é um cantinho cheio de encanto, cercado por verde e banhado pela luz suave da Chapada Diamantina. Fica a apenas 15 minutos de carro da Vila do Capão, oferecendo o equilíbrio perfeito entre tranquilidade e conveniência.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                Nossa casa foi projetada para proporcionar momentos inesquecíveis em meio à natureza, com todo o conforto que você merece. Prepare-se para relaxar, reconectar e criar memórias especiais.
              </p>
              <div className="bg-[#2F6F8F]/10 p-4 sm:p-6 rounded-xl">
                <p className="text-[#2F6F8F] font-medium text-sm sm:text-base md:text-lg">
                  <i className="ri-star-fill text-yellow-500 mr-2"></i>
                  Espaço inteiro para 7 hóspedes • 3 quartos • 4 camas • 2 banheiros
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2F6F8F]/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <i className="ri-eye-line text-2xl sm:text-3xl text-[#2F6F8F]"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">Vistas Deslumbrantes</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Aprecie vistas incríveis da montanha e do vale durante toda a sua estadia.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2F6F8F]/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <i className="ri-wifi-line text-2xl sm:text-3xl text-[#2F6F8F]"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">Wi-Fi Rápido</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Conexão de 263 Mbps, perfeita para trabalho remoto e entretenimento.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2F6F8F]/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <i className="ri-shield-star-line text-2xl sm:text-3xl text-[#2F6F8F]"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">Superhost</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Gabriel e Maoma são anfitriões experientes, com avaliações excepcionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Informações Section */}
      <section id="informacoes" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 sm:mb-6 text-[#2F6F8F]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Informações Essenciais
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#2F6F8F] mx-auto mb-6 sm:mb-8"></div>
          </div>

          {/* Como Chegar */}
          <div className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-r from-[#2F6F8F] to-[#245670] p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl text-white shadow-xl">
              <div className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-2xl sm:text-3xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Como Chegar</h3>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                    Siga estas instruções detalhadas para chegar à Casa Azul com segurança
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white/10 p-4 sm:p-6 rounded-lg sm:rounded-xl backdrop-blur-sm">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg font-bold text-blue-600">1</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Partindo de Palmeiras</h4>
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                        Pegue a estrada asfaltada que liga Palmeiras ao Vale do Capão e siga por aproximadamente <strong>40 minutos</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 p-4 sm:p-6 rounded-lg sm:rounded-xl backdrop-blur-sm">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg font-bold text-orange-600">2</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Referência: Pousada Lagoa das Cores</h4>
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-3">
                        Após passar pela Pousada Lagoa das Cores, continue por cerca de <strong>900 metros</strong> e então vire à <strong>esquerda</strong>, no sentido da Trilha das Águas Claras.
                      </p>
                      <div className="bg-yellow-500/20 border-l-4 border-yellow-400 p-3 sm:p-4 rounded">
                        <p className="text-white/95 text-xs sm:text-sm flex items-start gap-2">
                          <i className="ri-alert-line text-yellow-400 text-lg mt-0.5 flex-shrink-0"></i>
                          <span>A entrada é um pouco discreta e possui uma pequena subida antes de uma loja de materias de construção — avance com cuidado.</span>
                        </p>
                      </div>
                      <div className="mt-4">
                        <img
                          src="https://static.readdy.ai/image/0df151d1946257bfef25b82377e83799/707bf1265b5301d4edf137c83ee8d59c.jpeg"
                          alt="Entrada da Trilha das Águas Claras"
                          className="w-full h-48 sm:h-64 object-cover rounded-lg sm:rounded-xl shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 p-4 sm:p-6 rounded-lg sm:rounded-xl backdrop-blur-sm">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg font-bold text-red-600">3</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Segunda Curva</h4>
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                        Siga por aproximadamente <strong>500 metros</strong> em estrada de terra e, em seguida, vire à <strong>esquerda</strong>, sempre seguindo as placas ou a referência da Trilha das Águas Claras.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 p-4 sm:p-6 rounded-lg sm:rounded-xl backdrop-blur-sm">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg font-bold text-yellow-600">4</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Entrada do Condomínio</h4>
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-3">
                        Continue em frente por cerca de <strong>100 metros</strong> até encontrar a primeira cancela de madeira do lado esquerdo, <strong>número 68</strong> — esta é a entrada do condomínio.
                      </p>
                      <div className="bg-blue-500/20 border-l-4 border-blue-400 p-3 sm:p-4 rounded">
                        <p className="text-white/95 text-xs sm:text-sm flex items-start gap-2">
                          <i className="ri-information-line text-blue-400 text-base sm:text-lg mt-0.5 flex-shrink-0"></i>
                          <span>Caso a cancela esteja fechada, pode abri-la e entrar.</span>
                        </p>
                      </div>
                      <div className="mt-4">
                        <img
                          src="https://static.readdy.ai/image/0df151d1946257bfef25b82377e83799/868ad690ba8bd3e295e675dcd8229d8f.jpeg"
                          alt="Cancela número 68 - Entrada do Condomínio"
                          className="w-full h-48 sm:h-64 object-cover rounded-lg sm:rounded-xl shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 p-4 sm:p-6 rounded-lg sm:rounded-xl backdrop-blur-sm">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg font-bold text-green-600">5</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Dentro do Condomínio</h4>
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                        Siga em frente pela estrada interna por aproximadamente <strong>350 metros</strong>. A estrada fará uma leve curva à direita e, ao final dela, você encontrará a <strong>Casa Azul, localizada do lado esquerdo</strong>.
                      </p>
                      <div className="bg-green-500/20 border-l-4 border-green-400 p-3 sm:p-4 rounded">
                        <p className="text-white/95 text-xs sm:text-sm flex items-start gap-2">
                          <i className="ri-information-line text-green-400 text-base sm:text-lg"></i>
                          <span>Você chegou!</span>
                        </p>
                      </div>
                      <div className="mt-4">
                        <img
                          src="https://static.readdy.ai/image/0df151d1946257bfef25b82377e83799/10dcf752e72b6fc78f8139640cefb864.jpeg"
                          alt="Casa Azul - Você chegou!"
                          className="w-full h-48 sm:h-64 object-cover rounded-lg sm:rounded-xl shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 bg-white/10 p-4 sm:p-6 rounded-lg sm:rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="ri-map-2-line text-xl sm:text-2xl"></i>
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold">Localização no Google Maps</h4>
                </div>
                <a
                  href="https://maps.app.goo.gl/nLGXUZTJYUBBwh1s9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 bg-white text-[#2F6F8F] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-navigation-line text-lg sm:text-xl"></i>
                  <span>Abrir no Google Maps</span>
                  <i className="ri-external-link-line text-base sm:text-lg"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
            <div className="bg-gradient-to-br from-[#2F6F8F] to-[#245670] p-6 sm:p-8 rounded-xl sm:rounded-2xl text-white shadow-xl">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="ri-login-box-line text-xl sm:text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">Check-in</h3>
                  <p className="text-white/80 text-sm sm:text-base">Após 15h</p>
                </div>
              </div>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Você receberá as instruções de acesso por mensagem antes da sua chegada. A casa estará pronta para recebê-lo!
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2F6F8F] to-[#245670] p-6 sm:p-8 rounded-xl sm:rounded-2xl text-white shadow-xl">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="ri-logout-box-line text-xl sm:text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">Check-out</h3>
                  <p className="text-white/80 text-sm sm:text-base">Até 11h</p>
                </div>
              </div>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Por favor, deixe a casa organizada e as chaves no local onde encontrou. Peço que retirem o lixo não organico e deixem nos pontos de coleta na estrada para Palmeiras.  Esperamos que tenha aproveitado sua estadia! Não deixe de avaliar sua estadia no Airbnb. Sua avaliação é muito importante para nós :)
              </p>
            </div>
          </div>

          <div className="bg-[#F8FAFB] p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl mb-10 sm:mb-12">
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2F6F8F] rounded-full flex items-center justify-center">
                <i className="ri-wifi-line text-xl sm:text-2xl text-white"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">Wi-Fi</h3>
                <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 mb-2">Nome da Rede</p>
                      <p className="text-base sm:text-lg font-mono font-semibold text-[#2F6F8F] bg-gray-50 px-3 sm:px-4 py-2 rounded break-all">CasaAzulCapao</p>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 mb-2">Senha</p>
                      <p className="text-base sm:text-lg font-mono font-semibold text-[#2F6F8F] bg-gray-50 px-3 sm:px-4 py-2 rounded">Sem senha</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">
                    <i className="ri-speed-line mr-2"></i>
                    Velocidade: 263 Mbps - Ideal para trabalho remoto e streaming
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border-2 border-gray-100">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="ri-car-line text-xl sm:text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Estacionamento</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex items-start gap-2">
                  <i className="ri-parking-box-line text-blue-600 mt-1 flex-shrink-0"></i>
                  <span>Estacionamento gratuito disponível na propriedade. Espaço seguro para até 2 veículos.</span>
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border-2 border-gray-100">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-100 rounded-full flex items-center justify-center">
                  <i className="ri-flashlight-line text-xl sm:text-2xl text-yellow-600"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Energia e Luz</h3>
              </div>
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex items-start gap-2">
                  <i className="ri-plug-line text-yellow-600 mt-1 flex-shrink-0"></i>
                  <span>Todas as tomadas da casa são <strong>220V</strong></span>
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                  <p className="text-gray-700 text-xs leading-relaxed flex items-start gap-2">
                    <i className="ri-alert-line text-yellow-600 text-lg mt-0.5 flex-shrink-0"></i>
                    <span>Evite usar aparelhos de alto consumo ao mesmo tempo (chuveiro, micro-ondas e ferro de passar) para prevenir sobrecargas na rede.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border-2 border-gray-100">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="ri-drop-line text-2xl sm:text-3xl text-green-600"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Água</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex items-start gap-2">
                  <i className="ri-water-flash-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span>A água do terreno é oriunda de poço e apta para consumo. <strong>Aconselhamos utilizar o filtro de barro antes de beber.</strong></span>
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-3 sm:p-4 rounded">
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed flex items-start gap-2">
                    <i className="ri-information-line text-green-600 text-base sm:text-lg mt-0.5 flex-shrink-0"></i>
                    <span>Caso falte água na caixa d'água, ligue a bomba localizada na caixa d'água grande do condomínio. Utilizamos energia solar, então a bomba só funcionará durante o dia.</span>
                  </p>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-3 sm:p-4 rounded">
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed flex items-start gap-2">
                    <i className="ri-alert-line text-orange-600 text-base sm:text-lg mt-0.5 flex-shrink-0"></i>
                    <span>Enfrentamos constantemente desafios com água na região. Pedimos que consuma a água com responsabilidade. <strong>Recomendamos banhos de no máximo 5 minutos</strong> para evitar falta de água na casa.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border-2 border-gray-100">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="ri-plant-line text-xl sm:text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Jardim e Animais</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-3 sm:p-4 rounded">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-800 mb-2 flex items-center gap-2">
                    <i className="ri-seedling-line text-green-600"></i>
                    Cuidados com o Jardim
                  </h4>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Gustavo, a pessoa que toma conta do jardim, vai toda <strong>segunda, quarta e sexta no final da tarde</strong> para molhar as plantas.
                  </p>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-3 sm:p-4 rounded">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-800 mb-2 flex items-center gap-2">
                    <i className="ri-emotion-line text-amber-600"></i>
                    Sobre Animais
                  </h4>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-2">
                    Não temos animais na casa. Ultimamente tem aparecido alguns gatos e cachorros pelo condomínio que são de outros lugares.
                  </p>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-medium text-amber-800">
                    <i className="ri-alert-line text-amber-600 mr-1"></i>
                    Pedimos que não alimente estes animais pois eles são de outras pessoas. Obrigado!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border-2 border-gray-100">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-16 bg-teal-100 rounded-full flex items-center justify-center">
                  <i className="ri-plant-line text-xl sm:text-2xl text-teal-600"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Jardim e Animais</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-teal-50 border-l-4 border-teal-400 p-3 sm:p-4 rounded">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-800 mb-2 flex items-center gap-2">
                    <i className="ri-seedling-line text-teal-600"></i>
                    Cuidados com o Jardim
                  </h4>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Gustavo, a pessoa que toma conta do jardim, vai toda <strong>segunda, quarta e sexta no final da tarde</strong> para molhar as plantas.
                  </p>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-3 sm:p-4 rounded">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-800 mb-2 flex items-center gap-2">
                    <i className="ri-emotion-line text-amber-600"></i>
                    Sobre Animais
                  </h4>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-2">
                    Não temos animais na casa. Ultimamente tem aparecido alguns gatos e cachorros pelo condomínio que são de outros lugares.
                  </p>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-medium text-amber-800">
                    <i className="ri-alert-line text-amber-600 mr-1"></i>
                    Pedimos que não alimente estes animais pois eles são de outras pessoas. Obrigado!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-2 border-red-200 p-6 sm:p-8 rounded-xl sm:rounded-2xl mb-10 sm:mb-12">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-alarm-warning-line text-2xl sm:text-3xl text-white"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-red-800">Emergências</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">SAMU</p>
                    <p className="text-lg sm:text-xl font-bold text-red-600">192</p>
                  </div>
                  <a 
                    href="https://acvvc.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Brigada de Incêndio</p>
                    <p className="text-lg sm:text-xl font-bold text-red-600 flex items-center gap-2">
                      75992513370
                      <i className="ri-external-link-line text-sm sm:text-base"></i>
                    </p>
                  </a>
                  <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Polícia</p>
                    <p className="text-lg sm:text-xl font-bold text-red-600">190</p>
                  </div>
                </div>
                <div className="mt-4 sm:mt-6 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl">
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">Contato dos Anfitriões</p>
                  <div className="space-y-2 sm:space-y-3">
                    <a 
                      href="https://wa.me/5571999452989" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-all duration-300 cursor-pointer"
                    >
                      <div>
                        <p className="font-semibold text-sm sm:text-base text-gray-800">Gabriel</p>
                        <p className="text-xs sm:text-sm text-gray-600">+55 71 99945-2989</p>
                      </div>
                      <i className="ri-whatsapp-line text-xl sm:text-2xl text-green-600"></i>
                    </a>
                    <a 
                      href="https://wa.me/5571999591791" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-all duration-300 cursor-pointer"
                    >
                      <div>
                        <p className="font-semibold text-sm sm:text-base text-gray-800">Maoma</p>
                        <p className="text-xs sm:text-sm text-gray-600">+55 71 99959-1791</p>
                      </div>
                      <i className="ri-whatsapp-line text-xl sm:text-2xl text-green-600"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Forno de Pizza - Card Expansível */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-xl sm:rounded-2xl overflow-hidden">
            <button
              onClick={() => setIsPizzaOvenExpanded(!isPizzaOvenExpanded)}
              className="w-full p-6 sm:p-8 flex items-center justify-between hover:bg-orange-100/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-fire-line text-2xl sm:text-3xl text-white"></i>
                </div>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">Como Usar o Forno de Pizza</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Clique para ver o guia completo de uso</p>
                </div>
              </div>
              <i className={`ri-arrow-${isPizzaOvenExpanded ? 'up' : 'down'}-s-line text-2xl sm:text-3xl text-orange-600 transition-transform duration-300 flex-shrink-0`}></i>
            </button>

            {isPizzaOvenExpanded && (
              <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 space-y-4 sm:space-y-6">
                {/* 1. Limpeza Inicial */}
                <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg font-bold text-blue-600">1</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Limpeza Inicial (antes de acender)</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <i className="ri-checkbox-circle-line text-blue-500 mt-1 flex-shrink-0"></i>
                          <span>Varra as cinzas e pequenos resíduos para a frente do forno (ou para um canto) com a escova/varredor. Coloque as cinzas em recipiente metálico apenas se frias.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="ri-checkbox-circle-line text-blue-500 mt-1 flex-shrink-0"></i>
                          <span>Verifique a chaminé/saída de fumaça e certifique-se de que não há obstruções visíveis.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 2. Ascender o Fogo */}
                <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg font-bold text-orange-600">2</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Ascender o Fogo (início)</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <i className="ri-checkbox-circle-line text-orange-500 mt-1 flex-shrink-0"></i>
                          <span>Faça um pequeno monte de acendalha (palhinhas, papel sem tinta) no centro do forno. Coloque gravetos finos por cima.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="ri-checkbox-circle-line text-orange-500 mt-1 flex-shrink-0"></i>
                          <span>Acenda a acendalha com cuidado e deixe os gravetos pequenos queimarem até gerarem boas brasas.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="ri-checkbox-circle-line text-orange-500 mt-1 flex-shrink-0"></i>
                          <span><strong>Objetivo:</strong> criar um bom leito de brasas e uma chama ativa para aquecer a cúpula e o piso do forno de maneira uniforme.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 3. Propagar o Fogo */}
                <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg font-bold text-red-600">3</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Propagar o Fogo Corretamente (aquecimento do forno)</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <i className="ri-checkbox-circle-line text-red-500 mt-1 flex-shrink-0"></i>
                          <span>Após cerca de 10–20 minutos, quando houver brasas consistentes, comece a adicionar lenha de tamanho médio, sempre de forma gradual.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="ri-checkbox-circle-line text-red-500 mt-1 flex-shrink-0"></i>
                          <span><strong>Objetivo:</strong> criar um bom leito de brasas e uma chama ativa para aquecer a cúpula e o piso do forno de maneira uniforme.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="ri-checkbox-circle-line text-red-500 mt-1 flex-shrink-0"></i>
                          <span>Mantenha algumas brasas ativas no lado oposto para reposição de calor conforme as pizzas vão saindo.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 4. Como Colocar a Pizza */}
                <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg font-bold text-yellow-600">4</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Como Colocar a Pizza e Manuseio Durante o Cozimento</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <i className="ri-checkbox-circle-line text-yellow-600 mt-1 flex-shrink-0"></i>
                          <span>Polvilhe a pá (peel) com farinha, semolina ou fubá para evitar que a massa grude. Coloque a pizza na pá com cuidado.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="ri-checkbox-circle-line text-yellow-600 mt-1 flex-shrink-0"></i>
                          <span>Teste o deslizamento da pizza: balance levemente a pá para confirmar que ela sai com facilidade. Se estiver grudando, levante e polvilhe mais.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="ri-checkbox-circle-line text-yellow-600 mt-1 flex-shrink-0"></i>
                          <span>Leve a pá até a abertura do forno, aproxime-a do piso e com um movimento rápido e firme deslize a pizza para dentro (puxar a pá para trás, deixando a pizza no forno).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="ri-checkbox-circle-line text-yellow-600 mt-1 flex-shrink-0"></i>
                          <span>Posicione a pizza na zona de assar, próxima ao calor, mas não diretamente sobre as brasas.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="ri-checkbox-circle-line text-yellow-600 mt-1 flex-shrink-0"></i>
                          <span>Gire a pizza a cada 20–45 segundos (dependendo da temperatura) para assar uniformemente — use a pá para girar ou puxar e reposicionar. Em fornos muito quentes, as pizzas podem assar em 60–90 segundos; em temperaturas menores, 3–6 minutos.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="ri-checkbox-circle-line text-yellow-600 mt-1 flex-shrink-0"></i>
                          <span>Retire a pizza raspando a pá por baixo e puxando-a para fora com um movimento rápido.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 5. Observações */}
                <div className="bg-amber-50 border-2 border-amber-300 p-4 sm:p-6 rounded-lg sm:rounded-xl">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-alert-line text-xl text-white"></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Observações para Evitar Superaquecimento / Queima</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <i className="ri-close-circle-line text-amber-600 mt-1 flex-shrink-0"></i>
                          <span>Não adicione lenha em excesso de uma só vez — isso eleva muito a temperatura da cúpula rapidamente e pode queimar coberturas.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="ri-checkbox-circle-line text-amber-600 mt-1 flex-shrink-0"></i>
                          <span>Ajuste a altura das brasas e a posição da pizza para controlar o calor: mais perto da chama = mais rápido; mais afastado = mais lento.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="ri-checkbox-circle-line text-amber-600 mt-1 flex-shrink-0"></i>
                          <span>Se o forno estiver muito quente (visualmente chama alta na cúpula e fumaça escura), feche parcialmente a entrada do ar (se o forno permitir) ou empurre mais brasas para trás/saia do piso para reduzir calor direto.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 6. Limpeza Final */}
                <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg font-bold text-green-600">6</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Limpeza Final (após uso)</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <i className="ri-checkbox-circle-line text-green-500 mt-1 flex-shrink-0"></i>
                          <span>Pare de adicionar lenha com antecedência para permitir que o fogo queime e diminua naturalmente.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="ri-checkbox-circle-line text-green-500 mt-1 flex-shrink-0"></i>
                          <span>Quando o fogo tiver reduzido a brasas estáveis (e já estiver frio o suficiente para manipular com ferramentas e luvas), empurre as brasas e cinzas para a frente do forno e recolha no recipiente metálico.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="ri-checkbox-circle-line text-green-500 mt-1 flex-shrink-0"></i>
                          <span>Raspe com a pá e varra o piso com a escova para remover restos de alimentos queimados.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="ri-checkbox-circle-line text-green-500 mt-1 flex-shrink-0"></i>
                          <span>Limpe a porta e a soleira do forno com a escova.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="ri-checkbox-circle-line text-green-500 mt-1 flex-shrink-0"></i>
                          <span>Deixe o forno ventilar e esfriar naturalmente. Não cubra a boca do forno enquanto ainda houver brasas quentes.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="ri-checkbox-circle-line text-green-500 mt-1 flex-shrink-0"></i>
                          <span>Armazene a lenha em local seco e ventilado para o próximo uso.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Regras Section */}
      <section id="regras" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F8FAFB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 sm:mb-6 text-[#2F6F8F]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Regras da Casa
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#2F6F8F] mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Para garantir uma experiência maravilhosa para todos, pedimos que siga estas orientações simples
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-check-line text-xl sm:text-2xl text-green-600"></i>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">Permitido</h3>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                    <li className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-line text-green-500 flex-shrink-0"></i>
                      Crianças são bem-vindas
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-line text-green-500 flex-shrink-0"></i>
                      Eventos familiares pequenos (consulte antes)
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-line text-green-500 flex-shrink-0"></i>
                      Uso do forno de pizza
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-line text-green-500 flex-shrink-0"></i>
                      Aproveitar as áreas externas
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-close-line text-xl sm:text-2xl text-red-600"></i>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">Não Permitido</h3>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                    <li className="flex items-center gap-2">
                      <i className="ri-close-circle-line text-red-500 flex-shrink-0"></i>
                      Fumar dentro da casa
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="ri-close-circle-line text-red-500 flex-shrink-0"></i>
                      Festas ou eventos não autorizados
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="ri-close-circle-line text-red-500 flex-shrink-0"></i>
                      Barulho excessivo após 22h
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2F6F8F] rounded-full flex items-center justify-center">
                <i className="ri-volume-down-line text-2xl sm:text-3xl text-white"></i>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">Respeite o Silêncio</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Mantenha o volume baixo após 22h para respeitar os vizinhos e a natureza ao redor.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2F6F8F] rounded-full flex items-center justify-center">
                <i className="ri-leaf-line text-2xl sm:text-3xl text-white"></i>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">Preserve a Natureza</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Cuide do jardim e das plantas. Não jogue lixo nas áreas verdes.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2F6F8F] rounded-full flex items-center justify-center">
                <i className="ri-drop-line text-2xl sm:text-3xl text-white"></i>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">Economize Água</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Estamos em uma região de preservação. Use água conscientemente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dicas Locais Section */}
      <section id="dicas-locais" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 sm:mb-6 text-[#2F6F8F]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Dicas Locais
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#2F6F8F] mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Descubra os melhores lugares e experiências da Chapada Diamantina
            </p>
          </div>

          {/* Vale do Capão - Destaque */}
          <div className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-r from-[#2F6F8F] to-[#245670] p-6 sm:p-8 rounded-xl sm:rounded-2xl text-white shadow-xl">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-2-line text-2xl sm:text-3xl md:text-4xl"></i>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <h3 className="text-2xl sm:text-3xl font-semibold">Vale do Capão</h3>
                    <span className="bg-white/20 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm inline-block w-fit">15 min de carro</span>
                  </div>
                  <p className="text-white/90 leading-relaxed text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
                    A vila do capão é o centro principal da região onde você poderá encontrar mercados, farmácias e diversas opções de restaurantes. A vila também oferece muitas atividades culturais como feiras, rodas de capoeira e shows no coreto! Fica aproximadamente 15 minutos de carro da casa azul.
                  </p>
                  <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
                    <i className="ri-user-heart-line"></i>
                    <span>25 moradores locais recomendam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Restaurantes e Gastronomia */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-8 text-gray-800 text-center flex items-center justify-center gap-3">
              <i className="ri-restaurant-line text-[#2F6F8F]"></i>
              Onde Comer
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-gray-100">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <i className="ri-restaurant-2-line text-2xl text-red-600"></i>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800">Bistrô Pimenta Rosa</h4>
                        <span className="text-sm text-[#2F6F8F] font-medium">Não perca</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Comida afetiva no Vale do Capão no bairro dos Campos. Uma experiência gastronômica única com ingredientes locais.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <i className="ri-map-pin-line"></i>
                    <span>Bairro dos Campos</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-gray-100">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <i className="ri-cake-3-line text-2xl text-purple-600"></i>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800">Bistrô Orquídea Negra</h4>
                        <span className="text-sm text-[#2F6F8F] font-medium">Não perca</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Pães, tortas e comidas deliciosas no bairro dos Campos bem próximo à casa azul. Acompanhe as novidades pelo @bistro_orquideanegra
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <i className="ri-map-pin-line"></i>
                    <span>Próximo à Casa Azul</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-gray-100">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <i className="ri-restaurant-line text-2xl text-orange-600"></i>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800">Gatto Sete Bistrô</h4>
                        <span className="text-sm text-[#2F6F8F] font-medium">Não perca</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Bistrô que serve comida muito boa e em um lugar incrível! O restaurante está agora na Vila principal. Recomendo muito!
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <i className="ri-map-pin-line"></i>
                    <span>Vila do Capão</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-gray-100">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                        <i className="ri-cake-2-line text-2xl text-yellow-600"></i>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800">Padaria Bela Vista</h4>
                        <span className="text-sm text-[#2F6F8F] font-medium">Não perca</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Padaria deliciosa no bairro dos Campos, bem próximo à Casa Azul. Servem uma esfirra aberta deliciosa todos os dias à noite.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <i className="ri-map-pin-line"></i>
                    <span>Bairro dos Campos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compras e Mercados */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-8 text-gray-800 flex items-center gap-3">
              <i className="ri-shopping-basket-line text-[#2F6F8F]"></i>
              Compras e Mercados
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <i className="ri-store-2-line text-xl text-white"></i>
                  </div>
                  <h4 className="font-semibold text-lg text-gray-800">Feira na Vila</h4>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Quintas e Domingos. A feira é um evento cultural onde as pessoas se encontram para conversar e celebrar a vida. Domingo no capão é dia de ir à feira!
                </p>
                <span className="text-xs text-green-700 font-medium">Não perca</span>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <i className="ri-apple-line text-xl text-white"></i>
                  </div>
                  <h4 className="font-semibold text-lg text-gray-800">Feirante Arlete</h4>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Frutas e verduras todos os dias na varanda. Fica logo após a pousada Tarumim na estrada principal Palmeira-Capão no bairro dos Campos.
                </p>
                <span className="text-xs text-blue-700 font-medium">Não perca</span>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <i className="ri-palette-line text-xl text-white"></i>
                  </div>
                  <h4 className="font-semibold text-lg text-gray-800">Clube das Artes</h4>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Vende pão Arin sem glúten e sem lactose. Possui um espaço para shows bem intimista, sendo uma ótima opção no período de alta temporada.
                </p>
                <span className="text-xs text-purple-700 font-medium">Não perca</span>
              </div>
            </div>
          </div>

          {/* Delivery */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-2xl text-white shadow-xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-truck-line text-3xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Alice - Frutos do Mar</h3>
                  <p className="text-white/90 leading-relaxed mb-2">
                    Delivery com uma lista extensa de frutos do mar entregues diretamente na Casa Azul. Mesmo fornecedor de todos os restaurantes do Vale.
                  </p>
                  <span className="text-sm text-white/80 bg-white/20 px-3 py-1 rounded-full inline-block">Não perca</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trilhas e Cachoeiras */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-8 text-gray-800 flex items-center gap-3">
              <i className="ri-mountain-line text-[#2F6F8F]"></i>
              Trilhas e Cachoeiras
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:shadow-xl transition-all duration-300">
                <img
                  src="https://static.readdy.ai/image/0df151d1946257bfef25b82377e83799/6516ec2841c510a6c633c675179528bf.webp"
                  alt="Vale do Capão"
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="ri-water-flash-line text-2xl text-green-600"></i>
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-800">Cachoeira da Fumaça</h4>
                      <span className="text-sm text-[#2F6F8F] font-medium">Não perca</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    A entrada da trilha fica bem próxima à casa azul, seguindo a estrada principal sentido vila por 5 minutos. É a trilha mais famosa da região onde aventureiros encontrarão uma cachoeira incrível e uma vista de tirar o fôlego.
                  </p>
                  <div className="bg-yellow-500/20 border-l-4 border-yellow-400 p-4 rounded">
                    <p className="text-white/95 text-sm flex items-start gap-2">
                      <i className="ri-alert-line text-yellow-400 text-lg mt-0.5 flex-shrink-0"></i>
                      <span>Recomendamos contratar guias locais na associação dos guias do capão.</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <i className="ri-time-line"></i>
                      4 horas (ida e volta)
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-map-pin-line"></i>
                      5 min da casa
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:shadow-xl transition-all duration-300">
                <img
                  src="https://static.readdy.ai/image/0df151d1946257bfef25b82377e83799/c05db1c89c97b404d6191001cd555b21.jpeg"
                  alt="Riachinho"
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="ri-water-flash-line text-2xl text-blue-600"></i>
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-800">Riachinho de Lençóis</h4>
                      <span className="text-sm text-[#2F6F8F] font-medium">Não perca</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Pouco conhecido pelos viajantes, fica a cerca de 30 minutos de caminhada da Casa Azul. Siga pela estrada em frente ao condomínio, em direção à comunidade de Campinas. Ao chegar à bifurcação, mantenha-se à direita.
                  </p>
                  <div className="bg-blue-500/20 border-l-4 border-blue-400 p-4 rounded">
                    <p className="text-white/95 text-sm flex items-start gap-2">
                      <i className="ri-lightbulb-line text-blue-600 text-lg mr-2"></i>
                      <span>Para os mais aventureiros, siga um pouco mais adiante e se jogue no grande poço, perfeito para nadar!</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <i className="ri-time-line"></i>
                      30 min caminhada
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-car-line"></i>
                      3 km da casa
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:shadow-xl transition-all duration-300">
                <img
                  src="https://static.readdy.ai/image/0df151d1946257bfef25b82377e83799/6ca4a01638c046ee313ead94a120708e.jpeg"
                  alt="Lagoa dos Patos"
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <i className="ri-water-flash-line text-2xl text-teal-600"></i>
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-800">Lagoa dos Patos</h4>
                      <span className="text-sm text-[#2F6F8F] font-medium">Não perca</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Fica em torno de 15 minutos de carro da casa, sentido Palmeiras. Você deverá encontrar placas sinalizando a trilha logo após a antena que fica na estrada. A trilha é bem leve, em torno de 30 minutos até o poço principal.
                  </p>
                  <div className="bg-teal-500/20 border-l-4 border-teal-400 p-4 rounded">
                    <p className="text-white/95 text-sm flex items-center gap-2">
                      <i className="ri-eye-line text-teal-600 text-lg mr-2"></i>
                      <span>Você poderá contemplar uma bela vista do Morrão e curtir um banho maravilhoso.</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <i className="ri-time-line"></i>
                      30 min trilha
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-car-line"></i>
                      15 min de carro
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#2F6F8F] to-[#245670] p-8 rounded-2xl text-white shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="ri-user-star-line text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold mb-2">Guia Local - Índio</h4>
                    <span className="text-sm text-white/80 bg-white/20 px-3 py-1 rounded-full inline-block mb-4">Reserve antes de ir</span>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed mb-6">
                  Guia localizado no bairro dos Campos. Entre em contato com os hosts para conseguir o telefone e agendar suas trilhas com segurança.
                </p>
                <div className="bg-white/10 p-4 rounded-xl">
                  <p className="text-sm text-white/80">
                    <i className="ri-shield-check-line mr-2"></i>
                    Guia experiente e conhecedor de todas as trilhas da região
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dicas Importantes */}
          <div className="bg-white p-10 rounded-2xl shadow-lg border-2 border-gray-100 mb-10 sm:mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-3">
              <i className="ri-lightbulb-line text-[#2F6F8F]"></i>
              Dicas Importantes
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-sun-line text-xl text-yellow-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">Protetor Solar</h4>
                  <p className="text-gray-600 text-sm">O sol é forte na região. Use protetor solar e chapéu nas trilhas.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-t-shirt-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">Roupas Adequadas</h4>
                  <p className="text-gray-600 text-sm">Traga roupas leves para o dia e um casaco para as noites mais frias.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-footprint-line text-xl text-green-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">Calçados</h4>
                  <p className="text-gray-600 text-sm">Tênis ou botas de trilha são essenciais para explorar a região.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-first-aid-kit-line text-xl text-purple-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">Farmácia</h4>
                  <p className="text-gray-600 text-sm">A farmácia mais próxima fica na Vila do Capão, a 15 minutos.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="bg-gradient-to-r from-[#2F6F8F] to-[#245670] p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <i className="ri-map-2-line"></i>
              Localização
            </h3>
            <p className="text-white/90 mb-6">
              Caeté-Açu, Vale do Capão, Chapada Diamantina - Bahia, Brasil
            </p>
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31024.89!2d-41.48!3d-12.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDMxJzQ4LjAiUyA0McKwMjgnNDguMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Casa Azul Capão"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Extras Section */}
      <section id="extras" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F8FAFB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 sm:mb-6 text-[#2F6F8F]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Torne sua Estadia Ainda Melhor
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#2F6F8F] mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Serviços adicionais disponíveis para tornar sua experiência inesquecível
            </p>
          </div>

          {/* Informação sobre Lenha Inicial */}
          <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-2xl mb-10 sm:mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-fire-line text-2xl text-white"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Lenha para Fogueira, Lareira e Forno de Pizza</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Disponibilizamos apenas uma carga inicial de lenha, destinada exclusivamente à fogueira. Essa quantidade não é suficiente para o uso do forno de pizza.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Cargas adicionais de lenha, bem como qualquer utilização do forno de pizza, são cobradas à parte, mediante solicitação e cobrança de tarifa adicional.
                </p>
              </div>
            </div>
          </div>

          {/* Serviços de Madeira */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-8 text-gray-800 text-center flex items-center justify-center gap-3">
              <i className="ri-fire-fill text-[#2F6F8F]"></i>
              Cargas Adicionais de Madeira
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border-2 border-orange-200">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                        <i className="ri-fire-line text-3xl"></i>
                      </div>
                      <div>
                        <h4 className="text-2xl font-semibold">Madeira para Forno e Fogueira</h4>
                        <p className="text-white/80 text-sm">10 KG</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold">R$ 99</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Madeira de qualidade para uso no forno de pizza e fogueira. Quantidade ideal para preparar pizzas deliciosas e manter a fogueira acesa.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <i className="ri-checkbox-circle-line text-green-500"></i>
                    <span>Ideal para forno de pizza e fogueira</span>
                  </div>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer">
                    Solicitar pelo Airbnb
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border-2 border-red-200">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-8 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                        <i className="ri-fire-fill text-3xl"></i>
                      </div>
                      <div>
                        <h4 className="text-2xl font-semibold">Madeira para Lareira</h4>
                        <p className="text-white/80 text-sm">5 KG</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold">R$ 70</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Madeira selecionada para lareira interna. Perfeita para criar um ambiente aconchegante nas noites mais frias da Chapada.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <i className="ri-checkbox-circle-line text-green-500"></i>
                    <span>Especial para lareira interna</span>
                  </div>
                  <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer">
                    Solicitar pelo Airbnb
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg border-2 border-gray-100">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800 text-center">Comodidades Incluídas</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-16 md:w-16 md:h-16 bg-[#2F6F8F]/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <i className="ri-restaurant-2-line text-lg sm:text-xl md:text-2xl text-[#2F6F8F]"></i>
                </div>
                <p className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">Cozinha Completa</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-16 md:w-16 md:h-16 bg-[#2F6F8F]/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <i className="ri-fire-line text-2xl sm:text-3xl md:text-4xl text-[#2F6F8F]"></i>
                </div>
                <p className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">Lareira</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-16 md:w-16 md:h-16 bg-[#2F6F8F]/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <i className="ri-goblet-line text-lg sm:text-xl md:text-2xl text-[#2F6F8F]"></i>
                </div>
                <p className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">Churrasqueira</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-16 md:w-16 md:h-16 bg-[#2F6F8F]/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <i className="ri-tv-line text-lg sm:text-xl md:text-2xl text-[#2F6F8F]"></i>
                </div>
                <p className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">TV Smart</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-16 md:w-16 md:h-16 bg-[#2F6F8F]/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <i className="ri-shirt-line text-lg sm:text-xl md:text-2xl text-[#2F6F8F]"></i>
                </div>
                <p className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">Máquina de Lavar</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-16 md:w-16 md:h-16 bg-[#2F6F8F]/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <i className="ri-temp-hot-line text-lg sm:text-xl md:text-2xl text-[#2F6F8F]"></i>
                </div>
                <p className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">Chuveiro Quente</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-16 md:w-16 md:h-16 bg-[#2F6F8F]/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <i className="ri-gamepad-line text-lg sm:text-xl md:text-2xl text-[#2F6F8F]"></i>
                </div>
                <p className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">Jogos de Tabuleiro</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-16 md:w-16 md:h-16 bg-[#2F6F8F]/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <i className="ri-table-line text-lg sm:text-xl md:text-2xl text-[#2F6F8F]"></i>
                </div>
                <p className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">Mesa de Trabalho</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-16 md:w-16 md:h-16 bg-[#2F6F8F]/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <i className="ri-battery-charge-line text-lg sm:text-xl md:text-2xl text-[#2F6F8F]"></i>
                </div>
                <p className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">Nobreak</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-16 md:w-16 md:h-16 bg-[#2F6F8F]/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <i className="ri-windy-line text-lg sm:text-xl md:text-2xl text-[#2F6F8F]"></i>
                </div>
                <p className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">Ventiladores</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#2F6F8F] to-[#245670] text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <img
              src="https://static.readdy.ai/image/0df151d1946257bfef25b82377e83799/85008b4b599f305b222817d899e670f1.jpeg"
              alt="Casa Azul Logo"
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover mx-auto mb-4 sm:mb-6 border-4 border-white/30"
            />
            <h3 className="text-2xl sm:text-3xl font-serif mb-3 sm:mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Casa Azul Capão
            </h3>
            <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8">
              Seu refúgio na Chapada Diamantina
            </p>
            
            {/* Instagram Link */}
            <a 
              href="https://www.instagram.com/casa.azulvaledocapao?igsh=MW80cDl2MXFxNHNxNA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 cursor-pointer"
            >
              <i className="ri-instagram-line text-2xl"></i>
              <span className="font-medium">@casa.azulvaledocapao</span>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <i className="ri-map-pin-line text-2xl sm:text-3xl"></i>
              </div>
              <h4 className="font-semibold text-sm sm:text-base mb-2">Localização</h4>
              <p className="text-white/80 text-xs sm:text-sm">Caeté-Açu, Vale do Capão<br />Chapada Diamantina, BA</p>
            </div>
            <div className="text-center">
              <a 
                href="https://airbnb.com.br/h/casaazulcapao" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm5.9-13.5c-.5-.5-1.2-.5-1.7 0l-2.8 2.8-1.4-1.4c-.5-.5-1.2-.5-1.7 0-.5.5-.5 1.2 0 1.7l2.3 2.3c.2.2.5.4.8.4.3 0 .6-.1.8-.4l3.7-3.7c.5-.4.5-1.2 0-1.7z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-sm sm:text-base mb-2">Reservas</h4>
                <p className="text-white/80 text-xs sm:text-sm">Disponível no Airbnb<br />@casa.azulvaledocapao</p>
              </a>
            </div>
            <div className="text-center sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <i className="ri-star-fill text-2xl sm:text-3xl"></i>
              </div>
              <h4 className="font-semibold text-sm sm:text-base mb-2">Avaliação</h4>
              <p className="text-white/80 text-xs sm:text-sm">★ 4.89 • Superhost<br />Avaliações Excepcionais</p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 sm:pt-8 text-center">
            <p className="text-white/60 text-xs sm:text-sm mb-3 sm:mb-4 px-4">
              Aproveite cada momento da sua estadia. Estamos aqui para ajudar!
            </p>
            <p className="text-white/40 text-xs px-4">
              © 2026 Casa Azul Capão. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
