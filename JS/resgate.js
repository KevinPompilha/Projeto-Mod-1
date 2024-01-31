const resgateProduto = document.getElementById('resgate')

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
//adicionar o evento de clique no botão para chamar a função acima

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