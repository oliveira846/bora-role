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
    var textBannerp = document.querySelector('#bannerTextop');

    if(a === 'jardimsushi'){
        banner.style.backgroundImage = "url('img/jardimsushi (2).jpg')"
        textBanner.textContent = 'Jardim Sushi'
        textBannerp.textContent = 'Venha experimentar o melhor sushi da cidade, com ingredientes frescos e um ambiente acolhedor que vai te conquistar.'
        linkBanner.href = '/empresas/jardim-sushi.html'
    } else if(a === 'cervejacais'){
        banner.style.backgroundImage = "url('img/ba.jpg')"
        textBanner.textContent = 'Cervejaria Cais'
        textBannerp.textContent = 'Venha experimentar a melhor cerveja da cidade, com ingredientes frescos e um ambiente acolhedor que vai te conquistar.' 
        linkBanner.href = '/empresas/cervejaria-artesanal-cais.html'
    } else if(a === 'dockside'){
        banner.style.backgroundImage = "url('img/dockside.jpg')"
        textBanner.textContent = 'Dockside'
        textBannerp.textContent = 'Melhor restaurante da região com pratos deliciosos e um ambiente incrível para você aproveitar.'
        linkBanner.href = '/empresas/dockside.html'
    }else if(a === 'tocodosamba'){
        banner.style.backgroundImage = "url('img/toco.jpg')"
        textBanner.textContent = 'Toco do Samba'
        textBannerp.textContent = 'O melhor do samba ao vivo todas as noites, com uma atmosfera vibrante e acolhedora para você curtir com os amigos.'
        linkBanner.href = '/empresas/toco-do-samba.html'
    }
}

function nightMode() {
    var element = document.body;
    var hero = document.querySelector('#hero-anuncie');
    var faq = document.querySelector('#faq-section');
    var empresaConteudo = document.querySelector('#empresa_conteudo');

    element.classList.toggle("dark-mode");
    if (faq) faq.classList.toggle("dark-mode");
    if (hero) hero.classList.toggle("dark-mode");
    if (empresaConteudo) empresaConteudo.classList.toggle("dark-mode");
}


