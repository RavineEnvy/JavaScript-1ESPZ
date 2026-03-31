let numero = gerarNumeroAleatorio();
console.log(`Número Aleatório: ${numero}`);

function titulo(id, texto){
    let linha = document.getElementById(id);
    linha.innerHTML = texto;
}

titulo("titulo", "Olá");


function gerarNumeroAleatorio(){
    let num = parseInt(Math.random() * 10 + 1);
    return num;
}

function exibirTarefa(id, titulos, prioridade){
    console.log(`Tarefa #${id}: ${titulos}.(prioridade: ${prioridade})`);
}

console.log(exibirTarefa("1", "JavaScript", "Alta"));

// Função que exibe detalhes de uma tarefa
function exibirTarefa(id, titulo, prioridade) {
  console.log(`Tarefa #${id}: ${titulo} (Prioridade: ${prioridade})`);
}
exibirTarefa(1, "Estudar JavaScript", "alta");

// Função com valores padrão para parâmetros não informados
function criarTarefa(titulo, descricao = "Sem descrição", 
                     prioridade = "média", concluida = false) {
  return {
    id: Date.now(), // Gera um ID único com base no timestamp
    titulo,
    descricao,
    prioridade,
    concluida,
    criada: new Date()
  };
}

const tarefa = criarTarefa("Estudar funções");
console.log(tarefa);

