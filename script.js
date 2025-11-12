
function clicarAoVivo() {
    let cardsAoVivo = document.querySelectorAll('.ao_vivo'); // pega todos com a classe ao_vivo
    
    cardsAoVivo.forEach(card => {
        if (card.style.display === 'none') {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}
