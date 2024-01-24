import { useState } from 'react'
import perfil from '../assets/perfil.png'
import { IoCloseSharp, IoMenu } from "react-icons/io5";

function Nav() {

    const [menu, setMenu] = useState(false)

    return (
        <>
            <nav className="bg-blanco">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-4xl font-bold whitespace-nowrap text-secundario font-Nunito">JaviStore</span>
                    </a>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="flex text-sm rounded-full text-secundario invisible md:visible">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-10 h-10 rounded-full invisible md:visible" src={perfil} alt="user photo"/>
                        </button>
                        <button type="button" className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-secundario rounded-lg md:hidden hover:text-primario hover:bg-opaco focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200" onClick={ () => {
                                setMenu(true)
                            }}>
                            <span className="sr-only">Open main menu</span>
                            <IoMenu className='text-6xl' />
                        </button>
                    </div>
                    <div className={menu === true ? "items-center justify-between  absolute bg-blanco right-0 top-0 w-full transition-all duration-500 md:relative md:flex md:w-auto md:order-1" : "items-center justify-between  absolute bg-blanco -right-full top-0 w-full transition-all duration-500 md:relative md:right-0 md:flex md:w-auto md:order-1"} id="navbar-user">
                        <span className='flex w-full flex-row-reverse p-4 md:hidden'>
                            <IoCloseSharp className='text-4xl hover:cursor-pointer hover:text-primario transition-all duration-200' onClick={ () => {
                                setMenu(false)
                            }}/>  
                        </span>
                        <ul className="flex flex-col text-center text-xl font-Roboto text-opaco font-semibold italic p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <a href="#" className="block py-2 px-3 rounded hover:text-primario hover:bg-gray-100 md:hover:bg-transparent transition-all duration-500">Navegar</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 rounded hover:text-primario hover:bg-gray-100 md:hover:bg-transparent transition-all duration-500">Servicios</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 rounded hover:text-primario hover:bg-gray-100 md:hover:bg-transparent transition-all duration-500">Contacto</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 rounded hover:text-primario hover:bg-gray-100 md:hover:bg-transparent transition-all duration-500">Agregar</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav