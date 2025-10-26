function conversor_dolar_cents(){
    function inicio(){
        const dolar = Number(document.querySelector('#idolar').value)
        verifica_conteudo(dolar)
    }

    function verifica_conteudo(dolar){
        if (!dolar){
            const input_dolar = document.querySelector('#idolar')
            input_dolar.value = ''
            input_dolar.placeholder = 'Digite um número'
            input_dolar.classList.add('erro-input')
            tabela.style.display = 'none'
        }else{
            mostrar_resultado(dolar)
        }
    }


    function mostrar_resultado(dolar){
        const corpo_tabela = document.querySelector('#corpo-tabela')
        corpo_tabela.innerHTML = "";
        const lista_moedas = [25, 10, 5, 1]
        let centavos = dolar * 100
        
        for (let tipo_moeda of lista_moedas) {
            const tr = document.createElement('tr')
            console.log(centavos, 'centavos')
            let resto = centavos % tipo_moeda
            let qtd_moeda = (centavos - resto) / tipo_moeda
            centavos = resto
            
            if (isNaN(qtd_moeda)){
                mostrar_moeda = 0
            }
            
            tr.innerHTML = `<td>${tipo_moeda}¢</td><td>${qtd_moeda}</td>`
            corpo_tabela.appendChild(tr)
            
        }
        tabela.style.display = 'table'
    }
    
    inicio()
}
const converter = document.querySelector('.btn-converter') 
const tabela = document.querySelector('#tabela-cents')
converter.addEventListener('click', conversor_dolar_cents)