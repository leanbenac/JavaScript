/* Selectores */
const listaProductos = document.querySelector('#lista-productos');
const tableCarrito = document.querySelector("#lista-carrito tbody");
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
let carrito = [];

/* Listeners */ // reemplazando por jQuery

// listaProductos.addEventListener('click', agregarProducto);
$("#lista-productos").click (agregarProducto);
// tableCarrito.addEventListener('click', borrarProducto);
$("#lista-carrito tbody").click (borrarProducto);
// btnVaciarCarrito.addEventListener('click', vaciarCarrito);
$("#vaciar-carrito").click (vaciarCarrito);

$( document ).ready(() => {

	if (JSON.parse(localStorage.getItem('carrito'))) {
		carrito = JSON.parse(localStorage.getItem('carrito'));
		insertarCarritoHTML();
	}
});


class Motos {
    constructor( marca, precio, cilindrada, velocidad ) {
        this.marca = marca.toUpperCase();
        this.precio = parseFloat(precio);
        this.cilindrada = cilindrada;
        this.velocidad = velocidad;
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
        console.log(sumaIva);
    }
    vender(){
        this.vendido = true;
    }
    detalle(){ 
        console.log(" Marca: "+ this.marca +" Precio: "+ this.precio +" CC: "+ this.cc +" Vel: " +this.vel);
    }

}

const productos = [];

const producto1 = new Motos("ducatti", 200, "1000cc", "300km/h")
productos.push (producto1);

const producto2 = new Motos("honda", 250, "1200cc", "400km/h")
productos.push (producto2);

const producto3 = new Motos("bmw", 210, "1100cc", "350km/h")
productos.push (producto3);

const producto4 = new Motos("ktm", 190, "700cc", "270km/h")
productos.push (producto4);

const producto5 = new Motos("benelli", 170, "800cc", "280km/h")
productos.push (producto5);

const producto6 = new Motos("yamaha", 170, "900cc", "290km/h")
productos.push (producto6);


function vaciarCarrito() {
	carrito = [];
	insertarCarritoHTML();
}


function borrarProducto(e) {
	e.preventDefault();

	if (e.target.classList.contains("borrar-producto")) {
		/* Opcion 1 */
		const productoSeleccionado = e.target.parentElement.parentElement;
		const productoId = e.target.getAttribute('data-id');

		/* Borrar del HTML */
		productoSeleccionado.remove();

		/* Borrar de la variable carrito */
		carrito = carrito.filter(producto => producto.id !== productoId);

		/* Actualizar el storage */
		guardarCarritoStorage();

	}
}

function agregarProducto(e) {
	e.preventDefault();

	if (e.target.classList.contains("agregar-carrito")) {
		const cardProducto = e.target.parentElement.parentElement;

		obtenerDatosProducto(cardProducto);
	}
}

function obtenerDatosProducto(cardProducto) {

	const productoAgregado = {
		imagen: cardProducto.querySelector('img').src,
		nombre: cardProducto.querySelector('h4').textContent,
		precio: cardProducto.querySelector('.precio span').textContent,
		cantidad: 1,
		id: cardProducto.querySelector('a').getAttribute('data-id')
	};

	const existe = carrito.some(producto => producto.id === productoAgregado.id);

	if (existe) {
		const productos = carrito.map(producto => {
			if (producto.id === productoAgregado.id) {
				producto.cantidad++;
				producto.precio = `$${Number(productoAgregado.precio.slice(1)) * producto.cantidad}`
				// return producto;
			} else {
				// return producto;
			}
			return producto;
		});
		/* Spread operator */
		carrito = [...productos];
	} else {
		// carrito.push(productoAgregado);
		carrito = [...carrito, productoAgregado];
	}


	insertarCarritoHTML();
}

