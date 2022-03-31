import {calculaDelta, calculaBhaskara} from './js/funcoes.js';

function chamaFuncao(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let delta = calculaDelta(a,b,c);
    console.log(delta);
    let bhaskara = calculaBhaskara(a,b,delta);
    console.log(bhaskara);
    document.getElementById("delta").value = delta;
    document.getElementById("x").value = bhaskara.x;
    document.getElementById("x2").value = bhaskara.x2;

}

document.getElementById("btn").addEventListener('click', chamaFuncao);