
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

function naoEvento(){
    var paragrafoEvento = document.querySelector('#eventoP');
    var tituloEvento = document.querySelector('#eventoH3');
    var notification = document.querySelector('#empresa_notificacao');

    paragrafoEvento.textContent = ''
    tituloEvento.textContent = 'Não temos evento para hoje!'
    notification.style.display = 'none'
}
function simEvento(){
    var paragrafoEvento = document.querySelector('#eventoP');
    var tituloEvento = document.querySelector('#eventoH3');
    var notification = document.querySelector('#empresa_notificacao');

    tituloEvento.textContent = 'Evento!'
    paragrafoEvento.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores accusamus fugiat magni voluptas doloremque est perferendis veritatis nostrum fugit aliquam? Laborum quasi illo, quas dicta rem saepe neque quod similique!'
    notification.style.display = 'block'

}

function principalRole(a){
    var banner = document.querySelector('#principal_role_view');
    var textBanner = document.querySelector('#bannerText');
    var linkBanner = document.querySelector('#linkBanner');

    if(a === 'jardimsushi'){
        banner.style.backgroundImage = "url('img/jardimsushi (2).jpg')"
        textBanner.textContent = 'Jardim Sushi'
        linkBanner.href = '/empresas/jardim-sushi.html'
    } else if(a === 'cervejacais'){
        banner.style.backgroundImage = "url('img/ba.jpg')"
        textBanner.textContent = 'Cervejaria Cais'
        linkBanner.href = '/empresas/cervejaria-artesanal-cais.html'
    } else if(a === 'dockside'){
        banner.style.backgroundImage = "url('img/dockside.jpg')"
        textBanner.textContent = 'Dockside'
        linkBanner.href = '/empresas/dockside.html'
    }else if(a === 'tocodosamba'){
        banner.style.backgroundImage = "url('img/toco.jpg')"
        textBanner.textContent = 'Toco do Samba'
        linkBanner.href = '/empresas/toco-do-samba.html'
    }
}

function nightMode() {
    var element = document.body;
    var hero = document.querySelector('#hero-anuncie')
    var faq = document.querySelector('#faq-section')
    element.classList.toggle("dark-mode");
    faq.classList.toggle("dark-mode");
    hero.classList.toggle("dark-mode");
    }


    // hfjdf