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
    var mediaIcon = document.querySelector('#medias i');
    var nightProximoRole = document.querySelector('.role_card')

    element.classList.toggle("dark-mode");
    if (faq) faq.classList.toggle("dark-mode");
    if (hero) hero.classList.toggle("dark-mode");
    if (empresaConteudo) empresaConteudo.classList.toggle("dark-mode");
    if (nightProximoRole) nightProximoRole.classList.toggle("dark-mode");

   
    if (element.classList.contains("dark-mode")) {
        mediaIcon.className = "bi bi-brightness-high-fill";
    } else {
        mediaIcon.className = "bi bi-moon-fill";
    }
}
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. LÓGICA DO VIACEP ---
    const cepInput = document.getElementById("cep");
    const enderecoInput = document.getElementById("endereco");
    const bairroInput = document.getElementById("bairro");
    const cidadeInput = document.getElementById("cidade");
    const ufInput = document.getElementById("uf");
    const msgCep = document.getElementById("msg-cep");

    // Função para limpar campos
    const limparFormularioCep = () => {
        enderecoInput.value = "";
        bairroInput.value = "";
        cidadeInput.value = "";
        ufInput.value = "";
    }

    // Quando o usuário sai do campo CEP (evento blur)
    cepInput.addEventListener("blur", async (e) => {
        // Remove tudo que não é número
        let cep = e.target.value.replace(/\D/g, '');

        if (cep !== "") {
            // Expressão regular para validar formato do CEP
            let validacep = /^[0-9]{8}$/;

            if (validacep.test(cep)) {
                // Preenche com "..." enquanto carrega
                enderecoInput.value = "...";
                msgCep.style.display = "none";

                try {
                    // Consulta a API
                    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                    const data = await response.json();

                    if (!data.erro) {
                        // Preenche os campos com os dados da API
                        enderecoInput.value = data.logradouro;
                        // Se você adicionou os campos bairro/cidade/uf no HTML:
                        if(bairroInput) bairroInput.value = data.bairro;
                        if(cidadeInput) cidadeInput.value = data.localidade;
                        if(ufInput) ufInput.value = data.uf;
                        
                        // Foca no campo número para o usuário digitar
                        document.getElementById("numero").focus();
                    } else {
                        limparFormularioCep();
                        msgCep.innerText = "CEP não encontrado.";
                        msgCep.style.display = "block";
                    }
                } catch (error) {
                    limparFormularioCep();
                    msgCep.innerText = "Erro ao buscar CEP.";
                    msgCep.style.display = "block";
                }
            } else {
                limparFormularioCep();
                msgCep.innerText = "Formato de CEP inválido.";
                msgCep.style.display = "block";
            }
        } else {
            limparFormularioCep();
        }
    });

    // 2. VALIDAÇÃO DE SENHA 
    const senhaInput = document.getElementById("senha");
    const confirmaInput = document.getElementById("confirma_senha");
    const msgSenha = document.getElementById("msg-senha");
    const msgConfirma = document.getElementById("msg-confirma");

    // Valida força da senha
    senhaInput.addEventListener("input", () => {
        const senha = senhaInput.value;
        
        // Regra: Mínimo 8 caracteres (você pode adicionar mais regras aqui)
        if (senha.length > 0 && senha.length < 8) {
            msgSenha.style.display = "block";
            senhaInput.classList.add("input-erro");
        } else {
            msgSenha.style.display = "none";
            senhaInput.classList.remove("input-erro");
        }
        
        // Se já tiver algo no confirmar senha, valida a igualdade também
        if (confirmaInput.value !== "") {
            validarIgualdade();
        }
    });

    // Valida se as senhas são iguais
    const validarIgualdade = () => {
        if (senhaInput.value !== confirmaInput.value) {
            msgConfirma.style.display = "block";
            confirmaInput.classList.add("input-erro");
        } else {
            msgConfirma.style.display = "none";
            confirmaInput.classList.remove("input-erro");
        }
    };

    confirmaInput.addEventListener("input", validarIgualdade);
});

