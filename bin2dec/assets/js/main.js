const form = document.querySelector('#form-conversor')
const resultado = document.querySelector('#resultado')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const input_binario = form.querySelector("#ibinario").value
    const bin_para_decimal = parseInt(input_binario, 2)
    if (!/^[01]+$/.test(input_binario)) {
        resultado.innerHTML = 'DIGITE UM NÚMERO BINÁRIO'
        resultado.classList.add('erro')
    }else{
        resultado.classList.remove('erro')
        resultado.innerHTML = bin_para_decimal
    }
})