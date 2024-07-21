import React, { useState, useRef, useEffect } from 'react';
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
    <body>
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
                Cursando engenharia de Software, meu objetivo é criar soluções
                digitais inovadoras, colaborando com uma equipe dinâmica e
                utilizando metodologias ágeis para garantir a melhor experiência
                para os usuários
              </p>
            </div>
            <div>
              <img src={Perfil1} alt='imagem de perfil de Luis' className="w-[240px] m-auto sm:w-[560px] rounded-full shadow-lg shadow-blue-400" />
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
              <img src={modalContent.image} alt={modalContent.title} className="w-32 h-auto mx-auto rounded-md mb-4 sm:w-48 md:w-60" />
              <p className="text-gray-300 text-sm sm:text-base">{modalContent.description}</p>
            </div>
          </div>
        )}


        <section id="projetos">
          <div className="container max-w-screen-lg m-auto px-4 py-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projetos</h2>

            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1 bg-black bg-opacity-75">
                <img src={Projeto1} className="w-36 h-auto mx-auto block" alt="imagem do aplicativo biodex" />
                <h3 className="text-2xl font-semibold mt-8 text-white">Aplicativo BioDex</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Desenvolvimento de um aplicativo com gamificação para um parque municipal juqueriquere, com o objetivo de fazer com que o passeio ao parque fosse interessante para as diversas faixas etárias que visitam o parque...
                </p>
                <div className="flex mt-12 gap-2">
                  <button
                    className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                    onClick={() => openModal({
                      title: 'Aplicativo BioDex',
                      image: Projeto1,
                      description: 'Desenvolvimento de um aplicativo com gamificação para um parque municipal juqueriquere, com o objetivo de fazer com que o passeio ao parque fosse interessante para as diversas faixas etárias que visitam o parque'
                    })}
                  >
                    Saiba mais
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Ver código
                  </button>
                </div>
              </div>

              <div className="border border-gray-500 rounded-md p-5 flex-1 bg-black bg-opacity-75">
                <img src={Projeto2} className="w-36 h-auto mx-auto block" alt="imagem do aplicativo Job" />
                <h3 className="text-2xl font-semibold mt-8">Aplicativo Job</h3>
                <p className="text-gray-400 text-sm mt-2">
                  A função do site de recarga é que o proprio usuário possa
                  fazer seu cadastro, sua recarga por meio do cpf, vizualizar o
                  horário das linhas e dar sugestões ou reclamações por meio da
                  página sobre, que esta interligada com o site
                  administrativo...
                </p>
                <div className="flex mt-12 gap-2">
                  <button
                    className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                    onClick={() => openModal({
                      title: 'Aplicativo Job',
                      image: Projeto2,
                      description: 'A função do site administrativo é que o administrador possa realizar os cruds de motorista, usuario, onibus e linhas, e tambem realizar a leitura dos comentarios deixados no site publico. O site tambem conta com um sistema de login onde o administrador só vai ter acesso as paginas após ter feito seu cadastro e login, na pagina inicial temos um grafico real feito com o chart.js e tambem contadores para cada tipo de usuario'
                    })}
                  >
                    Saiba mais
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Ver código
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1 bg-black bg-opacity-75">
                <img src={Projeto33} alt='tela inicial do site administrativo' />
                <h3 className="text-2xl font-semibold mt-8">Sistema Administrativo</h3>
                <p className="text-gray-400 text-sm mt-2">
                  A função do sistema administrativo é que o administrador possa realizar a criação, leitura, edição e exclusão de motoristas, usuários, ônibus e linhas, e também realizar a leitura dos comentários deixados no site público...
                </p>
                <div className="flex mt-12 gap-2">
                  <button
                    className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                    onClick={() => openModal({
                      title: 'Sistema Administrativo',
                      image: Projeto33,
                      description: 'A função do site administrativo é que o administrador possa realizar os cruds de motorista, usuario, onibus e linhas, e tambem realizar a leitura dos comentarios deixados no site publico. O site tambem conta com um sistema de login onde o administrador só vai ter acesso as paginas após ter feito seu cadastro e login, na pagina inicial temos um grafico real feito com o chart.js e tambem contadores para cada tipo de usuario'
                    })}
                  >
                    Saiba mais
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Ver código
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1 bg-black bg-opacity-75">
                <img src={Projeto4} alt='tela inicial do site de recarga' />
                <h3 className="text-2xl font-semibold mt-8">Site de Recarga</h3>
                <p className="text-gray-400 text-sm mt-2">
                  A função do site de recarga é que o proprio usuário possa
                  fazer seu cadastro, sua recarga por meio do cpf, vizualizar o
                  horário das linhas e dar sugestões ou reclamações por meio da
                  página sobre, que esta interligada com o site
                  administrativo...
                </p>
                <div className="flex mt-12 gap-2">
                  <button
                    className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                    onClick={() => openModal({
                      title: 'Site de Recarga',
                      image: Projeto4,
                      description: 'A função do site de recarga é que o proprio usuário possa fazer seu cadastro, sua recarga por meio do cpf vizualizar o horário das linhas e dar sugestões ou reclamações por meio da página sobre, que esta interligada com o site administrativo'
                    })}
                  >
                    Saiba mais
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Ver código
                  </button>
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
            <p className="text-gray-300 text-sm">luis0202.eduardo@gmail.com</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a href=""><img src={Linkedin} alt="simbolo do linkedin" className="w-8" /></a>
              </li>
              <li>
                <a href=""><img src={Github} alt="simbolo do Github" className="w-8" /></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </body>
  );
}

export default App;
