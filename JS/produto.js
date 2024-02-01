const resgateProduto = document.getElementById('resgate')
let id

const produtoSelecionado = async (objetoResgate, id) =>{
    await fetch(`http://localhost:3000/resgates/${id}`,{
        method:'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objetoResgate)
    })
}


resgateProduto.addEventListener("click", async (evento) =>{
    evento.preventDefault()
    //pegando os dados do formulário
    const nome = resgateProduto.elements['nome'].value
    const imagem = resgateProduto.elements['imagem'].value
    const descricao = resgateProduto.elements['descricao'].value
    const preco = resgateProduto.elements['preco'].value

    const objetoResgate = {
        nome,
        imagem,
        descricao,
        preco
    }
    await resgate(id, objetoResgate)
    window.location = '../HTML/produto.html'
})

const buscaProduto = async (id) =>{
    const resposta = await fetch (`http://localhost:3000/produtos/${id}`)
    const produto = await resposta.json()
    return produto
}

const carregarProdutos = (produto) =>{
    resgateProduto.innerHTML = 
    `
    <div> <img src="${produto.imagem}" /></div>
    <div><span>${produto.descricao}</span></div>

    `
}

const carregarDados = async () =>{
    const parametros = window.location.search
    const objetoParametros = new URLSearchParams(parametros)
    id = objetoParametros.get('id')
    console.log(id)
    
    
    const produto = await buscaProduto(id)
    console.log(produto)
    carregarProdutos(produto)

}

carregarDados()