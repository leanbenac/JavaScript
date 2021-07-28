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


