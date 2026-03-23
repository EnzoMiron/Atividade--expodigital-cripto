

// Função que converte uma mensagem de texto em uma string binária
// Cada caractere é convertido para seu código ASCII/Unicode e depois para binário de 8 bits
function textoParaBinario(mensagem) {
    let resultado = "";

    for (let i = 0; i < mensagem.length; i++) {
        const codigo = mensagem.charCodeAt(i); // código ASCII/Unicode básico
        const binario = codigo.toString(2).padStart(8, "0"); // garante 8 bits, preenchendo com zeros à esquerda e converte para binário
        resultado += binario;
    }
    return resultado;
}

// Função que codifica uma mensagem secreta em um texto visível usando esteganografia
// A mensagem é convertida para binário e cada bit é representado por caracteres Unicode invisíveis
function codifica_esteg(textoVisivel, mensagem) {
    let txtBinario = textoParaBinario(mensagem)
    console.log(txtBinario);
    for(let i=0; i < txtBinario.length; i++) {
        let bit = txtBinario.charAt(i)
        if(bit == '0') {
            textoVisivel = textoVisivel + '\u202d'  // Adiciona caractere Unicode para bit 0
        } else {
            textoVisivel = textoVisivel + '\u202c'  // Adiciona caractere Unicode para bit 1
        }
    }
    return textoVisivel
}

// Função que decodifica uma mensagem secreta escondida em um texto usando esteganografia
// Lê os caracteres Unicode invisíveis e converte de volta para binário e depois para texto
function decodifica_esteg(texto) {
    let codigoBin = ""
    for(let i=0; i < texto.length; i++) {
        let letra = texto.charAt(i)
        if(letra == '\u202d') {
            codigoBin = codigoBin + "0"  // Bit 0
        }
        if(letra == '\u202c') {
            codigoBin = codigoBin + "1"  // Bit 1
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
            let codASCII = parseInt(byte,2)  // Converte binário para decimal
            saida = saida + String.fromCharCode(codASCII)  // Converte para caractere
            qtde=0
            byte = ""            
        }
    }
    return saida
}

// Exporta as funções principais para uso em outros módulos
export { codifica_esteg, decodifica_esteg }