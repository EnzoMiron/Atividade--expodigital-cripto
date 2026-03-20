import { setCodificado, getEntrada, getEntradaCodificado, setSaidaDecodificado } from "./modificadores.js"
import cifrarAtbash from "./cifrarAtbash.js";
import cifrarCesar from "./cifrarCesar.js";
import { cifrarVinagere, DECODIFICAR, CODIFICAR } from "./cifrarVinagere.js";

document.getElementById("btnCifrar").onclick = () => {
    console.log("clicou btnCifrar");
    let entrada = getEntrada()
    let codigo = cifrarAtbash(entrada)
    setCodificado(codigo)
}

const chaveCesar = 1

document.getElementById("btnCifrarCesar").onclick = () => {
    console.log("clicou btnCifrarCesar");
    let entrada = getEntrada()
    let codigo = cifrarCesar(entrada,chaveCesar)
    setCodificado(codigo)
}

document.getElementById("btnDecifrarCesar").onclick = () => {
    console.log("clicou btnDecifrarCesar");
    let entrada = getEntradaCodificado()
    let codigo = cifrarCesar(entrada,-chaveCesar)
    setSaidaDecodificado(codigo)
} 

let chaveVinagere = "ABC"

document.getElementById("btnCifrarVinagere").onclick = () => {
    console.log("clicou btnCifrarVinagere");
    let entrada = getEntrada()
    let codigo = cifrarVinagere(entrada,chaveVinagere,CODIFICAR)
    setCodificado(codigo)
}

document.getElementById("btnDecifrarVinagere").onclick = () => {
    console.log("clicou btnDecifrarVinagere");
    let entrada = getEntradaCodificado()
    let codigo = cifrarVinagere(entrada,chaveVinagere, DECODIFICAR)
    setSaidaDecodificado(codigo)
} 