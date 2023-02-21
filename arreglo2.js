let estudiantes=Array(

    {nombre:"Juan",edad:33,cedula:"123456"},
    {nombre:"Catalina",edad:27,cedula:"876543"}
)

//mapeando el arreglo
let mapa=estudiantes.map(function(estudiante){
    estudiante.nota=1
    estudiante.edad=estudiante.edad-1
    return(estudiante)
})

console.log(mapa)