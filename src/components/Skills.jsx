import React from 'react'
import { FaPhp, FaHtml5, FaCss3Alt, FaGitAlt, FaLinux, FaWindows, FaBootstrap, FaCheck } from 'react-icons/fa'
import { SiLaravel, SiMysql, SiTailwindcss, SiJavascript, SiLivewire, SiDart, SiFlutter, SiFilament } from 'react-icons/si'
import { VscGithub } from 'react-icons/vsc'
import { FiTerminal } from 'react-icons/fi'


const skills = [
  { name: 'PHP', icon: <FaPhp /> },
  { name: 'Laravel', icon: <SiLaravel /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Livewire', icon: <SiLivewire /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Filament', icon: <SiFilament /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'Flutter', icon: <SiFlutter /> },
  { name: 'Dart', icon: <SiDart /> },

  // Herramientas
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <VscGithub /> },
  { name: 'VS Code', icon: <FiTerminal /> },
  { name: 'Windows', icon: <FaWindows /> },
  { name: 'Linux', icon: <FaLinux /> },
  { name: 'Inglés A2', icon: <FaCheck /> }
]

const Skills = () => {
  return (
    <section id="habilidades" className="bg-slate-500 text-white py-16 px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Herramientas y Tecnologías</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Estas son las tecnologías en las que desarrollo actualmente o he utilizado en algun proyecto practico o formal, y herramientas que utilizo frecuentemente.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 py-4 px-6 rounded-lg flex items-center space-x-3 hover:bg-gray-700 transition"
          >
            <span className="text-zinc-400 text-xl">{skill.icon}</span>
            <span className="text-white font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
