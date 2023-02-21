let numeros=[10,20,30,40,50,60,70,80,90,100]


//filtrar los numeros mayores o iguales de 50
let numerosMayores50 = numeros.filter(numero =>numero > 50)
//mapear el filtro y restarle a cada elemento 
let numerosmenos10 = numeros.filter(numero =>numero > 50).map(function(numero){
    return numero=numero-10
})
//encontrar si esta el numero 10
let numero10=numerosMayores50.some(function(numero){
    return(numero==10)
})
console.log(numero10)