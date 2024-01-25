function Titulo({ texto }) {

    return (
        <>
            <div className="h-[10vh] flex justify-center items-center border-b-2 border-secundario">
                <h1 className="text-center text-4xl font-Nunito text-primario font-bold">
                    {texto}
                </h1>
            </div>
        </>
    )
}

export default Titulo