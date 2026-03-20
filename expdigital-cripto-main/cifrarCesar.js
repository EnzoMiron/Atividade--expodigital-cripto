import letrasEntrada from "./tabela.js"

function cifrarCesar(mensagem, chave) {
    let txtCifrado = ""
    for (let i = 0; i < mensagem.length; i++) {
        let letra = mensagem.charAt(i);
        let pos = letrasEntrada.lastIndexOf(letra)
        let posCifrada = 0
        let letraCifrada = ""
        if (pos != -1) {
            if (pos + chave < 0) {
                posCifrada = letrasEntrada.length + pos + chave
            } else {
                posCifrada = (pos + chave) % letrasEntrada.length                
            }
            letraCifrada = letrasEntrada.charAt(posCifrada)
        } else {
            letraCifrada = letra
        }
        txtCifrado = txtCifrado + letraCifrada
    }
    return txtCifrado
}

export default cifrarCesar