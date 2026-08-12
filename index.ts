import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
    let systemName: string = "Sistema de Gestión de Inventario";
    let version: string = "1.0.0";
    let userName: string = "Felipe";

    console.log(`Bienvenido al ${systemName} (versión ${version})`);
    console.log(`Usuario: ${userName}`); 
    
    interface task {
    id: number;
    titulo: string;
    completo: boolean;
}

    let entregable7: string[]
    
const tareas: task[] = [];
    let idContador = 1;
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
const listTasks = (): void => {
    console.log('--- LISTA DE TAREAS ---')
    if (tareas.length === 0){
        console.log('La lista esta vacia')
    return;
    }
    for (let i = 0; i < tareas.length; i++) {
        const estado = tareas[i].completo ? 'completo' : 'pendiente'
        console.log(`[${tareas[i].id}] ${tareas[i].titulo} - ${estado}`)
    }
}
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
        console.log('2. Eliminar última tarea');
        console.log('3. Listar tareas');
        console.log('4. Salir');
        
        const opcion = await rl.question('Selecciona una opción (1-4): ');

    switch (opcion.trim()) {
        case '1':
            const nuevaTarea = await rl.question('Introduce el titulo de la tarea: ')
            if (nuevaTarea.trim() !== '') {
                const tituloIngresado = await rl.question('Introduce el titulo de la tarea: ')
                addTask(tituloIngresado.trim())
                tareas.push(nuevaTarea.trim())
                console.log(`Tarea "${nuevaTarea}" agregada con exito}`)
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
           listTasks()
        break;
        case '4':
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