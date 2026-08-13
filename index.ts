import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
    /*let systemName: string = "Sistema de Gestión de Inventario";
    let version: string = "1.0.0";
    let userName: string = "Felipe";

    console.log(`Bienvenido al ${systemName} (versión ${version})`);
    console.log(`Usuario: ${userName}`); */
    
    interface task {
    id: number;
    titulo: string;
    completo: boolean;
}

    const tareas: task[] = [];
    let idContador = 1;

    let tasks: task[] = [];

const markCompleted = (id:number): void => {
    const taskFound = tasks.find(task => task.id === id)
    if (taskFound){
        taskFound.completo = true
        console.log(`Tarea con id ${id} marcada como completada`)
    }
}

const filtroPendiente = (): task[] => {
    return tasks.filter(task => !task.completo)
}

const filtroCompleto = (): task[] => {
    return tasks.filter(tasks => tasks.completo)
}

const addTask = (title: string): void => {
        const nuevaTarea: task = {
            id: idContador,
            titulo: 'titulo',
            completo: false
        };
        tareas.push(nuevaTarea);
        idContador++;
        console.log(`Tarea ${title}`)
    }
const listTasks = (tasksParaSalir: task[]): void => {
    console.log('--- LISTA DE TAREAS ---')
    if (tasksParaSalir.length === 0){
        console.log('La lista esta vacia')
    return;
    }
    
const formateandoTareas = tasksParaSalir.map(({ id, titulo, completo }) => {
    const estado = completo ? '[x]' : '[]'
    return `${estado} id: ${id} - ${titulo}`
})
formateandoTareas.forEach(taskString => console.log(taskString))
}

const eliminarTarea = (idEliminado: number): void => {
    const indice = tareas.findIndex(t => t.id === idEliminado)
    
    if(indice !== -1){
        tareas.splice(indice, 1)
        console.log(`Tarea eliminada: id ${idEliminado}`)
    }else  {
        console.log(`No se encontro ningunatarea con el id ${idEliminado}`)
    }
}
    
    /*for (let i = 0; i < tareas.length; i++) {
        const estado = tareas[i].completo ? 'completo' : 'pendiente'
        console.log(`[${tareas[i].id}] ${tareas[i].titulo} - ${estado}`)
    }*/

const removeTasks = (idElimimado: number): void => {
    const indice = tareas.findIndex(t => t.id === idElimimado)

    if (indice !== -1){
        const tareaEliminada = tareas.splice(indice, 1)[0]
        console.log(`Tarea eliminada: ${idElimimado}`)
    }else{
        console.log(`No se encontro ninguna tarea con el ID ${idElimimado}`)
    }
}
    const iniciarMenu = async () => {
    let continuar: boolean = true;

    while (continuar) {
        console.log('---GESTOR DE TAREAS ---');
        console.log('1. Agregar tarea');
        console.log('2. Eliminar tarea por ID');
        console.log('3. Listar tareas');
        console.log('4. Marcar tarea como completada');
        console.log('5. Ver  tareas pendientes');
        console.log('6. Ver tareas completadas');
        console.log('7. Salir');
        
        const opcion = await rl.question('Selecciona una opción (1-7): ');

    switch (opcion.trim()) {
        case '1':
            const nuevaTarea = await rl.question('Introduce el titulo de la tarea: ')
            if (nuevaTarea.trim() !== '') {
                const tituloIngresado = await rl.question('Introduce el titulo de la tarea: ')
                addTask(tituloIngresado.trim())
            }else{
                console.log("El titulo no puede esta vacio")
            }
        break;
        case '2':
            if (tareas.length > 0) {
                const idInput = await rl.question('Introduce el ID de la tarea a eliminar: ');
                const idNum = parseInt(idInput);
                if(!isNaN(idNum)){
                    removeTasks(idNum)
                }else {
                    console.log('Por favor, ingresa un numero valido')
                }
            }else {
                console.log('No hay tarea para eliminar')
            }
        break;
        case '3':
           listTasks(tareas)
        break;
        case '4': 
        
        if(tareas.length > 0) {
            const idInput = await rl.question('Introduce el ID de la tarea a completar: ')
            const idNum = parseInt(idInput);
            if (!isNaN(idNum)){
                markCompleted(idNum)
            }else {
                console.log('Ingresa un numero valido')
            }
        }
        break;
        case '5': 

        console.log(`Filtrando pendientes...`)
        const pendientes = filtroPendiente()
        listTasks(pendientes)
        break;

        case '6': 

        console.log(`Filtrando completadas...`)
        const completadas = filtroCompleto()
        listTasks(completadas)
        break;
         
        case '7': 
            console.log('Saliendo del programa...')
            continuar = false;
        break;
        default:
        console.log('Opcionno valida. Intenta de nuevo')
        break;
    };

    }
};
// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();