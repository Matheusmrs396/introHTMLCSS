import {calculaDelta, calculaBhaskara} from './funcoes.js';

function chamaFuncao() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let delta = calculaDelta(a, b, c);
    if (delta < 0) {
      document.getElementById("result").style.display = "none";
      document.getElementById("semRaiz").style.display = "block";
    } else {
      let bhaskara = calculaBhaskara(a, b, delta);
      document.getElementById("delta").value = delta;
      document.getElementById("x").value = bhaskara.x;
      document.getElementById("semRaiz").style.display = "none";
      if(bhaskara.x2){
        document.getElementById("x2").value = bhaskara.x2;
      }else{
        document.getElementById("x2").style.display ="none";
        document.getElementById("spanX2").style.display ="none";
      }
      document.getElementById("result").style.display ="block";
    }
}

window.onload = function () {
    document.getElementById("result").style.display = "none";
    document.getElementById("semRaiz").style.display = "none";
  };

document.getElementById("btn").addEventListener('click', chamaFuncao);