/* Selectores */
const listaProductos = document.querySelector('#lista-productos');
const tableCarrito = document.querySelector("#lista-carrito tbody");
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
let carrito = [];

/* Listeners */ 
$("#lista-productos").click (agregarProducto);
$("#lista-carrito tbody").click (borrarProducto);
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
        console.log(this.sumaIva);
    }
    vender(){
        this.vendido = true;
    }
    detalle(){ 
        console.log(" Marca: "+ this.marca +" Precio: "+ this.precio +" CC: "+ this.cc +" Vel: " +this.vel);
    }
}


// Array
const productos =  [{ id:1, producto: "Ducatti", precio: 180000,cilindrada: "1000cc", velocidad: "300km/h"},
                    { id:2, producto: "Honda", precio: 250000,cilindrada: "1200cc", velocidad: "400km/h"},
                    { id:3, producto: "BMW", precio: 189000,cilindrada: "1100cc", velocidad: "350km/h"},
                    { id:4, producto: "KTM", precio: 162000,cilindrada: "700cc", velocidad: "270km/h"},
                    { id:5, producto: "Benelli", precio: 153000,cilindrada: "800cc", velocidad: "280km/h"},
                    { id:6, producto: "Yamaha", precio: 171000,cilindrada: "900cc", velocidad: "290km/h"}];


// Array completo almacenado
guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};

for(const producto of productos){
    guardarLocal(producto.id, JSON.stringify(producto))
}
    guardarLocal("listaMotos",JSON.stringify(productos));


// productor ordenados x menor precio
productos.sort((a,b) => {
    if (a.precio < b.precio){
    return -1;
    }
    if (a.precio > b.precio){
        return 1;
    }   
    return 0;
});


// calcular total 
const totalCarrito = () => {

	let total = document.querySelector("#total");

	if (localStorage.getItem("carrito") ) {
		let cart = JSON.parse(localStorage.getItem("carrito"));
		const totalCart = () => cart.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)
		total.innerHTML = totalCart();
	}else{
		total.innerHTML = "0"
	};
}
totalCarrito();


// varciar carrito
function vaciarCarrito() {
	carrito = [];
	insertarCarritoHTML();
	//actualizo el carrito
	totalCarrito();
}

// borrar producto
function borrarProducto(e) {
	e.preventDefault();

	if (e.target.classList.contains("borrar-producto")) {

		const productoSeleccionado = e.target.parentElement.parentElement;
		const productoId = e.target.getAttribute('data-id');

		/* Borrar del HTML */
		productoSeleccionado.remove();

		/* Borrar de la variable carrito */
		carrito = carrito.filter(producto => producto.id !== productoId);

		/* Actualizar el storage */
		guardarCarritoStorage();

	}
	//actualizo el carrito
	totalCarrito();
}

// agregar producto

function agregarProducto(e) {
	e.preventDefault();
	if (e.target.classList.contains("agregar-carrito"))  {
		const cardProducto = e.target.parentElement.parentElement;
		obtenerDatosProducto(cardProducto);
	}
	//actualizo el carrito
	totalCarrito();
}


// obtengo datos productos

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
				producto.precio = `${Number(productoAgregado.precio.slice(1)) * producto.cantidad}`
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

