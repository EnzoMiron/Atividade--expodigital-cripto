import letrasEntrada from "./tabela.js"  // Importa o array de letras do alfabeto de tabela.js

function cifrarCesar(mensagem, chave) {  // Define a função que cifra uma mensagem usando a cifra de César com uma chave de deslocamento
    let txtCifrado = ""  // Inicializa uma string vazia para armazenar o texto cifrado resultante
    for (let i = 0; i < mensagem.length; i++) {  // Loop que percorre cada caractere da mensagem de entrada
        let letra = mensagem.charAt(i);  // Obtém o caractere atual da mensagem na posição i
        let pos = letrasEntrada.lastIndexOf(letra)  // Encontra a posição (índice) da letra no array letrasEntrada (alfabeto)
        let posCifrada = 0  // Inicializa a variável para a posição cifrada (deslocada)
        let letraCifrada = ""  // Inicializa a string para a letra cifrada
        if (pos != -1) {  // Verifica se a letra foi encontrada no alfabeto (posição diferente de -1)
            if (pos + chave < 0) {  // Se o deslocamento resulta em uma posição negativa (para chaves negativas)
                posCifrada = letrasEntrada.length + pos + chave  // Calcula a posição com wrap-around para o início do alfabeto
            } else {  // Caso contrário (deslocamento positivo ou zero)
                posCifrada = (pos + chave) % letrasEntrada.length  // Calcula a posição com módulo para wrap-around no final do alfabeto
            }
            letraCifrada = letrasEntrada.charAt(posCifrada)  // Obtém a letra correspondente à posição cifrada
        } else {  // Se a letra não está no alfabeto (caractere especial ou não alfabético)
            letraCifrada = letra  // Mantém a letra original sem cifrar
        }
        txtCifrado = txtCifrado + letraCifrada  // Concatena a letra cifrada ao texto resultante
    }
    return txtCifrado  // Retorna o texto completamente cifrado
}

export default cifrarCesar  // Exporta a função como padrão para uso em outros módulos