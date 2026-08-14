// =========== TOMAR MATE ============
/*
console.log('Poner el agua a hervir')

setTimeout(function(){
    console.log('El agua esta lista')
}, 3000)

console.log('Invitar a Mama')

setTimeout(function(){
console.log('Tomar el vaso')
console.log('Poner la hierba')
console.log('Lavar el termo')
}, 1000)
*/

interface estudiante{
    id:number,
    nombre:string,
    apPaterno:string,
    pais:string,
    edad:number
}

interface estudiante {
  id: number;
  nombre: string;
  apPaterno: string;
  pais: string;
  edad: number;
}
let estudiantesDB: estudiante[] = [
  {
    id: 1,
    nombre: "Adan",
    apPaterno: "Cotaña",
    pais: "Bolivia",
    edad: 24,
  },
  {
    id: 2,
    nombre: "Adrian",
    apPaterno: "Alva",
    pais: "Peru",
    edad: 20,
  },
  {
    id: 3,
    nombre: "Gi",
    apPaterno: "Montania",
    pais: "Argentina",
    edad: 22,
  },
  {
    id: 4,
    nombre: "Cristian",
    apPaterno: "Claudio",
    pais: "Dominicano",
    edad: 24,
  },
  {
    id: 5,
    nombre: "Carlos",
    apPaterno: "Ramos",
    pais: "Argentina",
    edad: 26,
  },
];

function traerEstudiantes(): Promise<estudiante[]> {
  return new Promise((resolve, reject) => {
    if (estudiantesDB.length === 0) {
      reject("no existe ninguna pelicula");
      let estudiantesEdad = 0
    } else {
      setTimeout(() => {
        resolve(estudiantesDB);
      }, 5000);
    }
  });
}

async function principal() {
    console.log(`Buscando a los estudiantes...`)
    const respuesta = await traerEstudiantes
    const mayores = estudiantesDB.filter((traerEstudiantes) => )
    }
    