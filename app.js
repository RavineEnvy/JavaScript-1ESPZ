let idade = 19

let statusIdade = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(statusIdade);
alert(statusIdade)

let valor = null; //se eu colocar um nome será exibido o nome.

let resultado = valor ?? "valor padrão";

console.log(resultado)

//Operadores de Comparação
let a = 5, b = 10;

console.log(a == b);   // false (igualdade)
console.log(a === b);  // false (igualdade estrita)
console.log(a != b);   // true (diferente)
console.log(a !== b);  // true (diferente estrito)
console.log(a < b);    // true (menor que)
console.log(a > b);    // false (maior que)
console.log(a <= b);   // true (menor ou igual)
console.log(a >= b);   // false (maior ou igual)

//Operadores Lógicos

let idade2 = 25;
let temCarteira = true;

//AND (&&) - ambas condições devem ser verdadeiras
if (idade2 >= 18 && temCarteira) {
    console.log("Pode dirigir");
}

//OR (||) - pelo menos uma condição deve ser verdadeira
if (idade2 < 18 || !temCarteira) {
    console.log("Não pode dirigir");
}

//NOT (!) - inverte o valor booleano
if (!temCarteira) {
    onsole.log("Precisa de carteira");
}

//Estruturas Condicionais (if / else)

let tarefaConcluida = true;

if (tarefaConcluida) {
    console.log("A tarefa está concluída!");
}

let prioridade = 1; // 1: baixa, 2: média, 3: alta

if (prioridade === 1) {
    console.log("Prioridade Baixa");
} else if(prioridade === 2){
   console.log("Prioridade Média");
   }else if(prioridade === 3){
    console.log("Prioridade Alta");
}else{
    console.log("Prioridade Desconhecida");
}

//console.log(prioridade === 3 ? "Prioridade Alta" : "Prioridade é baixa");

//Switch Case

let diaSemana = new Date().getDay()

console.log(diaSemana)

switch (diaSemana) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
         console.log("Segunda");
         break;
    case 2:
        console.log("Terça");
        break;
    case 3:
        console.log("Quarta");
        break;
    case 4:
         console.log("Quinta");
        break;
    case 5:
         console.log("Sexta");
        break;
    case 6:
        console.log("Sábado");
        break;

    default:
        break;
}


// listaNomesSemana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta,","Sábado"]

// function verificarDiaSemana(a){
//     console.log(listaNomesSemana[a])
// }

// console.log(verificarDiaSemana(new Date().getDay()))

// verificarDiaSemana(diaSemana,listaValorDia,listaNomesSemana)

//Loops (for, while, do/while)

for(let i = 0; i<5; i++){
    console.log("contagem: ", i);
}

let contador = 0

while(contador >= -5){
    console.log("Contagem: " + contador)
    contador--;
}
let num = 5;
do{
    onsole.log("Número é: ", num)
    num --;
}while(num > 0)

//Exercício 1: Condicional de Acesso
//Crie uma variável nivelAcesso (1, 2 ou 3). Se o acesso for 3, exiba "Acesso Total"; se for 2, exiba "Acesso Parcial"; senão, exiba "Acesso Negado".

let valorDeAcesso = 2;

if(valorDeAcesso === 1){
    console.log("Acesso Negado!");
}else if(valorDeAcesso === 2){
    console.log("Acesso Parcial!");
}else if(valorDeAcesso === 3){
    console.log("Acesso Total!");
}else{
    console.log("Tentativa não reconhecida!");
}

//Exercício 2: Avaliação de Notas
//Crie uma variável nota. Use o switch para avaliar:

let nota = 10;

switch (nota) {

    case 10:
        console.log("Nota Máxima!")
        break;
    case nota>7:
        console.log("Muito Bom!")
    break;
    case nota > 5:
        console.log("Bom!")
    break;
    case nota = 5:
        console.log("Regular!")
    break;
    case nota < 5:
        console.log("Nota insuficiente!")
    break;

    default:
        break;
}

//Exercício 3: Listando Números Pares
//Use um for para exibir apenas os números pares de 1 a 10 no console.

for(i = 0; i <= 10; i++ ){
    if( i % 2 === 0 ){
        console.log("Par: ", i);
    }
}
