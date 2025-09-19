
// Dados das notícias
const noticias = [
    {
        id: 1,
        titulo: "Expansão da Linha 2-Verde do Metrô de São Paulo deve impulsionar desenvolvimento imobiliário na Penha SP",
        resumo: "São Paulo, 2025 – A expansão da Linha 2-Verde do Metrô de São Paulo, conectando a região da Vila Prudente à Penha, está em andamento e deve gerar impactos diretos na mobilidade urbana e no mercado imobiliário do bairro.",
        categoria: "mercado",
        autor: "Redação - R.C",
        data: "2024-12-20",
        imagem: "https://i.pinimg.com/1200x/dc/35/61/dc35613f6373aa3c7f3a824366dc9922.jpg",
        conteudo: ""
    },
    {
        id: 2,
        titulo: "RC/SP Imóveis inicia operações em São Paulo com modelo que pretende a",
        resumo: "A RC/SP Imóveis planeja combinar desenvolvimento com mecanismos de incentivo financeiro e inteligência de mercado.",
        categoria: "investimentos",
        autor: "Redação - R.C",
        data: "2025-07-20",
        imagem: "https://i.pinimg.com/736x/ca/a7/7f/caa77f723fd3a1734d007ce13c9c7873.jpg",
        conteudo: ""
    },
    {
        id: 3,
        titulo: "Digitalização e PropTechs integradas: transformações estratégicas no setor imobiliário em 2026",
        resumo: "Como as startups de tecnologia imobiliária estão transformando a forma de comprar, vender e alugar imóveis.",
        categoria: "tecnologia",
        autor: "Redação - R.C",
        data: "2024-12-15",
        imagem: "https://i.pinimg.com/736x/04/26/25/042625d06502d0a5e4feb7c2a6979289.jpg",
        conteudo: ""
    },
    {
        id: 4,
        titulo: "Sustentabilidade e ESG no setor imobiliário",
        resumo: "Discute-se a relação entre eficiência energética, valorização de ativos, captação de investimentos e regulamentação emergente, além dos impactos financeiros e sociais dessas práticas.",
        categoria: "regulacao",
        autor: "Redação - R.C",
        data: "2024-12-12",
        imagem: "https://i.pinimg.com/736x/60/23/16/602316ae0707bc4c8c7307fcd51833ea.jpg",
        conteudo: ""
    },
    {
        id: 5,
        titulo: "Transformação do espaço urbano e moradia híbrida: Uma análise de novas soluções",
        resumo: "O estudo enfoca a adoção de modelos de moradia híbrida, a valorização de regiões periféricas e cidades médias, e a readequação de edifícios comerciais para usos mistos, destacando oportunidades e desafios estratégicos para incorporadoras e investidores.",
        categoria: "tendencias",
        autor: "Redação - R.C",
        data: "2025-03-21",
        imagem: "https://i.pinimg.com/1200x/47/d9/e7/47d9e70e26a00d442458273adb303ced.jpg",
        conteudo: ""
    },
    {
        id: 6,
        titulo: "Artigo sobre a reforma do Imposto de Renda no Brasil",
        resumo: "A medida estabelece sobretaxas incidentes sobre rendimentos de capital — dividendos, ganhos de capital e aplicações financeiras — que ultrapassam determinados limiares de renda",
        categoria: "mercado",
        autor: "Redação - R.C",
        data: "2024-05-08",
        imagem: "https://i.pinimg.com/736x/d8/80/7b/d8807b7a06e86030427afe53ea5d1aed.jpg",
        conteudo: ""
    },
    {
        id: 7,
        titulo: "Artigo sobre a reforma do Imposto de Renda no Brasil",
        resumo: "A medida estabelece sobretaxas incidentes sobre rendimentos de capital — dividendos, ganhos de capital e aplicações financeiras — que ultrapassam determinados limiares de renda",
        categoria: "mercado",
        autor: "Redação - R.C",
        data: "2024-05-08",
        imagem: "https://i.pinimg.com/736x/d8/80/7b/d8807b7a06e86030427afe53ea5d1aed.jpg",
        conteudo: ""
    }
];

