const inicio = document.getElementById("inicio");
const productos = document.getElementById("productos");

const btnInicio = document.getElementById("btnInicio");
const btnProductos = document.getElementById("btnProductos");

btnInicio.addEventListener("click", () => {
    inicio.style.display = "block";
    productos.style.display = "none";
});

btnProductos.addEventListener("click", () => {
    inicio.style.display = "none";
    productos.style.display = "block";
});
    
