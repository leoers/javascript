const saudacao = 'Opa' // Contexto léxico 1

function exec(){
    const saudacao = 'Fala' // Contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    Peso: 90,
    endereço: {
        logradouro: 'Rua lala',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
console.log(cliente.idade)