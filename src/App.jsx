import { useState } from "react"
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

function App() {

  const [showModal, setShowModal] = useState(false);
  const [showModalDetails, setShowModalDetails] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);


  return (
    <>
      <Nav showModal={showModal} setShowModal={setShowModal} />

      <main className="w-full min-h-[100vh] p-8 flex flex-col gap-24">

        <Formulario showModal={showModal} setShowModal={setShowModal} />
        <Detalles showModalDetails={showModalDetails} setShowModalDetails={setShowModalDetails} setShowModalEdit={setShowModalEdit} />
        <Editar showModalEdit={showModalEdit} setShowModalEdit={setShowModalEdit} />

        <div className="flex flex-col gap-6 md:flex-row">
          <Busqueda />
          <Filtrado />
        </div>

        <section className="flex flex-col h-full">
          <Titulo texto={"Productos"} />

          <div className="h-full w-full flex flex-col md:grid-cols-2 md:grid lg:grid-cols-4 py-8 px-4 gap-12">
            <Tarjeta showModalDetails={showModalDetails} setShowModalDetails={setShowModalDetails} />
            <Tarjeta showModalDetails={showModalDetails} setShowModalDetails={setShowModalDetails} />
            <Tarjeta showModalDetails={showModalDetails} setShowModalDetails={setShowModalDetails} />
            <Tarjeta showModalDetails={showModalDetails} setShowModalDetails={setShowModalDetails} />
            <Tarjeta showModalDetails={showModalDetails} setShowModalDetails={setShowModalDetails} />
            <Tarjeta showModalDetails={showModalDetails} setShowModalDetails={setShowModalDetails} />
            <Tarjeta showModalDetails={showModalDetails} setShowModalDetails={setShowModalDetails} />
            <Tarjeta showModalDetails={showModalDetails} setShowModalDetails={setShowModalDetails} />
          </div>

          <div className="py-20 flex flex-col gap-12 justify-center items-center">
            <Paginacion />

            <button className="bg-secundario text-blanco font-Roboto text-xl rounded-xl p-4 hover:bg-primario hover:text-negro transition-all duration-300" onClick={() => setShowModal(true)}>Agregar Producto</button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
