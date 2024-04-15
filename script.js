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
    if (ListaProyectos == null || Verificacion(ListaProyectos, nombre) == false) {
        proyecto = new Proyecto(document.getElementById('nombre').value, document.getElementById('descripcion').value, [{}])
        ListaProyectos.push(proyecto);
    }
    else {
        document.getElementById('error').innerHTML = 'Error de creacion, nombre repetido'
        console.log('Error de creacion, nombre repetido')
    }
    console.log(ListaProyectos)
}
function AgregarTareaAProyecto(){
    tarea = new Tarea(document.getElementById('descripcion2').value, false, document.getElementById('fecha  '))
    const index = Busqueda(ListaProyectos, document.getElementById('nombreProyecto').value)
    ListaProyectos[index].pushearListaTareas(tarea)
    console.log(tarea)
    console.log(ListaProyectos)
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
    let retorno;
    for (let index = 0; index < ListaProyectos.length; index++) {
        const element = ListaProyectos[index];
        if (nombre == element.nombreProyecto) {
            retorno = index;
        }
    }
    return retorno;
}