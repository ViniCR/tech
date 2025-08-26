// Dados de regiões e sugestões
const regioes = [
    { nome: 'Centro', descricao: 'Região central da cidade', tipo: 'regiao' },
    { nome: 'Zona Norte', descricao: 'Região norte com várias opções', tipo: 'regiao' },
    { nome: 'Zona Sul', descricao: 'Região sul com imóveis de alto padrão', tipo: 'regiao' },
    { nome: 'Zona Oeste', descricao: 'Região oeste em expansão', tipo: 'regiao' },
    { nome: 'Jardim América', descricao: 'Bairro residencial no Centro', tipo: 'bairro' },
    { nome: 'Vila Nova', descricao: 'Bairro comercial na Zona Norte', tipo: 'bairro' },
    { nome: 'Alto da Boa Vista', descricao: 'Bairro nobre na Zona Sul', tipo: 'bairro' },
    { nome: 'Parque Industrial', descricao: 'Área industrial na Zona Oeste', tipo: 'bairro' },
    { nome: 'Residencial', descricao: 'Imóveis residenciais', tipo: 'categoria' },
    { nome: 'Comercial', descricao: 'Imóveis comerciais', tipo: 'categoria' },
    { nome: 'Investimento', descricao: 'Oportunidades de investimento', tipo: 'categoria' }
];

// Elementos DOM
const buscaInput = document.getElementById('busca-regiao');
const sugestoesContainer = document.getElementById('sugestoes-container');
const btnBuscar = document.getElementById('btn-buscar');
const tipoBtns = document.querySelectorAll('.tipo-btn');
const filtroTags = document.querySelectorAll('.filtro-tag');

let tipoSelecionado = 'aluguel';
let regiaoSelecionada = '';

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    configurarEventos();
});

function configurarEventos() {
    // Event listeners para busca
    buscaInput.addEventListener('input', handleBuscaInput);
    buscaInput.addEventListener('focus', showSugestoes);
    buscaInput.addEventListener('blur', hideSugestoes);

    // Event listeners para botões de tipo
    tipoBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            setTipoSelecionado(this.dataset.tipo);
        });
    });

    // Event listeners para filtros rápidos
    filtroTags.forEach(tag => {
        tag.addEventListener('click', function() {
            aplicarFiltroRapido(this.dataset.filtro);
        });
    });

    // Event listener para botão de buscar
    btnBuscar.addEventListener('click', executarBusca);

    // Event listener para Enter na busca
    buscaInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            executarBusca();
        }
    });

    // Fechar sugestões ao clicar fora
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.busca-input-wrapper')) {
            hideSugestoes();
        }
    });
}

function handleBuscaInput() {
    const termo = buscaInput.value.toLowerCase().trim();

    if (termo.length === 0) {
        hideSugestoes();
        return;
    }

    const sugestoesFiltradas = regioes.filter(regiao => 
        regiao.nome.toLowerCase().includes(termo) ||
        regiao.descricao.toLowerCase().includes(termo)
    ).slice(0, 8); // Limitar a 8 sugestões

    renderSugestoes(sugestoesFiltradas);
}

function renderSugestoes(sugestoes) {
    if (sugestoes.length === 0) {
        hideSugestoes();
        return;
    }

    const html = sugestoes.map(sugestao => `
        <div class="sugestao-item" onclick="selecionarSugestao('${sugestao.nome}')">
            <div class="sugestao-icon">
                ${getSugestaoIcon(sugestao.tipo)}
            </div>
            <div>
                <div class="sugestao-text">${sugestao.nome}</div>
                <div class="sugestao-descricao">${sugestao.descricao}</div>
            </div>
        </div>
    `).join('');

    sugestoesContainer.innerHTML = html;
    showSugestoes();
}

function getSugestaoIcon(tipo) {
    const icons = {
        'regiao': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/></svg>',
        'bairro': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" stroke-width="2"/></svg>',
        'categoria': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2"/></svg>'
    };
    return icons[tipo] || icons['regiao'];
}

function selecionarSugestao(nome) {
    buscaInput.value = nome;
    regiaoSelecionada = nome;
    hideSugestoes();
}

