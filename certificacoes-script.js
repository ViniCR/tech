
// Dados dos cursos
const cursos = [
    {
        id: 1,
        titulo: "Fundamentos do Mercado Imobiliário",
        descricao: "Aprenda os conceitos básicos do mercado imobiliário, desde avaliação até negociação.",
        categoria: "imobiliario",
        nivel: "iniciante",
        duracao: "4h 30min",
        duracaoHoras: 4.5,
        avaliacao: 4.8,
        estudantes: 1250,
        videos: 10,
        imagem: "https://via.placeholder.com/320x180/667eea/white?text=Mercado+Imobiliario"
    },
    {
        id: 2,
        titulo: "Investimentos em Fundos Imobiliários",
        descricao: "Estratégias avançadas para investir em FIIs e maximizar seus rendimentos.",
        categoria: "investimento",
        nivel: "intermediario",
        duracao: "6h 15min",
        duracaoHoras: 6.25,
        avaliacao: 4.9,
        estudantes: 890,
        videos: 10,
        imagem: "https://via.placeholder.com/320x180/8b5cf6/white?text=Fundos+Imobiliarios"
    },
    {
        id: 3,
        titulo: "Tecnologia PropTech",
        descricao: "Como usar tecnologia para inovar no setor imobiliário.",
        categoria: "tecnologia",
        nivel: "avancado",
        duracao: "8h 45min",
        duracaoHoras: 8.75,
        avaliacao: 4.7,
        estudantes: 520,
        videos: 10,
        imagem: "https://via.placeholder.com/320x180/06b6d4/white?text=PropTech"
    },
    {
        id: 4,
        titulo: "Gestão de Projetos Imobiliários",
        descricao: "Metodologias e ferramentas para gerenciar projetos imobiliários com eficiência.",
        categoria: "gestao",
        nivel: "intermediario",
        duracao: "7h 20min",
        duracaoHoras: 7.33,
        avaliacao: 4.6,
        estudantes: 675,
        videos: 10,
        imagem: "https://via.placeholder.com/320x180/10b981/white?text=Gestao+Projetos"
    },
    {
        id: 5,
        titulo: "Direito Imobiliário Essencial",
        descricao: "Aspectos jurídicos fundamentais para profissionais do setor imobiliário.",
        categoria: "juridico",
        nivel: "iniciante",
        duracao: "5h 40min",
        duracaoHoras: 5.67,
        avaliacao: 4.5,
        estudantes: 980,
        videos: 10,
        imagem: "https://via.placeholder.com/320x180/f59e0b/white?text=Direito+Imobiliario"
    },
    {
        id: 6,
        titulo: "Avaliação de Imóveis",
        descricao: "Técnicas profissionais para avaliar imóveis residenciais e comerciais.",
        categoria: "imobiliario",
        nivel: "avancado",
        duracao: "9h 15min",
        duracaoHoras: 9.25,
        avaliacao: 4.8,
        estudantes: 340,
        videos: 10,
        imagem: "https://via.placeholder.com/320x180/e53e3e/white?text=Avaliacao+Imoveis"
    },
    {
        id: 7,
        titulo: "Marketing Digital Imobiliário",
        descricao: "Estratégias de marketing digital específicas para o mercado imobiliário.",
        categoria: "tecnologia",
        nivel: "intermediario",
        duracao: "5h 30min",
        duracaoHoras: 5.5,
        avaliacao: 4.7,
        estudantes: 780,
        videos: 10,
        imagem: "https://via.placeholder.com/320x180/805ad5/white?text=Marketing+Digital"
    },
    {
        id: 8,
        titulo: "Financiamento Imobiliário",
        descricao: "Como estruturar e obter financiamentos para projetos imobiliários.",
        categoria: "investimento",
        nivel: "avancado",
        duracao: "6h 50min",
        duracaoHoras: 6.83,
        avaliacao: 4.6,
        estudantes: 420,
        videos: 10,
        imagem: "https://via.placeholder.com/320x180/667eea/white?text=Financiamento"
    },
    {
        id: 9,
        titulo: "Liderança em Equipes Imobiliárias",
        descricao: "Desenvolva habilidades de liderança para gerenciar equipes de vendas.",
        categoria: "gestao",
        nivel: "intermediario",
        duracao: "4h 45min",
        duracaoHoras: 4.75,
        avaliacao: 4.9,
        estudantes: 650,
        videos: 10,
        imagem: "https://via.placeholder.com/320x180/764ba2/white?text=Lideranca"
    },
    {
        id: 10,
        titulo: "Contratos Imobiliários",
        descricao: "Elaboração e análise de contratos no setor imobiliário.",
        categoria: "juridico",
        nivel: "avancado",
        duracao: "7h 30min",
        duracaoHoras: 7.5,
        avaliacao: 4.4,
        estudantes: 290,
        videos: 10,
        imagem: "https://via.placeholder.com/320x180/f59e0b/white?text=Contratos"
    },
    {
        id: 11,
        titulo: "Análise de Mercado Imobiliário",
        descricao: "Como realizar pesquisas e análises de mercado eficazes.",
        categoria: "imobiliario",
        nivel: "intermediario",
        duracao: "6h 00min",
        duracaoHoras: 6,
        avaliacao: 4.7,
        estudantes: 540,
        videos: 10,
        imagem: "https://via.placeholder.com/320x180/06b6d4/white?text=Analise+Mercado"
    },
    {
        id: 12,
        titulo: "Sustentabilidade no Setor Imobiliário",
        descricao: "Práticas sustentáveis e certificações verdes para imóveis.",
        categoria: "gestao",
        nivel: "iniciante",
        duracao: "3h 20min",
        duracaoHoras: 3.33,
        avaliacao: 4.5,
        estudantes: 720,
        videos: 10,
        imagem: "https://via.placeholder.com/320x180/10b981/white?text=Sustentabilidade"
    }
];

