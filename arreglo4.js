let inmuebles=[
    {id:1, nombre:"EL VIP", direccion:"cll 100"},
    {id:1, nombre:"PROVENZA", direccion:"cR 80"},
    {id:3, nombre:"EL RAUDAL", direccion:"cLL 10"}
]

let buscador=inmuebles.find(function(inmueble){
    return(inmueble.id==1)
})
let buscador2=inmuebles.filter(function(inmueble){
    return(inmueble.id==1)
})
let buscador3=inmuebles.some(function(inmueble){
    return(inmueble.id==1)
})
console.log(buscador)
console.log(buscador2)
console.log(buscador3)