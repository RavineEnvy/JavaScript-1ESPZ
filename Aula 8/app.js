function textoTela(id,texto){
    let conteudo = document.getElementById(id);
    conteudo.innerHTML = texto;
}

textoTela("h1","Bom dia");

// const titulo = document.querySelector('h1');
// titulo.textContent = 'Novo Título'; // Altera o texto interno

// const div = document.querySelector('#container');
// div.innerHTML = 'Novo parágrafo com HTML';

// let divContainer = document.getElementById("container")
const divContainer = document.querySelector("#container");
console.log(divContainer);

divContainer.innerHTML = "<a>div foda</a>";

const imagemDiv = document.querySelector("img");
imagemDiv.setAttribute("src" ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_VpR5xvv3MvralHadXiQ5hLHG_Hv63Py9hw&s");


const caixa = document.querySelector(".box");

caixa.style.width = "100px";
caixa.style.height = "100px";
caixa.style.backgroundColor = 'lightgreen';
caixa.style.border = '2px solid black';
caixa.computedStyleMap.backgroundColor = "lightgreen";

caixa.classList.add("oculto");
caixa.classList.remove("oculto");

const botao = document.getElementById("botao");
botao.addEventListener("click", ()=> {
    caixa.classList.toggle("oculto");
})

const novoItem = document.createElement("li");

novoItem.textContent = "Novo item";

document.querySelector("ul").appendChild(novoItem);
novoItem.remove()

document.querySelector("#addItem").addEventListener("click", ()=>{
    const novoItem2 = document.createElement("li")
    novoItem2.textContent = "Olá"
    document.querySelector("ul").appendChild(novoItem2)
})

localStorage.setItem("nome", "João");
localStorage.setItem("nome2", "Guilherme");
localStorage.setItem("nome3", "Arthur");

console.log(localStorage.getItem("nome"))

const usuario = {nome: "Guilherme", idade: "25"};
localStorage.setItem("usuário", JSON.stringify(usuario))

const valorRecuperado = JSON.parse(localStorage.getItem("usuário"))
console.log(valorRecuperado)
console.log(valorRecuperado.nome)

// localStorage.removeItem("nome")

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

const renderizarTarefas = ()=> {
    const lista = document.getElementById("lista-tarefas");
    lista.innerHTML = "";
    tarefas.forEach((t)=>{
        const li = document.createElement("li")
        li.textContent = t
        lista.appendChild(li)
    })
}

renderizarTarefas()

const addtarefa = () =>{
    const input = document.getElementById("inputTarefa");
    tarefas.push(input.value);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    input.value = "";
    renderizarTarefas();
}

document.getElementById("form-tarefa").onsubmit = (event) => {
    event.preventDefault();
    addtarefa()
}



const limpar = ()=> {
    tarefas = [];
    localStorage.removeItem("tarefas")
    renderizarTarefas()
}

document.getElementById("btn-limpar").onclick = () => {
    limpar();
}

