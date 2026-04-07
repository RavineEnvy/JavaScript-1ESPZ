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

console.log("Posição de 'JavaScript':", titulo.indexOf("JavaScript"));