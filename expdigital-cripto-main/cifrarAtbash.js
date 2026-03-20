import tabelaLetras from "./tabela.js"

function cifrarAtbash(texto) {
    let saida = ""
    for (let i = 0; i < texto.length; i++) {
        let letra = texto.charAt(i)
        let pos = tabelaLetras.lastIndexOf(letra)
        let letraCodigo = letra
        if (pos > -1) {
            let posCodigo = tabelaLetras.length - pos - 1
            letraCodigo = tabelaLetras.charAt(posCodigo)
        }
        saida = saida + letraCodigo
    }
    return saida
}

export default cifrarAtbash