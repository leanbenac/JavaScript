// Declaraciòn de array vacío
const arrayA = [];
// Declaración de array con nùmeros
const arrayB = [1,2];
// Declaracion de array con strings
const arrayC = ["C1","C2","C3"];
// Declaración de array con booleanos
const arrayD = [true,false,true,false];
// Declaración de array mixto
const arrayE = [1,false,"C4"];




const  numeros = [1,2,3,4,5];
let resultado1  = numeros[0] + numeros[2]; // 1 + 3 = 4; 
let resultado2  = numeros[1] + numeros[4]; // 2 + 5 = 7;
let resultado3  = numeros[1] + numeros[1]; // 2 + 2 = 4;




const numeros = [1, 2, 3, 4, 5];
for (let index = 0; index < 5; index++) {
    alert(numeros[index]);
}




//toString
const miArray = ["marca", 3 ,"palabra"];
console.log( miArray.toString() );//imprime "marca,3,palabra"




//length 
const miArray = ["marca", 3, "palabra"];
miArray.push('otro elemento');
console.log(miArray.length);//El array ahora tiene 4 posiciones



//join
const otroArray = ["hola", 22, "mundo"];
console.log(otroArray.join("*")); //Imprime "hola*22*mundo"




//concat
const miArray    = ["ford", 45];
const otroArray  = ["hola", 22, "mundo"];
const nuevoArray = miArray.concat(otroArray);
// nuevoArray ahora es igual a[ford,45,hola,22,mundo]




//slice
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = nombres.slice(1, 3);//Nuevo array desde la posición 1 a 3.
// masculinos contiene ['Pedro','Miguel']




//Declaraciòn de array vacío y variable para determinar cantidad
const listaNombres = [];
let   cantidad     = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do{
    let entrada = prompt("Ingresar nombre");
    listaNombres.push(entrada.toUpperCase());
    console.log(listaNombres.length);
}while(listaNombres.length != cantidad)
//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA","EMA"]);
//Salida con salto de línea usando join
alert(nuevaLista.join("\n"));

