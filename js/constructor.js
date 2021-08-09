class Motos {
    constructor(marca, precio, cilindrada, velocidad) {
        this.marca = marca.toUpperCase();
        this.precio = parseFloat(precio);
        this.cilindrada = cilindrada;
        this.velocidad = velocidad;
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender(){
        this.vendido = true;
    }
    
    detalle(){ 
        console.log(" Marca: "+ this.marca +" Precio: "+ this.precio +" CC: "+ this.cc +" Vel: " +this.vel);
    }

}

const productos = [];

const producto1 = new Motos("honda", 200, "1000cc", "300km/h")
productos.push (producto1);

const producto2 = new Motos("yamaha", 250, "1200cc", "400km/h")
productos.push (producto2);

const producto3 = new Motos("ktm", 210, "1100cc", "350km/h")
productos.push (producto3);

const producto4 = new Motos("benelli", 190, "700cc", "280km/h")
productos.push (producto4);

const producto5 = new Motos("ducatti", 170, "800cc", "290km/h")
productos.push (producto5);






//DOM

const titulo = document.getElementById(tittle);
tittle.innerHTML = "Click aqui!  Para elegir tu próxima moto."
tittle.classList.add("btn");





/* constructor

function elegitumoto(){

    alert("¿Querés comprar una moto?");

    let dosRuedas = prompt ("Ingresa tu respuesta");

    function quieroUna(){
        respuesta = dosRuedas ;
    }

    quieroUna (); 

    alert("Tu respuesta es"+ " " + respuesta + " " +"QUIERO nuevas aventuras");

if (respuesta == "si"){
    alert("A continuación te mostramos las motos más rapidas");
    moto1.detalle();
    moto2.detalle();
    moto3.detalle();
    moto4.detalle();
    moto5.detalle();


    let entrada = prompt("¿Que moto preferis?, moto1, moto2, moto3, moto4 o moto5.");


    switch (entrada) {
        case "moto1":
            alert("Elegiste bien, alcanza una velocidad de 300km/h.");
            break;
        case "moto2":
            alert("Elegiste bien, alcanza una velocidad de 400km/h.");
            break;
        case "moto3":
            alert("Elegiste bien, alcanza una velocidad de 350km/h.");
            break;
        case "moto4":
            alert("Elegiste bien, alcanza una velocidad de 280km/h.");
            break;
        case "moto5":
            alert("Elegiste bien, alcanza una velocidad de 290km/h.");
            break;
        default:
            alert("Es mucha velocidad para vos.")
            break;
    }

}else{
    alert ("No estas listo para nuevas aventuras");
    }


}*/