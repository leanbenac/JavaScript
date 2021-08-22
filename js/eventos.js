// //j Query

// $('header').append("<h2>¿ Cual es tu preferida?</h2>");

// $('#tittle').prepend("<div><h3>Este es el mejor viaje de tu vida <h3><div>");


/* Constructor */
// class Motos {
//     constructor( marca,precio,cilindrada,velocidad ) {
//         this.marca = marca.toUpperCase();
//         this.precio = parseFloat(precio);
//         this.cilindrada = cilindrada;
//         this.velocidad = velocidad;
//         this.vendido = false;
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//         console.log(sumaIva);
//     }
//     vender(){
//         this.vendido = true;
//     }
//     detalle(){ 
//         console.log(" Marca: "+ this.marca +" Precio: "+ this.precio +" CC: "+ this.cc +" Vel: " +this.vel);
//     }

// }

/* local Storage - JSON */

// Array de objetos
const productos =  [{ id:1, producto: "Ducatti", precio: 200,cilindrada: "1000cc", velocidad: "300km/h"},
                    { id:2, producto: "Honda", precio: 250,cilindrada: "1200cc", velocidad: "400km/h"},
                    { id:3, producto: "BMW", precio: 210,cilindrada: "1100cc", velocidad: "350km/h"},
                    { id:4, producto: "KTM", precio: 190,cilindrada: "700cc", velocidad: "270km/h"},
                    { id:5, producto: "Benelli", precio: 200,cilindrada: "800cc", velocidad: "280km/h"},
                    { id:6, producto: "Yamaha", precio: 205,cilindrada: "900cc", velocidad: "290km/h"}];

// Array completo almacenado
guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};

for(const producto of productos){
    guardarLocal(producto.id, JSON.stringify(producto))
}
    guardarLocal("listaMotos",JSON.stringify(productos));

productos.sort((a,b) => {
    if (a.precio < b.precio){
    return -1;
    }
    if (a.precio > b.precio){
        return 1;
    }   
    return 0;
});


//obtener array almacenado

// const almacenados = JSON.parse(localStorage.getItem("listaMotos"));


// for (const objeto of almacenados)
//     productos.push(new Motos(objeto));

//     for(const producto of productos)
//     producto.sumaIva();



// const productos = [];

// const producto1 = new Motos("ducatti", 200, "1000cc", "300km/h")
// productos.push (producto1);

// const producto2 = new Motos("honda", 250, "1200cc", "400km/h")
// productos.push (producto2);

// const producto3 = new Motos("bmw", 210, "1100cc", "350km/h")
// productos.push (producto3);

// const producto4 = new Motos("ktm", 190, "700cc", "270km/h")
// productos.push (producto4);

// const producto5 = new Motos("benelli", 170, "800cc", "280km/h")
// productos.push (producto5);

// const producto6 = new Motos("yamaha", 170, "900cc", "290km/h")
// productos.push (producto6);



// /* Recorriendo Array de objetos para modificar HTML */

// let marcas = document.getElementById("marcas");

// let btnMarcas = document.getElementById("btnMarcas");

// for (const Motos of productos){
//     let li = document.createElement("li");
//     li.innerHTML = Motos.marca;
//     marcas.appendChild(li);
// }

// btnMarcas.addEventListener("click", mostrarMarcas);

// function mostrarMarcas(){   
//     marcas.style.display="block";
// }

/* local storage */

const enJSON = JSON.stringify(productos);

//localStorage.setItem(Motos, enJSON)


/* DOM */

// const titulo = document.getElementById(tittle);
// tittle.innerHTML = "Motorcycle Shop";

//CreatElement

// const frase = document.getElementById("frase");

// const parrafo = document.createElement("p");

// parrafo.innerHTML = "Subite a la moto de tus sueños"

// frase.appendChild(parrafo);

// /*-------------- EVENTOS ----------------*/

// /* ducatti*/
// let ducatti = document.getElementById("ducatti");

// let ducattiCaracteristicas = document.getElementById("ducattiCaracteristicas");

// let caracteristicasMoto1 = document.getElementById("btnMoto1");

// caracteristicasMoto1.addEventListener("click", mostrarM1);

// function mostrarM1(){
//     ducatti.style.display="none";
//     ducattiCaracteristicas.style.display="block";
// }

// /* honda */
// let honda = document.getElementById("honda");

// let hondaCaracteristicas = document.getElementById("hondaCaracteristicas");

// let caracteristicasMoto2 = document.getElementById("btnMoto2");

// caracteristicasMoto2.addEventListener("click", mostrarM2);

// function mostrarM2(){
//     honda.style.display="none";
//     hondaCaracteristicas.style.display="block";
// }

// /* bmw */
// let bmw = document.getElementById("bmw");

// let bmwCaracteristicas = document.getElementById("bmwCaracteristicas");

// let caracteristicasMoto3 = document.getElementById("btnMoto3");

// caracteristicasMoto3.addEventListener("click", mostrarM3);

// function mostrarM3(){
//     bmw.style.display="none";
//     bmwCaracteristicas.style.display="block";
// }

// /* ktm */
// let ktm = document.getElementById("ktm");

// let ktmCaracteristicas = document.getElementById("ktmCaracteristicas");

// let caracteristicasMoto4 = document.getElementById("btnMoto4");

// caracteristicasMoto4.addEventListener("click", mostrarM4);

// function mostrarM4(){
//     ktm.style.display="none";
//     ktmCaracteristicas.style.display="block";
// }

// /* benelli */
// let benelli = document.getElementById("benelli");

// let benelliCaracteristicas = document.getElementById("benelliCaracteristicas");

// let caracteristicasMoto5 = document.getElementById("btnMoto5");

// caracteristicasMoto5.addEventListener("click", mostrarM5);

// function mostrarM5(){
//     benelli.style.display="none";
//     benelliCaracteristicas.style.display="block";
// }

// /* yamaha */
// let yamaha = document.getElementById("yamaha");

// let yamahaCaracteristicas = document.getElementById("yamahaCaracteristicas");

// let caracteristicasMoto6 = document.getElementById("btnMoto6");

// caracteristicasMoto6.addEventListener("click", mostrarM6);

// function mostrarM6(){
//     yamaha.style.display="none";
//     yamahaCaracteristicas.style.display="block";
// }