import { IoLogoGithub, IoLogoWhatsapp, IoLogoHtml5 } from "react-icons/io";

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
                            <a href="#"><IoLogoHtml5 /></a>
                        </li>
                        <li className="text-4xl md:text-6xl text-llamativo hover:text-secundario duration-300 transition-all">
                            <a href="#"><IoLogoGithub /></a>
                        </li>
                        <li className="text-4xl md:text-6xl text-llamativo hover:text-secundario duration-300 transition-all">
                            <a href="#"><IoLogoWhatsapp /></a>
                        </li>
                    </ul>

                    <h6 className="h-auto text-md md:text-2xl font-light font-Roboto italic text-blanco text-center">Derechos Reservados © JaviStore 2024</h6>
                </div>
            </footer>
        </>
    )
}

export default Footer