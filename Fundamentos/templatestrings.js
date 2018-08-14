const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
Olá
${nome}!` //adicionando a tag dolar, ele faz a interpolação e faz a concatenação da string para leitura do código
console.log(concatenacao)
console.log(template)


console.log(`1 + 1 =  ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up("cuidado")}!`)