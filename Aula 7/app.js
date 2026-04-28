// // Array literal (forma mais comum)
// const tarefas = [
//   "Estudar JavaScript",
//   "Criar projeto TaskMaster",
//   "Preparar apresentação",
//   "Revisar código"
// ];
// console.log("Array de tarefas:", tarefas);

// // Usando o construtor Array
// const categorias = new Array("Trabalho", "Estudo", "Pessoal", "Projetos");
// console.log("Array de categorias:", categorias);

// // Array.of (ES6)
// const prioridades = Array.of("Baixa", "Média", "Alta");
// console.log("Array de prioridades:", prioridades);

// // Array.from (ES6) - cria array a partir de uma string
// const letras = Array.from("TaskMaster");
// console.log("Array de letras:", letras);

// // Acesso por índice
// console.log("Primeira tarefa:", tarefas[0]);
// console.log("Última tarefa:", tarefas[tarefas.length - 1]);

// // Modificando um elemento
// tarefas[2] = "Preparar apresentação sobre Arrays";
// console.log("Após modificação:", tarefas);

// // Métodos para adicionar e remover elementos

// tarefas.push("Testar aplicação");    // Adiciona no final
// console.log("Após push:", tarefas);

// const removido = tarefas.pop();         // Remove o último
// console.log("Removido com pop:", removido);
// console.log("Após pop:", tarefas);

// tarefas.unshift("Planejar sprint");      // Adiciona no início
// console.log("Após unshift:", tarefas);

// const removidoInicio = tarefas.shift();  // Remove o primeiro
// console.log("Removido com shift:", removidoInicio);
// console.log("Após shift:", tarefas);

// const removidoIndiceEspecífico = tarefas.splice(1,1);  
// // Remove 1 elemento a partir do índice 1
// console.log("Removido com splice:", removidoIndiceEspecífico);
// console.log("Após splice (remoção):", tarefas);

// // Adicionando elementos com splice
// tarefas.splice(2, 0, "Nova tarefa inserida");
// // A partir do índice 2, remove 0 elementos e insere "Nova tarefa inserida"
// console.log("Após splice (adição):", tarefas);

// // Substituindo elementos com splice
// tarefas.splice(1, 1, "Tarefa substituída");
// // A partir do índice 1, remove 1 elemento e insere "Tarefa substituída" no lugar
// console.log("Após splice (substituição):", tarefas);

// // forEach: Executa uma função para cada elemento
// tarefas.forEach((t, i) => {
//   console.log(`${i + 1}. ${t}`);
// });

// // map: Cria um novo array transformando cada elemento
// const tarefasEmMaiusculo = tarefas.map(t => t.toUpperCase());
// console.log("Tarefas em maiúsculas:", tarefasEmMaiusculo);

// // filter: Retorna um array com os elementos que passam no teste
// const tarefasComA = tarefas.filter(t => t.toLowerCase().includes("a"));
// console.log("Tarefas que contêm 'a':", tarefasComA);

// // find: Retorna o primeiro elemento que atende à condição
// const tarefaEncontrada = tarefas.find(t => t.includes("sprint"));
// console.log("Tarefa encontrada:", tarefaEncontrada);

// // findIndex: Retorna o índice do primeiro elemento que atende à condição
// const indiceEncontrado = tarefas.findIndex(t => t.includes("sprint"));
// console.log("Índice encontrado:", indiceEncontrado);

// // reduce: Reduz o array a um único valor (ex: soma dos comprimentos)
// const somaComprimentos = tarefas.reduce((total,t) => total + t.length, 0)
// console.log(somaComprimentos)

// // some: Verifica se algum elemento satisfaz a condição
// const existeTarefaCurta = tarefas.some(t => t.length < 10);
// console.log("Existe tarefa com menos de 10 caracteres?", existeTarefaCurta);

// // every: Verifica se todos os elementos satisfazem a condição
// const todasTarefasLongas = tarefas.every(t => t.length > 5);
// console.log("Todas as tarefas têm mais de 5 caracteres?", todasTarefasLongas);

// // sort: Ordena o array (alfabeticamente por padrão)
// const tarefasOrdenadas = [...tarefas].sort();
// console.log("Tarefas ordenadas:", tarefasOrdenadas);

// // reverse: Inverte a ordem dos elementos
// const tarefasInvertidas = [...tarefas].reverse();
// console.log("Tarefas invertidas:", tarefasInvertidas);

// // flat: Achata um array de arrays
// const arrayAninhado = [["Tarefa 1", "Tarefa 2"], ["Tarefa 3", "Tarefa 4"]];
// const arrayAchatado = arrayAninhado.flat();
// console.log("Array achatado:", arrayAchatado);

// // flatMap: Aplica um mapeamento e achata o resultado
// const frases = ["JavaScript é incrível", "Arrays facilitam o trabalho"];
// const palavras = frases.flatMap(frase => frase.split(" "));
// console.log("Palavras extraídas com flatMap:", palavras);

// Criação de objeto usando sintaxe literal
const tarefa = {
  id: 1,
  titulo: "Aprender sobre objetos",
  descricao: "Estudar propriedades e métodos",
  concluida: false,
  prioridade: "alta",
  dataCriacao: new Date()
};
console.log("Objeto tarefa:", tarefa);
console.log("Título (ponto):", tarefa.titulo);
console.log("Prioridade (colchetes):", tarefa["prioridade"]);

// Objeto com nomes especiais (acessados com colchetes)
const tarefaEspecial = {
  "nome da tarefa": "Tarefa com espaço",
  "data-criacao": "2025-01-01"
};
console.log("Nome especial:", tarefaEspecial["nome da tarefa"]);

const projetoTaskMaster = {
  nome: "TaskMaster",
  version: "1.0",
  autor: "Curso JavaScript",
  tarefas: [],
  adicionarTarefa(titulo, prioridade = "média") {
    const novaTarefa = {
      id: this.tarefas.length + 1,
      titulo,
      prioridade,
      concluida: false,
      criada: new Date()
    };
    this.tarefas.push(novaTarefa);
    console.log(`Tarefa "${titulo}" adicionada.`);
    return novaTarefa;
  },
  listarTarefas() {
    console.log(`Projeto ${this.nome} - Lista de Tarefas:`);
    this.tarefas.forEach(t => console.log(`- ${t.id}: ${t.titulo} (${t.prioridade})`));
  }
};

projetoTaskMaster.adicionarTarefa("Estudar Objetos", "alta");
projetoTaskMaster.adicionarTarefa("Criar interface");
projetoTaskMaster.listarTarefas();

// Iterando com for...in
console.log("Propriedades do objeto tarefa:");
for (let prop in tarefa) {
  console.log(`${prop}: ${tarefa[prop]}`);
}

// Object.keys e Object.values
console.log("Chaves:", Object.keys(tarefa));
console.log("Valores:", Object.values(tarefa));

// Desestruturação de Arrays

const prioridades = ["baixa", "média", "alta"];
// Extraindo valores com destructuring
const [baixa, media, alta] = prioridades;
console.log("Baixa:", baixa);
console.log("Média:", media);
console.log("Alta:", alta);

// Uso do rest pattern para capturar o restante dos elementos -- Spread Operator
const [primeiraCat, ...outrasCats] = ["Trabalho", "Estudo", "Pessoal", "Saúde"];
console.log("Categoria principal:", primeiraCat);
console.log("Outras categorias:", outrasCats);