let titulo = "aprender JavaScript";
let descricao = "Estudar manipulação de strings";

console.log("Título: ", titulo);
console.log("Descrição: ", descricao);

// Comprimento da string
console.log("Comprimento do título: ", titulo.length);

// Acesso a caracteres individuais
console.log("Primeiro caractere: ", [titulo[0]]);

console.log("Último caractere: ", titulo[titulo.length -1]);

console.log("Caractere na posição 7: ", titulo.charAt(7)); //É a mesma coisa que usar [], ou sejá, não compensa usar

let categoria = "Estudo";
let infoCompleta = "Categoria: " + categoria + " - " + titulo;

console.log(infoCompleta);

console.log("Concatenação tradicional: ", infoCompleta);

// Template Strings (ES6+)
let dataCriacao = "01/06/2025";
let resumo = `Tarefa: ${titulo} (${categoria})
Criada em: ${dataCriacao}
Descrição: ${descricao}`;

console.log("Template String: ");
console.log(resumo);

console.log("Posição de 'JavaScript':", titulo.indexOf("JavaScript")); // Entrega exatamente o Index de onde começa a String selecionada dentro do texto.

console.log("'JavaScript' está ´resemte? ", titulo.includes("JavaScript")); // Vai verificar se essa combinação de caracteres existe, e se existir ele retorna valor True.

console.log("Começa com 'Aprender'?", titulo.startsWith("Aprender")); // Verifica se a String começa com essa combinação de caracteres.
console.log("Começa com 'Aprender'?", titulo.endsWith("Script")); // Verifica se a String termina com essa combinação de caracteres.

// Função que trunca uma string se ela for maior que um tamanho máximo
const truncarDescricao = (texto, maxLength = 30) => {
    if(texto.length <= maxLength){
        return texto;
    }
    return texto.substring(0,maxLength) + "..."; //substring - A partir do índice 0 (nesse caso) até o maxLength (neste caso 30) ele vai concatenar a próxima String.
}

let descricaoLonga = "Este é um exemplo de uma descrição muito longa que precisará ser truncada para exibição.";

console.log(descricaoLonga.length);
console.log(`Variável original: ${descricaoLonga}`);
console.log("Descrição truncada: ", truncarDescricao(descricaoLonga));
console.log("Descrição truncada (20 caracteres):", truncarDescricao(descricaoLonga, 20));

// Slice é usado para apagar uma String a partir de determinado índice, podendo escolher quantos caracteres serão apagados a partir desse índice.
let texto = "JavaScript é incrível!";
console.log("Original:", texto);
console.log("slice(0, 10):", texto.slice(0, 10)); // "JavaScript"
console.log("substring(0, 10):", texto.substring(0, 10)); // "JavaScript"


// Split usa um caractere escolhido para usar ele como uma maneira de separar Arrys. (Transforma String em Array - Lista)
let tags = "javascript,programação,web,frontend";
let arrayTags = tags.split(",");
console.log("Array de tags:", arrayTags);

// Join é usado para transformar em String, basicamente o contrário de Split
let listaTarefas = ["Estudar JS", "Criar TaskMaster", "Testar aplicação"];
let textoTarefas = listaTarefas.join(" - ");
console.log("Lista de tarefas formatada:", textoTarefas);


// Exibindo constantes.
console.log("Math.PI:", Math.PI); // Exibe o valor de PI.
console.log("Math.E:", Math.E); // Exibe a bale de numeros logaritimos naturais.

// Cálculo da área de um círculo.
const raio = 5;
const areaCirculo = Math.PI * Math.pow(raio, 2); //Eixo X e Y. 
console.log(`Área de um círculo com raio ${raio}: ${areaCirculo}`);


const numero = 9.7;
console.log("Math.round(9.7):", Math.round(numero)); // Faz um arredondamento pra cima
console.log("Math.floor(9.7):", Math.floor(numero)); // Faz um arredondamento para baixo
console.log("Math.ceil(9.7):", Math.ceil(numero)); // Faz um arredondamento pra cima
console.log("Math.trunc(9.7):", Math.trunc(numero)); // Ele exclui os números decimais

const pi = Math.PI;
console.log("Pi com 2 casas decimais:", pi.toFixed(2)); // Retorna o número de casa decimais escolhido.


// Data atual
const hoje = new Date();
console.log("Data atual:", hoje.toString());

// Data a partir de string ISO
const dataISO = new Date("2025-06-15T10:30:00");
console.log("Data a partir de string ISO:", dataISO);

// Data a partir de componentes (mês: 0 a 11)
const dataComponentes = new Date(2025, 5, 15, 10, 30, 0);
console.log("Data a partir de componentes:", dataComponentes);


// Função para formatar data no formato "DD/MM/AAAA"
function formatarData(data) {
  const dia = data.getDate().toString();
  const mes = (data.getMonth() + 1).toString();
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

console.log("Data formatada:", formatarData(hoje));

// Função para adicionar dias a uma data
function adicionarDias(data, dias) {
  const novaData = new Date(data);
  novaData.setDate(data.getDate() + dias);
  return novaData;
}

const amanha = adicionarDias(hoje, 1);
console.log("Amanhã:", formatarData(amanha));


// Diferença entre duas datas (em milissegundos) e conversão para dias
const dataInicial = new Date(2025, 0, 1);
const dataFinal = new Date(2025, 11, 31);
const diferencaMs = dataFinal - dataInicial;
const diferencaDias = Math.ceil(diferencaMs / (1000 * 60 * 60 * 24));
console.log("Diferença em dias:", diferencaDias);
