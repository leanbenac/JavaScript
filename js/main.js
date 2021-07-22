/* DESAFIO */

let entrada = prompt("Ingresar genero musical");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "TECH HOUSE" ){
    switch (entrada) {
        case "TECHNO":
            alert("AGUANTE EL TECHNO");
            break;
        case "DARK TECHNO":
            alert("AGUANTE EL DARK TECHNO");
            break;
        case "HYPNOTIC TECHNO":
            alert("AGUANTE EL HYPNOTIC TECHNO");
            break;
        case "HOUSE":
            alert("AGUANTE EL HOUSE");
            break;
        case "DEEP HOUSE":
            alert("AGUANTE EL DEEP HOUSE");
            break;
        default:
            alert("ESO NO ES UN GENERO MUSICAL")
            break;
    }
}



/* PRACTICAS * /

/* Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero +" X "+ i +" = "+ resultado);
}*/



/*for (let i = 1; i <= 20; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}*/




/*for (let i = 1; i <= 10; i++) {
    //Si la variable i es igual 5 interrumpo el for. 
    if(i == 5){
        break;
    }
    alert(i);
}*/



/*for (let i = 1; i <= 10; i++) {
    //Si la variable i es 5, no se interpreta la repetición
    if(i == 5){
        continue;
    }
    alert(i);
}*/



/*let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}*/



/*let numero = 0;
do{
   //Repetimos con do...while mientras el usuario ingresa un n°
    numero = prompt("Ingresar Número");
    console.log(numero);
//Si el parseo no resulta un número se interrumpe el bucle.   
}while(parseInt(numero));*/








