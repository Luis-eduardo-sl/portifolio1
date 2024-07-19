import './App.css'
import Perfil from './assets/perfil.png'
import Perfil1 from './assets/perfil (8).png'
import Projeto1 from './assets/protejo1.png'
import Projeto2 from './assets/projeto2.png'
import Projeto3 from './assets/projeto3.png'

function App() {
  return (
    <>
      <header>
        <div className='container m-auto px-4 py-6'>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='font-bold text-xl'>Luis Portfolio</h1>
            </div>
            <div>
              <ul className='flex gap-4'>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>Projetos</a>
                </li>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>Tecnologias</a>
                </li>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>Sobre mim</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section>
          <div className='container m-auto px-4 py-10 flex gap-6'>
            <div>
              <h2 className='font-bold text-4xl'>Olá, meu nome é Luis,</h2>
              <h1 className='font-bold text-4xl mt-1 gradient-text'>FullStack Developer</h1>
              <p className='mt-4 text-gray-400'>Cursando engenharia de Software, meu objetivo é criar soluções digitais inovadoras, colaborando com uma equipe dinâmica e utilizando metodologias ágeis para garantir a melhor experiência para os usuários</p>
            </div>
            <div>
              {/* <img src={Perfil} width={850}/> */}
              <img src={Perfil1} width={850}/>
            </div>
          </div>
        </section>

        <section>
          <div className='container m-auto px-4'>
            <h2 className='text-2xl font-semibold'>Projetos</h2>
            <div className='grid grid-cols-2 gap-10 mt-11'>
              <div className='border border-gray-500 rounded-md p-5'>
                <img src={Projeto1} />
                <h3 className='text-2xl font-semibold mt-8'>Sistema Administrativo</h3>
                <p className='text-gray-400 text-sm mt-2'>A função do sistema administrativo é que o administrador possa realizar a criação, leitura, edição e exclusão de motoristas, usuarios, onibus e linhas, e tambem realizar a leitura dos comentarios deixados no site publico...</p>
                <div className='flex justify-evenly mt-12'>
                  <button className='px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Saiba mais</button>
                  <button className='px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>Ver código</button>
                </div>
              </div>
              <div className='border border-gray-500 rounded-md p-5'>
                <img src={Projeto2} />
                <h3 className='text-2xl font-semibold mt-8'>Site de Recarga</h3>
                <p className='text-gray-400 text-sm mt-2'>A função do site de recarga é que o proprio usuário possa fazer seu cadastro, sua recarga por meio do cpf, vizualizar o horário das linhas e dar sugestões ou reclamações por meio da página sobre, que esta interligada com o site administrativo...</p>
                <div className='flex justify-evenly mt-12'>
                  <button className='px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Saiba mais</button>
                  <button className='px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>Ver código</button>
                </div>
              </div>
              <div className='border border-gray-500 rounded-md p-5'>
                <img src={Projeto3} />
                <h3 className='text-2xl font-semibold mt-8'>Sistema de Ônibus</h3>
                <p className='text-gray-400 text-sm mt-2'>A função do sistema de catraca é que ao passar o numero do cartão o usuario seja redirecionado para uma tela de aprovado(onde vai receber a mensagem "Boa Viagem (nome do usuario) e o saldo restante " ou sera redirecionado para uma tela de erro(onde vai receber uma mensagem de erro relacionada ao problema como "saldo insuficiente" , "cartão não encontrado" , etc)...</p>
                <div className='flex justify-evenly mt-12'>
                  <button className='px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Saiba mais</button>
                  <button className='px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>Ver código</button>
                </div>
              </div>
              <div className='border border-gray-500 rounded-md p-5'>
                <img src={Projeto3} />
                <h3 className='text-2xl font-semibold mt-8'>Sistema de Ônibus</h3>
                <p className='text-gray-400 text-sm mt-2'>A função do sistema de catraca é que ao passar o numero do cartão o usuario seja redirecionado para uma tela de aprovado(onde vai receber a mensagem "Boa Viagem (nome do usuario) e o saldo restante " ou sera redirecionado para uma tela de erro(onde vai receber uma mensagem de erro relacionada ao problema como "saldo insuficiente" , "cartão não encontrado" , etc)...</p>
                <div className='flex justify-evenly mt-12'>
                  <button className='px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Saiba mais</button>
                  <button className='px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>Ver código</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
