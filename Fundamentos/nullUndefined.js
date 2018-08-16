let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) //vai dar Erro!

const produto = {/*preco: 3,99 */} // para virar booleano
console.log(produto.preco)
console.log(!!produto.preco)