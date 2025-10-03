document.getElementById('btnCalc').addEventListener('click', calcular);
['num1','operador','num2'].forEach(id => {
  document.getElementById(id).addEventListener('keypress', function(e){
    if (e.key === 'Enter') calcular();
  });
});
function calcular(){
  const n1raw = document.getElementById('num1').value.trim();
  const op = document.getElementById('operador').value.trim();
  const n2raw = document.getElementById('num2').value.trim();
  const resultado = document.getElementById('resultado');
  const n1 = n1raw === '' ? NaN : parseFloat(n1raw);
  const n2 = n2raw === '' ? NaN : parseFloat(n2raw);
  if (isNaN(n1)) { resultado.innerText = '⚠️ Ingresa Número 1 válido'; return; }
  let res;
  switch(op) {
    case '+': res = n1 + n2; break;
    case '-': res = n1 - n2; break;
    case '*': case 'x': case 'X': case '×': res = n1 * n2; break;
    case '/': res = (n2 === 0) ? '⚠️ División por 0' : n1 / n2; break;
    case '^': res = Math.pow(n1, n2); break;
    case '%': res = isNaN(n2) ? '⚠️ Falta el segundo número' : (n1 % n2); break;
    case '√': case 'sqrt': res = (n1 < 0) ? '⚠️ Raíz negativa' : Math.sqrt(n1); break;
    default: resultado.innerText = '⚠️ Operador no válido. Usa + - * / ^ √ %'; return;
  }
  if (typeof res === 'number' && !Number.isInteger(res)) {
    res = parseFloat(res.toFixed(8)).toString();
  }
  resultado.innerText = 'Resultado: ' + res;
}