function insertarCarritoHTML() {

	borrarCarritoHTML();

	carrito.forEach(producto => {
		/* Destructuring de objetos */
		const { imagen, nombre, precio, cantidad, id } = producto;

		const row = document.createElement('tr');
		row.innerHTML = `
		<td>
			<img src="${imagen}" width='100%'>
		</td>
		<td>${nombre}</td>
		<td>${precio}</td>
		<td>${cantidad}</td>
		<td>
			<a href="#" class="borrar-producto" data-id="${id}">X</a>
		</td>
		`
		tableCarrito.appendChild(row);
	});
	guardarCarritoStorage();
}

function borrarCarritoHTML() {
	/* Forma "lenta" */
	tableCarrito.innerHTML = '';
}

function guardarCarritoStorage() {
	localStorage.setItem('carrito', JSON.stringify(carrito));
}

//DOM

const titulo = document.getElementById(tittle);
tittle.innerHTML = "Motorcycle Shop";

    /* EVENTOS >>> reemplazando >>>> jQuery eventos */

// ducatti
// let ducatti = document.getElementById("ducatti");

// let ducattiCaracteristicas = document.getElementById("ducattiCaracteristicas");

// let caracteristicasMoto1 = document.getElementById("btnMoto1");

// caracteristicasMoto1.addEventListener("click", mostrarM1);

$("#btnMoto1").click (mostrarM1);

function mostrarM1(){
    ducatti.style.display="none";
    ducattiCaracteristicas.style.display="block";
}

// honda

// let honda = document.getElementById("honda");

// let hondaCaracteristicas = document.getElementById("hondaCaracteristicas");

// let caracteristicasMoto2 = document.getElementById("btnMoto2");

// caracteristicasMoto2.addEventListener("click", mostrarM2);

$("#btnMoto2").click (mostrarM2); 

function mostrarM2(){
    honda.style.display="none";
    hondaCaracteristicas.style.display="block";
}

// bmw
// let bmw = document.getElementById("bmw");

// let bmwCaracteristicas = document.getElementById("bmwCaracteristicas");

// let caracteristicasMoto3 = document.getElementById("btnMoto3");

// caracteristicasMoto3.addEventListener("click", mostrarM3);

$("#btnMoto3").click (mostrarM3);

function mostrarM3(){
    bmw.style.display="none";
    bmwCaracteristicas.style.display="block";
}

// ktm 
// let ktm = document.getElementById("ktm");

// let ktmCaracteristicas = document.getElementById("ktmCaracteristicas");

// let caracteristicasMoto4 = document.getElementById("btnMoto4");

// caracteristicasMoto4.addEventListener("click", mostrarM4);

$("#btnMoto4").click (mostrarM4);

function mostrarM4(){
    ktm.style.display="none";
    ktmCaracteristicas.style.display="block";
}

// benelli
// let benelli = document.getElementById("benelli");

// let benelliCaracteristicas = document.getElementById("benelliCaracteristicas");

// let caracteristicasMoto5 = document.getElementById("btnMoto5");

// caracteristicasMoto5.addEventListener("click", mostrarM5);

$("#btnMoto5").click (mostrarM5);

function mostrarM5(){
    benelli.style.display="none";
    benelliCaracteristicas.style.display="block";
}

// yamaha
// let yamaha = document.getElementById("yamaha");

// let yamahaCaracteristicas = document.getElementById("yamahaCaracteristicas");

// let caracteristicasMoto6 = document.getElementById("btnMoto6");

// caracteristicasMoto6.addEventListener("click", mostrarM6);

$("#btnMoto6").click (mostrarM6);

function mostrarM6(){
    yamaha.style.display="none";
    yamahaCaracteristicas.style.display="block";
}

// /*  EVENTO - concoce mis marcas  */
let marcas = document.getElementById("marcas");

let btnMarcas = document.getElementById("btnMarcas");

for (const Motos of productos){
    let li = document.createElement("li");
    li.innerHTML = Motos.marca;
    marcas.appendChild(li);
}

btnMarcas.addEventListener("click", mostrarMarcas);

function mostrarMarcas(){   
    marcas.style.display="block";
}

$('#tittle').append("<div><h3> Sport Style<h3><div>");

