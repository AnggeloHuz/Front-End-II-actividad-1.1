import { IoCaretBackOutline, IoCaretForwardOutline } from "react-icons/io5";

function Paginacion() {

    return (
        <>
            <div className="flex gap-2 w-full justify-center">
                <button className="bg-opaco text-blanco text-xl font-Roboto rounded-md p-2 hover:bg-negro transition-all duration-300"><IoCaretBackOutline /></button>
                <button className="bg-opaco text-blanco text-xl font-Roboto rounded-md p-2 hover:bg-negro transition-all duration-300">1</button>
                <button className="bg-opaco text-blanco text-xl font-Roboto rounded-md p-2 hover:bg-negro transition-all duration-300">2</button>
                <button className="bg-opaco text-blanco text-xl font-Roboto rounded-md p-2 hover:bg-negro transition-all duration-300">3</button>
                <button className="bg-opaco text-blanco text-xl font-Roboto rounded-md p-2 hover:bg-negro transition-all duration-300"><IoCaretForwardOutline /></button>
            </div>
        </>
    )
}

export default Paginacion