
// Dados dos cursos (mesmo do certificacoes-script.js)
const cursos = [
    {
        id: 1,
        titulo: "Fundamentos do Mercado Imobiliário",
        descricao: "Aprenda os conceitos básicos do mercado imobiliário, desde avaliação até negociação. Este curso aborda temas fundamentais como análise de mercado, precificação de imóveis, estratégias de vendas e aspectos legais básicos.",
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
        descricao: "Estratégias avançadas para investir em FIIs e maximizar seus rendimentos. Aprenda a analisar fundos, diversificar portfolio e entender os riscos envolvidos.",
        categoria: "investimento",
        nivel: "intermediario",
        duracao: "6h 15min",
        duracaoHoras: 6.25,
        avaliacao: 4.9,
        estudantes: 890,
        videos: 10,
        imagem: "https://via.placeholder.com/320x180/8b5cf6/white?text=Fundos+Imobiliarios"
    }
    // Adicionar mais cursos conforme necessário
];

// Dados dos vídeos por curso
const videosData = {
    1: [ // Fundamentos do Mercado Imobiliário
        { id: 1, titulo: "Introdução ao Mercado Imobiliário", duracao: "25min", descricao: "Visão geral do setor imobiliário brasileiro" },
        { id: 2, titulo: "Tipos de Imóveis e Segmentação", duracao: "30min", descricao: "Diferentes categorias de imóveis e suas características" },
        { id: 3, titulo: "Análise de Localização", duracao: "28min", descricao: "Como avaliar a localização de um imóvel" },
        { id: 4, titulo: "Precificação de Imóveis", duracao: "35min", descricao: "Métodos e técnicas para definir preços" },
        { id: 5, titulo: "Documentação Imobiliária", duracao: "22min", descricao: "Documentos essenciais em transações" },
        { id: 6, titulo: "Financiamento Imobiliário", duracao: "40min", descricao: "Modalidades de crédito imobiliário" },
        { id: 7, titulo: "Negociação Imobiliária", duracao: "33min", descricao: "Técnicas de negociação para corretores" },
        { id: 8, titulo: "Aspectos Legais Básicos", duracao: "27min", descricao: "Legislação fundamental do setor" },
        { id: 9, titulo: "Marketing Imobiliário", duracao: "31min", descricao: "Estratégias de divulgação e vendas" },
        { id: 10, titulo: "Tendências do Mercado", duracao: "24min", descricao: "Perspectivas futuras do setor imobiliário" }
    ],
    2: [ // Investimentos em Fundos Imobiliários
        { id: 1, titulo: "O que são Fundos Imobiliários", duracao: "28min", descricao: "Conceitos básicos sobre FIIs" },
        { id: 2, titulo: "Tipos de FIIs", duracao: "32min", descricao: "Classificação e características dos fundos" },
        { id: 3, titulo: "Análise Fundamentalista", duracao: "45min", descricao: "Como analisar a qualidade de um FII" },
        { id: 4, titulo: "Indicadores Importantes", duracao: "35min", descricao: "Métricas essenciais para avaliação" },
        { id: 5, titulo: "Diversificação de Portfolio", duracao: "30min", descricao: "Estratégias de diversificação" },
        { id: 6, titulo: "Riscos dos FIIs", duracao: "25min", descricao: "Principais riscos e como mitigá-los" },
        { id: 7, titulo: "Tributação", duracao: "20min", descricao: "Aspectos fiscais dos investimentos em FIIs" },
        { id: 8, titulo: "Acompanhamento de Resultados", duracao: "27min", descricao: "Como monitorar seus investimentos" },
        { id: 9, titulo: "Estratégias Avançadas", duracao: "38min", descricao: "Técnicas para investidores experientes" },
        { id: 10, titulo: "Casos Práticos", duracao: "35min", descricao: "Análise de FIIs reais do mercado" }
    ]
};

// Perguntas do teste por curso
const testesData = {
    1: [
        {
            pergunta: "A localização é o fator mais importante na valorização de um imóvel?",
            opcoes: ["Sim", "Não"],
            respostaCorreta: 0
        },
        {
            pergunta: "É obrigatório ter registro no CRECI para trabalhar como corretor de imóveis?",
            opcoes: ["Sim", "Não"],
            respostaCorreta: 0
        },
        {
            pergunta: "O financiamento imobiliário pode cobrir 100% do valor do imóvel?",
            opcoes: ["Sim", "Não"],
            respostaCorreta: 1
        }
    ],
    2: [
        {
            pergunta: "Os Fundos Imobiliários são obrigados a distribuir pelo menos 95% do lucro?",
            opcoes: ["Sim", "Não"],
            respostaCorreta: 0
        },
        {
            pergunta: "É possível investir em FIIs com menos de R$ 100?",
            opcoes: ["Sim", "Não"],
            respostaCorreta: 0
        },
        {
            pergunta: "Os dividendos de FIIs são sempre isentos de Imposto de Renda?",
            opcoes: ["Sim", "Não"],
            respostaCorreta: 1
        }
    ]
};

