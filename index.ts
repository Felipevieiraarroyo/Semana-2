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
    

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();