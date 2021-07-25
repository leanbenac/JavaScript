/* desafio */

function elegitumoto(){
    alert("¿Querés comprar una moto?");

let dosRuedas = prompt ("Ingresa tu respuesta");

function quieroUna(){
    respuesta = dosRuedas ;
}

quieroUna (); 

alert("Tu respuesta es"+ " " + respuesta + " " +"QUIERO nuevas aventuras");

if (respuesta = "si"){
    alert("A continuación te mostrarmos las más vendidas");
    
    const moto1 = new Moto ("Honda", 2021, "1200cc.");
    const moto2 = new Moto ("Yamaha", 2021, "1100cc.");
    const moto3 = new Moto ("KTM", 2021, "900cc.");
    moto1.detalle();
    moto2.detalle();
    moto3.detalle();
}else{
    alert ("No estas listo para nuevas aventuras");
    }

function Moto(marca, modelo, cc) {
    this.marca = marca;
    this.modelo  = modelo;
    this.cc = cc;
    this.detalle = function(){ alert("Marca: "+ this.marca +" Modelo: "+this.modelo+" CC: "+ this.cc)}
}


let entrada = prompt("¿Que moto preferis?, moto1, moto2 o moto3.");

while(entrada != "ninguna" ){
    switch (entrada) {
        case "moto1":
            alert("Elegiste bien, alcanza una velocidad de 350km/h.");
            break;
        case "moto2":
            alert("Elegiste bien, alcanza una velocidad de 300km/h.");
            break;
        case "moto3":
            alert("Elegiste bien, alcanza una velocidad de 280km/h.");
            break;
        default:
            alert("Es mucha velocidad para vos.")
            break;
    }
}
}