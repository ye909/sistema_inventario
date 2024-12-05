const agregar = document.getElementById("agregar")
const agregar_menu = document.getElementById("agregar_menu")

.addEventListener("click",function (e) {
    e.preventDefault()
    if (agregar.style.display=="none" )
        agregar.style.display= "inline"
    else{
        agregar.style.display ="none" 
    }
})


// function ver_menu() {
//     if (prestamos_menu.style.display=="none" || agregar_menu.style.display=="none"  ||ventas_menu.style.display=="none") {
//         prestamos_menu.style.display=="inline" 
//         agregar_menu.style.display=="inline"
//         ventas_menu.style.display=="inline"
//     }
// }