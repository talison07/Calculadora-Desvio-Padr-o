const input = document.querySelector("#data");
const button = document.querySelector("#calc");
const num = document.querySelector("#num");
const soma = document.querySelector("#soma");
const media = document.querySelector("#media");
const potencias = document.querySelector("#potencias");
const SMpotencias = document.querySelector("#SMpotencias");
const divisao = document.querySelector("#divisao");
const desvio = document.querySelector("#dp");



button.addEventListener("click", DP)

function dados() {

    return JSON.parse((`[${input.value}]`))
}

function somar(dados) {
    let total = 0;

    for (let i = 0; i < dados.length; i++) {
        total += dados[i]
    }

    return total
};


function Ma() {

    return (somar(dados())) / dados().length
};


let Ndados = [];

function nQuadrado() {
    Ndados = []

    dados().forEach((dado) => {
        Ndados.push(Math.pow(dado - Ma(), 2));
    })

    return Ndados

}

function dividir() {
    nQuadrado();

    return somar(Ndados) / dados().length
}

function nRaiz() {

    return Math.sqrt(dividir())
}

function DP() {
    nQuadrado();

    num.innerHTML = dados().length;
    soma.innerHTML = somar(dados());
    potencias.innerHTML = Ndados.map(dado => dado = " " + dado.toFixed(2));
    SMpotencias.innerHTML = somar(Ndados).toFixed(4);
    divisao.innerHTML = dividir().toFixed(2);
    media.innerHTML = Ma().toFixed(2);
    desvio.innerHTML = nRaiz().toFixed(4);

}

