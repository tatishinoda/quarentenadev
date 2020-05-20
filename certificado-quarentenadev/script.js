function gerar(){
  //a biblioteca exige que haja a repetição 1.000.000 de vezes
  contador=1000000
  //contador de repetições
  while(contador>0){
    contador=contador-1
    codCertificado= emitirCertificado(inputNome.value) 
  }
  
  //lista de links
  listaLink=[
    'https://codepen.io/tatishinoda/pen/MWaoMXq',
    'https://codepen.io/tatishinoda/pen/NWGgdxg',
    'https://codepen.io/tatishinoda/pen/abvJboo',
    'https://codepen.io/tatishinoda/pen/NWGrPEM',
    'https://codepen.io/tatishinoda/pen/xxwVrxW',
    'https://codepen.io/tatishinoda/pen/ZEbbNJL', 
    'https://codepen.io/tatishinoda/pen/XWmmXMm'      
  ]
  //lista de titulos
   titulo=[
     'App de Transporte',
     'Botão de Like',
     'Loteria App',
     'Ficha Médica',
     'Mini Currículo',
     'Calculadora de App', 
     '#QuarentenaDev - Aula 3'    
  ]
  
  //contador de links e definição de variável
  contalink=0
  listaLinkfinal=''
  
  //repetição para a quantidade de items da lista
  while(contalink<7){
    link=listaLink[contalink]
    linkTitulo=titulo[contalink]
    listaLinkfinal= `<li><a href="${link}" target="_blank">${linkTitulo}</a></li>` + listaLinkfinal      
    contalink=contalink+1
  }
  
  //exibe o código que está pronto na biblioteca
 document.body.innerHTML=`${codCertificado}
  <ol>
   ${listaLinkfinal}
  </ol>
  `
 print();
}