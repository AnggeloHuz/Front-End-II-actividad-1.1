import { info } from "../service/alerts"

function Tarjeta({showModalDetails, setShowModalDetails, producto, setProductoElegido}) {

    return (
        <>
            <article className="bg-opaco w-full h-[500px] border-[3px] border-primario rounded-xl">
                <img src={producto.imagen} alt="foto del articulo" className="w-full h-2/5 rounded-t-xl border-b-[3px] border-primario " />

                <div className="w-full h-3/5 py-4 px-4 flex flex-col gap-4 justify-center">

                    <h3 className='text-center text-2xl font-Nunito text-llamativo font-bold'>
                        {producto.nombre}
                    </h3>

                    <div className='flex flex-col'>
                        <p className='text-lg font-Roboto text-blanco'>
                            <b className='text-primario'>Categoria:</b> {producto.categoria}
                        </p>

                        <p className='text-lg font-Roboto text-blanco'>
                            <b className='text-primario'>Precio:</b> {producto.precio}{producto.moneda}
                        </p>

                        <p className='text-lg font-Roboto text-blanco'>
                            <b className='text-primario'>Cantidad:</b> 100 Unidades
                        </p>
                    </div>

                    <div className='flex gap-8'>
                        <button 
                        className='w-full p-2 text-blanco text-lg font-Roboto bg-llamativo rounded-lg hover:bg-negro hover:text-llamativo transition-all duration-300'
                        onClick={(e) => {
                            info('success', 'Gracias por Comprar nuestro Producto, aunque esperamos proximamente agregar un carrito de Compra', 'Comprado Exitosamente')
                        }}
                        >
                            Compra
                        </button>

                        <button className='w-full p-2 text-blanco text-lg font-Roboto bg-llamativo rounded-lg hover:bg-negro hover:text-llamativo transition-all duration-300'
                        onClick={() => {
                            setProductoElegido(producto)
                            setShowModalDetails(true)
                        } }>
                            Ver
                        </button>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Tarjeta