const input = document.querySelector("#data");
const button = document.querySelector("#calc")
const num = document.querySelector("#num")
const soma = document.querySelector("#soma")
const media = document.querySelector("#Media")
const desvio = document.querySelector("#dp")



button.addEventListener("click", DP)

function dados(){

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
nDados = []
    dados().forEach((dado) => {
        Ndados.push(Math.pow(dado - Ma(), 2));
    })

    return Ndados

}

function dividir(){
    nQuadrado();
    
    return somar(Ndados) / dados().length
}

function nRaiz(){

    return Math.sqrt(dividir())
}

function DP(){
    num.innerHTML = dados().length;
    media.innerHTML = Ma();
    soma.innerHTML = somar(dados());
    desvio.innerHTML = nRaiz();

}

