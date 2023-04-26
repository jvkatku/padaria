let parcial = document.getElementById('parcial')
let total = document.getElementById('total')
let valor_total = document.getElementById('valor_total')
let vetor = document.getElementById('vetor')

let qual_produto = []
let quantidade_produto = []

parcial.addEventListener('click', ()=>{
    let produto = document.getElementById('produto').value
    let quantidade = document.getElementById('quantidade').value

    qual_produto.push(produto)
    quantidade_produto.push(quantidade)

//     let soma = 0.0
//     for(i=0;i<length;i++){
//         soma = soma + (quantidade[i]*produto[i])

// }
console.log('valor_total')
vetor.innerHTML = ''
for(i=0;i<quantidade_produto.length;i++){
    vetor.innerHTML += 'produto: ' + qual_produto[i] + '&emsp;'
    vetor.innerHTML += 'quantidade = ' + quantidade_produto[i]+'<br>'
}

})
    // let Cachorro_Quente  = 7.90   1
    // let Misto_Quente = 5.75    2
    // let Bauru = 11.35    3 
    // let Cheese_Burguer = 14.60  4 
    // let Cheese_Egg = 15.40  5 
    // let Cheese_Frango = 12.90   6
    // let Refrigerante = 4.90   7  
    // let Suco_de_Frutas = 4.30  8  
    // let Café_médio = 3.50  9  
    // let Café_com_Leite = 4.20  10