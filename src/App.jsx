import React, { useState, useRef, useEffect, lazy, Suspense } from 'react';
import "./App.css";
import Perfil1 from "./assets/perfil.png";
import Projeto1 from "./assets/biodex.png";
import Projeto2 from "./assets/job.png";
import Projeto33 from "./assets/protejo33.png";
import Projeto4 from "./assets/projeto4.png";
import Github from "./assets/github.svg";
import Linkedin from "./assets/linkedin.svg";


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
    <div class='body'>
      <div class="background"></div>
      <header className="fixed top-0 left-4 right-4 bg-gray-800 rounded-full m-3 mx-auto max-w-screen-lg h-12 sm:h-16 sm:left-8 sm:right-8">
        <div className="container m-auto px-4 py-2 sm:py-4 max-w-screen-lg">
          <div className="flex justify-between items-center">
            <div>
              <a href="#">
                <h1 className="font-bold text-xl">Luis</h1>
              </a>
            </div>
            <div className="flex-grow">
              <ul className="flex justify-center gap-4">
                <li className="relative">
                  <a href="#projetos" className="text-gray-400 hover:text-white cursor-pointer after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">
                    Projetos
                  </a>
                </li>
                <li className="relative">
                  <a href="#tecnologias" className="text-gray-400 hover:text-white cursor-pointer after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">
                    Tecnologias
                  </a>
                </li>
                <li className="relative">
                  <a href="#sobre" className="text-gray-400 hover:text-white cursor-pointer after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">
                    Sobre mim
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex gap-4 hidden sm:flex">
              <a href="https://github.com/Luis-eduardo-sl" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="GitHub" className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/luis-eduardo-sl/" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-7 sm:pt-15">
        <section>
          <div className="container max-w-screen-lg m-auto px-4 pt-12 sm:py-32 flex flex-col sm:flex-row gap-6">
            <div>
              <h2 className="font-bold text-4xl">Olá, eu sou Luis,</h2>
              <h1 className="font-bold text-4xl mt-1 gradient-text running-text">
                FullStack Developer
              </h1>
              <p className="mt-4 text-gray-400">
                Cursando Engenharia de Software, meu objetivo é criar soluções
                digitais inovadoras, com tecnologias de ponta, colaborando com uma equipe dinâmica e
                utilizando metodologias ágeis e conceito de UI|UX para garantir a melhor experiência
                para os usuários
              </p>
            </div>
            <div>
              <img src={Perfil1} alt='imagem de perfil de Luis' className="w-[240px] m-auto sm:w-[560px] rounded-full shadow-lg shadow-blue-400" loading="lazy" />
            </div>
          </div>
        </section>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div ref={modalRef} className="bg-gray-900 rounded-lg shadow-lg p-6 max-w-md w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl border border-gray-600">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white">{modalContent.title}</h2>
                <button onClick={closeModal} className="text-gray-400 hover:text-white text-2xl sm:text-3xl">
                  &times;
                </button>
              </div>
              <img
                src={modalContent.image}
                alt={modalContent.title}
                className={`mx-auto rounded-md mb-4 ${modalContent.isVertical ? 'w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64' : 'w-full sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-4/5'}`}
              />
              <p className="text-gray-300 text-sm sm:text-base text-justify">{modalContent.description}</p>
            </div>
          </div>
        )}


        <section id="projetos">
          <div className="container max-w-screen-lg m-auto px-4 py-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projetos</h2>

            <div className="flex flex-col sm:flex-row gap-10 mt-11">

              <div className="border border-gray-500 rounded-md p-5 flex-1 bg-black bg-opacity-25">
                <img src={Projeto1} className="w-36 h-auto mx-auto block" alt="imagem do aplicativo biodex" />
                <h3 className="text-2xl font-semibold mt-8 text-white">Aplicativo BioDex</h3>
                <p className="text-gray-400 text-sm mt-2 text-justify">
                  Desenvolvimento de um aplicativo com gamificação para o parque municipal juqueriquere, com o objetivo de fazer com que o passeio ao parque fosse interessante para as diversas faixas etárias que visitam o parque...
                </p>
                <div className="mt-3">
                  <h4 className="text-lg font-semibold text-white">Tecnologias Usadas:</h4>
                  <div className="flex gap-2 mt-2">
                    <span className="text-sm py-1 px-3 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full text-white">TypeScript</span>
                    <span className="text-sm py-1 px-3 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full text-white">React Native</span>
                    <span className="text-sm py-1 px-3 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full text-white">Expo</span>
                  </div>
                </div>
                <div className="flex mt-12 gap-2">
                  <button
                    className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                    onClick={() => openModal({
                      title: 'Aplicativo BioDex',
                      image: Projeto1,
                      description: 'Desenvolvimento de um aplicativo com gamificação para o Parque Municipal Juqueriquere, com o objetivo de tornar o passeio ao parque interessante para diversas faixas etárias que o visitam. Trabalhei em colaboração com sete colegas para criar uma experiência interativa que engaja visitantes de todas as idades através de desafios, recompensas e conteúdos educativos. O aplicativo foi desenvolvido utilizando tecnologias como React Native para garantir uma interface fluida e acessível em dispositivos móveis. Além disso, implementamos recursos para proporcionar uma experiência imersiva e educativa sobre a flora e fauna do parque ',
                      isVertical: true
                    })}
                  >
                    Saiba mais
                  </button>
                  <a href="https://github.com/Programadorwolrd/pj3-Aplicativo-Municipal" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <button className="w-full text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Ver código
                    </button>
                  </a>
                </div>
              </div>

              <div className="border border-gray-500 rounded-md p-5 flex-1 bg-black bg-opacity-25">
                <img src={Projeto2} className="w-36 h-auto mx-auto block" alt="imagem do aplicativo Job" />
                <h3 className="text-2xl font-semibold mt-8">Aplicativo Job</h3>
                <p className="text-gray-400 text-sm mt-2 text-justify">
                  Desenvolvi o aplicativo Job com o objetivo de tornar a procura de emprego e a ocupação de vagas mais prática e eficiente. O aplicativo foi desenvolvido utilizando tecnologias como React Native, Node.js e...
                </p>
                <div className="mt-3">
                  <h4 className="text-lg font-semibold text-white">Tecnologias Usadas:</h4>
                  <div className="flex gap-2 mt-2">
                    <span className="text-sm py-1 px-3 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full text-white">JavaScript</span>
                    <span className="text-sm py-1 px-3 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full text-white">React Native</span>
                    <span className="text-sm py-1 px-3 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full text-white">Expo</span>
                  </div>
                </div>
                <div className="flex mt-12 gap-2">
                  <button
                    className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                    onClick={() => openModal({
                      title: 'Aplicativo Job',
                      image: Projeto2,
                      description: 'Desenvolvi o aplicativo Job com o objetivo de tornar a procura de emprego e a ocupação de vagas mais prática e eficiente. O aplicativo foi desenvolvido utilizando tecnologias como React Native, Node.js e MySQL para garantir uma interface fluida e acessível em dispositivos móveis. Além disso, implementei recursos para proporcionar uma experiência imersiva e agradável aos usuários. Foquei em criar um app que não só simplifica o processo de busca de emprego, mas também oferece uma experiência personalizada e amigável para os usuários. Com esses recursos, o aplicativo Job se torna uma ferramenta poderosa tanto para candidatos quanto para empregadores, facilitando o encontro entre talentos e oportunidades.',
                      isVertical: true
                    })}
                  >
                    Saiba mais
                  </button>
                  <a href="https://github.com/Luis-eduardo-sl/jobsFull" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <button className="w-full text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Ver código
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1 bg-black bg-opacity-25">
                <img src={Projeto33} alt='tela inicial do site administrativo' />
                <h3 className="text-2xl font-semibold mt-8">Sistema Administrativo</h3>
                <p className="text-gray-400 text-sm mt-2 text-justify">
                  O sistema administrativo da OnBus foi desenvolvido para proporcionar aos administradores uma plataforma eficiente e intuitiva para gerenciar diversos aspectos operacionais da empresa de ônibus...
                </p>
                <div className="mt-3">
                  <h4 className="text-lg font-semibold text-white">Tecnologias Usadas:</h4>
                  <div className="flex gap-2 mt-2">
                    <span className="text-sm py-1 px-3 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full text-white">JavaScript</span>
                    <span className="text-sm py-1 px-3 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full text-white">Node.js</span>
                    <span className="text-sm py-1 px-3 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full text-white">Express.js</span>
                  </div>
                </div>
                <div className="flex mt-12 gap-2">
                  <button
                    className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                    onClick={() => openModal({
                      title: 'Sistema Administrativo',
                      image: Projeto33,
                      description: 'O sistema administrativo foi desenvolvido para oferecer uma plataforma eficiente e intuitiva para gerenciar diversos aspectos operacionais da empresa. Com ele, é possível criar, ler, editar e excluir informações sobre motoristas, usuários, ônibus e linhas, garantindo que todos os dados estejam sempre atualizados e precisos. O sistema também inclui uma funcionalidade para gerenciar comentários e feedback deixados pelos usuários no site público. Além disso, o sistema conta com um dashboard intuitivo que fornece uma visão geral das operações, facilitando a tomada de decisões rápidas e informadas. O controle de acesso é rigorosamente gerenciado para assegurar que apenas usuários autorizados possam acessar funcionalidades e dados sensíveis, aumentando a segurança da informação. Integrado ao site público, o sistema assegura que informações cruciais, como horários de ônibus e rotas, estejam sempre atualizadas e acessíveis aos usuários finais, promovendo uma experiência de uso fluida e confiável.',
                      isVertical: false
                    })}
                  >
                    Saiba mais
                  </button>
                  <a href="https://github.com/Luis-eduardo-sl/pj2-g8-controle-onibus" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <button className="w-full text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Ver código
                    </button>
                  </a>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1 bg-black bg-opacity-25">
                <img src={Projeto4} alt='tela inicial do site de recarga' />
                <h3 className="text-2xl font-semibold mt-8">Site de Recarga</h3>
                <p className="text-gray-400 text-sm mt-2 text-justify">
                  O site de recarga foi projetado para oferecer uma experiência autônoma e conveniente para os usuários. Com ele, os próprios usuários podem se cadastrar, realizar recargas utilizando seu CPF...
                </p>
                <div className="mt-3">
                  <h4 className="text-lg font-semibold text-white">Tecnologias Usadas:</h4>
                  <div className="flex gap-2 mt-2">
                    <span className="text-sm py-1 px-3 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full text-white">JavaScript</span>
                    <span className="text-sm py-1 px-3 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full text-white">HTML & CSS</span>
                    <span className="text-sm py-1 px-3 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full text-white">Bootstrap</span>
                  </div>
                </div>
                <div className="flex mt-12 gap-2">
                  <button
                    className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                    onClick={() => openModal({
                      title: 'Site de Recarga',
                      image: Projeto4,
                      description: 'O site de recarga foi projetado para oferecer uma experiência autônoma e conveniente para os usuários. Com ele, os próprios usuários podem se cadastrar, realizar recargas utilizando seu CPF, visualizar os horários das linhas e enviar sugestões ou reclamações por meio de uma página dedicada. Essa página está integrada ao sistema administrativo, garantindo que todas as interações e feedbacks sejam diretamente atualizados e gerenciados pela equipe responsável.',
                      isVertical: false
                    })}
                  >
                    Saiba mais
                  </button>
                  <a href="https://github.com/Luis-eduardo-sl/pj2-g8-controle-onibus" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <button className="w-full text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Ver código
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tecnologias" className="py-10">
          <div className="container max-w-screen-lg m-auto px-4">
            <h2 className="text-2xl font-semibold">Tecnologias</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className=" font-semibold">HTML & CSS</h2>
                  <p className="text-gray-500">Avançado</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className=" font-semibold">JavaScript & Node.js</h2>
                  <p className="text-gray-500">Intermediario</p>
                </div>
                <span className="w-[88%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className=" font-semibold">React & React Native</h2>
                  <p className="text-gray-500">Intermediario</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className=" font-semibold">SQL</h2>
                  <p className="text-gray-500">Intermediario</p>
                </div>
                <span className="w-[70%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className=" font-semibold">Bootstrap & Tailwind</h2>
                  <p className="text-gray-500">Intermediario</p>
                </div>
                <span className="w-[67%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className=" font-semibold">Typescript</h2>
                  <p className="text-gray-500">Básico</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className=" font-semibold">UI Figma</h2>
                  <p className="text-gray-500">Básico</p>
                </div>
                <span className="w-[45%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
              </div>

            </div>
          </div>
        </section>

        <section>
          <div className="container max-w-screen-lg m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">Habilidades Adicionais</h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-20 mt-12 w-[95%]">
              <div>
                <p className="font-bold before:w-3 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute  relative left-5">Git</p>
              </div>
              <div>
                <p className="font-bold before:w-3 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute  relative left-5">Prisma</p>
              </div>
              <div>
                <p className="font-bold before:w-3 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute  relative left-5">Express.js</p>
              </div>
              <div>
                <p className="font-bold before:w-3 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute  relative left-5">Axios </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-20 mt-4 sm:mt-6 w-[95%]">
              <div>
                <p className="font-bold before:w-3 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute  relative left-5">Inglês Intermediario</p>
              </div>
              <div>
                <p className="font-bold before:w-3 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute  relative left-5">Scrum e Kanban</p>
              </div>
              <div>
                <p className="font-bold before:w-3 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute  relative left-5">Trabalho em equipe</p>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="py-8">
          <div className="container max-w-screen-lg m-auto px-4">
            <h2 className="text-2xl font-semibold">Sobre mim</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 before:w-1 before:bg-white">
              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2019</h3>
                <p>Com uma trajetória que combina experiência prática e aprendizado acadêmico, minha jornada no mundo da tecnologia começou com uma sólida base em administração e gerenciamento de processos. Trabalhei como Assistente Administrativo na Sabesp, onde aprendi a importância da organização e da eficiência. Atuei no gerenciamento o almoxarifado e o controle de estoque, habilidades que agora aplico para otimizar projetos de desenvolvimento e garantir que tudo funcione sem problemas.</p>
              </div>

              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
                <p>Meu interesse por tecnologia me levou a explorar o desenvolvimento web através do curso Técnico em Informática para Internet. Durante esse período, mergulhei no universo do desenvolvimento, aprendendo a trabalhar com React, HTML5, CSS3 e JavaScript. Esse conhecimento foi crucial para me preparar para desafios reais no campo do desenvolvimento e consolidar minha base técnica.</p>
              </div>

              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                <p>Uma experiência marcante foi meu estágio na Prefeitura de Caraguatatuba. Nesse papel, fui responsável por garantir a conectividade e o bom funcionamento dos sistemas e equipamentos da organização. Diagnosticar problemas de conectividade e oferecer suporte técnico me ajudou a aprimorar minhas habilidades e a entender a importância de uma resolução rápida e eficaz de problemas.</p>
              </div>

              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                <p>Atualmente, estou cursando Engenharia de Software e busco oportunidades para integrar uma equipe onde possa aplicar minhas habilidades e continuar aprendendo. Com experiência em metodologias ágeis como Scrum e Kanban, e um forte conhecimento em ferramentas como TypeScript e SQL, estou empolgado para colaborar em projetos desafiadores e criar soluções escaláveis e de alta qualidade.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <div className="container max-w-screen-lg m-auto flex justify-between px-4 py-6">
          <div>
            <p className="flex hidden sm:flex text-gray-300 text-sm">Copyright @ 2024</p>
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
