class ProdutoFlyweight{
    constructor(nome,preco){
        this.nome = nome
        this.preco = preco
    }
}

class ProdutoFactory{
    constructor(){
        this.produtos = {}
    }

    getProduto(nome, preco){
        if(!this.produtos[nome]){
            this.produtos[nome] = new ProdutoFlyweight(nome, preco)
        }

        return this.produtos[nome]
    }
}

const produtoFactory = new ProdutoFactory()

let estoque = {
    "Coca-Cola 350ml": {preco: 7.00 , quantidade: 20},
    "Coca-Cola 2L": {preco: 15.00 , quantidade: 10},
    "Coca-Cola Zero 350ml": {preco: 7.00 , quantidade: 5},
    "Coca-Cola Zero 2L": {preco: 15.00 , quantidade: 8},
    "Guarana 350ml": {preco: 6.50 , quantidade: 30},
    "Guarana 2L": {preco: 14.00 , quantidade: 10},
    "Cerveja Skol 350ml": {preco: 8.00 , quantidade: 20},
    "Suco DelValle Caju - 1L": {preco: 18.00 , quantidade: 5},
    "Suco DelValle Uva - 1L": {preco: 18.00 , quantidade: 15}
}

let carrinho = []

function adicionarProduto(nome){
    if(estoque[nome].quantidade > 0){
        const qtd = 1
        const preco = estoque[nome].preco
        const produto = produtoFactory.getProduto(nome, preco)

        const itemCarrinhoIndex = carrinho.findIndex(item => item.produto.nome === produto.nome)
        if(itemCarrinhoIndex !== -1){
            carrinho[itemCarrinhoIndex].quantidade += qtd
        }else{
            carrinho.push({produto: produto, quantidade: qtd})
        }

        estoque[nome].quantidade--
        atualizarCarrinho()
        atualizarEstoque()
    }else{
        alert("Produto indisponível no estoque :(")
    }
}

function removerProduto(nome){
    carrinho = carrinho.filter(item => item.produto.nome !== nome)
    estoque[nome].quantidade++
    atualizarCarrinho()
    atualizarEstoque()
}

function atualizarCarrinho(){
    const carrinhoCorpo = document.getElementById("carrinho-corpo")

    carrinhoCorpo.innerHTML = ""
    let total = 0
    carrinho.forEach(item => {
        const tr = document.createElement("tr")
        tr.innerHTML = `
            <td>${item.produto.nome}</td>
            <td>R$ ${item.produto.preco}</td>
            <td>${item.quantidade}</td>
            <td><Button class="btn" onClick="removerProduto('${item.produto.nome}')">Remover</Button></td>`
            carrinhoCorpo.appendChild(tr)

            total += item.produto.preco * item.quantidade
    })
    document.getElementById("total").textContent = total.toFixed(2)
}

function atualizarEstoque(){
    const produtoCorpo = document.getElementById("produtos-corpo")

    Object.keys(estoque).forEach(nome =>{
        const tr = produtoCorpo.querySelector(`#${nome.replace(/\s+/g, '')}`)
        const estoqueStatus = estoque[nome].quantidade > 0 ? estoque[nome].quantidade : "Sem estoque"
        tr.cells[2].textContent = estoqueStatus
        if(estoqueStatus === "Sem estoque"){
            tr.classList.add("sem-estoque")
        }else{
            tr.classList.remove("sem-estoque")
        }
    })
}

//Adicionar os produtos na tabela de produtos disponiveis
const produtoCorpo = document.getElementById("produtos-corpo")

Object.keys(estoque).forEach(nome =>{
    const tr = document.createElement("tr")
    tr.id = nome.replace(/\s+/g, '')
    tr.innerHTML = `
        <td>${nome}</td>
        <td>R$ ${estoque[nome].preco.toFixed(2)}</td>
        <td>${estoque[nome].quantidade}</td>
        <td><Button class="btn" onClick="adicionarProduto('${nome}')">Adicionar Produto</Button></td>
    `
    produtoCorpo.appendChild(tr)
})

