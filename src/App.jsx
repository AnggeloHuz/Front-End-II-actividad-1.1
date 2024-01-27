import { useEffect, useState } from "react"
import Busqueda from "./components/Busqueda"
import Filtrado from "./components/Filtrado"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Paginacion from "./components/Paginacion"
import Tarjeta from "./components/Tarjeta"
import Titulo from "./components/Titulo"
import Formulario from "./components/modals/Formulario"
import Detalles from "./components/modals/Detalles"
import Editar from "./components/modals/Editar"
import { cargarData } from "./service/funciones"

function App() {

  const [showModal, setShowModal] = useState(false);
  const [showModalDetails, setShowModalDetails] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [inventario, setInventario] = useState([]);
  const [productoElegido, setProductoElegido] = useState({
    id: '',
    nombre: '',
    categoria: '',
    precio: '',
    moneda: '',
    descripcion: '',
    imagen: ''
  });
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(8);

  const maximo = Math.ceil(inventario.length / porPagina);

  useEffect(() => {
    setInventario(JSON.parse(cargarData()));
  }, [])

  return (
    <>
      <Nav showModal={showModal} setShowModal={setShowModal} />

      <main className="w-full min-h-[100vh] p-8 flex flex-col gap-24">

        <Formulario showModal={showModal} setShowModal={setShowModal} inventario={inventario} setInventario={setInventario} />
        <Detalles inventario={inventario} setInventario={setInventario} productoElegido={productoElegido} showModalDetails={showModalDetails} setShowModalDetails={setShowModalDetails} setShowModalEdit={setShowModalEdit} />
        <Editar setInventario={setInventario} inventario={inventario} productoElegido={productoElegido} showModalEdit={showModalEdit} setShowModalEdit={setShowModalEdit} />

        <div className="flex flex-col gap-6 md:flex-row">
          <Busqueda setInventario={setInventario} />
          <Filtrado setInventario={setInventario} />
        </div>

        <section className="flex flex-col h-full">
          <Titulo texto={"Productos"} />

          <div className="h-full w-full flex flex-col md:grid-cols-2 md:grid lg:grid-cols-4 py-8 px-4 gap-12">
            {inventario.slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina
            ).map((producto) => (
              <Tarjeta setProductoElegido={setProductoElegido} key={producto.id} producto={producto} showModalDetails={showModalDetails} setShowModalDetails={setShowModalDetails} />
            ))}
          </div>

          <div className="py-20 flex flex-col gap-12 justify-center items-center">
            <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />

            <button className="bg-secundario text-blanco font-Roboto text-xl rounded-xl p-4 hover:bg-primario hover:text-negro transition-all duration-300" onClick={() => setShowModal(true)}>Agregar Producto</button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
