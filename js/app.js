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

// Constructor

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

// const productos = [];

// const producto1 = new Motos("ducatti", 200000, "1000cc", "300km/h")
// productos.push (producto1);

// const producto2 = new Motos("honda", 250000, "1200cc", "400km/h")
// productos.push (producto2);

// const producto3 = new Motos("bmw", 210000, "1100cc", "350km/h")
// productos.push (producto3);

// const producto4 = new Motos("ktm", 180000, "800cc", "280km/h")
// productos.push (producto4);

// const producto5 = new Motos("benelli", 170000, "700cc", "270km/h")
// productos.push (producto5);

// const producto6 = new Motos("yamaha", 190000, "900cc", "290km/h")
// productos.push (producto6);


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

//ducatti
$("#btnMoto1").click (mostrarM1);

function mostrarM1(){

	$("#ducatti").hide();
    $("#ducattiCaracteristicas").fadeIn();
}

// honda
$("#btnMoto2").click (mostrarM2); 

function mostrarM2(){

	$("#honda").hide();
    $("#hondaCaracteristicas").fadeIn();
}

// bmw
$("#btnMoto3").click (mostrarM3);

function mostrarM3(){

	$("#bmw").hide();
    $("#bmwCaracteristicas").fadeIn();
}

// ktm 
$("#btnMoto4").click (mostrarM4);

function mostrarM4(){

	$("#ktm").hide();
    $("#ktmCaracteristicas").fadeIn();
}

// benelli
$("#btnMoto5").click (mostrarM5);

function mostrarM5(){

	$("#benelli").hide();
    $("#benelliCaracteristicas").fadeIn();
}

// yamaha
$("#btnMoto6").click (mostrarM6);

function mostrarM6(){

	$("#yamaha").hide();
    $("#yamahaCaracteristicas").fadeIn();
}

$('#tittle').append("<div><h3> Sport Style<h3><div>");

/* Jquery eventos - caracteristicas */

//ducatti
$("#btnCerrar1").click (ocultarCerrar1);

function ocultarCerrar1(){

$("#ducattiCaracteristicas").fadeOut();

$("#ducatti").fadeIn();
}

//honda
$("#btnCerrar2").click (ocultarCerrar2);

function ocultarCerrar2(){

$("#hondaCaracteristicas").fadeOut();

$("#honda").fadeIn();
}

//bmw
$("#btnCerrar3").click (ocultarCerrar3);

function ocultarCerrar3(){
$("#bmwCaracteristicas").fadeOut();
$("#bmw").fadeIn();
}

//ktm
$("#btnCerrar4").click (ocultarCerrar4);

function ocultarCerrar4(){
$("#ktmCaracteristicas").fadeOut();
$("#ktm").fadeIn();
}

//benelli
$("#btnCerrar5").click (ocultarCerrar5);

function ocultarCerrar5(){
$("#benelliCaracteristicas").fadeOut();
$("#benelli").fadeIn();
}

//yamaha
$("#btnCerrar6").click (ocultarCerrar6);

function ocultarCerrar6(){
$("#yamahaCaracteristicas").fadeOut();
$("#yamaha").fadeIn();
}

/* AJAX con JSON */
// $('#btnJson').click (traerDatos);

// function traerDatos(){

// 	// console.log('dentro de la función');

// 	const xhttp = new XMLHttpRequest();

// 	xhttp.open('GET','catalogo.json', true);

// 	xhttp.send();

// 	xhttp.onreadystatechange = function(){

// 		if(this.readyState == 4 && this.status == 200){

// 			console.log(this.responseText);
// 			let datos = JSON.parse(this.responseText);
// 			// console.log(datos);
// 			let res = document.querySelector("#res");
// 			res.innerHTML = '';

// 			for(let item of datos){
// 			// console.log(item.marca);
// 			res.innerHTML +=`
// 			<tr>
// 			<th>${item.marca}</th>
// 			<th>${item.cilindrada}</th>
// 			<th>${item.velocidad}</th>
// 			</tr>
// 			`
// 			}
// 		}
// 	}
// }



// $("#btnJson").click (mostrarJson);

// function mostrarJson(){

// 	$("#ajax").fadeIn();
// }
