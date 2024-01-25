import { IoSearchSharp } from "react-icons/io5";

function Filtrado() {

    return (
        <>
            <div className="w-full">
                <form className="flex flex-col gap-1 lg:w-3/4">
                    <label className="text-2xl font-bold font-Nunito text-secundario">Filtrar: </label>

                    <div className="flex gap-2">
                        <select className="rounded-xl border-2 border-tono-bajo px-2 py-1/2 text-xl text-opaco w-full" type="text">
                            <option value="Categoria Ascendente">Categoria Ascendente</option>
                            <option value="Categoria Descendente">Categoria Descendente</option>
                            <option value="Precio Ascendente">Precio Ascendente</option>
                            <option value="Precio Descendente">Precio Descendente</option>
                        </select>
                        <button type="submit" onClick={(e) => {
                            e.preventDefault()
                        }}>
                            <IoSearchSharp className="font-bold text-primario text-4xl"/>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Filtrado