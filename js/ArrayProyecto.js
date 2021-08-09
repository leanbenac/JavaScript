//proyecto final arrays

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


const producto1 = { id: 2, producto: "Arroz" };
const enJSON    = JSON.stringify(producto1);

console.log(enJSON); // {"id":2,"producto":"Arroz"}
console.log(typeof producto1); // object
console.log(typeof enJSON);    // string

localStorage.setItem("producto1", enJSON);
// Se guarda {"id":2,"producto":"Arroz"}



//itere el array con for...of para modificarlos a todos
for (const producto of productos)
    producto.sumaIva();

    producto2.vender();

    console.log(productos);


//metodo sort para ordenar de menor a mayor
productos.sort((a,b) => {
        if (a.precio < b.precio){
        return -1;
        }
        if (a.precio > b.precio){
            return 1;
        }
        return 0;
    });
    


