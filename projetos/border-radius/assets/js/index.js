const esq_cima = document.querySelector('#esq-cima input')
const dir_cima = document.querySelector('#dir-cima input')
const esq_baixo = document.querySelector('#esq-baixo input')
const dir_baixo = document.querySelector('#dir-baixo input')
const caixa_border = document.querySelector('main')
const caixa_conteudo = document.querySelector('#caixa-conteudo')

let valor


function alterar_input(e) {
    const valor_e = e.target.value
    valor = valor_e
    esq_cima.value = valor_e
    dir_cima.value = valor_e
    esq_baixo.value = valor_e
    dir_baixo.value = valor_e
    border_radius()
}

function border_radius(){ 
    caixa_border.style.borderRadius = `${valor}px`
    if(valor){
        caixa_conteudo.innerHTML = `border-radius: ${valor}px`
    }else{
        caixa_conteudo.innerHTML = ''
    }
}



esq_cima.addEventListener('input', alterar_input)
dir_cima.addEventListener('input', alterar_input)
esq_baixo.addEventListener('input', alterar_input)
dir_baixo.addEventListener('input', alterar_input)