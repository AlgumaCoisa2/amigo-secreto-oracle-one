// Armazena os nomes na lista
let listaAmigos = [];

// Atualiza a lista na tela
function atualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listaAmigos.forEach((nome, index) => {
        let li = document.createElement("li");
        li.textContent = nome;

        // Criando um botão de remover
        let btnRemover = document.createElement("button");
        btnRemover.textContent = "❌";
        btnRemover.classList.add("remove-button");
        btnRemover.onclick = () => removerAmigo(index);

        li.appendChild(btnRemover);
        ul.appendChild(li);
    });
}

// Adiciona um amigo à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    listaAmigos.push(nome);
    input.value = "";
    atualizarLista();
}

// Remove um amigo da lista
function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
}

// Sorteia um amigo aleatoriamente
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let nomeSorteado = listaAmigos[indiceSorteado];

    document.getElementById("resultado").innerHTML = 
        `<span class="sorteado">🎉 O amigo secreto é: <strong>${nomeSorteado}</strong>! 🎉</span>`;
}

// Função para limpar o sorteio e reiniciar o jogo
function limparSorteio() {
    document.getElementById("resultado").innerHTML = "";
}
