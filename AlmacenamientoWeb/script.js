/*

API de almacenamiento web


Nos permite almacenar informacion en nuestro navegador, de dos formas:

    - local (persistencia de los datos)
    - sesion (los datos son volatiles)

    
Tanto el almacenamiento local como el de sesion, proporcionan un area privada para tratar sus datos, esto quiere decir que otros sitios web no pueden acceder a los datos que almacenamos.


*/

//Local Storage (Almacenamiento local)
/*
    La información se guarda indefinidamente hasta que sea eliminada por código o borrada del navegador.
    Casos de uso: artículos de un carrito de compras, guardar un perfil de configuración, historial de uso.

    La información no se comparte entre ventanas del mismo navegador, yo debo abrir la misma página donde guardé los datos, para poder verlos de nuevo.

    //Por ejemplo, si queremos recuperar los inicios de sesión de los clientes, se pueden guardar en el localSorage para poder usar los datos luego, en esa página de registro.
    De esta forma no dependemos al 100% de nuestra base de datos.
*/

//Guardando mi primer dato en localSorage
//Sintaxis: localStoraga.setItem(key, value)
localStorage.setItem("Nombre", "Ale");
localStorage.setItem("Apellido", "Mendieta");
localStorage.setItem("Edad", 26);

//Guardando un carrito de compras
let carritoComprasAle = ["Maruchan", "Coca", "Manzana"];
localStorage.setItem("CarritoCompras", carritoComprasAle); //Mi key es CarritoCompras y mi valor es lo que enccuentre en el array de carritoComprasAle

//Obtener la información almacenada en mi local storage, para poder utilizarla, ya sea imprimirla, hacer operaciones etc.
// Sintaxis: localStorage.getItem(key)
let apellido = localStorage.getItem("Apellido");
console.log(apellido);

//Recuperando el carrito de compras
let carrito = localStorage.getItem("CarritoCompras");
console.log(carrito);


//Borrar un elemento del localStorage
//Sintaxis: localStorage.removeItem(key)
localStorage.removeItem("CarritoCompras");

//Conocer el largo o longitud del localStorage
//Sintaxis: localStorage. length
let longitudLocalStorage = localStorage.length; //Cantidad de elementos guardados en mi localStorage
console.log(longitudLocalStorage);
