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
    
    let entregable7: string[]
    
    const tareas: string[] = [];
    let continuar: boolean = true;

    while (continuar) {
        console.log('\n---GESTOR DE TAREAS ---');
        console.log('1. Agregar tarea');
        console.log('2. Eliminar última tarea');
        console.log('3. Listar tareas');
        console.log('4. Salir');
        
        const opcion = await rl.question('Selecciona una opción (1-4): ');

    switch (opcion.trim()) {
        case '1':
            const nuevaTarea = await rl.question('Introduce el titulo de la tarea: ')
            if (nuevaTarea.trim() !== '') {
                tareas.push(nuevaTarea.trim())
                console.log(`Tarea "${nuevaTarea}" agregada con exito}`)
            }else{
                console.log("El titulo no puede esta vacio")
            }
        break;
        case '2':
            if (tareas.length > 0) {
                const tareaEliminada = tareas.pop()
                console.log(`Tarea eliminada`)
            }else {
                console.log('No hay tarea para eliminar')
            }
        break;
        case '3':
            console.log('\n--- LISTA DE TAREAS ---')
            if (tareas.length === 0) {
                console.log('La lista esta vacia')
            }else {
                for (let i = 0; i < tareas.length; i++){
                    console.log(`${i + 1}. ${tareas[i]}`)
                }
            }
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
    

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();