let names = []

let input = document.querySelector('.nomes')
let container = document.querySelector('.container')
let text = document.querySelector('#listNames')
console.log(text.placeholder)

function getNames() {
  values = text.value ? text.value : text.placeholder
  names = values.split(',')
  buildMessagesList(names)
}

function setupMessage(nome) {
  return `<p>Oie, feliz ano novo ${nome}!!!</p>
<p>Boaaa noite! to passando para lhe agradecer por ter feito parte do meu *2021*, por estar presente em alguns momentos
  que precisei,
*obrigado pela amizade, carinho comigo e minha família!*</p>

<p>Bom, quero te desejar um *FELIZ 2022*, que esse ano possa ser diferente de todos os últimos, que seja um ano de
*COLHEITAS*! Que possamos colher todos nossos frutos, esforços, perseverança e fé!</p>

<p>Como eu vi no Insta, que é lua minguante ¯\\_(ツ)_/¯ e era pra ter *cuidado* ao que se pedia/desejava. não custa
  tentar
né! rsrs</p>

Então desejo que esse ano mingue, todas as coisas que nos impedem de *progredir, de amar e ter fé*! Que mingue todos
nossos *medos*, tudo que nos impede de sermos felizes e principalmente tudo que está atrapalhando nossa *prosperidade
financeira* rsrs. </p>

<p>Enfim, se cuida, boas festas, muito amor, paz e saúde ♥️</p>

<p>_Att, Will Will_</p>

---------

`
}

function clearMessage() {
  container.innerHTML = ''
}

function buildMessagesList(list) {
  list.map((name) => {
    container.innerHTML += setupMessage(name)
  })
}

function makeMessage() {
  getNames()
}
