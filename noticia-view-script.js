
// Mesmo array de notícias do conteudos-script.js
const noticias = [
    {
        id: 1,
        titulo: "Mercado Imobiliário Brasileiro Cresce 15% em 2024",
        resumo: "Análise detalhada do crescimento do setor imobiliário brasileiro, com destaque para as principais regiões metropolitanas e tendências futuras.",
        categoria: "mercado",
        autor: "João Silva",
        data: "2024-12-20",
        imagem: "https://via.placeholder.com/800x400/667eea/white?text=Mercado+Crescimento",
        conteudo: `
            <p>O mercado imobiliário brasileiro apresentou um crescimento expressivo de 15% em 2024, superando as expectativas iniciais do setor. Este crescimento foi impulsionado principalmente pela retomada da confiança do consumidor e pela estabilização das taxas de juros.</p>
            
            <h2>Principais Fatores do Crescimento</h2>
            <p>Entre os principais fatores que contribuíram para este crescimento, destacam-se:</p>
            <p>• Redução gradual da Selic para 10,75% ao ano</p>
            <p>• Melhoria do cenário econômico nacional</p>
            <p>• Aumento da confiança do consumidor</p>
            <p>• Políticas governamentais de incentivo ao setor</p>
            
            <h3>Regiões em Destaque</h3>
            <p>A região Sudeste liderou o crescimento com 18%, seguida pelo Nordeste com 14% e o Sul com 12%. Estas regiões concentram os principais centros urbanos do país e apresentam maior dinamismo econômico.</p>
            
            <p>As perspectivas para 2025 são ainda mais otimistas, com projeções de crescimento entre 18% e 22%, segundo estudos da Câmara Brasileira da Indústria da Construção (CBIC).</p>
        `
    },
    {
        id: 2,
        titulo: "Fundos Imobiliários: Oportunidade de Investimento",
        resumo: "Guia completo sobre investimentos em FIIs, com análise de rentabilidade e perspectivas para 2025.",
        categoria: "investimentos",
        autor: "Maria Santos",
        data: "2024-12-18",
        imagem: "https://via.placeholder.com/800x400/764ba2/white?text=FIIs+Investimento",
        conteudo: `
            <p>Os Fundos de Investimento Imobiliário (FIIs) continuam sendo uma das principais alternativas de investimento no mercado brasileiro. Com yields atrativos e diversificação de portfólio, os FIIs apresentaram rentabilidade média de 12% em 2024.</p>
            
            <h2>Vantagens dos FIIs</h2>
            <p>Investir em FIIs oferece diversas vantagens para o investidor pessoa física:</p>
            <p>• Isenção de Imposto de Renda sobre dividendos</p>
            <p>• Liquidez diária na bolsa de valores</p>
            <p>• Diversificação automática do portfólio</p>
            <p>• Gestão profissional dos ativos</p>
            
            <h3>Tipos de FIIs Recomendados</h3>
            <p>Para 2025, os analistas recomendam foco em FIIs de logística, data centers e fundos de papel, que devem se beneficiar da recuperação econômica e do crescimento do e-commerce.</p>
        `
    }
    // Adicionar mais notícias conforme necessário
    },
    {
        id: 100,
        titulo: "Tekoha Consultoria: Uma Nova Era na Consultoria Imobiliária",
        resumo: "A história de fundação da Tekoha Consultoria e nossa missão de revolucionar o mercado imobiliário brasileiro.",
        categoria: "empresa",
        autor: "Fundadores Tekoha",
        data: "2024-01-15",
        imagem: "https://via.placeholder.com/800x400/667eea/white?text=Tekoha+Inaugura%C3%A7%C3%A3o",
        conteudo: `
            <p>Em janeiro de 2024, nasceu a Tekoha Consultoria, uma empresa dedicada a revolucionar o mercado imobiliário brasileiro através de soluções inovadoras e atendimento personalizado.</p>
            
            <h2>Nossa Missão</h2>
            <p>A Tekoha Consultoria foi criada com o objetivo de oferecer consultoria imobiliária de excelência, combinando experiência tradicional com tecnologia de ponta. Nosso nome "Tekoha", que significa "lugar onde se vive" em guarani, reflete nosso compromisso em ajudar pessoas a encontrarem seu lugar ideal.</p>
            
            <h3>Valores Fundamentais</h3>
            <p>Nossos valores fundamentais incluem:</p>
            <p>• <strong>Transparência:</strong> Relacionamentos baseados em confiança e clareza</p>
            <p>• <strong>Inovação:</strong> Uso de tecnologia para otimizar processos</p>
            <p>• <strong>Excelência:</strong> Compromisso com a qualidade em todos os serviços</p>
            <p>• <strong>Sustentabilidade:</strong> Responsabilidade social e ambiental</p>
            
            <h2>Nossos Serviços</h2>
            <p>Oferecemos uma gama completa de serviços:</p>
            <p>• Consultoria residencial e comercial</p>
            <p>• Gestão de investimentos imobiliários</p>
            <p>• Tecnologia e automação predial</p>
            <p>• Certificações e capacitação profissional</p>
            <p>• Plataforma OnStar de inteligência de mercado</p>
            
            <h3>Visão de Futuro</h3>
            <p>Nossa visão é ser reconhecida como a principal consultoria imobiliária do Brasil, sempre na vanguarda da inovação e comprometida com o sucesso de nossos clientes. Acreditamos que o futuro do mercado imobiliário está na intersecção entre tecnologia, sustentabilidade e relacionamentos humanos genuínos.</p>
            
            <p>Desde nossa fundação, já impactamos mais de 1.000 famílias e empresas, consolidando nossa posição como referência em consultoria imobiliária. Este é apenas o começo de uma jornada que promete transformar a forma como as pessoas se relacionam com o mercado imobiliário.</p>
        `
    }
];

