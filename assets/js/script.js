// Definición variables //
const agregar = document.querySelector("#btnAgregar")
const listaTareas = document.querySelector("#tbody")
let total = document.querySelector("#total")
let realizadas = document.querySelector("#realizadas")
let arrayTareas = []
let id = 0


// Captura boton agregar tarea//
agregar.addEventListener('click', ()=> { 
    const tarea = document.querySelector("#input-tarea").value
    if(tarea != '') {
        id++
        const tareaObjeto = {id: id, nombreTarea: tarea, estado:false}
        arrayTareas.push(tareaObjeto)
        mostrarLista(arrayTareas)
        document.querySelector("#input-tarea").value = "";
    }else{ 
        alert("Debes ingresar una tarea")
    }
 })

// Mostrar lista tareas en html //
function mostrarLista(array) {
    total.innerHTML = array.length;
    realizadas.innerHTML = ""
    let html = ''
    for(let elemento of array) {
        html += `
        <tr>
            <td>${elemento.id}</td>
            <td>${elemento.nombreTarea}</td>
            <td>
                <input type="checkbox" onclick="cambiarEstado(${elemento.id})" ${elemento.estado ? 'checked' : ''} />
            </td>
            <td>
                <button id="eliminartarea" type="button" class="btn-eliminar" onclick="eliminarTarea(${elemento.id})">Eliminar</button>
            </td>
        </tr>`                                                                                                                                                                                              
        }

    // filtro y conteo tareas realizadas, checkedas con estado en true //
    const tareasRealizadas = array.filter((chk) => chk.estado === true);
    const contador = tareasRealizadas.length;  
    realizadas.innerHTML = contador;
    listaTareas.innerHTML = html;            
}
    
// función cambio de estado y conteo check //
function cambiarEstado(id) {
    arrayTareas.map((ele) => {
    if (ele.id == id) ele.estado = !ele.estado 
    })
    mostrarLista(arrayTareas)
    }

// función eliminar tarea completada //
function eliminarTarea(id) {
    arrayTareas = arrayTareas.filter((ele) => ele.id != id)
    mostrarLista(arrayTareas)
    }