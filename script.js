
let resultado = window.document.getElementById('resultado')


function calcular() {

    let nome = window.document.getElementById('nome').value
    let InputAltura = window.document.getElementById('altura').value
    let altura = parseFloat(InputAltura)
    let InputPeso = window.document.getElementById('peso').value
    let peso = parseFloat(InputPeso) 

    if (nome == '' || altura == '' || peso == ''){
        window.alert('Preencha os campos corretamente.')
    } else {


    let total = peso / (altura * altura)

    resultado.innerHTML= `Olá <b>${nome}</b>. O resultado do seu IMC é <b>${total.toFixed(2)}</b>. `

    let botao = document.createElement('button')
    let resultado2 = document.createElement('div')



    botao.innerHTML = '<p> Se você deseja saber se seu IMC é de uma pessoa saudável ou não, <b>clique Aqui.</b>'
    botao.id = 'newBotao'
    botao.addEventListener ('click', function() { 
        if(total < 18.5) {
            resultado2.innerHTML = 'Seu IMC indica que você está abaixo do peso.'
            resultado.appendChild(resultado2)
        } else if (total >= 18.5 && total < 25) {
            resultado2.innerHTML = 'Seu IMC indica que você está dentro da faixa de peso saudável.'
            resultado.appendChild(resultado2)
        } else if (total >= 25 && total < 30 ) { 
            resultado2.innerHTML = 'Seu IMC indica que você está acima do peso.'
            resultado.appendChild(resultado2)
        }
    })
    
    
    resultado.appendChild(botao)
}
}