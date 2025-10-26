function criaCalculadora(){
    return {
        display: document.querySelector('.display'),

        clearDisplay(){
            this.display.value = ''
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1) 
        },

        realizaConta(){
            let conta = this.display.value
            try{
                conta = eval(conta)
                if (!/^[0-9+\-*/.() ]+$/.test(conta)) {
                    alert('Expressão inválida!')
                    return
                }
            this.display.value = conta
            }catch{
                alert('conta inválida')
            }
        },

        inicia(){
            this.cliqueBotoes()
            this.pressionaEnter()
        },
        
        pressionaEnter(){
            this.display.addEventListener('keypress', e => {
                if (e.keyCode === 13){
                    this.realizaConta()
                }
            })
        },

        cliqueBotoes(){
            document.addEventListener('click', function(e){
              const el = e.target
              if(el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText)
              }  
              if (el.classList.contains('btn-clear')){
                this.clearDisplay()
              }
              if (el.classList.contains('btn-del')){
                this.deleteOne()
              }
              if (el.classList.contains('btn-eq')){
                this.realizaConta()
              }
              this.display.focus()
            }.bind(this))
        },

        btnParaDisplay(valor){
            this.display.value += valor

        },
    }    
}

const calculadora = criaCalculadora()
calculadora.inicia()