
//soma.addEventListener('click', function(){
  //  var num1 = parseFloat(document.getElementById('num1').value);
    //var num2 = parseFloat(document.getElementById('num2').value);
    //var resultado = num1 + num2;
    //alert("O resultado da soma é: " + resultado);
   
//});
//sub.addEventListener('click', function(){
   // var num1 = parseFloat(document.getElementById('num1').value);
   // var num2 = parseFloat(document.getElementById('num2').value);
   // var resultado = num1 - num2;
  //   alert("O resultado da subtração é: " + resultado);
//});
//multi.addEventListener('click', function(){
  //  var num1 = parseFloat(document.getElementById('num1').value);
  //  var num2 = parseFloat(document.getElementById('num2').value);
  //  var resultado = num1 * num2;
  //  alert("O resultado da subtração é: " + resultado);
//});
//div.addEventListener('click', function(){
  //  var num1 = parseFloat(document.getElementById('num1').value);
  //  var num2 = parseFloat(document.getElementById('num2').value);
 //   var resultado = num1 / num2;
  //  if (num2 === 0) {
  //      alert("Divisão por zero não é permitida.");
  //      return;
  //  }
  //  alert("O resultado da subtração é: " + resultado);
//});

function somar(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 + num2;
    alert("O resultado da soma é: " + resultado);
};

function subtrai(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 - num2;
    alert("O resultado da subtração é: " + resultado);

};

function multiplicar(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 * num2;
    alert("O resultado da subtração é: " + resultado);
};
function dividir(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 / num2;
    if (num2 === 0) {
        alert("Divisão por zero não é permitida.");
        return;
    }
    alert("O resultado da subtração é: " + resultado);
};

