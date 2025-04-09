import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer id="contacto" className="bg-gray-800 text-white py-10 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400 mb-4 md:mb-0">
          © {new Date().getFullYear()} Jeann Developer. All rights reserved.
        </p>

        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/zJeanx6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jean-roa-056799356/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/jeannfacts/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:stebanrc21@gmail.com"
            className="hover:text-green-400 transition-colors"
            aria-label="Email"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
