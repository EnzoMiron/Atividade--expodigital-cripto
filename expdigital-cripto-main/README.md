# Exploração Digital e Fundamentos Tecnológicos

prof. Marcelo Amorim 

##### link deste repositório: 
## https://github.com/mmamorim/expdigital-cripto


# ✨ Desafio: Criptografia Clássica em JavaScript

## Objetivo

Implementar quatro das cifras mais importantes da história da criptografia. Reforçar conhecimento sobre programação usando Javascript: **funções, laços de repetição (`for`), arrays, manipulação de strings (ASCII) e aritmética modular (`%`)**.

## Requisitos Gerais

1.  **Funções Javascript Vanilla:** Todas as funções devem usar apenas os recursos disponíveis no javascript puro, sem usar bibliotecas externas.
2.  **Alfabeto:** Considere apenas as 26 letras do alfabeto inglês (A-Z, a-z).
3.  **Tratamento de Não-Letras:** Espaços, números e pontuações devem ser mantidos inalterados no texto cifrado.
4.  **Caixa (Case):** O *case* (maiúsculo/minúsculo) das letras deve ser preservado.

---

## Parte 1: Cifra Atbash (O Desafio do Mapeamento Oposto)

A Cifra Atbash é a mais simples das cifras de substituição, sendo **recíproca** (a codificação é a mesma que a decodificação): A $\leftrightarrow$ Z, B $\leftrightarrow$ Y, C $\leftrightarrow$ X, etc.

### Função a Implementar:

~~~js
function cifrarAtbash(mensagem) {
    // Sua lógica de codificação Atbash aqui
}
~~~

---

## Parte 2: Cifra de César (O Desafio do Deslocamento Fixo)

A Cifra de César desloca cada letra por um número fixo de posições (a chave).

### Função a Implementar:

~~~js
function cifrarCesar(mensagem, chave) {
    // Sua lógica de César aqui
}
~~~

Fórmula Essencial (Deslocamento Circular):

$$\text{Novo Índice} = (\text{Índice Original} + \text{Chave}) \pmod{26}$$

---

## Parte 3: Cifra de Vigenère (O Desafio da Chave Variável e Cíclica)

A Cifra de Vigenère usa uma palavraChave para aplicar múltiplos deslocamentos da Cifra de César, de forma cíclica.

### Função a Implementar:
~~~js
function cifrarVigenere(mensagem, palavraChave, modo = 'codificar') {
    // Sua lógica de Vigenère aqui.
    // Use 'modo' para diferenciar codificação (+) de decodificação (-).
}
~~~

Dica Essencial: Você precisará de dois índices no seu laço: um para a mensagem e um índice separado (e modular) para a chave. O índice da chave só deve avançar se o caractere da mensagem for uma letra.

---

### Parte 4: Criptografia RSA (O Desafio da Chave Pública/Privada)

O RSA é um sistema de chave assimétrica. Implementaremos o algoritmo focando na lógica matemática, usando chaves didáticas pequenas.

#### O Contexto Essencial (Confidencialidade)
Neste desafio, você simulará a comunicação segura:

**Cifragem:** O remetente usa a Chave Pública (E, N) do destinatário.

**Decifragem:** O destinatário usa sua Chave Privada (D, N) secreta para ler a mensagem.

#### Geração de Chaves (Função Fornecida)
Utilize a seguinte função para gerar o par de chaves que você usará nas funções de cifragem e decifragem.

~~~js
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
~~~

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

---

### Parte 5: Esteganografia em Texto com Caracteres Invisíveis (Unicode)

🧠 Ideia central: Alguns caracteres do Unicode são invisíveis, ou seja, não aparecem na tela, mas continuam presentes no texto.

👉 Isso permite esconder informação sem alterar visualmente o conteúdo

🔍 Principais caracteres usados:

* Zero Width Space (ZWSP) → U+200B
* Zero Width Non-Joiner (ZWNJ) → U+200C
* Zero Width Joiner (ZWJ) → U+200D

💡 Eles:

* Não ocupam espaço visível
* Não aparecem para o usuário
* Mas podem ser lidos por programas

⚙️ Como funciona na prática

Definimos um padrão de codificação:

* ZWNJ → representa 0
* ZWJ → representa 1

Convertimos a mensagem para binário: Ex: letra → código ASCII → binário

Inserimos os caracteres invisíveis no texto:

* Entre letras
* Entre palavras
* Ou no final do texto

#### 🧪 Atividade: Esteganografia com Caracteres Invisíveis

Você deverá implementar duas funções que utilizam caracteres invisíveis do Unicode para esconder e recuperar mensagens dentro de um texto comum.

🎯 Objetivo

Esconder uma mensagem secreta dentro de um texto visível sem alterar sua aparência.


🧩 Função: Converter mensagem para binário (JavaScript)

Transformar uma string em uma sequência binária (8 bits por caractere), que será usada na esteganografia.

💻 Implementação sugerida

~~~js
function textoParaBinario(mensagem) {
  let resultado = "";

  for (let i = 0; i < mensagem.length; i++) {
    const codigo = mensagem.charCodeAt(i); // código ASCII/Unicode básico
    const binario = codigo.toString(2).padStart(8, "0"); // garante 8 bits
    resultado += binario;
  }

  return resultado;
}
~~~

## 🧪 Atividade: Esteganografia em JavaScript

Implemente duas funções em JavaScript para esconder e recuperar uma mensagem utilizando caracteres invisíveis do Unicode.

### 🎯 Funções

~~~javascript
codifica_esteg(textoVisivel, mensagem)
decodifica_esteg(textoCodificado)
~~~

### 📌 Requisitos

- Converta a `mensagem` para binário (8 bits por caractere)  
- Utilize:
  - `U+200C` (ZWNJ) → bit **0**  
  - `U+200D` (ZWJ) → bit **1**  
- Insira os caracteres invisíveis no `textoVisivel` sem alterar sua aparência  
- A função de decodificação deve recuperar a mensagem original  

### ✅ Exemplo esperado

~~~javascript
const texto = "Hoje teremos aula normal.";
const msg = "OK";

const codificado = codifica_esteg(texto, msg);
const decodificado = decodifica_esteg(codificado);

console.log(decodificado); // "OK"
~~~

---

# ENTREGA: 

1. Entregar o link do github do repositório do projeto
2. O repositório do github deverá conter os códigos em javascript e arquivo ```readme.md```. IMPORTANTE: **Informar todos os integrantes do grupo (RA e NOME COMPLETO) no readme.md**.  
3. A atividade poderá ser realizado em grupo de até 4 integrantes.
4. A entrega deverá ser feita por apenas um integrante do grupo.

> QUE A FORÇA DO JAVASCRIPT ESTEJA COM TODOS!