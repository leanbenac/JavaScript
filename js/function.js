/* desafio */

alert("Querés saber cual es tu salario al dia de hoy?");

let salario = prompt ("Ingresa tu salario en pesos argentinos");

function calcularaSalariousd(){
    resultado = salario / 175;
}

calcularaSalariousd();

alert("Tu salario en dólares es " + " " + resultado);

if (resultado < 500){
    alert("Estas ganando poco, buscate otro trabajo.");
}else{
    alert ("Tu salario no esta mal para vivir en Argentina, aunque no creo que te alcance para ir de fiesta.");
    }