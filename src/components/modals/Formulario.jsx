import { useEffect, useState } from "react";
import { enviarProducto, validacion } from "../../service/funciones";
import { info } from "../../service/alerts";
import { v4 as uuidv4 } from 'uuid';

export default function Formulario({ showModal, setShowModal, inventario, setInventario }) {

    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('');
    const [precio, setPrecio] = useState('');
    const [moneda, setMoneda] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const valido = validacion(nombre, categoria, precio, moneda, descripcion)

    return (
        <>

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-full flex justify-center items-center">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col items-center w-4/5 bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between px-5 py-10 w-[95%]  border-b-2 border-solid border-opaco rounded-t">
                                    <h3 className="text-4xl text-center font-Nunito font-bold text-secundario w-full">
                                        Agregar Producto
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-negro font-Roboto float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        x
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative w-full px-4 py-8 md:px-12 md:py-8 flex-auto">
                                    <form className="flex flex-col gap-4">

                                        <div className="flex flex-col gap-1">
                                            <label className="text-xl md:text-2xl font-bold font-Nunito pl-4 text-secundario">Nombre: </label>
                                            <input className="rounded-3xl border-2 border-tono-bajo py-1 px-3 md:py-2 text-lg md:text-xl text-opaco w-full" type="text" placeholder="escribe el nombre del producto..." 
                                            value={nombre}
                                            onChange={(e) => {
                                                setNombre(e.currentTarget.value)
                                            }}
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <label className="text-xl md:text-2xl font-bold font-Nunito pl-4 text-secundario">Categoria: </label>
                                            <input className="rounded-3xl border-2 border-tono-bajo py-1 px-3 md:py-2 text-lg md:text-xl text-opaco w-full" type="text" placeholder="escribe la categoria del producto..."
                                            value={categoria}
                                            onChange={(e) => {
                                                setCategoria(e.currentTarget.value)
                                            }}
                                            />
                                        </div>

                                        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-16">
                                            <div className="flex flex-col gap-1">
                                                <label className="text-xl md:text-2xl font-bold font-Nunito pl-4 text-secundario">Precio: </label>
                                                <input className="rounded-3xl border-2 border-tono-bajo py-1 px-3 md:py-2 text-lg md:text-xl text-opaco w-full" type="number" min={0} placeholder="escribe el precio del producto..." 
                                                value={precio}
                                                onChange={(e) => {
                                                    setPrecio(e.currentTarget.value)
                                                }}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label className="text-xl md:text-2xl font-bold font-Nunito pl-4 text-secundario">Moneda: </label>
                                                <select className="rounded-3xl border-2 border-tono-bajo py-1 px-3 md:py-2 text-lg md:text-xl text-opaco w-full"
                                                value={moneda}
                                                onChange={(e) => {
                                                    setMoneda(e.currentTarget.value)
                                                }}
                                                >
                                                    <option value="Bs">Bs</option>
                                                    <option value="$">$</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <label className="text-xl md:text-2xl font-bold font-Nunito pl-4 text-secundario">Descripcion: </label>
                                            <textarea className="rounded-3xl border-2 border-tono-bajo py-1 px-3 md:py-2 text-lg md:text-xl text-opaco w-full resize-none" placeholder="describa el producto que esta agregando..." 
                                            value={descripcion}
                                            onChange={(e) => {
                                                setDescripcion(e.currentTarget.value)
                                            }}
                                            />
                                        </div>

                                        <div className="flex flex-row-reverse">
                                            <button 
                                            className="font-Roboto font-semibold text-lg md:text-xl text-blanco bg-secundario rounded-xl py-2 px-8 mt-8" 
                                            type="submit"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (valido === 'Error') {
                                                    return info('error', 'No se puedo enviar el producto porque existen campos vacios. Rellenelos', 'Error al enviar formulario')
                                                }
                                                
                                                setInventario([...inventario, {
                                                    id: uuidv4(),
                                                    nombre,
                                                    categoria,
                                                    precio,
                                                    moneda,
                                                    descripcion,
                                                }])

                                                enviarProducto([...inventario, {
                                                    id: uuidv4(),
                                                    nombre,
                                                    categoria,
                                                    precio,
                                                    moneda,
                                                    descripcion,
                                                }])
                                                
                                                return info('success', 'Se guardo exitosamente el producto en el inventario', 'Producto guardado')
                                                }}>Agregar Producto</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}