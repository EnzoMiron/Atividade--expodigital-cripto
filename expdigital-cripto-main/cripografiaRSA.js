/* * FUNÇÃO FORNECIDA - NÃO É NECESSÁRIO MODIFICAR. */
function gerarChavesRSA_Didaticas(p, q) {
    if (p <= 1 || q <= 1) return null; 
    
    const N = p * q;
    const phi_N = (p - 1) * (q - 1);
    
    let E = 3;
    while (E < phi_N) {
        // Encontrar o primeiro E que é coprimo de phi_N
        if ((phi_N % E !== 0) && ((p - 1) % E !== 0) && ((q - 1) % E !== 0)) {
             // Otimização: A verificação (p-1)%E e (q-1)%E não é rigorosamente a do RSA, 
             // mas é didática e evita fatores óbvios para primos pequenos.
            break;
        }
        E++;
    }

    let D = 1;
    while (D < phi_N) {
        // Encontrar D tal que (D * E) % phi_N === 1
        if ((D * E) % phi_N === 1) {
            break;
        }
        D++;
    }
    
    return {
        publica: { E, N }, // Use E e N para CIFRAR
        privada: { D, N }  // Use D e N para DECIFRAR
    };
}
~~~

#### Funções a Implementar:

1. Codificação (Usando a Chave Pública do Destinatário)

~~~js
/**
 * Cifra a mensagem usando a chave pública (E, N).
 * @param {string} mensagem - O texto a ser cifrado.
 * @param {number} E - Expoente Público.
 * @param {number} N - Módulo.
 * @returns {number[]} Array de números (os códigos cifrados).
 */
function cifrarRSA_Didatico(mensagem, E, N) {
    // Implemente a lógica de iteração e a fórmula x^E mod N.
}

#### Fórmula de Cifragem: (Para cada código ASCII/Unicode x)

$$\text{Cifrado} = x^E \pmod{N}$$

2. Decodificação (Usando a Chave Privada do Destinatário)

~~~js
/**
 * Decifra o array de números usando a chave privada (D, N).
 * @param {number[]} mensagemCifrada - Array de números cifrados.
 * @param {number} D - Expoente Privado.
 * @param {number} N - Módulo.
 * @returns {string} A string original.
 */
function decifrarRSA_Didatico(mensagemCifrada, D, N) {
    // Implemente a lógica de iteração e a fórmula C^D mod N.
}
~~~

Fórmula de Decifragem: (Para cada número cifrado C)

$$\text{Original} = C^D \pmod{N}$$

#### Teste de Validação Final

Execute os testes a seguir para garantir que todas as suas funções estão corretas:

~~~js
// Atbash:

console.log(cifrarAtbash("OlaMundo")); 
// Esperado: "OñzPfmwl" (Nota: pode variar dependendo da sua implementação de caracteres especiais/ASCII)

// César:

console.log(cifrarCesar("criptografia", 3)); // Esperado: "fulswrjudiia"
console.log(cifrarCesar("fulswrjudiia", -3)); // Esperado: "criptografia"

// Vigenère:

const chaveV = "CHAVE";
const codificadoV = cifrarVigenere("Enigma!", chaveV, 'codificar'); 
console.log(codificadoV); // Ex: "Gñlgnx!"
console.log(cifrarVigenere(codificadoV, chaveV, 'decodificar')); // Esperado: "Enigma!"

// RSA (Usar a função gerarChavesRSA_Didaticas):

const PRIMO_1 = 17;
const PRIMO_2 = 19;
const CHAVES = gerarChavesRSA_Didaticas(PRIMO_1, PRIMO_2); 

const textoOriginal = "OLA"; 

// 1. Cifrar com a Chave Pública
const cifrado = cifrarRSA_Didatico(textoOriginal, CHAVES.publica.E, CHAVES.publica.N);
console.log("RSA Cifrado:", cifrado); // Array de números

// 2. Decifrar com a Chave Privada
const decifrado = decifrarRSA_Didatico(cifrado, CHAVES.privada.D, CHAVES.privada.N);
console.log("RSA Decifrado:", decifrado); // Esperado: "OLA"
~~~