// Variáveis globais
let cursosFiltrados = [...cursos];
let termoBusca = '';

// Elementos DOM
const buscaInput = document.getElementById('busca-input');
const buscaBtn = document.getElementById('busca-btn');
const cursosGrid = document.getElementById('cursos-grid');
const totalResultados = document.getElementById('total-resultados');
const limparFiltrosBtn = document.getElementById('limpar-filtros');
const ordenarSelect = document.getElementById('ordenar');

// Inicializar página
document.addEventListener('DOMContentLoaded', function() {
    configurarEventListeners();
    aplicarFiltros();
});

// Configurar event listeners
function configurarEventListeners() {
    // Busca
    buscaInput.addEventListener('input', debounce(aplicarBusca, 300));
    buscaBtn.addEventListener('click', aplicarBusca);
    
    // Filtros
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', aplicarFiltros);
    });
    
    // Limpar filtros
    limparFiltrosBtn.addEventListener('click', limparFiltros);
    
    // Ordenação
    ordenarSelect.addEventListener('change', aplicarFiltros);
    
    // Enter na busca
    buscaInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            aplicarBusca();
        }
    });
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar busca
function aplicarBusca() {
    termoBusca = buscaInput.value.toLowerCase().trim();
    aplicarFiltros();
}

// Aplicar filtros
function aplicarFiltros() {
    const categoriasSelecionadas = getCheckboxValues('categoria');
    const niveisSelecionados = getCheckboxValues('nivel');
    const duracoesSelecionadas = getCheckboxValues('duracao');
    
    cursosFiltrados = cursos.filter(curso => {
        // Busca por texto
        const matchBusca = !termoBusca || 
            curso.titulo.toLowerCase().includes(termoBusca) ||
            curso.descricao.toLowerCase().includes(termoBusca);
        
        // Filtros de categoria
        const matchCategoria = categoriasSelecionadas.length === 0 || 
            categoriasSelecionadas.includes(curso.categoria);
        
        // Filtros de nível
        const matchNivel = niveisSelecionados.length === 0 || 
            niveisSelecionados.includes(curso.nivel);
        
        // Filtros de duração
        const matchDuracao = verificarFiltroDuracao(curso.duracaoHoras, duracoesSelecionadas);
        
        return matchBusca && matchCategoria && matchNivel && matchDuracao;
    });
    
    ordenarCursos();
    renderizarCursos();
    atualizarContador();
}

