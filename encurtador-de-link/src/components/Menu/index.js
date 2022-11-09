import React from 'react'
import './menu.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className="menu">
      <a className="social" href="https://github.com/leo-serrao">
        <BsGithub size={24} color="#fff" />
      </a>

      <a
        className="social"
        href="https://www.linkedin.com/in/leonardo-serrão-171332104"
      >
        <BsLinkedin size={24} color="#fff" />
      </a>

      <Link className="menu-item" to="/links">
        Meus Links
      </Link>
    </div>
  )
}
