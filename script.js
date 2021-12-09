
let agregando = document.getElementById("agregar")
let boton = document.getElementById("boton");
let listados = document.getElementById("lista");
let chequeando = document.getElementById("chequeador")
let eliminar = document.getElementById("eliminado")


boton.addEventListener("click",function(){
    let nuevoproducto = agregando.value
    let li = document.createElement("li")

    li.textContent = nuevoproducto
    listados.appendChild(li)

})

chequeando.addEventListener("click", function(){
    if(chequeando.checked){
        alert("desea eliminar este producto?")
    } else {
        alert("mantendremos el producto unos dias mas")
    }
});


