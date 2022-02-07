import './link-item.css'
import { FiX, FiClipboard } from 'react-icons/fi'
import Copiado from '../Copy-check'
import { useState } from 'react'

export default function LinkItem({ closeModal, content }) {
  const [copy, setCopy] = useState(false)

  function linkCopied() {
    setCopy(true)

    setTimeout(function () {
      setCopy(false)
    }, 3000)
  }

  async function copyLink() {
    await navigator.clipboard.writeText(content.link)
  }

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h1> Link Encurtado </h1>
        <button onClick={closeModal}>
          <FiX size={28} color="#000" />
        </button>
      </div>

      <div className="span-container">
        <span>{content.long_url}</span>
        {copy && <Copiado />}
      </div>

      <button className="modal-link" onClick={(copyLink, linkCopied)}>
        {content.link}
        <FiClipboard size={20} color="#fff" />
      </button>
    </div>
  )
}
