import Busqueda from "./components/Busqueda"
import Filtrado from "./components/Filtrado"
import Footer from "./components/Footer"
import Nav from "./components/Nav"

function App() {

  return (
    <>
      <Nav />
      <main className="w-full h-[100vh] p-8">
        <div className="flex flex-col gap-6 md:flex-row">
          <Busqueda />
          <Filtrado />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
