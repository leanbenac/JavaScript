

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
    
    const moto1 = new Moto ("Honda", 2021, "1200.");
    const moto2 = new Moto ("Yamaha", 2021, "1100.");
    const moto3 = new Moto ("KTM", 2021, "900.");
    const moto4 = new Moto ("Ducatti", 2021, "1100");
    moto1.detalle();
    moto2.detalle();
    moto3.detalle();
    moto4.detalle();
}else{
    alert ("No estas listo para nuevas aventuras");
    }

function Moto(marca, modelo, cc) {
    this.marca = marca;
    this.modelo  = modelo;
    this.cc = cc;
    this.detalle = function(){ alert("Marca: "+ this.marca +" Modelo: "+this.modelo+" CC: "+ this.cc)}
}


let entrada = prompt("¿Que moto preferis? moto1, moto2, moto3, moto4");

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
        case "moto4":
            alert("Elegiste bien, alcanza una velocidad de 280km/h.");
            break;
        default:
            alert("Es mucha velocidad para vos.")
            break;
    }
}
}

/* desafio */

const arrayMotos =[
    { moto1: "honda", cc: 1000, vel: "300km/h", precio: 200 },
    { moto2: "yamaha", cc: 1200, vel: "400km/h", precio: 250},
    { moto3: "ktm", cc: 1100, vel: "350km/h", precio: 210},
    { moto4: "benelli", cc: 700, vel: "280km/h", precio: 170},
    { moto5: "zanella", cc: 800, vel: "290km/h", precio: 190}];

arrayMotos.sort((a,b) => {
    if (a.precio < b.precio){
    return -1;
    }
    if (a.precio > b.precio){
        return 1;
    }
    return 0;
});
