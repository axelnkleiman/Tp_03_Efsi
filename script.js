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

let ListaProyectos;
let Proyecto;

function AgregarProyecto(){
    if (ListaProyectos.indexOf(Verificacion(document.getElementById('nombre').value)) == null) {
        proyecto = new Proyecto(document.getElementById('nombre').value, document.getElementById('descripcion').value, null)
        ListaProyectos.push(proyecto);
    }
    else {
        document.getElementById('error').innerHTML = 'Error de creacion, nombre repetido'
    }
}
function AgregarTareaAProyecto(){
    tarea = new Tarea(document.getElementById('descripcion2').value, false, document.getElementById('fechaVencimiento'))
    ListaProyectos.indexOf(Verificacion(document.getElementById('nombre').value))
}
function Verificacion(value, index, array, nombre){
    return value.nombreProyecto == nombre
}