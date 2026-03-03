import React, { useState, useRef, useEffect } from 'react';
import "./App.css";
import Perfil1 from "./assets/perfil.png";
import Projeto1 from "./assets/biodex.png";
import Projeto2 from "./assets/job.png";
import Projeto33 from "./assets/protejo33.png";
import Projeto4 from "./assets/projeto4.png";
import Github from "./assets/github.svg";
import Linkedin from "./assets/linkedin.svg";


const FadeInSection = ({ children, className = '', delay = '' }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    }, { threshold: 0.1 });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className} ${delay}`}
    >
      {children}
    </div>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const modalRef = useRef(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isModalOpen]);

  return (
    <div className="body-container">
      <div className="bg-grid"></div>
      <div className="bg-gradient-shapes">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="shape-3"></div>
      </div>
      <header className="fixed top-0 z-50 left-2 right-2 sm:left-4 sm:right-4 md:left-8 md:right-8 mx-auto max-w-screen-lg mt-4 glass-card rounded-full border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300">
        <div className="px-4 sm:px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="group flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_15px_rgba(34,211,238,0.7)] transition-all">L</div>
                <h1 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:to-cyan-200 transition-all hidden sm:block">Luis</h1>
              </a>
            </div>

            {/* Navigation */}
            <div className="flex-grow flex justify-center">
              <ul className="flex justify-center gap-4 sm:gap-6 md:gap-8 bg-gray-900/40 rounded-full px-4 sm:px-6 py-2 border border-gray-700/50 shadow-inner">
                <li>
                  <a href="#projetos" className="text-gray-300 hover:text-white text-xs sm:text-sm font-medium tracking-wide transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400 after:transition-all hover:after:w-full">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#tecnologias" className="text-gray-300 hover:text-white text-xs sm:text-sm font-medium tracking-wide transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400 after:transition-all hover:after:w-full">
                    Tecnologias
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-gray-300 hover:text-white text-xs sm:text-sm font-medium tracking-wide transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400 after:transition-all hover:after:w-full">
                    Sobre mim
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex-shrink-0 flex gap-2 sm:gap-3 items-center hidden sm:flex">
              <a href="https://github.com/Luis-eduardo-sl" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full bg-gray-800/50 hover:bg-white/10 border border-gray-700/50 hover:border-white/20 transition-all group">
                <img src={Github} alt="GitHub" className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.linkedin.com/in/luis-eduardo-sl/" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full bg-gray-800/50 hover:bg-white/10 border border-gray-700/50 hover:border-white/20 transition-all group">
                <img src={Linkedin} alt="LinkedIn" className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-7 sm:pt-15">
        <section>
          <div className="container max-w-screen-lg m-auto px-4 pt-24 sm:py-32 flex flex-col sm:flex-row gap-10 items-center justify-between">
            <FadeInSection className="flex-1 w-full" delay="delay-100">
              <div className="max-w-xl">
                <h2 className="font-bold text-5xl sm:text-6xl text-white mb-2 tracking-tight">Olá, eu sou Luis,</h2>
                <h1 className="font-exrabold text-4xl sm:text-5xl mt-2 text-gradient pb-2">
                  FullStack Developer
                </h1>
                <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-lg glass-card p-6 rounded-2xl border-l-4 border-l-blue-500">
                  Cursando Engenharia de Software, meu objetivo é criar soluções digitais inovadoras,
                  com tecnologias de ponta, colaborando com equipes dinâmicas e utilizando metodologias ágeis
                  e conceitos de UI/UX para garantir a melhor experiência.
                </p>

                <div className="mt-8 flex gap-4">
                  <a href="#projetos" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all">
                    Ver Projetos
                  </a>
                  <a href="https://github.com/Luis-eduardo-sl" target="_blank" className="px-6 py-3 glass hover:bg-white/10 text-white font-medium rounded-full transition-all flex items-center gap-2">
                    <img src={Github} alt="GitHub" className="w-5 h-5" /> GitHub
                  </a>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection className="w-full sm:w-auto" delay="delay-300">
              <div className="relative group perspective">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-blob"></div>
                <img src={Perfil1} alt='imagem de perfil de Luis' className="relative w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] object-cover m-auto rounded-full border-4 border-[#121212] shadow-2xl z-10" loading="lazy" />
              </div>
            </FadeInSection>
          </div>
        </section>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[100] p-4 transition-all duration-300">
            <div ref={modalRef} className="glass-card rounded-3xl p-6 sm:p-8 max-w-md w-full sm:max-w-lg md:max-w-xl lg:max-w-4xl border border-white/10 shadow-[0_0_40px_rgba(37,99,235,0.15)] relative overflow-hidden animate-fadeInUp">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>

              <div className="flex justify-between items-center mb-6 relative z-10 border-b border-gray-700/50 pb-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">{modalContent.title}</h2>
                <button onClick={closeModal} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 hover:bg-red-500/20 text-gray-400 hover:text-red-400 border border-gray-700 hover:border-red-500/50 transition-all text-2xl">
                  &times;
                </button>
              </div>

              <div className={`relative z-10 flex flex-col ${modalContent.isVertical ? 'md:flex-row' : ''} gap-6 md:gap-8 items-center`}>
                <div className={`flex-shrink-0 ${modalContent.isVertical ? 'w-40 sm:w-48 md:w-64' : 'w-full max-w-2xl mx-auto'} relative group`}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-xl blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <img
                    src={modalContent.image}
                    alt={modalContent.title}
                    className="relative w-full rounded-xl shadow-2xl border border-white/10 object-cover"
                  />
                </div>

                <div className={`flex-1 overflow-y-auto pr-2 custom-scrollbar ${modalContent.isVertical ? 'max-h-[40vh] md:max-h-[60vh]' : 'max-h-[30vh] mt-4'}`}>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify relative pl-4 border-l-2 border-blue-500/50">
                    {modalContent.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}


        <section id="projetos" className="relative">
          <div className="container max-w-screen-lg m-auto px-4 py-12 sm:py-24 relative z-10">
            <FadeInSection>
              <h2 className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Projetos em Destaque</h2>
            </FadeInSection>

            <div className="flex flex-col sm:flex-row gap-8 mt-11">
              <FadeInSection className="flex-1 flex">
                <div className="glass-card rounded-2xl p-6 sm:p-8 flex-1 flex flex-col relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img src={Projeto1} className="w-40 sm:w-48 h-auto mx-auto block drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] transform group-hover:-translate-y-2 transition-transform duration-500" alt="imagem do aplicativo biodex" />
                  <h3 className="text-2xl font-bold mt-8 text-white group-hover:text-blue-400 transition-colors">Aplicativo BioDex</h3>
                  <p className="text-gray-300 text-sm mt-3 text-justify flex-grow leading-relaxed">
                    Desenvolvimento de um aplicativo com gamificação para o parque municipal juqueriquere, com o objetivo de fazer com que o passeio ao parque fosse interessante para as diversas faixas etárias que visitam o parque...
                  </p>
                  <div className="mt-5">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs py-1 px-3 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">TypeScript</span>
                      <span className="text-xs py-1 px-3 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">React Native</span>
                      <span className="text-xs py-1 px-3 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">Expo</span>
                    </div>
                  </div>
                  <div className="flex mt-8 gap-3 relative z-10">
                    <button
                      className="flex-1 text-sm py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]"
                      onClick={() => openModal({
                        title: 'Aplicativo BioDex',
                        image: Projeto1,
                        description: 'Desenvolvimento de um aplicativo com gamificação para o Parque Municipal Juqueriquere, com o objetivo de tornar o passeio ao parque interessante para diversas faixas etárias que o visitam. Trabalhei em colaboração com sete colegas para criar uma experiência interativa que engaja visitantes de todas as idades através de desafios, recompensas e conteúdos educativos. O aplicativo foi desenvolvido utilizando tecnologias como React Native para garantir uma interface fluida e acessível em dispositivos móveis. Além disso, implementamos recursos para proporcionar uma experiência imersiva e educativa sobre a flora e fauna do parque ',
                        isVertical: true
                      })}
                    >
                      Detalhes
                    </button>
                    <a href="https://github.com/Programadorwolrd/pj3-Aplicativo-Municipal" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <button className="w-full text-sm py-3 border border-gray-600 hover:border-gray-400 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl font-medium transition-all">
                        Código
                      </button>
                    </a>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection className="flex-1 flex" delay="delay-200">
                <div className="glass-card rounded-2xl p-6 sm:p-8 flex-1 flex flex-col relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img src={Projeto2} className="w-40 sm:w-48 h-auto mx-auto block drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] transform group-hover:-translate-y-2 transition-transform duration-500" alt="imagem do aplicativo Job" />
                  <h3 className="text-2xl font-bold mt-8 text-white group-hover:text-blue-400 transition-colors">Aplicativo Job</h3>
                  <p className="text-gray-300 text-sm mt-3 text-justify flex-grow leading-relaxed">
                    Desenvolvi o aplicativo Job com o objetivo de tornar a procura de emprego e a ocupação de vagas mais prática e eficiente. O aplicativo foi desenvolvido utilizando tecnologias como React Native, Node.js e...
                  </p>
                  <div className="mt-5">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs py-1 px-3 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">JavaScript</span>
                      <span className="text-xs py-1 px-3 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">React Native</span>
                      <span className="text-xs py-1 px-3 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">Expo</span>
                    </div>
                  </div>
                  <div className="flex mt-8 gap-3 relative z-10">
                    <button
                      className="flex-1 text-sm py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]"
                      onClick={() => openModal({
                        title: 'Aplicativo Job',
                        image: Projeto2,
                        description: 'Desenvolvi o aplicativo Job com o objetivo de tornar a procura de emprego e a ocupação de vagas mais prática e eficiente. O aplicativo foi desenvolvido utilizando tecnologias como React Native, Node.js e MySQL para garantir uma interface fluida e acessível em dispositivos móveis. Além disso, implementei recursos para proporcionar uma experiência imersiva e agradável aos usuários. Foquei em criar um app que não só simplifica o processo de busca de emprego, mas também oferece uma experiência personalizada e amigável para os usuários. Com esses recursos, o aplicativo Job se torna uma ferramenta poderosa tanto para candidatos quanto para empregadores, facilitando o encontro entre talentos e oportunidades.',
                        isVertical: true
                      })}
                    >
                      Detalhes
                    </button>
                    <a href="https://github.com/Luis-eduardo-sl/jobsFull" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <button className="w-full text-sm py-3 border border-gray-600 hover:border-gray-400 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl font-medium transition-all">
                        Código
                      </button>
                    </a>
                  </div>
                </div>
              </FadeInSection>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 mt-8">
              <FadeInSection className="flex-1 flex">
                <div className="glass-card rounded-2xl p-6 sm:p-8 flex-1 flex flex-col relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img src={Projeto33} className="w-full rounded-xl shadow-lg border border-gray-700 transform group-hover:scale-105 transition-transform duration-500" alt='tela inicial do site administrativo' />
                  <h3 className="text-2xl font-bold mt-8 text-white group-hover:text-blue-400 transition-colors">Sistema Administrativo</h3>
                  <p className="text-gray-300 text-sm mt-3 text-justify flex-grow leading-relaxed">
                    O sistema administrativo da OnBus foi desenvolvido para proporcionar aos administradores uma plataforma eficiente e intuitiva para gerenciar diversos aspectos operacionais da empresa de ônibus...
                  </p>
                  <div className="mt-5">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs py-1 px-3 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">JavaScript</span>
                      <span className="text-xs py-1 px-3 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">Node.js</span>
                      <span className="text-xs py-1 px-3 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">Express.js</span>
                    </div>
                  </div>
                  <div className="flex mt-8 gap-3 relative z-10">
                    <button
                      className="flex-1 text-sm py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]"
                      onClick={() => openModal({
                        title: 'Sistema Administrativo',
                        image: Projeto33,
                        description: 'O sistema administrativo foi desenvolvido para oferecer uma plataforma eficiente e intuitiva para gerenciar diversos aspectos operacionais da empresa. Com ele, é possível criar, ler, editar e excluir informações sobre motoristas, usuários, ônibus e linhas, garantindo que todos os dados estejam sempre atualizados e precisos. O sistema também inclui uma funcionalidade para gerenciar comentários e feedback deixados pelos usuários no site público. Além disso, o sistema conta com um dashboard intuitivo que fornece uma visão geral das operações, facilitando a tomada de decisões rápidas e informadas. O controle de acesso é rigorosamente gerenciado para assegurar que apenas usuários autorizados possam acessar funcionalidades e dados sensíveis, aumentando a segurança da informação. Integrado ao site público, o sistema assegura que informações cruciais, como horários de ônibus e rotas, estejam sempre atualizadas e acessíveis aos usuários finais, promovendo uma experiência de uso fluida e confiável.',
                        isVertical: false
                      })}
                    >
                      Detalhes
                    </button>
                    <a href="https://github.com/Luis-eduardo-sl/pj2-g8-controle-onibus" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <button className="w-full text-sm py-3 border border-gray-600 hover:border-gray-400 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl font-medium transition-all">
                        Código
                      </button>
                    </a>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection className="flex-1 flex" delay="delay-200">
                <div className="glass-card rounded-2xl p-6 sm:p-8 flex-1 flex flex-col relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img src={Projeto4} className="w-full rounded-xl shadow-lg border border-gray-700 transform group-hover:scale-105 transition-transform duration-500" alt='tela inicial do site de recarga' />
                  <h3 className="text-2xl font-bold mt-8 text-white group-hover:text-blue-400 transition-colors">Site de Recarga</h3>
                  <p className="text-gray-300 text-sm mt-3 text-justify flex-grow leading-relaxed">
                    O site de recarga foi projetado para oferecer uma experiência autônoma e conveniente para os usuários. Com ele, os próprios usuários podem se cadastrar, realizar recargas utilizando seu CPF...
                  </p>
                  <div className="mt-5">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs py-1 px-3 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">JavaScript</span>
                      <span className="text-xs py-1 px-3 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">HTML & CSS</span>
                      <span className="text-xs py-1 px-3 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">Bootstrap</span>
                    </div>
                  </div>
                  <div className="flex mt-8 gap-3 relative z-10">
                    <button
                      className="flex-1 text-sm py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]"
                      onClick={() => openModal({
                        title: 'Site de Recarga',
                        image: Projeto4,
                        description: 'O site de recarga foi projetado para oferecer uma experiência autônoma e conveniente para os usuários. Com ele, os próprios usuários podem se cadastrar, realizar recargas utilizando seu CPF, visualizar os horários das linhas e enviar sugestões ou reclamações por meio de uma página dedicada. Essa página está integrada ao sistema administrativo, garantindo que todas as interações e feedbacks sejam diretamente atualizados e gerenciados pela equipe responsável.',
                        isVertical: false
                      })}
                    >
                      Detalhes
                    </button>
                    <a href="https://github.com/Luis-eduardo-sl/pj2-g8-controle-onibus" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <button className="w-full text-sm py-3 border border-gray-600 hover:border-gray-400 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl font-medium transition-all">
                        Código
                      </button>
                    </a>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        <section id="tecnologias" className="py-20 bg-gray-900/10">
          <div className="container max-w-screen-lg m-auto px-4">
            <FadeInSection>
              <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Tecnologias</h2>
            </FadeInSection>
            <FadeInSection className="mt-14" delay="delay-100">
              <div className="glass-card p-8 rounded-3xl mt-4">
                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-lg text-white">HTML & CSS</h2>
                    <p className="text-blue-400 font-medium">Avançado</p>
                  </div>
                  <span className="w-full h-2.5 mt-3 bg-gradient-to-r from-blue-500 to-cyan-500 block rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                </div>

                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-lg text-white">JavaScript & Node.js</h2>
                    <p className="text-blue-400 font-medium">Avançado</p>
                  </div>
                  <span className="w-[88%] h-2.5 mt-3 bg-gradient-to-r from-blue-500 to-cyan-500 block rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                </div>

                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-lg text-white">React & React Native</h2>
                    <p className="text-blue-400 font-medium">Avançado</p>
                  </div>
                  <span className="w-[75%] h-2.5 mt-3 bg-gradient-to-r from-blue-500 to-cyan-500 block rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                </div>

                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-lg text-white">SQL</h2>
                    <p className="text-blue-400 font-medium">Intermediario</p>
                  </div>
                  <span className="w-[70%] h-2.5 mt-3 bg-gradient-to-r from-blue-500 to-cyan-500 block rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                </div>

                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-lg text-white">Bootstrap & Tailwind</h2>
                    <p className="text-blue-400 font-medium">Intermediario</p>
                  </div>
                  <span className="w-[67%] h-2.5 mt-3 bg-gradient-to-r from-blue-500 to-cyan-500 block rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                </div>

                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-lg text-white">Typescript</h2>
                    <p className="text-blue-400 font-medium">Intermediario</p>
                  </div>
                  <span className="w-[60%] h-2.5 mt-3 bg-gradient-to-r from-blue-500 to-cyan-500 block rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                </div>

                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-lg text-white">C# & .NET</h2>
                    <p className="text-blue-400 font-medium">Intermediario</p>
                  </div>
                  <span className="w-[60%] h-2.5 mt-3 bg-gradient-to-r from-blue-500 to-cyan-500 block rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                </div>

                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-lg text-white">Python</h2>
                    <p className="text-blue-400 font-medium">Intermediario</p>
                  </div>
                  <span className="w-[60%] h-2.5 mt-3 bg-gradient-to-r from-blue-500 to-cyan-500 block rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                </div>

                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-lg text-white">UI Figma</h2>
                    <p className="text-cyan-400 font-medium">Básico</p>
                  </div>
                  <span className="w-[45%] h-2.5 mt-3 bg-gradient-to-r from-blue-500 to-cyan-500 block rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section>
          <div className="container max-w-screen-lg m-auto px-4 py-14">
            <FadeInSection>
              <h2 className="text-3xl font-bold text-center text-white mb-12">Habilidades Adicionais</h2>
            </FadeInSection>
            <FadeInSection delay="delay-200">
              <div className="glass-card p-8 rounded-3xl">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                    <p className="font-semibold text-gray-200 text-lg">Git</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                    <p className="font-semibold text-gray-200 text-lg">Prisma</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                    <p className="font-semibold text-gray-200 text-lg">Express.js</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                    <p className="font-semibold text-gray-200 text-lg">Axios </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 justify-items-center mt-8">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                    <p className="font-semibold text-gray-200 text-lg">Inglês Avançado</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                    <p className="font-semibold text-gray-200 text-lg">Scrum e Kanban</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                    <p className="font-semibold text-gray-200 text-lg">Trabalho em Equipe</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section id="sobre" className="py-20 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] -translate-y-1/2"></div>

          <div className="container max-w-screen-lg m-auto px-4 relative z-10">
            <FadeInSection>
              <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-16">Sobre Mim</h2>
            </FadeInSection>

            <div className="mt-12 relative before:absolute before:top-4 before:left-[19px] sm:before:left-1/2 sm:before:-ml-[1px] before:bottom-10 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:to-cyan-500">

              <FadeInSection className="relative pl-12 sm:pl-0 sm:w-1/2 sm:pr-12 sm:text-right mb-12" delay="delay-100">
                <span className="absolute left-[13px] sm:left-auto sm:-right-[6px] top-1 w-3.5 h-3.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10"></span>
                <div className="glass-card p-6 rounded-2xl group hover:border-blue-500/50 transition-all">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">2019</h3>
                  <p className="text-gray-300 leading-relaxed">Com uma trajetória que combina experiência prática e aprendizado acadêmico, minha jornada no mundo da tecnologia começou com uma sólida base em administração e gerenciamento de processos. Trabalhei como Assistente Administrativo na Sabesp, atuando no gerenciamento do almoxarifado e controle de estoque, habilidades que aplico para otimizar projetos.</p>
                </div>
              </FadeInSection>

              <FadeInSection className="relative pl-12 sm:pl-0 sm:w-1/2 sm:ml-auto sm:pl-12 mb-12" delay="delay-200">
                <span className="absolute left-[13px] sm:-left-[6px] top-1 w-3.5 h-3.5 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10"></span>
                <div className="glass-card p-6 rounded-2xl group hover:border-cyan-500/50 transition-all">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">2023</h3>
                  <p className="text-gray-300 leading-relaxed">Meu interesse por tecnologia me levou a explorar o desenvolvimento web através do curso Técnico em Informática para Internet. Durante esse período, mergulhei no universo do desenvolvimento, aprendendo a trabalhar com React, HTML5, CSS3 e JavaScript. Esse conhecimento foi crucial para me preparar para desafios reais.</p>
                </div>
              </FadeInSection>

              <FadeInSection className="relative pl-12 sm:pl-0 sm:w-1/2 sm:pr-12 sm:text-right mb-12" delay="delay-300">
                <span className="absolute left-[13px] sm:left-auto sm:-right-[6px] top-1 w-3.5 h-3.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10"></span>
                <div className="glass-card p-6 rounded-2xl group hover:border-blue-500/50 transition-all">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">2024</h3>
                  <p className="text-gray-300 leading-relaxed">Uma experiência marcante foi meu estágio na Prefeitura de Caraguatatuba. Nesse papel, fui responsável por garantir a conectividade e o bom funcionamento dos sistemas e equipamentos da organização. Diagnosticar problemas e oferecer suporte técnico me ajudou a aprimorar minhas habilidades em resolução rápida.</p>
                </div>
              </FadeInSection>

              <FadeInSection className="relative pl-12 sm:pl-0 sm:w-1/2 sm:ml-auto sm:pl-12" delay="delay-400">
                <span className="absolute left-[13px] sm:-left-[6px] top-1 w-3.5 h-3.5 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10"></span>
                <div className="glass-card p-6 rounded-2xl group hover:border-cyan-500/50 transition-all">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Atualmente</h3>
                  <p className="text-gray-300 leading-relaxed">Estou cursando Engenharia de Software e busco oportunidades para integrar uma equipe onde possa aplicar minhas habilidades e continuar aprendendo. Com experiência em metodologias ágeis como Scrum e Kanban, e forte conhecimento em TypeScript e SQL, estou empolgado para colaborar em projetos desafiadores.</p>
                </div>
              </FadeInSection>

            </div>
          </div>
        </section>

      </main>

      <footer>
        <div className="container max-w-screen-lg m-auto flex justify-between px-4 py-6">
          <div>
            <p className="flex hidden sm:flex text-gray-300 text-sm">Copyright @ 2026</p>
          </div>
          <div>
            <p className="text-white text-sm">
              <a href="mailto:luis0202.eduardo@gmail.com" className="text-white">luis0202.eduardo@gmail.com</a>
            </p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a href="https://github.com/Luis-eduardo-sl" target="_blank"><img src={Github} alt="simbolo do Github" className="w-8" /></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/luis-eduardo-sl/" target="_blank"><img src={Linkedin} alt="simbolo do linkedin" className="w-8" /></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
