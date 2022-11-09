import React, { useState } from 'react'
import './link-item.css'
import { FiX, FiClipboard } from 'react-icons/fi'
import Copiado from '../Copy-check'
import CopyToClipboard from 'react-copy-to-clipboard'

export default function LinkItem({ closeModal, content }) {
  const [copied, setCopy] = useState(false)

  function linkCopied() {
    setCopy(true)

    setTimeout(function () {
      setCopy(false)
    }, 3000)
  }

  function copyLink() {
    navigator.clipboard.writeText(content.link);
    linkCopied();
  }

  console.log(content.link)

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
        {copied && <Copiado />}
      </div>

      <button className="modal-link" onClick={copyLink}>
        {content.link}
        <FiClipboard size={20} color="#fff" />
      </button>
    </div>
  )
}
