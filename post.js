function fazPost(url, body){
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}
function fazDelete(url){
    let request = new XMLHttpRequest()
    request.open("DELETE", url, false)
    request.send()
}
function fazPut(url, body){
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("PUT", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}


function cadastraUsuario() {
    event.preventDefault()
    let url = "http://localhost:3000/clientes"
    let nome = document.getElementById("nome").value
    let telefone = document.getElementById("telefone").value
    console.log(nome)
    console.log(telefone)

    body = {
        "nome": nome,
        "telefone": telefone
        
    }

    fazPost(url, body)
    alert("usuario cadastrado")

}

function deletaUsuario(){
    event.preventDefault()
    let id = document.getElementById("id").value
    let url = "http://localhost:3000/clientes/" + id 
    fazDelete(url)
    alert("usuario deletado")
    

}
    
function atualizaUsuario() {
    event.preventDefault()
    let id = document.getElementById("id").value
    let url = "http://localhost:3000/clientes/" + id
    let nome = document.getElementById("nome").value
    let telefone = document.getElementById("telefone").value
    console.log(nome)
    console.log(telefone)

    body = {
        "nome": nome,
        "telefone": telefone
        
    }

    fazPut(url, body)
    alert("usuario atualizado")

}


     