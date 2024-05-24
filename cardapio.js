document.addEventListener('DOMContentLoaded',function(){
    //Estrutura do projeto:
    class Pizza{
        constructor(){
            this.descricao = "Pizza"
        }

        getDescricao(){
            return this.descricao
        }

        custo(){
            return 0
        }
    }

    //Implementação concreta da interface Componete para Pizza personalizada
    class PizzaPersonalizada extends Pizza{
        constructor(sabor, tamanho, borda){
            super()
            this.descricao = `Sabor: ${sabor} <br><br>Tamanho: ${tamanho} <br><br>Borda: ${borda} <br><br>Itens Extras/Opcionais:`
            this.sabor = sabor
            this.tamanho = tamanho
            this.borda = borda
        }

        custo(){
            let preco = 0
            //Adotando tudo padrão calabresa
            if(this.sabor === "Calabresa"){
                if(this.tamanho === "Brotinho"){
                    preco = 25*0.75
                }else if(this.tamanho === "Padrão"){
                    preco = 25
                }else if(this.tamanho === "Grande"){
                    preco = 25*1.25
                }
                if(this.borda === "Recheada"){
                    preco += 2
                }else if(this.borda === "Recheada Cheddar"){
                    preco += 3
                }else{
                    preco = preco
                }
            }
            
            if(this.sabor === "Margherita"){
                if(this.tamanho === "Brotinho"){
                    preco = 25*0.75
                }else if(this.tamanho === "Padrão"){
                    preco = 25
                }else if(this.tamanho === "Grande"){
                    preco = 25*1.25
                }
                if(this.borda === "Recheada"){
                    preco += 2
                }else if(this.borda === "Recheada Cheddar"){
                    preco += 3
                }else{
                    preco = preco
                }
            }

            if(this.sabor === "Mussarela"){
                if(this.tamanho === "Brotinho"){
                    preco = 30*0.75
                }else if(this.tamanho === "Padrão"){
                    preco = 30
                }else if(this.tamanho === "Grande"){
                    preco = 30*1.25
                }
                if(this.borda === "Recheada"){
                    preco += 2
                }else if(this.borda === "Recheada Cheddar"){
                    preco += 3
                }else{
                    preco = preco
                }
            }

            if(this.sabor === "Portuguesa"){
                if(this.tamanho === "Brotinho"){
                    preco = 35*0.75
                }else if(this.tamanho === "Padrão"){
                    preco = 35
                }else if(this.tamanho === "Grande"){
                    preco = 35*1.25
                }
                if(this.borda === "Recheada"){
                    preco += 2
                }else if(this.borda === "Recheada Cheddar"){
                    preco += 3
                }else{
                    preco = preco
                }
            }

            if(this.sabor === "Frango com catupiry"){
                if(this.tamanho === "Brotinho"){
                    preco = 33*0.75
                }else if(this.tamanho === "Padrão"){
                    preco = 33
                }else if(this.tamanho === "Grande"){
                    preco = 33*1.25
                }
                if(this.borda === "Recheada"){
                    preco += 2
                }else if(this.borda === "Recheada Cheddar"){
                    preco += 3
                }else{
                    preco = preco
                }
            }

            return preco.toFixed(2)
        }
    }

    //Decorator Abstrato
    class Decorator extends Pizza{
        constructor(pizza){
            super()
            this.pizza = pizza
        }

        getDescricao(){
            return this.pizza.getDescricao()
        }

        custo(){
            return this.pizza.custo()
        }
    }


    // Decorator Concretos para adicionar ingredientes extras
    class QueijoExtra extends Decorator{
        constructor(pizza){
            super(pizza)
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br>- Queijo extra`
        }

        custo(){
            return (parseFloat(this.pizza.custo()) + 2.00).toFixed(2)
        }
    }

    class PepperoniExtra extends Decorator{
        constructor(pizza){
            super(pizza)
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br>- Pepperoni extra`
        }

        custo(){
            return (parseFloat(this.pizza.custo()) + 4.00).toFixed(2)
        }
    }

    class BaconExtra extends Decorator{
        constructor(pizza){
            super(pizza)
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br>- Bacon extra`
        }

        custo(){
            return (parseFloat(this.pizza.custo()) + 3.00).toFixed(2)
        }
    }

    class CheddarExtra extends Decorator{
        constructor(pizza){
            super(pizza)
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br>- Cheddar extra`
        }

        custo(){
            return (parseFloat(this.pizza.custo()) + 5.00).toFixed(2)
        }
    }

    class AzeitonaOpcional extends Decorator{
        constructor(pizza){
            super(pizza)
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br>- Azeitona Opcional`
        }

        custo(){
            return (parseFloat(this.pizza.custo()) + 0.00).toFixed(2)
        }
    }

    class AzeiteOpcional extends Decorator{
        constructor(pizza){
            super(pizza)
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br>- Azeite Opcional`
        }

        custo(){
            return (parseFloat(this.pizza.custo()) + 0.00).toFixed(2)
        }
    }

    class OreganoOpcional extends Decorator{
        constructor(pizza){
            super(pizza)
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br>- Oregano Opcional`
        }

        custo(){
            return (parseFloat(this.pizza.custo()) + 0.00).toFixed(2)
        }
    }

    class PimentaOpcional extends Decorator{
        constructor(pizza){
            super(pizza)
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br>- Pimenta Opcional`
        }

        custo(){
            return (parseFloat(this.pizza.custo()) + 0.00).toFixed(2)
        }
    }




    //Simulação da interface de utilização do projeto
    function montarPizza(){

        // Obem o sabor selecionado
        let saborSelecionado = document.querySelector('input[name="sabor"]:checked')
        let sabor = saborSelecionado ? saborSelecionado.value : ''
        
        //Obtem o tamanho selecionado
        let tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked')
        let tamanho = tamanhoSelecionado ? tamanhoSelecionado.value : ''

        //Obtem a borda selecionada
        let bordaSelecionado = document.querySelector('input[name="borda"]:checked')
        let borda = bordaSelecionado ? bordaSelecionado.value : ''

        //Criando Objeto PizzaPersonalizada cin base na seleção do usuário
        let pizzaPersonalizada = new PizzaPersonalizada(sabor, tamanho, borda)

        //Aplicação decorator para ingredientes extras e opcionais selecionados
        //Ingredientes extras
        let queijoExtraCheckbox = document.querySelector('input[name="extra-queijo"]:checked')
        if(queijoExtraCheckbox){
            pizzaPersonalizada = new QueijoExtra(pizzaPersonalizada)
        }
        let baconExtraCheckbox = document.querySelector('input[name="extra-bacon"]:checked')
        if(baconExtraCheckbox){
            pizzaPersonalizada = new BaconExtra(pizzaPersonalizada)
        }
        let pepperoniExtraCheckbox = document.querySelector('input[name="extra-pepperoni"]:checked')
        if(pepperoniExtraCheckbox){
            pizzaPersonalizada = new PepperoniExtra(pizzaPersonalizada)
        }
        let cheddarExtraCheckbox = document.querySelector('input[name="extra-cheddar"]:checked')
        if(cheddarExtraCheckbox){
            pizzaPersonalizada = new CheddarExtra(pizzaPersonalizada)
        }

        //Opcionais
        let azeitonaCheckbox = document.querySelector('input[name="opcionais-azeitona"]:checked')
        if(azeitonaCheckbox){
            pizzaPersonalizada = new AzeitonaOpcional(pizzaPersonalizada)
        }
        let azeiteCheckbox = document.querySelector('input[name="opcionais-azeite"]:checked')
        if(azeiteCheckbox){
            pizzaPersonalizada = new AzeiteOpcional(pizzaPersonalizada)
        }
        let oreganoCheckbox = document.querySelector('input[name="opcionais-oregano"]:checked')
        if(oreganoCheckbox){
            pizzaPersonalizada = new OreganoOpcional(pizzaPersonalizada)
        }
        let pimentaCheckbox = document.querySelector('input[name="opicionais-pimenta"]:checked')
        if(pimentaCheckbox){
            pizzaPersonalizada = new PimentaOpcional(pizzaPersonalizada)
        }
        

        //Obtem custo e descrição da Pizza Personalizada
        let custoTotal = parseFloat(pizzaPersonalizada.custo())
        let pedidoTotal = pizzaPersonalizada.getDescricao()


        //Envia dados do pedido para o pedido.html em JSON
        const pedidoJSON = {
            "descricao": pedidoTotal,
            "total": custoTotal.toFixed(2)
        }
        const pedidoString = JSON.stringify(pedidoJSON)

        //Redirecionar para pedido.html e enviar dados
        window.location.href= `pedido?pedido=${pedidoString}`

        }
    //Chama a função montarPizza quando o botão é clicado
    const button = document.querySelector('button')
    button.addEventListener('click', montarPizza)
    
})