let noticiaAtual = null;

// Inicializar página
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const noticiaId = parseInt(urlParams.get('id'));
    
    if (noticiaId && noticias.find(n => n.id === noticiaId)) {
        carregarNoticia(noticiaId);
    } else {
        window.location.href = 'conteudos.html';
    }
});

function carregarNoticia(id) {
    noticiaAtual = noticias.find(n => n.id === id);
    
    if (!noticiaAtual) return;
    
    // Atualizar título da página
    document.title = `${noticiaAtual.titulo} - Tekoha Consultoria`;
    document.getElementById('page-title').textContent = `${noticiaAtual.titulo} - Tekoha Consultoria`;
    
    // Breadcrumb
    document.getElementById('breadcrumb-title').textContent = noticiaAtual.titulo;
    
    // Conteúdo da notícia
    document.getElementById('noticia-categoria').textContent = formatarCategoria(noticiaAtual.categoria);
    document.getElementById('noticia-titulo').textContent = noticiaAtual.titulo;
    document.getElementById('noticia-data').textContent = formatarData(noticiaAtual.data);
    document.getElementById('noticia-autor').textContent = noticiaAtual.autor;
    document.getElementById('noticia-imagem').src = noticiaAtual.imagem;
    document.getElementById('noticia-imagem').alt = noticiaAtual.titulo;
    document.getElementById('noticia-resumo').textContent = noticiaAtual.resumo;
    document.getElementById('noticia-texto').innerHTML = noticiaAtual.conteudo;
    
    // Carregar notícias relacionadas
    carregarNoticiasRelacionadas();
}

function carregarNoticiasRelacionadas() {
    const container = document.getElementById('noticias-relacionadas');
    const relacionadas = noticias
        .filter(n => n.id !== noticiaAtual.id && n.categoria === noticiaAtual.categoria)
        .slice(0, 3);
    
    // Se não houver notícias da mesma categoria, pegar outras aleatoriamente
    if (relacionadas.length < 3) {
        const outras = noticias
            .filter(n => n.id !== noticiaAtual.id && !relacionadas.includes(n))
            .slice(0, 3 - relacionadas.length);
        relacionadas.push(...outras);
    }
    
    container.innerHTML = '';
    
    relacionadas.forEach(noticia => {
        const card = document.createElement('div');
        card.className = 'noticia-relacionada';
        card.onclick = () => {
            window.location.href = `noticia-view.html?id=${noticia.id}`;
        };
        
        card.innerHTML = `
            <div class="noticia-img">
                <img src="${noticia.imagem}" alt="${noticia.titulo}">
            </div>
            <div class="noticia-info">
                <h3 class="noticia-titulo">${noticia.titulo}</h3>
                <div class="noticia-data">${formatarData(noticia.data)}</div>
            </div>
        `;
        
        container.appendChild(card);
    });
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

function compartilharWhatsApp() {
    const url = window.location.href;
    const texto = `Confira esta notícia: ${noticiaAtual.titulo}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(texto + ' ' + url)}`;
    window.open(whatsappUrl, '_blank');
}

function copiarLink() {
    const url = window.location.href;
    
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copiado com sucesso!');
        }).catch(() => {
            copiarLinkFallback(url);
        });
    } else {
        copiarLinkFallback(url);
    }
}

function copiarLinkFallback(url) {
    const textarea = document.createElement('textarea');
    textarea.value = url;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        alert('Link copiado com sucesso!');
    } catch (err) {
        alert('Não foi possível copiar o link. URL: ' + url);
    }
    
    document.body.removeChild(textarea);
}
