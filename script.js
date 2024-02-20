let numberOne = Number(prompt("Por favor, insira o primeiro número!"))
let numberTwo = Number(prompt("Por favor, insira o segundo número!"))

let sum = numberOne + numberTwo
let subtraction = numberOne - numberTwo
let multiplication = numberOne * numberTwo
let division = numberOne / numberTwo
let rest = numberOne % numberTwo

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${subtraction}`)
alert(`A multiplicação dos dois números é: ${multiplication}`)
alert(`A divisão dos dois números é: ${division}`)
alert(`o resto da divisão dos dois números é: ${rest}`)

let even = sum % 2

if(even == 0){
    alert(`A soma dos dois números é par: ${sum}.`)
}else{
    alert(`A soma dos dois números é ímpar: ${sum}.`)
}

let same = numberOne == numberTwo

if(same){
    alert("Os números são iguais.")
}else{
    alert("Os números são diferentes.")
}