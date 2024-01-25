import Busqueda from "./components/Busqueda"
import Filtrado from "./components/Filtrado"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Tarjeta from "./components/Tarjeta"
import Titulo from "./components/Titulo"

function App() {

  return (
    <>
      <Nav />

      <main className="w-full min-h-[100vh] p-8 flex flex-col gap-24">

        <div className="flex flex-col gap-6 md:flex-row">
          <Busqueda />
          <Filtrado />
        </div>

        <section className="flex flex-col h-full">
          <Titulo texto={"Productos"} />

          <div className="h-full w-full flex flex-col md:grid-cols-2 md:grid lg:grid-cols-4 py-8 px-4 gap-12">
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
