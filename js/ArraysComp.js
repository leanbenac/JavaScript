/* desafio */

const arrayMotos =[
    { moto: "honda", cc: "1000", vel: "300km/h"},
    { moto: "yamaha", cc: "1200", vel: "400km/h"},
    { moto: "ktm", cc: "1100", vel: "350km/h"},
    { moto: "benelli", cc: "700", vel: "280km/h"},
    { moto: "zanella", cc: "800", vel: "290km/h"},
]

arrayMotos.sort((a,b) => {
    if (a.vel < b.vel){
    return -1;
    }

    if (a.vel > b.vel){
        return 1;
    }

    return 0;

});

alert (arrayMotos.length);