// Variáveis globais
let cursoAtual = null;
let videoAtual = null;
let videosAssistidos = new Set();
let respostasUsuario = {};

// Inicializar página
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const cursoId = parseInt(urlParams.get('id'));
    
    if (cursoId && cursos.find(c => c.id === cursoId)) {
        carregarCurso(cursoId);
    } else {
        window.location.href = 'certificacoes.html';
    }
    
    configurarEventListeners();
});

function configurarEventListeners() {
    // Abas
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.dataset.tab;
            trocarAba(tab);
        });
    });
    
    // Enviar teste
    document.getElementById('enviar-teste').addEventListener('click', enviarTeste);
    
    // Formulário do diploma
    document.getElementById('diploma-form').addEventListener('submit', function(e) {
        e.preventDefault();
        gerarCertificado();
    });
}

function carregarCurso(id) {
    cursoAtual = cursos.find(c => c.id === id);
    
    if (!cursoAtual) return;
    
    // Atualizar título da página
    document.title = `${cursoAtual.titulo} - Tekoha Consultoria`;
    document.getElementById('page-title').textContent = `${cursoAtual.titulo} - Tekoha Consultoria`;
    
    // Breadcrumb
    document.getElementById('breadcrumb-title').textContent = cursoAtual.titulo;
    
    // Header do curso
    document.getElementById('curso-categoria').textContent = formatCategoria(cursoAtual.categoria);
    document.getElementById('curso-titulo').textContent = cursoAtual.titulo;
    document.getElementById('curso-descricao').textContent = cursoAtual.descricao;
    document.getElementById('curso-nivel').textContent = formatNivel(cursoAtual.nivel);
    document.getElementById('curso-duracao').textContent = cursoAtual.duracao;
    document.getElementById('curso-avaliacao').textContent = `${cursoAtual.avaliacao} ⭐`;
    
    // Carregar vídeos
    carregarListaVideos();
    
    // Carregar teste
    carregarTeste();
    
    // Atualizar progresso
    atualizarProgresso();
}

function carregarListaVideos() {
    const container = document.getElementById('videos-lista');
    const videos = videosData[cursoAtual.id] || [];
    
    container.innerHTML = '';
    
    videos.forEach((video, index) => {
        const item = document.createElement('div');
        item.className = 'video-item';
        item.dataset.videoId = video.id;
        
        item.innerHTML = `
            <div class="video-numero">${index + 1}</div>
            <div class="video-detalhes">
                <div class="video-titulo">${video.titulo}</div>
                <div class="video-duracao">${video.duracao}</div>
            </div>
        `;
        
        item.addEventListener('click', () => selecionarVideo(video, item));
        container.appendChild(item);
    });
}

function selecionarVideo(video, elemento) {
    // Remover classe ativo de todos os itens
    document.querySelectorAll('.video-item').forEach(item => {
        item.classList.remove('ativo');
    });
    
    // Adicionar classe ativo ao item selecionado
    elemento.classList.add('ativo');
    
    videoAtual = video;
    
    // Atualizar player
    atualizarPlayer(video);
}

function atualizarPlayer(video) {
    const placeholder = document.getElementById('video-placeholder');
    const titulo = document.getElementById('video-atual-titulo');
    const descricao = document.getElementById('video-atual-descricao');
    
    placeholder.innerHTML = `
        <div class="video-thumbnail">
            <div class="play-button" onclick="iniciarVideo(${video.id})">▶</div>
            <span>Vídeo ${video.id}: ${video.titulo}</span>
        </div>
    `;
    
    titulo.textContent = video.titulo;
    descricao.textContent = video.descricao;
}

function iniciarVideo(videoId) {
    // Simular início do vídeo
    const video = videosData[cursoAtual.id].find(v => v.id === videoId);
    if (!video) return;
    
    // Marcar como assistido
    videosAssistidos.add(videoId);
    
    // Atualizar visual do item na lista
    const item = document.querySelector(`[data-video-id="${videoId}"]`);
    if (item) {
        item.classList.add('assistido');
        item.querySelector('.video-numero').innerHTML = '✓';
    }
    
    // Atualizar progresso
    atualizarProgresso();
    
    // Simular player de vídeo
    const placeholder = document.getElementById('video-placeholder');
    placeholder.innerHTML = `
        <div style="width: 100%; height: 100%; background: #000; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem;">
            🎬 Reproduzindo: ${video.titulo}<br>
            <small style="font-size: 0.9rem; opacity: 0.8;">Vídeo simulado - Duração: ${video.duracao}</small>
        </div>
    `;
    
    alert(`Iniciando vídeo: ${video.titulo}\n(Esta é uma simulação do player de vídeo)`);
}

function atualizarProgresso() {
    const totalVideos = videosData[cursoAtual.id]?.length || 0;
    const assistidos = videosAssistidos.size;
    const porcentagem = totalVideos > 0 ? (assistidos / totalVideos) * 100 : 0;
    
    document.getElementById('progresso-count').textContent = `${assistidos}/${totalVideos}`;
    document.getElementById('progresso-fill').style.width = `${porcentagem}%`;
}

