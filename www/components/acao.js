$(document).on("click", "#calcular", function(){

var tmb;
var peso = $("#peso").val();
var idade = $("#idade").val();
var altura = $("#altura").val();
var genero = $("#genero").val();
var ativfisica = $("#ativfisica").val();

  if (genero == "m") {
    tmb = ativfisica * (66 + (13.8 * peso) + (5 * altura) - (6.8 * idade)) 
  }
  else {
    tmb = ativfisica * (655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade))
  }

$("#resultado").val(tmb); 
});
