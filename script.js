
/*
Sobre APIS:
    -Internas (API DOM, LocalStorage, Drag and Drop): APIs que vienen incrustadas en el navegador, por default.

    -APIs externas (google Maps, FakeStore API, API paypal): aquellas que se utlizan de proveedores extrenos

    Ex: Licuadora, la licuadora es el cliente, el enchufe es la API y ésta toma recursos de la electricidad, para hacer funcionar la licuadora.

    °°Ventajas:
        -Reestructurar y organizar los sistemas para que sean mas sencillos de usar.
        -Le brindan robustes a los sistemas
        -Reduce costos de mantenimiento (ya que la empresa de API es la que se encarga de dolucionar sus problemas).
        -Escalabilidad de los sistemas.
*/

/*
Sincronía:
  Por defecto JS se comporta de una forma síncrona, ya que se ejecuta de arriba hacia abajo y de izq a der. Esto es inconveneinte ya que un solo error puede interrumpir el flujo de trabajo, desde ese error el resto del programa no se ejecuta.
*/
/*
//Ejemplo de una operación sincrónica
console.log("Inicia mi operación sincrona");//Lo primero que se ejecuta.
function dosSincronica(){ //Luego el programa lee esta función, pero no se ejecuta ya que esta función es invocada hasta  la función unoSincrono (esta función depende de otra)
  console.log("Dos");
}

function unoSincronico(){ //Posteriormente se lee esta función, pero tampo se ejecuta porque no ha sido invocada.
  console.log("Uno");
  dosSincronica();
  console.log("Tres");
}

unoSincronico(); //Hasta esta parte, donde se invoca la funcion unoSincrona, se jecuta y luego ejecuta la dosSincrona
console.log("Finaliza mi operación sincrona");

/*
Las operaciones SINCRÓNICAS son útiles o convenientes cuando se hace lectura de arrays, uso de algunos métodos de arrays, condicionales, ciclos, ejecución de funciones "normales".
*/

/*
ASINCRONÍA
    La capacidad que tiene JS para poder ejecutar funciones que no dependan de otras. Así se ejecutan ciertos bloques de código sin que sea necesario esperar a que otras partes del código se ejecuten.
*/
/*
//Ejemplo de JS Asíncrono
console.log("Inicia mi operación Asíncrona");
function dosAsync(){
  console.log("Uno");
  setTimeout(function(){ //setTime para ejecutar esta función después de 3 segundos
    console.log("Dos");
  }, 3000);
}

function unoAsync(){
  dosAsync();
  console.log("Tres");
}

unoAsync();
console.log("Finaliza mi función asíncrona");

/*
---Mecanismos para controlar la asincronía---
    -Callback: (llamada de vuelta) pasar una función como parámetro de otra función y se ejecutan una vez que se cumpla la condición esperada.
        ex: Método MAP() de los arrays

    -promesas: son objetos que representan un valor al momento de conectar con el servidor. Una promesa no se sabe si se va a cumplir o no, pero al menos es necesario saber cuando se va a cumplir o que diga que no se podrá cumplir. La ventaja es que la función no se anidan.
      Tienen 3 estados posibles:
        -pending: estado inicial, cuando se crea la promesa, aún no hay resultados.
        -fullfiled: cuando la operación asíncrona se resuelve con éxito.
        -rejected: cuandlo la operación asíncrona falla.
      


    -async/await

*/
/*
//Función especial para consumir APIs y manejar promesas
//instrucción para conexión al servidor (fetch().then)
fetch("https://fakestoreapi.com/products/1")

//Dos escenarios posibles: obtengo o no obtengo respuesta
.then(datos => {//cuando la promesa se resuelve ejecuto esta función
  console.log(datos);
  return datos.json();//convertir la respuesta

})
.catch(error =>{//Si la promesa se rechaza, enviame un mensaje de error
  console.log("Error no encontramos el producto");
  console.log(error.message);
})
*/

/*
Sintaxis del fetch (con promesas)
    fetch(url a consumir)
        .then(response => response.text()) //manejo la repuesta
        .then(datos => console.log(datos)) //manejo el dato

        .catch(error => console.log(error));
*/

/*
//asigno el fetch a una variable...
const conexion = fetch("https://fakestoreapi.com/products/1");

//imprimo la variable (para ver el objeto completo)
console.log("Este es mi objeto Promesa: ", conexion);

//referencia a mi fetch para poder usar sus metodos
conexion

//usar el metodo then para manejar la respuesta(lo relleno con la respuesta)
.then(function (resultado){
    console.log("Dentro de esta funcion que maneja la respuesta, encontraras: ", resultado);
    return resultado.json();
})

//uso el metodo then para manejar el producto(lo rellenoo con la info del producto)
.then(function(producto){
    console.log("Informacion del producto: ", producto);
})

//uso el metodo catch para manejar el error (lo relleno con un error para que la caja no regrese vacia)
.catch(function (error){
    console.log("Error", error);
})
*/

/*
//producto como respuesta de un servidor en formato plano (texto)
let productoServidor = {"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","category":"women's clothing","image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg","rating":{"rate":3.8,"count":679}}


//producto como objeto JSON
let productoJSON = {
    id:17,
    title:"Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price:39.99,
    description:"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category:"women's clothing",
    image:"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating:{
        rate:3.8,
        count:679
    }}

//Revisar informacion de un objeto con texto plano
console.log(productoServidor.price);

//Revisar informacion de un objeto tipo JSON
console.log(productoJSON.price);
*/

//Objeto JSON que voy a enviar a un servidor
let paciente = {
  nombre: "Felipe",
  edad: 31,
  status: "Registrado"
}

console.log(paciente);

let pacienteStringifeado = JSON.stringify(paciente);
console.log(pacienteStringifeado);


/*
//Método POST para enviar un nuevo producto a nuestra BD de la fakeStoreAPI
fetch('https://fakestoreapi.com/products',{ //Revisar siempre mi ruta, hacia donde se va a mandar esa info (endpoint)
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))


fetch('https://fakestoreapi.com/products',{ //endpoint
            method:"PUT", //especificar el tipo de metodo
            body:JSON.stringify( //instruccion para serializar el cuerpo de mi solicitud (para la interpretacion del servidor)
                {
                    id: 1,
                    title: inputTitulo.value,
                    price: inputPrecio.value,
                    description: inputDescripcion.value,
                    image: inputImagen.value,
                    category: inputCategoria.value
                }
            )
        })
            .then(res=>res.json()) //metodo para la respuesta (saber que mi producto llego con bien al servidor)
            .then(json=>console.log(json))//impresion en consola para revisar la info
            */