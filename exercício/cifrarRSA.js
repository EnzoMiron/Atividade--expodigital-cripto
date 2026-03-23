/**
 * FUNÇÃO FORNECIDA - NÃO É NECESSÁRIO MODIFICAR.
 * Gera o par de chaves (Pública e Privada) a partir de dois números primos.
 */
function gerarChavesRSA_Didaticas(p, q) {
    if (p <= 1 || q <= 1) return null; 
    
    const N = p * q;
    const phi_N = (p - 1) * (q - 1);
    
    let E = 3;
    while (E < phi_N) {
        if ((phi_N % E !== 0) && ((p - 1) % E !== 0) && ((q - 1) % E !== 0)) {
            break;
        }
        E++;
    }

    let D = 1;
    while (D < phi_N) {
        if ((D * E) % phi_N === 1) {
            break;
        }
        D++;
    }
    
    return {
        publica: { E, N }, 
        privada: { D, N }  
    };
}

/**
 * 1. Codificação (Usando a Chave Pública do Destinatário)
 * Cifra a mensagem usando a fórmula: Cifrado = x^E mod N
 */
function cifrarRSA_Didatico(mensagem, E, N) {
    const resultado = [];
    const bigE = BigInt(E);
    const bigN = BigInt(N);

    for (let i = 0; i < mensagem.length; i++) {
        // x é o código ASCII/Unicode do caractere
        const x = BigInt(mensagem.charCodeAt(i));
        
        // Cálculo da potência modular: (x ** E) % N
        const cifrado = (x ** bigE) % bigN;
        
        resultado.push(Number(cifrado));
    }
    
    return resultado;
}

/**
 * 2. Decodificação (Usando a Chave Privada do Destinatário)
 * Decifra o array de números usando a fórmula: Original = C^D mod N
 */
function decifrarRSA_Didatico(mensagemCifrada, D, N) {
    let mensagemOriginal = "";
    const bigD = BigInt(D);
    const bigN = BigInt(N);

    for (let i = 0; i < mensagemCifrada.length; i++) {
        const c = BigInt(mensagemCifrada[i]);
        
        // Cálculo da potência modular inversa: (C ** D) % N
        const originalCod = (c ** bigD) % bigN;
        
        // Converte o código numérico de volta para caractere
        mensagemOriginal += String.fromCharCode(Number(originalCod));
    }
    
    return mensagemOriginal;
}
