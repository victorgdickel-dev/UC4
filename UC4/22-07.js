const ask = require('readline-sync')


/*

Atividade 1

let name = ask.question("Qual o seu nome ? ")
let age = ask.question("Qual a sua idade ? ")

console.log("Meu nome é", name, "e tenho", age, "anos.")

*/

/*

Atividade 2

let num1 = Number(ask.question("Digite um numero de 0 a 10 : "))
let num2 = Number(ask.question("Digite mais um numero de 0 a 10 : "))

console.log("Soma:", (num1 + num2))
console.log("Subtracao:", (num1 - num2))
console.log("Multiplicacao:", (num1 * num2))
console.log("Divisao:", (num1 / num2))

*/

/*

Atividade 3

let question1 = Number(ask.question("Digite uma nota de 0 a 10: "))

function result(question1) {
    if (question1 >= 6) {
        console.log("Aprovado !")
    } else {
        console.log("Reprovado !")
    }
}

result(question1)

*/

/*

Atividade 4

let num = Number(ask.question("Digite um numero qualquer: "))

if (num % 2 === 0) {
    console.log("O número é par.")
} else {
    console.log("O número é ímpar.")
}

*/


/*

Atividade 5

let day = Number(ask.question("Digite um numero de 1 a 7: "));

switch (day) {
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda-feira")
        break
    case 3:
        console.log("Terça-feira")
        break
    case 4:
        console.log("Quarta-feira")
        break
    case 5:
        console.log("Quinta-feira")
        break
    case 6:
        console.log("Sexta-feira")
        break
    case 7:
        console.log("Sábado")
        break
    default:
        console.log("Número inválido! Digite um valor de 1 a 7.")
}

*/

let menu = Number(ask.question(`Escolha um prato do menu atraves dos numeros:\n\n1: Bife a Parmegiana\n2: Strogonoff\n3: Picanha na Chapa\n4: Moqueca Capixaba\n5: Risoto de Camarao\n\nQual o senhor(a) gostaria de degustar ? `));

switch (menu) {
    case 1:
        console.log("R$ 18,90 Filé empanado coberto com molho de tomate e muito queijo gratinado. Geralmente servido com arroz branco e batata frita.")
        break
    case 2:
        console.log("R$ 12,90 Cubos de carne envolvidos em um molho cremoso à base de creme de leite e ketchup. Acompanha arroz e batata palha.")
        break
    case 3:
        console.log("R$ 60,00 Corte nobre de carne bovina grelhado, servido em porções para compartilhar, acompanhado de farofa, vinagrete, pão e mandioca ou batata.")
        break
    case 4:
        console.log("R$ 30,00 Ensopado de peixe com frutos do mar, leite de coco, azeite de dendê, pimentões e temperos. Servido com arroz e pirão.")
        break
    case 5:
        console.log("R$ 40,00 Prato italiano cremoso feito com arroz arbóreo, camarões grelhados, queijo parmesão e um toque cítrico ou de vinho branco.")
        break
    default:
        console.log("Prato não encontrado!")
}
