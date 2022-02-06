import { FiLink } from 'react-icons/fi'
import './home.css'
import Menu from '../components/Menu'

function Home() {
  return (
    <div className="container-home">
      <Menu />

      <div className="logo">
        <img src="/logo.png" alt="Logo do site" />
        <h1>Encurtador de Links</h1>
        <span>Cole seu link que vai ser encurtado 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF" />
          <input placeholder="Cole seu link aqui!" />
        </div>
        <button>Encurtar Link</button>
      </div>
    </div>
  )
}

export default Home
