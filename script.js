
function organizarTags(a,b) {
    let todasCaixas = document.querySelectorAll('.empresas_card'); // pega todas
    
    const text = document.querySelector('#filtrado_conteudo');
    text.style.display = 'inline-block'
    text.textContent = b

    todasCaixas.forEach(caixa => {

        

        if (caixa.classList.contains(a)) {
        caixa.style.order = '1'; // mostra os azuis
        } else {
            if (caixa.style.display === 'none'){
            caixa.style.order = '1'
            }else{
            caixa.style.order = '2'; // esconde o resto
        }
        }
    });
}
function resetar(){
    let todasCaixas = document.querySelectorAll('.box');

    todasCaixas.forEach (resetCaixas => {
        resetCaixas.style.order = '2';
    })
}


