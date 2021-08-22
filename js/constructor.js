// Construtor

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

// // Array 
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


