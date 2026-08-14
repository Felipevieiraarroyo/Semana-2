import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
/*let systemName: string = "Sistema de Gestión de Inventario";
    let version: string = "1.0.0";
    let userName: string = "Felipe";

    console.log(`Bienvenido al ${systemName} (versión ${version})`);
    console.log(`Usuario: ${userName}`); */

//============ INFORMACIONES BASICAS ==============
interface task {
  id: number;
  titulo: string;
  completo: boolean;
}
let tareas: task[] = [];
let idContador = 1;

function saveToDB(tarea: task): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`[DB] Tarea ${tarea.titulo} fue guardada`);
      resolve();
    }, 2000);
  });
}
//============ MARCADO COMPLETO ==============
const markCompleted = (id: number): void => {
  const taskFound = tareas.find((tareas) => tareas.id === id);
  if (taskFound) {
    taskFound.completo = true;
    console.log(`Tarea con id ${id} marcada como completada`);
  }
};
//============ FILTRO PARA PENDIENTES ==============
const filtroPendiente = (): task[] => {
  return tareas.filter((tareas) => !tareas.completo);
};
// ============ FILTRO PARA COMPLETADO ==============
const filtroCompleto = (): task[] => {
  return tareas.filter((tareas) => tareas.completo);
};
// ============ ADICIONAR TAREAS ==============
async function addTask(title: string): Promise<void> {
  try {
    if (!title || title.trim() === "") {
      throw new Error("El titulo de la tarea no puede estar vacio");
    }
    const nuevaTarea: task = {
      id: idContador++,
      titulo: title.trim(),
      completo: false,
    };
    console.log(`Guardando tarea... Por favor espere`);
    await saveToDB(nuevaTarea);

    tareas.push(nuevaTarea);
    console.log(`[APP] Tarea agregada`);
  } catch (error: any) {
    console.log(`[ERROR]: ${error.message}`);
  }
}
//============ ELIMINANDO TAREAS ==============
const listTasks = (tasksParaSalir: task[]): void => {
  console.log("--- LISTA DE TAREAS ---");
  if (tasksParaSalir.length === 0) {
    console.log("La lista esta vacia");
    return;
  }

  const formateandoTareas = tasksParaSalir.map(({ id, titulo, completo }) => {
    const estado = completo ? "[x]" : "[]";
    return `${estado} id: ${id} - ${titulo}`;
  });
  formateandoTareas.forEach((taskString) => console.log(taskString));
};

function eliminarTareaID(id: number): void {
  const longitudInicial = tareas.length;
  tareas = tareas.filter((tareas) => tareas.id !== id);
  if (tareas.length < longitudInicial) {
    console.log(`Tarea con id ${id} eliminada`);
  } else {
    console.log(`[!] No se encontro ninguna tarea con el id ${id}`);
  }
}
function listTasks1(): void {
  if (tareas.length === 0) {
    console.log(`No hay tareas pendientes`);
    return;
  }
}
// ============ MENU PRINCIPAL INTERACTIVO ==============
const iniciarMenu = async () => {
  let continuar: boolean = true;

  while (continuar) {
    console.log("---GESTOR DE TAREAS ---");
    console.log("1. Agregar tarea");
    console.log("2. Eliminar tarea por ID");
    console.log("3. Listar tareas");
    console.log("4. Marcar tarea como completada");
    console.log("5. Ver  tareas pendientes");
    console.log("6. Ver tareas completadas");
    console.log("7. Salir");

    const opcion = await rl.question("Selecciona una opción (1-7): ");
    //============ OPCIONES DE ELEMENTOS ==============
    switch (opcion.trim()) {
      case "1":
        const nuevaTarea = await rl.question(
          "Introduce el titulo de la tarea: ",
        );
        if (nuevaTarea.trim() !== "") {
          const tituloIngresado = await rl.question(
            "Introduce el titulo de la tarea: ",
          );
          addTask(tituloIngresado.trim());
        } else {
          console.log("El titulo no puede esta vacio");
        }
        break;
      case "2":
        if (tareas.length > 0) {
          const idInput = await rl.question(
            "Introduce el ID de la tarea a eliminar: ",
          );
          const idNum = parseInt(idInput);
          if (!isNaN(idNum)) {
            eliminarTareaID(idNum);
          } else {
            console.log("Por favor, ingresa un numero valido");
          }
        } else {
          console.log("No hay tarea para eliminar");
        }
        break;
      case "3":
        listTasks(tareas);
        break;
      case "4":
        if (tareas.length > 0) {
          const idInput = await rl.question(
            "Introduce el ID de la tarea a completar: ",
          );
          const idNum = parseInt(idInput);
          if (!isNaN(idNum)) {
            markCompleted(idNum);
          } else {
            console.log("Ingresa un numero valido");
          }
        }
        break;
      case "5":
        console.log(`Filtrando pendientes...`);
        const pendientes = filtroPendiente();
        listTasks(pendientes);
        break;

      case "6":
        console.log(`Filtrando completadas...`);
        const completadas = filtroCompleto();
        listTasks(completadas);
        break;

      case "7":
        console.log("Saliendo del programa...");
        continuar = false;
        break;
      default:
        console.log("Opcionno valida. Intenta de nuevo");
        break;
    }
  }
};
// ============ INICIANDO LA INTERACCION ==============
rl.close();
iniciarMenu();

// 🚫 No eliminar las líneas de abajo ⬇️