// insertar al carrito
function insertarCarritoHTML() {

	borrarCarritoHTML();

	carrito.forEach(producto => {

		const { imagen, nombre, precio, cantidad, id } = producto;

		const row = document.createElement('tr');
		row.innerHTML = `
		<td>
			<img src="${imagen}" width='100%'>
		</td>
		<td>${nombre}</td>
		<td>${precio }</td>
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

//modal confirmacion compra

const open = document.getElementById('open');
open.addEventListener('click', () => {
	modal_container.classList.add('show');  
});

$("#close").click (cerrarModal);
function cerrarModal(){
	$("#modal_container").fadeOut()
	vaciarCarrito()
	guardarCarritoStorage()
}

// aninimacion search
$(".search")	
		.slideUp(2000)
		.delay(2000)
		.slideDown(2000);

//DOM
const titulo = document.getElementById(tittle);
tittle.innerHTML = "Tienda de Motos";


/* ducatti */

// mostrar carateristicas
$("#btnMoto1").click (mostrarM1);
function mostrarM1(){
	$("#ducatti").hide();
    $("#ducattiCaracteristicas").fadeIn();
}

//boton cerrar
$("#btnCerrar1").click (ocultarCerrar1);
function ocultarCerrar1(){
$("#ducattiCaracteristicas").fadeOut();
$("#ducatti").fadeIn();
}

//evento añadido
$(".agregar-ducatti").click (ducattiA) 
function ducattiA () {
	$(".añadir-ducatti").fadeIn("fast");
	$(".añadir-ducatti").delay(800);
	$(".añadir-ducatti").hide("fast");
}


/* honda */

// mostrar carateristicas
$("#btnMoto2").click (mostrarM2); 
function mostrarM2(){
	$("#honda").hide();
    $("#hondaCaracteristicas").fadeIn();
}

// boton cerrar
$("#btnCerrar2").click (ocultarCerrar2);
function ocultarCerrar2(){
$("#hondaCaracteristicas").fadeOut();
$("#honda").fadeIn();
}

//evento añadido
$(".agregar-honda").click (hondaA);
function hondaA (){
	$(".añadir-honda").fadeIn("fast");
	$(".añadir-honda").delay(800);
	$(".añadir-honda").hide("fast");
}


/* bmw */

// mostrar caracteristicas
$("#btnMoto3").click (mostrarM3);
function mostrarM3(){
	$("#bmw").hide();
    $("#bmwCaracteristicas").fadeIn();
}

// boton cerrar
$("#btnCerrar3").click (ocultarCerrar3);
function ocultarCerrar3(){
$("#bmwCaracteristicas").fadeOut();
$("#bmw").fadeIn();
}

// evento añadido
$(".agregar-bmw").click (bmwA);
function bmwA (){
	$(".añadir-bmw").fadeIn("fast");
	$(".añadir-bmw").delay(800);
	$(".añadir-bmw").hide("fast");
}


/* ktm */

// mostrar caracteristicas
$("#btnMoto4").click (mostrarM4);
function mostrarM4(){
	$("#ktm").hide();
    $("#ktmCaracteristicas").fadeIn();
}

// boton cerrar
$("#btnCerrar4").click (ocultarCerrar4);
function ocultarCerrar4(){
$("#ktmCaracteristicas").fadeOut();
$("#ktm").fadeIn();
}

// evento añadido
$(".agregar-ktm").click (ktmA);
function ktmA (){
	$(".añadir-ktm").fadeIn("fast");
	$(".añadir-ktm").delay(800);
	$(".añadir-ktm").hide("fast");
}


/* benelli */

// mostrar caracteristicas
$("#btnMoto5").click (mostrarM5);
function mostrarM5(){
	$("#benelli").hide();
    $("#benelliCaracteristicas").fadeIn();
}

// boton cerrar
$("#btnCerrar5").click (ocultarCerrar5);
function ocultarCerrar5(){
$("#benelliCaracteristicas").fadeOut();
$("#benelli").fadeIn();
}

// evento añadido
$(".agregar-benelli").click (benelliA);
function benelliA (){
	$(".añadir-benelli").fadeIn("fast");
	$(".añadir-benelli").delay(800);
	$(".añadir-benelli").hide("fast");
}


/* yamaha */

// mostrar caracteristicas
$("#btnMoto6").click (mostrarM6);
function mostrarM6(){
	$("#yamaha").hide();
    $("#yamahaCaracteristicas").fadeIn();
}

// boton cerrar
$("#btnCerrar6").click (ocultarCerrar6);
function ocultarCerrar6(){
$("#yamahaCaracteristicas").fadeOut();
$("#yamaha").fadeIn();
}

// evento añadido
$(".agregar-yamaha").click (yamahaA);
function yamahaA (){
	$(".añadir-yamaha").fadeIn("fast");
	$(".añadir-yamaha").delay(800);
	$(".añadir-yamaha").hide("fast");
}



/* AJAX con JSON */
$('#btnJson').click (traerDatos);

function traerDatos(){

	// console.log('dentro de la función');

	const xhttp = new XMLHttpRequest();
	xhttp.open('GET','catalogo.json', true);
	xhttp.send();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){

			console.log(this.responseText);
			let datos = JSON.parse(this.responseText);
			// console.log(datos);
			let res = document.querySelector("#res");
			res.innerHTML = '';
			for(let item of datos){
			// console.log(item.marca);
			res.innerHTML +=`
			<tr>
			<th>${item.marca}</th>
			<th>${item.cilindrada}</th>
			<th>${item.velocidad}</th>
			</tr>
			`
			}
		}
	}
}

$("#btnJson").click (mostrarJson);
function mostrarJson(){
	$("#ajax").fadeIn();
}

// //wow
new WOW().init();