import './App.css'

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
    </>
  )
}

export default App