// Verificar filtro de duração
function verificarFiltroDuracao(duracao, filtrosSelecionados) {
    if (filtrosSelecionados.length === 0) return true;
    
    return filtrosSelecionados.some(filtro => {
        switch (filtro) {
            case 'curta': return duracao < 5;
            case 'media': return duracao >= 5 && duracao <= 10;
            case 'longa': return duracao > 10;
            default: return false;
        }
    });
}

// Ordenar cursos
function ordenarCursos() {
    const ordenacao = ordenarSelect.value;
    
    cursosFiltrados.sort((a, b) => {
        switch (ordenacao) {
            case 'avaliacao':
                return b.avaliacao - a.avaliacao;
            case 'duracao':
                return a.duracaoHoras - b.duracaoHoras;
            case 'mais-recente':
                return b.id - a.id;
            default: // relevancia
                return b.estudantes - a.estudantes;
        }
    });
}

// Renderizar cursos
function renderizarCursos() {
    cursosGrid.innerHTML = '';
    
    cursosFiltrados.forEach(curso => {
        const card = document.createElement('div');
        card.className = 'curso-card';
        card.onclick = () => {
            window.location.href = `curso-view.html?id=${curso.id}`;
        };
        
        card.innerHTML = `
            <div class="curso-img">
                <img src="${curso.imagem}" alt="${curso.titulo}">
                <div class="curso-duracao">${curso.duracao}</div>
            </div>
            <div class="curso-info">
                <div class="curso-categoria">${formatCategoria(curso.categoria)}</div>
                <h3 class="curso-titulo">${curso.titulo}</h3>
                <p class="curso-descricao">${curso.descricao}</p>
                <div class="curso-meta">
                    <span class="curso-nivel nivel-${curso.nivel}">${formatNivel(curso.nivel)}</span>
                    <div class="curso-avaliacao">
                        ${gerarEstrelas(curso.avaliacao)}
                        <span>${curso.avaliacao}</span>
                    </div>
                </div>
                <div class="curso-stats">
                    <span>${curso.estudantes.toLocaleString()} estudantes</span>
                    <span>${curso.videos} vídeos</span>
                </div>
            </div>
        `;
        
        cursosGrid.appendChild(card);
    });
}

// Gerar estrelas para avaliação
function gerarEstrelas(avaliacao) {
    const estrelas = Math.floor(avaliacao);
    let html = '';
    for (let i = 0; i < 5; i++) {
        html += i < estrelas ? '★' : '☆';
    }
    return html;
}

// Formatar categoria
function formatCategoria(categoria) {
    const categorias = {
        'imobiliario': 'Mercado Imobiliário',
        'investimento': 'Investimentos',
        'tecnologia': 'Tecnologia',
        'gestao': 'Gestão',
        'juridico': 'Jurídico'
    };
    return categorias[categoria] || categoria;
}

// Formatar nível
function formatNivel(nivel) {
    const niveis = {
        'iniciante': 'Iniciante',
        'intermediario': 'Intermediário',
        'avancado': 'Avançado'
    };
    return niveis[nivel] || nivel;
}

// Obter valores dos checkboxes selecionados
function getCheckboxValues(name) {
    return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`))
        .map(cb => cb.value);
}

// Atualizar contador de resultados
function atualizarContador() {
    const total = cursosFiltrados.length;
    totalResultados.textContent = `${total} curso${total !== 1 ? 's' : ''} ${total !== 1 ? 'encontrados' : 'encontrado'}`;
}

// Limpar filtros
function limparFiltros() {
    // Limpar checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });
    
    // Limpar busca
    buscaInput.value = '';
    termoBusca = '';
    
    // Resetar ordenação
    ordenarSelect.value = 'relevancia';
    
    // Reaplicar filtros
    aplicarFiltros();
}