// Variáveis globais
let noticiasFiltradas = [...noticias];
let noticiasMostradas = 6;
let categoriaAtiva = 'todas';
let ordenacaoAtiva = 'relevante';

// Inicializar página
document.addEventListener('DOMContentLoaded', function() {
    renderizarNoticias();
    configurarEventListeners();
});

function configurarEventListeners() {
    // Busca
    document.getElementById('busca-conteudo').addEventListener('input', filtrarNoticias);
    document.getElementById('busca-btn').addEventListener('click', filtrarNoticias);
    
    // Categorias
    document.querySelectorAll('.categoria-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.categoria-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            categoriaAtiva = this.dataset.categoria;
            filtrarNoticias();
        });
    });
    
    // Ordenação
    document.getElementById('ordenacao').addEventListener('change', function() {
        ordenacaoAtiva = this.value;
        filtrarNoticias();
    });
    
    // Carregar mais
    document.getElementById('carregar-mais').addEventListener('click', carregarMaisNoticias);
}

function filtrarNoticias() {
    const termoBusca = document.getElementById('busca-conteudo').value.toLowerCase();
    
    noticiasFiltradas = noticias.filter(noticia => {
        const matchCategoria = categoriaAtiva === 'todas' || noticia.categoria === categoriaAtiva;
        const matchBusca = termoBusca === '' || 
            noticia.titulo.toLowerCase().includes(termoBusca) ||
            noticia.resumo.toLowerCase().includes(termoBusca);
        
        return matchCategoria && matchBusca;
    });
    
    // Ordenar
    ordenarNoticias();
    
    // Resetar contador e renderizar
    noticiasMostradas = 6;
    renderizarNoticias();
}

function ordenarNoticias() {
    switch(ordenacaoAtiva) {
        case 'recente':
            noticiasFiltradas.sort((a, b) => new Date(b.data) - new Date(a.data));
            break;
        case 'antigo':
            noticiasFiltradas.sort((a, b) => new Date(a.data) - new Date(b.data));
            break;
        default: // relevante
            noticiasFiltradas.sort((a, b) => a.id - b.id);
    }
}

function renderizarNoticias() {
    const container = document.getElementById('noticias-grid');
    const noticiasParaMostrar = noticiasFiltradas.slice(0, noticiasMostradas);
    
    container.innerHTML = '';
    
    noticiasParaMostrar.forEach(noticia => {
        const card = criarCardNoticia(noticia);
        container.appendChild(card);
    });
    
    // Mostrar/esconder botão "Carregar Mais"
    const btnCarregarMais = document.getElementById('carregar-mais');
    if (noticiasMostradas >= noticiasFiltradas.length) {
        btnCarregarMais.style.display = 'none';
    } else {
        btnCarregarMais.style.display = 'block';
    }
}

function criarCardNoticia(noticia) {
    const card = document.createElement('div');
    card.className = 'noticia-card';
    card.onclick = () => abrirNoticia(noticia.id);
    
    card.innerHTML = `
        <div class="noticia-imagem">
            <img src="${noticia.imagem}" alt="${noticia.titulo}">
            <div class="categoria-badge">${formatarCategoria(noticia.categoria)}</div>
        </div>
        <div class="noticia-conteudo">
            <h3 class="noticia-titulo">${noticia.titulo}</h3>
            <p class="noticia-resumo">${noticia.resumo}</p>
            <div class="noticia-meta">
                <div class="noticia-data">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M8 2V6M16 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    ${formatarData(noticia.data)}
                </div>
                <span class="noticia-autor">${noticia.autor}</span>
            </div>
        </div>
    `;
    
    return card;
}

function carregarMaisNoticias() {
    noticiasMostradas += 6;
    renderizarNoticias();
}

function abrirNoticia(id) {
    window.location.href = `noticia-view.html?id=${id}`;
}

function formatarCategoria(categoria) {
    const categorias = {
        'mercado': 'Mercado',
        'investimentos': 'Investimentos',
        'tecnologia': 'Tecnologia',
        'regulacao': 'Regulação',
        'tendencias': 'Tendências'
    };
    return categorias[categoria] || categoria;
}

function formatarData(data) {
    return new Date(data).toLocaleDateString('pt-BR');
}
