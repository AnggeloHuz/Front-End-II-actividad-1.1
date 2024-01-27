import Swal from 'sweetalert2'
import { enviarProducto } from '../../service/funciones';
import { info } from '../../service/alerts';

export default function Detalles({ showModalDetails, setShowModalDetails, setShowModalEdit, productoElegido, setInventario, inventario }) {

    function confirmar(texto, titulo) {
        Swal.fire({
            title: titulo,
            text: texto,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#c22222",
            cancelButtonColor: "#2595B8",
            confirmButtonText: "Eliminar"
          }).then((result) => {
            if (result.isConfirmed) {
                const nuevoInventario = inventario.filter( producto => producto.id !== productoElegido.id)
                setInventario(nuevoInventario)
                enviarProducto(nuevoInventario)

                info('success', 'Se ha eliminado exitosamente el producto', 'Eliminación Completa')
            } else {
                info('info', 'Ten mucho cuidado de eliminar un producto equivocado', 'Eliminación Cancelada')
            }
          });
    }

    return (
        <>

            {showModalDetails ? (
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
                                        Descripcion del Producto
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-negro font-Roboto float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModalDetails(false)}
                                    >
                                        x
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative w-full px-4 py-8 md:px-12 md:py-8 flex-auto">
                                    <div className="flex flex-col gap-4">

                                        <p className="text-xl md:text-2xl font-bold font-Nunito pl-4 text-opaco">
                                            {productoElegido.descripcion}
                                        </p>

                                        <div className="flex flex-col-reverse md:flex-row-reverse gap-4">
                                            <button
                                                className="font-Roboto font-semibold text-lg md:text-xl text-blanco bg-tono-bajo hover:bg-primario transition-all duration-300 rounded-xl py-2 px-8 mt-8"
                                                type="button"
                                                onClick={(e) => {
                                                    setShowModalDetails(false)
                                                }}>Salir
                                            </button>
                                            <button
                                                className="font-Roboto font-semibold text-lg md:text-xl text-blanco bg-secundario hover:bg-red-700 transition-all duration-300 rounded-xl py-2 px-8 mt-8"
                                                type="button"
                                                onClick={async (e) => {
                                                    confirmar('Eliminar Producto', '¿Estas seguro de eliminar el producto?')
                                                    setShowModalDetails(false)
                                                }}>Eliminar Producto
                                            </button>
                                            <button
                                                className="font-Roboto font-semibold text-lg md:text-xl text-blanco bg-secundario hover:bg-green-600 transition-all duration-300 rounded-xl py-2 px-8 mt-8"
                                                type="button"
                                                onClick={(e) => {
                                                    setShowModalDetails(false)
                                                    setShowModalEdit(true)
                                                }}>Editar Producto
                                            </button>
                                        </div>

                                    </div>
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