

function textoParaBinario(mensagem) {
    let resultado = "";

    for (let i = 0; i < mensagem.length; i++) {
        const codigo = mensagem.charCodeAt(i); // código ASCII/Unicode básico
        const binario = codigo.toString(2).padStart(8, "0"); // garante 8 bits
        resultado += binario;
    }
    return resultado;
}

function codifica_esteg(textoVisivel, mensagem) {
    let txtBinario = textoParaBinario(mensagem)
    console.log(txtBinario);
    for(let i=0; i < txtBinario.length; i++) {
        let bit = txtBinario.charAt(i)
        if(bit == '0') {
            textoVisivel = textoVisivel + '\u202d'
        } else {
            textoVisivel = textoVisivel + '\u202c'
        }
    }
    return textoVisivel
}

function decodifica_esteg(texto) {
    let codigoBin = ""
    for(let i=0; i < texto.length; i++) {
        let letra = texto.charAt(i)
        if(letra == '\u202d') {
            codigoBin = codigoBin + "0"
        }
        if(letra == '\u202c') {
            codigoBin = codigoBin + "1"
        }
    }
    console.log(codigoBin);
    let qtde = 0
    let byte = ""
    let saida = ""
    for(let i=0; i < codigoBin.length; i++) {
        qtde++
        byte = byte + codigoBin.charAt(i)
        if(qtde == 8) {
            console.log(byte);
            let codASCII = parseInt(byte,2)
            saida = saida + String.fromCharCode(codASCII)
            qtde=0
            byte = ""            
        }
    }
    return saida
}

export { codifica_esteg, decodifica_esteg }