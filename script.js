class Tarea {
    constructor(descripcion, estado, fechaVencimiento){
        this.descripcion = descripcion
        this.estado = estado
        this.fechaVencimiento = fechaVencimiento
    }
}

class Proyecto {
    constructor(nombre, descripcion, listaTareas){
        this.nombreProyecto = nombre
        this.descripcionProyecto = descripcion
        this.listaTareas = listaTareas
    }
    getListaTareas(){   
        return this.listaTareas;
    }
    pushearListaTareas(Tarea){
        this.listaTareas.push(Tarea);
    }
}

let ListaProyectos = [];
let proyecto;

function AgregarProyecto(){
    if (ListaProyectos == null || Verificacion(ListaProyectos, document.getElementById('nombre').value) == false) {
        proyecto = new Proyecto(document.getElementById('nombre').value, document.getElementById('descripcion').value, [])
        ListaProyectos.push(proyecto);
    }
    else {
        document.getElementById('error').innerHTML = 'Error de creacion, nombre repetido'
        console.log('Error de creacion, nombre repetido')
    }
    console.log(ListaProyectos)
}
function AgregarTareaAProyecto(){
    tarea = new Tarea(document.getElementById('descripcion2').value, false, document.getElementById('fecha').value)
    const index = Busqueda(ListaProyectos, document.getElementById('nombreProyecto').value)
    if (index != null && document.getElementById('fecha').value != "") {
        ListaProyectos[index].pushearListaTareas(tarea)
    }
    else if(document.getElementById('fecha').value == ""){
        document.getElementById('error').innerHTML = 'Error de creacion, fecha nula'
        console.log('Error de creacion, fecha nula')
    }
    else {
        document.getElementById('error').innerHTML = 'Error de creacion, nombre no encontrado'
        console.log('Error de creacion, nombre no encontrado')
    }
    console.log(tarea)
    console.log(ListaProyectos)
}
function BuscarTareas(){
    document.getElementById('error').innerHTML = null
    const index = Busqueda(ListaProyectos, document.getElementById('nombreProyecto2').value)
    document.getElementById('resultados').innerHTML = IterarTareas(ListaProyectos[index])
}
function IterarTareas(item){
    let retorno = '';
    for (let index = 0; index < item.listaTareas.length; index++) {
        const element = item.listaTareas[index]
        if (element.estado) {
            retorno += '<p>' + element.descripcion + '</p> <br> ' + '<p> Completada </p> <br>' + '<p> Vencimiento: ' + element.fechaVencimiento + '</p> <br> <br>'
        }
        else {
            retorno += '<p>' + element.descripcion + '</p> <br> ' + '<p> No completada </p> <br>' + '<p> Vencimiento: ' + element.fechaVencimiento + '</p> <br> <br>'
        }
    }
    return retorno;
}
function Verificacion(ListaProyectos, nombre){
    let retorno = false;
    for (let index = 0; index < ListaProyectos.length; index++) {
        const element = ListaProyectos[index];
        if (nombre == element.nombreProyecto) {
            retorno = true;
        }
    }
    return retorno;
}
function Busqueda(ListaProyectos, nombre){
    let retorno = null;
    for (let index = 0; index < ListaProyectos.length; index++) {
        const element = ListaProyectos[index];
        if (nombre == element.nombreProyecto) {
            retorno = index;
        }
    }
    return retorno;
}