function showSugestoes() {
    sugestoesContainer.classList.add('show');
}

function hideSugestoes() {
    setTimeout(() => {
        sugestoesContainer.classList.remove('show');
    }, 150);
}

function setTipoSelecionado(tipo) {
    tipoSelecionado = tipo;

    // Atualizar botões
    tipoBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tipo === tipo);
    });
}

function aplicarFiltroRapido(filtro) {
    const tag = document.querySelector(`[data-filtro="${filtro}"]`);

    // Toggle da tag
    tag.classList.toggle('active');

    // Se a tag for uma região, adicionar ao input
    const regiao = regioes.find(r => r.nome.toLowerCase() === filtro.replace('-', ' '));
    if (regiao) {
        buscaInput.value = regiao.nome;
        regiaoSelecionada = regiao.nome;
    }
}

function executarBusca() {
    const termo = buscaInput.value.trim();
    const filtrosAtivos = Array.from(document.querySelectorAll('.filtro-tag.active'))
        .map(tag => tag.dataset.filtro);

    // Construir URL de busca
    const params = new URLSearchParams();
    params.append('tipo', tipoSelecionado);

    if (termo) {
        params.append('regiao', termo);
    }

    if (filtrosAtivos.length > 0) {
        params.append('filtros', filtrosAtivos.join(','));
    }

    // Redirecionar para o catálogo com os parâmetros
    window.location.href = `catalogo.html?${params.toString()}`;
}

// Função para aplicar animações suaves
function animateElements() {
    const elements = document.querySelectorAll('.busca-content > *');
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });
}

// Executar animações quando a página carregar
document.addEventListener('DOMContentLoaded', animateElements);

// Event listeners para as respostas
    container.addEventListener('change', function(e) {
        if (e.target.type === 'radio') {
            const [, questaoIndex] = e.target.name.split('_');
            respostasUsuario[questaoIndex] = parseInt(e.target.value);
        }
    });

// Função para download da documentação de parceria
function baixarDocumentacaoParceria() {
    const confirmacao = confirm("Deseja fazer o download do modelo de documentação para parceria com a Tekoha Consultoria?");

    if (confirmacao) {
        // Conteúdo do documento de parceria
        const documentacao = `
TEKOHA CONSULTORIA
DOCUMENTAÇÃO PARA PARCERIA

1. SOBRE A TEKOHA CONSULTORIA
A Tekoha Consultoria é uma empresa especializada em soluções imobiliárias inovadoras, 
combinando expertise tradicional com tecnologia de ponta.

2. MODALIDADES DE PARCERIA
• Parceria Comercial: Indicação de clientes com comissionamento
• Parceria Tecnológica: Integração de sistemas e plataformas
• Parceria Estratégica: Desenvolvimento conjunto de projetos
• Parceria de Conteúdo: Colaboração em materiais educativos

3. BENEFÍCIOS DA PARCERIA
• Acesso à plataforma OnStar
• Treinamentos e certificações exclusivas
• Suporte técnico e comercial dedicado
• Comissionamento competitivo

4. REQUISITOS PARA PARCERIA
• Registro profissional válido (CRECI quando aplicável)
• Experiência mínima de 2 anos no mercado
• Alinhamento com nossos valores e práticas
• Capacidade de atendimento de qualidade

5. PROCESSO DE APLICAÇÃO
Para se tornar nosso parceiro, entre em contato através de:
Email: parcerias@tekoha.com.br
Telefone: (11) 99999-9999
Website: www.tekoha.com.br

6. DOCUMENTOS NECESSÁRIOS
• Formulário de aplicação preenchido
• Comprovantes de experiência profissional
• Referências comerciais
• Documentos de identificação

Para mais informações, visite nosso portal de parcerias ou 
entre em contato com nossa equipe especializada.

© 2024 Tekoha Consultoria - Todos os direitos reservados
        `;

        // Criar e baixar o arquivo
        const blob = new Blob([documentacao], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Tekoha_Documentacao_Parceria.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        alert('Download da documentação iniciado com sucesso!');
    }
}