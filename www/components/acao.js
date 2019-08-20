
var tmb;
var peso = $("#peso").val();
var idade = $("#idade").val();
var altura = $("#altura").val();
var genero = $("#genero").val();
var ativfisica = $("#ativfisica").val();

$(document).on("click", "#calcular", function(){

  if ("#genero" == "m") {
    tmb = 66 + (13.8 * peso) + (5 * altura) - (6.8 * idade) 
  }
  else {
    tmb = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade) 
  }

  if ("#ativfisica" == "1.2") {
    (tmb * 1.2)
  }
   else if ("#ativfisica" == "1.375") {
    (tmb * 1.375)
  }
  else if ("#ativfisica" == "1.55") {
    (tmb * 1.55)
  }
  else if ("#ativfisica" == "1.725") {
    (tmb * 1.725)
  }
  else {
    (tmb * 1.9)
  }

$("#resultado").val(tmb); 
});
