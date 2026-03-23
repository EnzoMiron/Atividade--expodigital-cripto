/**
 * Cifra a mensagem usando a chave pública (E, N).
 * @param {string} mensagem - O texto a ser cifrado.
 * @param {number} E - Expoente Público.
 * @param {number} N - Módulo.
 * @returns {number[]} Array de números (os códigos cifrados).
 */
function cifrarRSA_Didatico(mensagem, E, N) {
    const resultado = [];
    const bigE = BigInt(E);
    const bigN = BigInt(N);

    for (let i = 0; i < mensagem.length; i++) {
        // Obtém o código ASCII do caractere (x)
        const x = BigInt(mensagem.charCodeAt(i));
        // Aplica a fórmula: C = x^E mod N
        // O operador ** com BigInt mantém a precisão total
        const cifrado = (x ** bigE) % bigN;
        
        resultado.push(Number(cifrado)); // Armazena o resultado como um número normal (pode ser grande, mas deve caber em um número JavaScript)
    }
    
    return resultado;
}

/**
 * Decifra o array de números usando a chave privada (D, N).
 * @param {number[]} mensagemCifrada - Array de números cifrados.
 * @param {number} D - Expoente Privado.
 * @param {number} N - Módulo.
 * @returns {string} A string original.
 */
function decifrarRSA_DSidatico(mensagemCifrada, D, N) {
    let mensagemOriginal = "";
    const bigD = BigInt(D);
    const bigN = BigInt(N);

    for (let i = 0; i < mensagemCifrada.length; i++) {
        const c = BigInt(mensagemCifrada[i]);
        
        // Aplica a fórmula: x = C^D mod N
        const originalCod = (c ** bigD) % bigN;
        
        // Converte o código numérico de volta para o caractere original
        mensagemOriginal += String.fromCharCode(Number(originalCod));
    }
    
    return mensagemOriginal;
}