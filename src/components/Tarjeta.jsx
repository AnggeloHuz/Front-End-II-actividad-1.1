import imagen from '../assets/Producto-1.jpg'

function Tarjeta({showModalDetails, setShowModalDetails}) {

    return (
        <>
            <article className="bg-opaco w-full h-[500px] border-[3px] border-primario rounded-xl">
                <img src={imagen} alt="foto del articulo" className="w-full h-2/5 rounded-t-xl border-b-[3px] border-primario " />

                <div className="w-full h-3/5 py-4 px-4 flex flex-col gap-4 justify-center">

                    <h3 className='text-center text-2xl font-Nunito text-llamativo font-bold'>
                        Nombre Producto
                    </h3>

                    <div className='flex flex-col'>
                        <p className='text-lg font-Roboto text-blanco'>
                            <b className='text-primario'>Categoria:</b> **********
                        </p>

                        <p className='text-lg font-Roboto text-blanco'>
                            <b className='text-primario'>Precio:</b> **********$
                        </p>

                        <p className='text-lg font-Roboto text-blanco'>
                            <b className='text-primario'>Cantidad:</b> **********
                        </p>
                    </div>

                    <div className='flex gap-8'>
                        <button className='w-full p-2 text-blanco text-lg font-Roboto bg-llamativo rounded-lg hover:bg-negro hover:text-llamativo transition-all duration-300'>
                            Compra
                        </button>

                        <button className='w-full p-2 text-blanco text-lg font-Roboto bg-llamativo rounded-lg hover:bg-negro hover:text-llamativo transition-all duration-300'
                        onClick={() => setShowModalDetails(true)}>
                            Ver
                        </button>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Tarjeta