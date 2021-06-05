function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario) {
    console.log(usuario)
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdTelefone = document.createElement("td");
    tdId.innerHTML = usuario.ID
    tdNome.innerHTML = usuario.nome
    tdTelefone.innerHTML = usuario.telefone

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdTelefone);

    return linha;
}

function main() {
    let data = fazGet("http://localhost:3000/clientes");
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    })
}

main()