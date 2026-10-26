const contenido = document.getElementById("contenido")
const hab = document.getElementById("bHabilidades")
console.log("www")
console.log(hab)
const cont = document.getElementById("bContenido")


hab.addEventListener("click", function(){
    const nuevoElementoUl = document.createElement("ul")
    const nuevoElementoLi = document.createElement("li")
    const nuevoElementoLi1 = document.createElement("li")
    const nuevoElementoLi2 = document.createElement("li")

    contenido.innerHTML = ""

    nuevoElementoLi.innerText = "Paciencia"
    nuevoElementoUl.appendChild(nuevoElementoLi)
    
    nuevoElementoLi1.innerText = "Determinacion"
    nuevoElementoUl.appendChild(nuevoElementoLi1)

    nuevoElementoLi2.innerText = "Trabajo en equipo"
    nuevoElementoUl.appendChild(nuevoElementoLi2)

    document.getElementById("contenido").appendChild(nuevoElementoUl)

})

    

cont.addEventListener("click", function(){

    const nuevoElementoUl = document.createElement("ul")
    const nuevoElementoLi = document.createElement("li")
    const nuevoElementoLi1 = document.createElement("li")
    const nuevoElementoLi2 = document.createElement("li")

    contenido.innerHTML = ""

    nuevoElementoLi.innerText = "+40k año"
    nuevoElementoUl.appendChild(nuevoElementoLi)
    
    nuevoElementoLi1.innerText = "Remote work"
    nuevoElementoUl.appendChild(nuevoElementoLi1)

    nuevoElementoLi2.innerText = "Seguro médico"
    nuevoElementoUl.appendChild(nuevoElementoLi2)

    document.getElementById("contenido").appendChild(nuevoElementoUl)

})