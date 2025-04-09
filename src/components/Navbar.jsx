export default function Navbar() {
    return (
      <nav className="bg-gray-800 text-white flex items-center justify-between px-8 py-4">
        <h1 className="font-bold text-xl">JeannFacts</h1>
        <ul className="flex space-x-6">
          <li><a href="#inicio" className="hover:text-gray-300">Inicio</a></li>
          <li><a href="#proyectos" className="hover:text-gray-300">Proyectos</a></li>
        </ul>
      </nav>
    );
  }
  