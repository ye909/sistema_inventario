const url="gestion.html"
const ver = document.getElementById("contenido")
fetch(url)
.then((res)=>res.text())
.then(data => {
ver.innerHTML=data
})