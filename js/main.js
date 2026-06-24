const productos = [
    {
        id: "tablero-01",
        titulo: "tablero acrilico ",
        imagen: "./img/tableros/01.png",
        categoria: {
            nombre: "tablero colgar",
            id: "tableros"
        },
        precio: 45000
    },

    {
        id: "tablero-02",
        titulo: "tablero de Pintar Doble",
        imagen: "./img/tableros/02.png",
        categoria: {
            nombre: "tablero niños",
            id: "tableros"
        },
        precio:60000


    },
    

    {
        id: "tablero-04",
        titulo: "tablero publicidad Pequeño",
        imagen: "./img/tableros/07.png",
        categoria: {
            nombre: "tablero publicidad",
            id: "tableros"
        },
        precio: 100000
    },

    {
        id: "tablero-05",
        titulo: "parques imanado ",
        imagen: "./img/tableros/13.png",
        categoria: {
            nombre: "didacticos",
            id: "tableros"
        },
        precio: 500000

    },
    {
        id: "soporte-01",
        titulo: "tripode madera ",
        imagen: "./img/tableros/13.png",
        categoria: {
            nombre: "tableros",
            id: "tableros"
        },
        precio: 900000

    },
     
    {
        id: "tab-aba",
        titulo: "tablero abaco ",
        imagen: "./img/tableros/06.png",
        categoria: {
            nombre: "tableros niños",
            id: "tableros"
        },
        precio: 300000

    },    
     {
        id: "didactico 01",
        titulo: "Ajedrez plastico N02",
        imagen: "./img/didacticos/04.jpeg",
        categoria: {
            nombre: "tableros niños",
            id: "didacticos"
        },
        precio: 300000

    },    
    {
        id: "didactico 02",
        titulo: "parques Madera 50cm x 50 ",
        imagen: "./img/didacticos/02.png",
        categoria: {
            nombre: "tableros niños",
            id: "didacticos"
        },
        precio: 300000

    },    
       {
        id: "papeleria 01",
        titulo: "cuaderno 100 Cosido ",
        imagen: "./img/papeleria/01.webp",
        categoria: {
            nombre: "tableros niños",
            id: "papeleria"
        },
        precio: 300000

    },      

]
/* buscar el div donde vamos a meter los productos
llamar al array de los productos */

const contenedorProductos=document.querySelector("#contenedor-productos");

/* importante para los botones */
const botonesCategorias =document.querySelectorAll(".boton-categoria");

/* cambiamos el titulo de cada pestaña de la categoria */
const tituloPrincipal = document.querySelector("#titulo-principal");

//ESTO SE hace para actualizar los botones
let botonesAgregar = document.querySelectorAll(".producto-agregar");



function cargarProductos(productosElegidos){
    if(!contenedorProductos)return;

    contenedorProductos.innerHTML=""

    productosElegidos.forEach(producto =>{

        const div=document.createElement("div"); //1 PASO
        
        div.classList.add("producto"); /* meter toda esa informacion */
        
        div.innerHTML=
        `
        <img class="producto-imagen" 
                src="${producto.imagen}" 
                alt="${producto.titulo}"
                onerror="this.onerror=null;this.src='https://placehold.co/300x300/2c3e50/ffffff?text=Sin+Imagen';">
                
                <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                 <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>`;
            contenedorProductos.append(div);
            

    })
    actualizarBotonesAgregar();
    console.log(botonesAgregar);
} 

/* hasta aqui se cargan los productos con JS mediante el array de productos */
/* con esta funcion aplicamos el selector del menu aside */
/* es necesario el ID de los botones del panel lateral */

/* manejo de filtros */
cargarProductos(productos)

botonesCategorias.forEach(boton =>{
    boton.addEventListener("click",(e) => {

        /* esta linea quita la seleccion del menu */
        botonesCategorias.forEach(b => b.classList.remove("active"));
        /* y esta lo ilumina  */
        e.currentTarget.classList.add("active");

        
       
        /* esto se hace para agregar los productos segun la categoria */

        if (e.currentTarget.id !== "todos"){
            //se busca la coincidencia exacta por id de categoria

            const productoBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            
            //cambiar titulo dinamicamente usando el texto del boton
            tituloPrincipal.innerText=e.currentTarget.innerText.trim();
            cargarProductos(productoBoton);
        
            
        }else{
            tituloPrincipal.innerHTML="todos los productos"
            cargarProductos(productos);
        }

})}

)

//AL DARLE CLICK EN CADA SECCION DE LAS CATEGORIAS 
//LOS BOTONES SON NUEVOS HAY QUE ACTUALIZAR LOS BOTONES

//ahora a todos los botones agregar se le dabe asignar el addeventlistener

function actualizarBotonesAgregar(){
    botonesAgregar= document.querySelectorAll(".producto-agregar");



    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito);
    })
}
const productosEnCarrito =[];

function agregarAlCarrito(e){
    const idBoton= e.currentTarget.id;
//buscar en el array productos
    const productoAgregado =producto.find(producto => producto.id === idBoton);
    productosEnCarrito.push(productoAgregado);
    console.log(productosEnCarrito)
}
