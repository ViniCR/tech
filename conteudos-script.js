
// Dados das notícias
const noticias = [
    {
        id: 1,
        titulo: "Investimento Imobiliário em Manaus!!!!! Análise e Estratégias de Mercado",
        resumo: "Análise detalhada do crescimento do setor imobiliário de Manaus, com destaque para as principais regiões metropolitanas e tendências futuras.",
        categoria: "mercado",
        autor: "João Silva",
        data: "2024-12-20",
        imagem: "https://blog.123milhas.com/wp-content/uploads/2022/02/turismo-manaus-vista-aerea-manaus-conexao123.jpg",
        conteudo: "O mercado imobiliário de Manaus, historicamente vinculado à sua função de polo industrial e comercial na região Norte do Brasil, apresenta dinâmicas complexas que exigem uma análise aprofundada para investidores que buscam mitigar riscos e maximizar retornos. A cidade, diferentemente de outros centros urbanos brasileiros, não apenas reage a ciclos econômicos nacionais, mas também é profundamente influenciada por políticas setoriais, como os incentivos fiscais da Zona Franca de Manaus (ZFM).\nEstratégias de Investimento e Segmentos de Mercado\nA complexidade do mercado local reside na sua segmentação. Cada setor exige uma tese de investimento distinta:\n\nSetor Residencial de Alto Padrão: A demanda por imóveis de alto padrão nas áreas nobres — como Adrianópolis, Ponta Negra e Dom Pedro — é impulsionada pela migração de executivos e profissionais qualificados que atuam nas indústrias do Polo Industrial de Manaus (PIM). Nesses bairros, o investimento em apartamentos de luxo e residências em condomínios fechados oferece retorno consistente via aluguel, com contratos de longo prazo atrelados a empresas. A alta liquidez nesse segmento é um diferencial, embora os preços por metro quadrado sejam os mais elevados da cidade.\nSetor de Lotes e Terrenos: A expansão urbana de Manaus, principalmente em direção às zonas Norte e Oeste, abre espaço para o investimento em lotes em condomínios planejados. Esta é uma estratégia de valorização de médio a longo prazo, baseada na expectativa de adensamento populacional e na melhoria da infraestrutura. A tese de investimento aqui é comprar em estágios iniciais de desenvolvimento, quando os preços são mais baixos, para capturar a valorização exponencial que acompanha a consolidação do projeto.\nImóveis Comerciais e Industriais (Logística): O motor da economia manauara é o Polo Industrial de Manaus. O investimento em galpões logísticos e armazéns localizados em eixos estratégicos como as avenidas Rodrigo Otávio e Autaz Mirim, que conectam a cidade ao porto e ao aeroporto, oferece alta rentabilidade. A demanda por esses ativos é constante, impulsionada pela necessidade das indústrias de otimizar a cadeia de suprimentos. O rendimento de aluguel é o foco principal, e a valorização do imóvel é um benefício secundário.\nAnálise de Riscos e Fatores Determinantes\nA autoridade no mercado imobiliário manauara é construída sobre o entendimento dos seus riscos e das suas vantagens competitivas:\n\nDependência da ZFM: A saúde do mercado imobiliário local está intrinsecamente ligada à manutenção dos incentivos fiscais da Zona Franca. Oscilações políticas ou mudanças na legislação podem impactar diretamente a confiança dos investidores e a demanda por imóveis comerciais e industriais.\nInfraestrutura e Logística: A topografia e a hidrografia da região impõem desafios logísticos únicos. A conectividade da cidade com outras regiões do país, majoritariamente via fluvial e aérea, limita o desenvolvimento de alguns setores. A carência de infraestrutura em áreas de expansão pode atrasar a valorização de terrenos e exigir investimentos adicionais.\nRisco Ambiental: A proximidade com a Floresta Amazônica impõe regulamentações ambientais rigorosas, que devem ser consideradas no planejamento de qualquer empreendimento. A titulação de terras e a regularização fundiária são aspectos críticos que exigem diligência prévia para evitar problemas legais.\nO mercado imobiliário de Manaus não se comporta de maneira uniforme. A decisão de investimento deve ser pautada por uma análise segmentada, considerando a finalidade do imóvel e os fatores macroeconômicos e setoriais que definem a dinâmica de oferta e demanda de cada nicho."
    },
    {
        id: 2,
        titulo: "Fundos Imobiliários: Oportunidade de Investimento",
        resumo: "Guia completo sobre investimentos em FIIs, com análise de rentabilidade e perspectivas para 2025.",
        categoria: "investimentos",
        autor: "Maria Santos",
        data: "2024-12-18",
        imagem: "https://via.placeholder.com/400x250/764ba2/white?text=FIIs+Investimento",
        conteudo: "Os Fundos de Investimento Imobiliário (FIIs) continuam sendo uma das principais alternativas de investimento no mercado brasileiro. Com yields atrativos e diversificação de portfólio, os FIIs apresentaram rentabilidade média de 12% em 2024..."
    },
    {
        id: 3,
        titulo: "Tecnologia PropTech Revoluciona o Setor",
        resumo: "Como as startups de tecnologia imobiliária estão transformando a forma de comprar, vender e alugar imóveis.",
        categoria: "tecnologia",
        autor: "Carlos Oliveira",
        data: "2024-12-15",
        imagem: "https://via.placeholder.com/400x250/8b5cf6/white?text=PropTech",
        conteudo: "A revolução tecnológica no setor imobiliário está acelerando. As PropTechs brasileiras captaram mais de R$ 500 milhões em investimentos em 2024, desenvolvendo soluções inovadoras para compra, venda e gestão de imóveis..."
    },
    {
        id: 4,
        titulo: "Nova Regulamentação do Marco Legal das Startups",
        resumo: "Impactos da nova legislação no mercado imobiliário e oportunidades para investidores.",
        categoria: "regulacao",
        autor: "Ana Costa",
        data: "2024-12-12",
        imagem: "https://via.placeholder.com/400x250/06b6d4/white?text=Regulacao",
        conteudo: "O Marco Legal das Startups trouxe importantes mudanças para o ecossistema de inovação brasileiro. No setor imobiliário, as novas regras facilitam a criação de empresas de base tecnológica e oferecem incentivos fiscais..."
    },
    {
        id: 5,
        titulo: "Tendências Arquitetônicas para 2025",
        resumo: "Sustentabilidade, espaços multiuso e tecnologia integrada lideram as tendências do próximo ano.",
        categoria: "tendencias",
        autor: "Pedro Almeida",
        data: "2024-12-10",
        imagem: "https://via.placeholder.com/400x250/10b981/white?text=Tendencias+2025",
        conteudo: "As tendências arquitetônicas para 2025 apontam para uma maior integração entre sustentabilidade e tecnologia. Edifícios inteligentes, uso de materiais sustentáveis e espaços multiuso são as principais apostas do setor..."
    },
    {
        id: 6,
        titulo: "Financiamento Imobiliário: Novas Modalidades",
        resumo: "Banco Central aprova novas modalidades de crédito imobiliário com taxas mais competitivas.",
        categoria: "mercado",
        autor: "Lucia Ferreira",
        data: "2024-12-08",
        imagem: "https://via.placeholder.com/400x250/f59e0b/white?text=Financiamento",
        conteudo: "O Banco Central do Brasil aprovou novas modalidades de financiamento imobiliário que prometem democratizar o acesso ao crédito. As novas regras incluem prazos estendidos e taxas de juros mais atrativas..."
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
