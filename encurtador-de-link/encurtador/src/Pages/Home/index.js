import { useState } from 'react'
import { FiLink } from 'react-icons/fi'
import './home.css'

import Menu from '../../components/Menu'
import LinkItem from '../../components/Link-Item'

import api from '../../Services/api'

function Home() {
  const [link, setLink] = useState('')
  const [data, setData] = useState('')
  const [showModal, setShowModal] = useState(false)

  async function handleShortLink() {
    try {
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data)
      setShowModal(true)

      setLink('')
    } catch {
      alert('Ops! Algo deu errado...')
      setLink('')
    }
  }

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
          <input
            placeholder="Cole seu link aqui!"
            value={link}
            onChange={e => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortLink}>Encurtar Link</button>
      </div>

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  )
}

export default Home
