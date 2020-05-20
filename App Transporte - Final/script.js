function formataMoeda(numero){
  return numero.toFixed(2).replace (".", ",")
  
}

function calcular() {
  
  distancia=inputDistancia.value
  tempo=inputTempo.value
  valorcorrida=2+distancia*1.4+tempo*0.26
  botaoCalcular.innerHTML='Sua corrida deu: R$' +  formataMoeda(valorcorrida)
   
}