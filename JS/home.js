const getProdutos = async () =>{
    const request = await fetch('https://api-culture-code-arnia.onrender.com/produtos')
    return await request.json()
}

const mostrarCards = async (cards) =>{
    const card = document.getElementById('cards')
    //limpa o container antes de adicionar os novos cards

   cards.forEach(elemento => {
        card.innerHTML +=`
        <div class="container-produto">
            <div class="img-card">
                <img src="${elemento.imagem}" alt="">
            </div>
            <div class="texto-card">
                <span class="descricao-produto">${elemento.nome}</span>
                <p class="valor-joias">2 jóias</p>
            </div>
            <div class="container-btn">
                <button onclick="resgatar('${elemento.id}')">Resgatar</button>
            </div>
        </div>
        `
   });

   }
   const resgatar = (id) =>{
    window.location = `../HTML/produto.html?id=${id}`
   }

   const carregarDados = async () =>{
    const produtos = await getProdutos()
    mostrarCards(produtos)

}
carregarDados()