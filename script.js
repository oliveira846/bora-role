
function organizarTags(a) {
    let todasCaixas = document.querySelectorAll('.empresas_card'); // pega todas
    
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