function trocarAba(tab) {
    // Atualizar botões
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    
    // Atualizar conteúdo
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.toggle('active', content.id === `${tab}-content`);
    });
}

function carregarTeste() {
    const container = document.getElementById('teste-questoes');
    const perguntas = testesData[cursoAtual.id] || [];
    
    container.innerHTML = '';
    respostasUsuario = {};
    
    perguntas.forEach((pergunta, index) => {
        const questaoDiv = document.createElement('div');
        questaoDiv.className = 'questao';
        questaoDiv.innerHTML = `
            <div class="questao-titulo">Questão ${index + 1}: ${pergunta.pergunta}</div>
            <div class="questao-opcoes">
                ${pergunta.opcoes.map((opcao, opcaoIndex) => `
                    <div class="opcao">
                        <input type="radio" id="q${index}_${opcaoIndex}" name="questao_${index}" value="${opcaoIndex}">
                        <label for="q${index}_${opcaoIndex}">${opcao}</label>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(questaoDiv);
    });
    
    // Mostrar botão de enviar
    document.getElementById('enviar-teste').style.display = 'block';
    
    // Event listeners para as respostas
    container.addEventListener('change', function(e) {
        if (e.target.type === 'radio') {
            const [, questaoIndex] = e.target.name.split('_');
            respostasUsuario[questaoIndex] = parseInt(e.target.value);
        }
    });
}

function enviarTeste() {
    const perguntas = testesData[cursoAtual.id] || [];
    
    // Verificar se todas as questões foram respondidas
    if (Object.keys(respostasUsuario).length !== perguntas.length) {
        alert('Por favor, responda todas as questões antes de enviar.');
        return;
    }
    
    // Calcular pontuação
    let acertos = 0;
    perguntas.forEach((pergunta, index) => {
        if (respostasUsuario[index] === pergunta.respostaCorreta) {
            acertos++;
        }
    });
    
    // Verificar aprovação (precisa de pelo menos 2 acertos)
    if (acertos >= 2) {
        alert(`Parabéns! Você acertou ${acertos} de ${perguntas.length} questões e foi aprovado!`);
        mostrarModalDiploma();
    } else {
        alert(`Você acertou ${acertos} de ${perguntas.length} questões. É necessário acertar pelo menos 2 questões para ser aprovado. Tente novamente!`);
        // Resetar respostas
        respostasUsuario = {};
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.checked = false;
        });
    }
}

function mostrarModalDiploma() {
    document.getElementById('diploma-modal').style.display = 'block';
}

function fecharModal() {
    document.getElementById('diploma-modal').style.display = 'none';
}

function gerarCertificado() {
    const nome = document.getElementById('nome-completo').value;
    const email = document.getElementById('email').value;
    
    if (!nome || !email) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // Preencher dados do certificado
    document.getElementById('certificado-nome').textContent = nome.toUpperCase();
    document.getElementById('certificado-curso').textContent = cursoAtual.titulo.toUpperCase();
    document.getElementById('certificado-duracao').textContent = cursoAtual.duracao;
    document.getElementById('certificado-data').textContent = new Date().toLocaleDateString('pt-BR');
    
    // Fechar modal do diploma e mostrar certificado
    fecharModal();
    document.getElementById('certificado-modal').style.display = 'block';
}

function fecharCertificado() {
    document.getElementById('certificado-modal').style.display = 'none';
}

function baixarCertificado() {
    // Criar conteúdo do PDF
    const certificadoElement = document.getElementById('certificado');
    const nomeAluno = document.getElementById('certificado-nome').textContent;
    const nomeCurso = document.getElementById('certificado-curso').textContent;
    const duracao = document.getElementById('certificado-duracao').textContent;
    const data = document.getElementById('certificado-data').textContent;
    
    // Simular geração de PDF (em produção, usar jsPDF ou html2canvas)
    const pdfContent = `
CERTIFICADO DE CONCLUSÃO
Tekoha Consultoria

Certificamos que ${nomeAluno} concluiu com sucesso o curso
${nomeCurso}

Carga horária: ${duracao}
Data de conclusão: ${data}

_______________________
Tekoha Consultoria
    `;
    
    // Criar blob e download
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Certificado_${nomeAluno.replace(/\s+/g, '_')}_${nomeCurso.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    alert('Certificado baixado com sucesso!');
}

// Funções auxiliares
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

function formatNivel(nivel) {
    const niveis = {
        'iniciante': 'Iniciante',
        'intermediario': 'Intermediário',
        'avancado': 'Avançado'
    };
    return niveis[nivel] || nivel;
}

// Fechar modais ao clicar fora
window.onclick = function(event) {
    const diplomaModal = document.getElementById('diploma-modal');
    const certificadoModal = document.getElementById('certificado-modal');
    
    if (event.target === diplomaModal) {
        diplomaModal.style.display = 'none';
    }
    if (event.target === certificadoModal) {
        certificadoModal.style.display = 'none';
    }
}
