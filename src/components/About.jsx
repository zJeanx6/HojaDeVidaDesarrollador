export default function About() {
    return (
        <section id="inicio" className="bg-slate-500 text-white px-8 py-16 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
                <h2 className="text-4xl font-bold mb-4">Hola, Soy Jean.<br />
                    Desarrollador de Software.</h2>
                <p className="text-gray-200 mb-6">
                    Tengo un enfoque en el Back-end, creando aplicaciones web robustas, con buena lógica y rendimiento. Actualmente me estoy formando en Front-end para crecer como full-stack.
                    Me apasiona resolver problemas reales, aprender constantemente y aportar soluciones de calidad alineadas a los objetivos del cliente y del proyecto.
                </p>
                <div className="flex space-x-4">
                    <a href="#habilidades" className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded inline-block">
                        Conoce mis habilidades
                    </a>

                </div>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                <img
                    src="https://www.creaxid.com.mx/blog/wp-content/uploads/2020/12/desarrollo-software.png"
                    alt="Developer"
                    className="w-200px"
                />
            </div>
        </section>
    );
}
