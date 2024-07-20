import "./App.css";
import Perfil1 from "./assets/perfil1.png";
import Projeto1 from "./assets/biodex (1).png";
import Projeto2 from "./assets/projeto2.png";
import Projeto3 from "./assets/projeto3.png";
import Github from "./assets/github.svg";
import Linkedin from "./assets/linkedin.svg";

function App() {

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
            <div className="social-icons flex gap-4">
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
              <img src={Perfil1} className="w-[240px] m-auto sm:w-[560px] rounded-full shadow-lg shadow-blue-400" />
            </div>
          </div>
        </section>

        <section id="projetos">
          <div className="container max-w-screen-lg m-auto px-4 py-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projetos</h2>

            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1 bg-black bg-opacity-75">
                <img src={Projeto1} className="w-36 h-auto mx-auto block" alt="imagem do aplicativo biodex" />
                <h3 className="text-2xl font-semibold mt-8">Sistema Administrativo</h3>
                <p className="text-gray-400 text-sm mt-2">
                  A função do sistema administrativo é que o administrador possa
                  realizar a criação, leitura, edição e exclusão de motoristas,
                  usuarios, onibus e linhas, e tambem realizar a leitura dos
                  comentarios deixados no site publico...
                </p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Saiba mais
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Ver código
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1 bg-black bg-opacity-75">
                <img src={Projeto2} />
                <h3 className="text-2xl font-semibold mt-8">Site de Recarga</h3>
                <p className="text-gray-400 text-sm mt-2">
                  A função do site de recarga é que o proprio usuário possa
                  fazer seu cadastro, sua recarga por meio do cpf, vizualizar o
                  horário das linhas e dar sugestões ou reclamações por meio da
                  página sobre, que esta interligada com o site
                  administrativo...
                </p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
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
                <img src={Projeto3} />
                <h3 className="text-2xl font-semibold mt-8">Sistema de Ônibus</h3>
                <p className="text-gray-400 text-sm mt-2">
                  A função do sistema de catraca é que ao passar o numero do
                  cartão o usuario seja redirecionado para uma tela de
                  aprovado(onde vai receber a mensagem "Boa Viagem (nome do
                  usuario) e o saldo restante " ou sera redirecionado para uma
                  tela de erro(onde vai receber uma mensagem de erro relacionada
                  ao problema como "saldo insuficiente" , "cartão não
                  encontrado" , etc)...
                </p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Saiba mais
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Ver código
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1 bg-black bg-opacity-75">
                <img src={Projeto3} />
                <h3 className="text-2xl font-semibold mt-8">Sistema de Ônibus</h3>
                <p className="text-gray-400 text-sm mt-2">
                  A função do sistema de catraca é que ao passar o numero do
                  cartão o usuario seja redirecionado para uma tela de
                  aprovado(onde vai receber a mensagem "Boa Viagem (nome do
                  usuario) e o saldo restante " ou sera redirecionado para uma
                  tela de erro(onde vai receber uma mensagem de erro relacionada
                  ao problema como "saldo insuficiente" , "cartão não
                  encontrado" , etc)...
                </p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, atque? Impedit, veritatis necessitatibus. Deleniti velit eveniet asperiores fugiat aliquam fuga minus, nulla suscipit laborum facere sint vitae quos, et rerum?
                </p>
              </div>

              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2019</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, atque? Impedit, veritatis necessitatibus. Deleniti velit eveniet asperiores fugiat aliquam fuga minus, nulla suscipit laborum facere sint vitae quos, et rerum?
                </p>
              </div>

              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2019</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, atque? Impedit, veritatis necessitatibus. Deleniti velit eveniet asperiores fugiat aliquam fuga minus, nulla suscipit laborum facere sint vitae quos, et rerum?
                </p>
              </div>

              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2019</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, atque? Impedit, veritatis necessitatibus. Deleniti velit eveniet asperiores fugiat aliquam fuga minus, nulla suscipit laborum facere sint vitae quos, et rerum?
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <div className="container max-w-screen-lg m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
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
