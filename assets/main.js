let provincia = prompt ("Ingrese su provincia")

while (provincia != ""){
    console.log ("Se ingresó la provincia: " + provincia)
    switch (provincia) {
        case "buenos aires":
            alert ("Envío gratis desde $5000")
            break;
            
            
    }
    provincia = prompt("Presione enter para continuar")
}

let producto = prompt("Ingrese producto: ")
let cantidad = 0
let total = 0
let bonificacion = -200

while (producto != ""){ 
    console.log("Se ingresó el producto: " + producto)
    switch(producto){ 
        case "pelota": 
            cantidad = parseInt(prompt("Ingrese cantidad de pelotas a comprar: "))
            total = cantidad * 1700 + bonificacion
            console.log("El costo de las pelotas es: $1700 el total es: " + total)
            break;
        case "camiseta": 
            cantidad = parseInt(prompt("Ingrese cantidad de Camisetas a comprar: "))
            total = cantidad * 8000 + bonificacion
            console.log("El costo de las camisetas es: $8000 el total es: " + total)
            break;
        case "campera": 
            cantidad = parseInt(prompt("Ingrese cantidad de Camisetas a comprar: "))
            total = cantidad * 13000 + bonificacion
            console.log("El costo de las camperas es: $13000 el total es: " + total)
            break;
        default:
            console.log("No encontramos el producto")    
    }
    producto = prompt("Ingrese producto: (Presione enter para salir)")
}

console.log("Terminó de ingresar productos") 
