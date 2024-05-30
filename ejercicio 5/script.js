const formulario = $('formulario')
const resultado = $('resultado')

formulario.addEventListener('submit', (e)=> {
    const ladoA = +formulario['ladoA'].value
    const ladoB = +formulario['ladoB'].value
    const ladoC = +formulario['ladoC'].value
    if (ladoA > ladoC){
    const AreaTriangulo = (ladoB * (ladoA-ladoC))/2
    const AreaRectangulo = (ladoB * ladoC)
    const AreaTotal = AreaRectangulo + AreaTriangulo
    resultado.innerText += AreaTotal
}
else{
    alert("El lado C tiene que ser menor que el lado A ")
}
    e.preventDefault()
})

function $(elemento) {
    return document.getElementById(elemento)
}