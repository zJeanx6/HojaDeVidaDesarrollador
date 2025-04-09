import React from 'react';
import imagenSolucionTextil from '../assets/solucion_textil.jpg';
import imagenAsistenciaVirtual from '../assets/asistencia_virtual2.jpg';
import imagenMiPerro from '../assets/mi_perro_classic_hotdogs.jpg';
import imagenNotFound from '../assets/not_found.jpg';


const Projects = () => {
  const projects = [
    {
      title: 'Solucion Textil - SENA',
      stack: 'Proyecto Formatico Tecnologo',
      description: 'Gestion de inventarios para, Productos, Materias primas, Maquinaria y control de mantenimiento maquinaria.',
      image: imagenSolucionTextil
    },
    {
        title: 'Asistencia virtual escolar',
        stack: 'Proyecto Freelance',
        description: 'Aplicacion web para el control de asistencia virtual de los estudiantes en una escuela.',
        image: imagenAsistenciaVirtual
    },
    {
      title: 'Gestion de inventario - Mi Perro',
      stack: 'Proyecto Formativo Tecnico',
      description: 'Gestion de inventario, control entradas y salidas de insumos utilizados para los alimentos de clasificacion comida rapida.',
      image: imagenMiPerro
    },
    {
        title: 'Observador virtual escolar',
        stack: 'Proyecto Freelance',
        description: 'Aplicacion web para el control de anotaciones de un estudiante de manera virtual para una escuela.',
        image: imagenNotFound
      },
  ]

  return (
    <section id="proyectos" className="bg-slate-600 text-white py-16 px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Proyectos Desarrollados y en Desarrollo</h2>
        <p className="text-gray-200 max-w-xl mx-auto">
          Estas son algunas de las aplicaciones web que he desarrollado durante mi aprendizaje en Desarrollo de software.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <p className="text-white font-semibold mb-1">{project.stack}</p>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-zinc-300 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
