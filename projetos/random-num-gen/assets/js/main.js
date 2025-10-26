const btn_gerar = document.querySelector('#btn-gerar')

function rand_num_gen(){
    const minimo = document.querySelector('#imin').value
    const maximo = document.querySelector('#imax').value
    const rand_num = Math.round(Math.random() * (maximo - minimo) + minimo)
    return rand_num
}

function add_result(){ 
    const rand_num = rand_num_gen()
    const resultado = document.querySelector('#resultado')
    resultado.innerText = `${rand_num}`
}

btn_gerar.addEventListener('click', add_result)