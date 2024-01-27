export function cargarData() {
    const data = localStorage.getItem('inventario')

    if (data === null) {
        const array = []
        localStorage.setItem('inventario', JSON.stringify(array));
        const inventario = localStorage.getItem('inventario');

        return inventario
    } else {
        return data
    }
}

export function validacion(nombre, categoria, precio, moneda, descripcion, imagen) {
    if (nombre.trim().length == 0) return "Error"
    if (categoria.trim().length == 0) return "Error"
    if (precio.trim().length == 0) return "Error"
    if (moneda.trim().length == 0) return "Error"
    if (descripcion.trim().length == 0) return "Error"
    if (imagen.trim().length == 0) return "Error"

    return
}

export function enviarProducto(inventario) {
    localStorage.setItem('inventario', JSON.stringify(inventario));
}

export function editar(inventario, producto) {
    console.log(inventario)
    console.log(producto)

    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].id === producto.id) {
            inventario[i] = producto
            return inventario
        }
    }

    return 'error'
}