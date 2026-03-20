
function getEntrada() {
    let elem = document.getElementById("txtEntrada")
    return elem.value
}

function setCodificado(valor) {
    let elem = document.getElementById("txtCodificado")
    elem.value = valor
}

function getEntradaCodificado() {
    let elem = document.getElementById("txtEntradaCodificado")
    return elem.value
}

function setSaidaDecodificado(valor) {
    let elem = document.getElementById("txtSaidaDecodificado")
    elem.value = valor
}


export { getEntrada, setCodificado, getEntradaCodificado, setSaidaDecodificado }