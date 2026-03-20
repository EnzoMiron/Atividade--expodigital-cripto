import cifrarCesar from "./cifrarCesar.js";
const CODIFICAR = 0
const DECODIFICAR = 1

function cifrarVinagere(mensagem, palavra, modo = CODIFICAR) {
    let txtCifrado = ""
    let letrasEntrada = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyxz"
    for (let i = 0; i < mensagem.length; i++) {
        let letra = mensagem.charAt(i);
        let posPalavra = i % palavra.length
        let letraPalavra = palavra.charAt(posPalavra)
        let avanco = letrasEntrada.lastIndexOf(letraPalavra)
        let letraCodificada = cifrarCesar(letra,avanco)
        if(modo == DECODIFICAR) {
            letraCodificada = cifrarCesar(letra,-avanco)
        }
        txtCifrado = txtCifrado + letraCodificada
    }
    return txtCifrado
}

export { cifrarVinagere, DECODIFICAR, CODIFICAR }