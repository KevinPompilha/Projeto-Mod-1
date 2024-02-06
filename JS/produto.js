const resgateProduto = document.getElementById('resgate')


const produtoSelecionado = async (objetoResgate, id) =>{
    await fetch(`https://api-culture-code-arnia.onrender.com/resgates/${id}`,{
        method:'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objetoResgate)
    })
}


// resgateProduto.addEventListener("click", async (evento) =>{
//     evento.preventDefault()

//     const nome = resgateProduto.elements['nome'].value
//     const imagem = resgateProduto.elements['imagem'].value
//     const descricao = resgateProduto.elements['descricao'].value
//     const preco = resgateProduto.elements['preco'].value

//     const objetoResgate = {
//         nome,
//         imagem,
//         descricao,
//         preco
//     }
//     await resgate(id, objetoResgate)
//     window.location = '../HTML/produto.html'
// })

const buscaProduto = async (id) =>{
    const resposta = await fetch (`https://api-culture-code-arnia.onrender.com/produtos/${id}`)
    const produto = await resposta.json()
    return produto
}

const carregarProdutos = (produto) =>{
    resgateProduto.innerHTML = 
    `
    <div class="container">
        <div class="img-produto"><img src="${produto.imagem}" /></div>
        <div class="container-produto">
            <div><p class="nome-produto">${produto.nome}</p></div>
            <span class="span-txt">Por: <span class="preco">2<img class="diamante" src="../imagens/diamante.png"></span></span>
            <p class="descricao">${produto.descricao}</p>
            <div class="container-btn"><button class="btn-resgatar">Resgatar</button></div>
        </div>   
    </div>
    <div class="container">
    <div class="img-produto"><img src="${produto.imagem}" /></div>
    <div class="container-produto">
        <div><p class="nome-produto">${produto.nome}</p></div>
        <span class="span-txt">Por: <span class="preco">2<img class="diamante" src="../imagens/diamante.png"></span></span>
        <p class="descricao">${produto.descricao}</p>
        <div class="container-btn"><button class="btn-resgatar">Resgatar</button></div>
    </div>   
</div>
<div class="container">
<div class="img-produto"><img src="${produto.imagem}" /></div>
<div class="container-produto">
    <div><p class="nome-produto">${produto.nome}</p></div>
    <span class="span-txt">Por: <span class="preco">2<img class="diamante" src="../imagens/diamante.png"></span></span>
    <p class="descricao">${produto.descricao}</p>
    <div class="container-btn"><button class="btn-resgatar">Resgatar</button></div>
</div>   
</div>
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