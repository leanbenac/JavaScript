/* desafio */


alert("Querés saber cual es tu salario al dia de hoy?");

function preguntarSalario(){
    salario = parseInt (prompt ("Ingresa tu salario en pesos argentinos"));
}

function calcularaSalariousd(){
    resultado = salario / 175;
}

function mostrarResultado(){
    alert("Tu salario en dolares es" + " " + resultado)
}

function mostrarHipotesis(){
    if (resultado < 500){
        alert("Estas ganando poco, buscate otro trabajo.");
    }else if ((resultado >=500 ) && (resultado <= 1000)){
        alert ("Tu salario no esta mal para vivir en Argentina, aunque no creo que te alcance para ir de fiesta.");
    }else{
        alert("Tu salario se encuentra por encima del salario promedio, ya podes ahorrar y comprarte una moto.")
        }
}


preguntarSalario()
calcularaSalariousd()
mostrarResultado()
mostrarHipotesis()