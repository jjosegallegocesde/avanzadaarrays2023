let equipos=[
    {nombre:"Atletico Nacional",precio:300,cantidad:5},
    {nombre:"Deportivo Indp Medellin",titulos:1},
    {nombre:"Junior de Barranquilla",titulos:1}
]

let sumaDeTitulos=0
equipos.forEach(function(equipo){
    sumaDeTitulos=sumaDeTitulos+equipo.titulos
})
console.log(sumaDeTitulos)