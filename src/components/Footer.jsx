import { IoLogoGithub, IoLogoWhatsapp, IoLogoHtml5 } from "react-icons/io";
import { info } from "../service/alerts";

function Footer() {

    return (
        <>
            <footer className="w-full h-[25vh] flex flex-row p-4 bg-opaco">
                <div className="h-full lg:w-1/2 lg:flex justify-center hidden items-center border-r-2">
                    <h4 className="text-center text-6xl text-llamativo font-Nunito font-bold">
                        JaviStore
                    </h4>
                </div>

                <div className="flex flex-col h-full w-full lg:w-1/2 gap-2 justify-center">
                    <ul className="flex w-full h-auto gap-8 justify-center items-center">
                        <li className="text-4xl md:text-6xl text-llamativo hover:text-secundario duration-300 transition-all">
                            <a href="https://www.esic.edu/rethink/tecnologia/html5-que-es-caracteristicas-y-como-funciona-c"><IoLogoHtml5 /></a>
                        </li>
                        <li className="text-4xl md:text-6xl text-llamativo hover:text-secundario duration-300 transition-all">
                            <a href="https://github.com/Javier1432"><IoLogoGithub /></a>
                        </li>
                        <li className="text-4xl md:text-6xl text-llamativo hover:text-secundario duration-300 transition-all hover:cursor-pointer">
                            <a
                            onClick={(e) => {
                                info('info', 'No busques datos privados por páginas web ya que te puede estafar', 'Alerta de Estafa')
                            }}
                            ><IoLogoWhatsapp /></a>
                        </li>
                    </ul>

                    <h6 className="h-auto text-md md:text-2xl font-light font-Roboto italic text-blanco text-center">Derechos Reservados © JaviStore 2024</h6>
                </div>
            </footer>
        </>
    )
}

export default Footer