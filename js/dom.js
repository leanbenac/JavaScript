//DOM

const titulo = document.getElementById(tittle);
tittle.innerHTML = "Click aqui!  Para elegir tu próxima moto."
tittle.classList.add("btn");


/* simulacion */

function elegitumoto(){

    function Moto(marca, precio, cc, vel) {
        this.marca = marca;
        this.precio  = parseFloat (precio);
        this.cc = cc;
        this.vel = vel;
        this.detalle = function(){ alert(" Marca: "+ this.marca +" Precio: "+ this.precio +" CC: "+ this.cc +" Vel: " +this.vel)}
        
        
    }

    const moto1 = new Moto ("Honda", 200, "1200cc.","300km/h");
    const moto2 = new Moto ("Yamaha", 250, "1200cc.","400km/h");
    const moto3 = new Moto ("KTM", 210, "1100cc.","350km/h");
    const moto4 = new Moto ("Benelli", 190, "700","280km/h");
    const moto5 = new Moto ("Ducatti", 170, "800cc","290km/h");

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


}