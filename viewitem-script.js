
// Dados dos produtos (usando os mesmos dados do catálogo)
const produtos = [
    {
        id: 1,
        titulo: "Consultoria Residencial Premium",
        descricao: "Análise completa para desenvolvimento residencial de alto padrão",
        preco: 85000,
        precoFormatado: "R$ 85.000",
        categoria: "residencial",
        localizacao: "centro",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/667eea/white?text=Residencial+1"
    },
    {
        id: 2,
        titulo: "Projeto Comercial Shopping",
        descricao: "Consultoria para desenvolvimento de centro comercial",
        preco: 150000,
        precoFormatado: "R$ 150.000",
        categoria: "comercial",
        localizacao: "zona-norte",
        status: "em-andamento",
        imagem: "https://via.placeholder.com/280x200/764ba2/white?text=Comercial+1"
    },
    {
        id: 3,
        titulo: "Portfolio de Investimentos",
        descricao: "Gestão completa de carteira de investimentos imobiliários",
        preco: 45000,
        precoFormatado: "R$ 45.000",
        categoria: "investimento",
        localizacao: "zona-sul",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/8b5cf6/white?text=Investimento+1"
    },
    {
        id: 4,
        titulo: "Sistema OnStar Integrado",
        descricao: "Plataforma tecnológica para gestão imobiliária completa",
        preco: 120000,
        precoFormatado: "R$ 120.000",
        categoria: "tecnologia",
        localizacao: "centro",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/06b6d4/white?text=OnStar+Tech"
    },
    {
        id: 5,
        titulo: "Consultoria Estratégica",
        descricao: "Planejamento e desenvolvimento de negócios imobiliários",
        preco: 75000,
        precoFormatado: "R$ 75.000",
        categoria: "consultoria",
        localizacao: "zona-oeste",
        status: "concluido",
        imagem: "https://via.placeholder.com/280x200/10b981/white?text=Consultoria+1"
    }
];

let produtoAtual = null;

// Inicializar página
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const produtoId = parseInt(urlParams.get('id'));
    
    if (produtoId) {
        carregarProduto(produtoId);
    } else {
        // Redirecionar para catálogo se não houver ID
        window.location.href = 'catalogo.html';
    }
    
    configurarEventListeners();
});

// Configurar event listeners
function configurarEventListeners() {
    // Botões de ação
    const btnContato = document.getElementById('btn-contato');
    const btnFavoritar = document.getElementById('btn-favoritar');
    const btnCompartilhar = document.getElementById('btn-compartilhar');
    
    if (btnContato) {
        btnContato.addEventListener('click', function() {
            alert('Funcionalidade de contato será implementada em breve!');
        });
    }
    
    if (btnFavoritar) {
        btnFavoritar.addEventListener('click', function() {
            alert('Produto favoritado!');
        });
    }
    
    if (btnCompartilhar) {
        btnCompartilhar.addEventListener('click', function() {
            if (navigator.share && produtoAtual) {
                navigator.share({
                    title: produtoAtual.titulo,
                    text: produtoAtual.descricao,
                    url: window.location.href
                });
            } else {
                // Fallback para browsers que não suportam Web Share API
                const url = window.location.href;
                navigator.clipboard.writeText(url).then(function() {
                    alert('Link copiado para a área de transferência!');
                });
            }
        });
    }
    
    // Galeria de imagens
    configurarGaleria();
    
    // Voltar ao catálogo
    const btnVoltar = document.querySelector('.btn-voltar');
    if (btnVoltar) {
        btnVoltar.addEventListener('click', function() {
            window.location.href = 'catalogo.html';
        });
    }
}

// Carregar dados do produto
function carregarProduto(id) {
    produtoAtual = produtos.find(p => p.id === id);
    
    if (!produtoAtual) {
        alert('Produto não encontrado!');
        window.location.href = 'catalogo.html';
        return;
    }
    
    // Atualizar título da página
    document.title = `${produtoAtual.titulo} - Tekoha Consultoria`;
    
    // Breadcrumb
    const breadcrumbTitle = document.getElementById('breadcrumb-title');
    if (breadcrumbTitle) {
        breadcrumbTitle.textContent = produtoAtual.titulo;
    }
    
    // Informações principais
    const produtoTitulo = document.getElementById('produto-titulo');
    const produtoPreco = document.getElementById('produto-preco');
    const produtoDescricao = document.getElementById('produto-descricao');
    const produtoLocalizacao = document.getElementById('produto-localizacao');
    
    if (produtoTitulo) produtoTitulo.textContent = produtoAtual.titulo;
    if (produtoPreco) produtoPreco.textContent = produtoAtual.precoFormatado;
    if (produtoDescricao) produtoDescricao.textContent = produtoAtual.descricao;
    if (produtoLocalizacao) produtoLocalizacao.textContent = formatLocation(produtoAtual.localizacao);
    
    // Status
    const statusElement = document.getElementById('produto-status');
    if (statusElement) {
        const statusText = produtoAtual.status.charAt(0).toUpperCase() + produtoAtual.status.slice(1).replace('-', ' ');
        statusElement.textContent = statusText;
        statusElement.className = `status-badge ${produtoAtual.status}`;
    }
    
    // Detalhes da sidebar
    const produtoCategoria = document.getElementById('produto-categoria');
    const produtoTipo = document.getElementById('produto-tipo');
    const produtoArea = document.getElementById('produto-area');
    const produtoId = document.getElementById('produto-id');
    
    if (produtoCategoria) produtoCategoria.textContent = formatCategoria(produtoAtual.categoria);
    if (produtoTipo) produtoTipo.textContent = 'Consultoria';
    if (produtoArea) produtoArea.textContent = '120m²';
    if (produtoId) produtoId.textContent = `#${produtoAtual.id.toString().padStart(4, '0')}`;
    
    // Configurar galeria
    configurarImagemPrincipal();
    
    // Carregar produtos relacionados
    carregarProdutosRelacionados();
}

// Configurar imagem principal
function configurarImagemPrincipal() {
    const imagemPrincipal = document.getElementById('imagem-principal');
    if (imagemPrincipal && produtoAtual) {
        imagemPrincipal.src = produtoAtual.imagem;
        imagemPrincipal.alt = produtoAtual.titulo;
    }
}

// Configurar galeria de miniaturas
function configurarGaleria() {
    const miniaturas = document.querySelectorAll('.miniatura');
    const imagemPrincipal = document.getElementById('imagem-principal');
    
    miniaturas.forEach((miniatura, index) => {
        miniatura.addEventListener('click', function() {
            // Remover classe active de todas as miniaturas
            miniaturas.forEach(m => m.classList.remove('active'));
            
            // Adicionar classe active na miniatura clicada
            this.classList.add('active');
            
            // Trocar imagem principal
            if (imagemPrincipal && produtoAtual) {
                imagemPrincipal.src = produtoAtual.imagem;
            }
        });
    });
    
    // Ativar primeira miniatura por padrão
    if (miniaturas.length > 0) {
        miniaturas[0].classList.add('active');
    }
}

// Carregar produtos relacionados
function carregarProdutosRelacionados() {
    const container = document.getElementById('produtos-relacionados');
    if (!container || !produtoAtual) return;
    
    const relacionados = produtos
        .filter(p => p.id !== produtoAtual.id && p.categoria === produtoAtual.categoria)
        .slice(0, 3);
    
    // Se não houver produtos da mesma categoria, pegar outros aleatoriamente
    if (relacionados.length < 3) {
        const outros = produtos
            .filter(p => p.id !== produtoAtual.id && !relacionados.includes(p))
            .slice(0, 3 - relacionados.length);
        relacionados.push(...outros);
    }
    
    container.innerHTML = '';
    
    relacionados.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'produto-relacionado';
        card.onclick = () => {
            window.location.href = `viewitem.html?id=${produto.id}`;
        };
        
        card.innerHTML = `
            <div class="produto-img">
                <img src="${produto.imagem}" alt="${produto.titulo}">
            </div>
            <div class="produto-info">
                <h3 class="produto-titulo">${produto.titulo}</h3>
                <div class="produto-preco">${produto.precoFormatado}</div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Funções de formatação
function formatLocation(location) {
    return location.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

function formatCategoria(categoria) {
    const categorias = {
        'residencial': 'Residencial',
        'comercial': 'Comercial',
        'investimento': 'Investimento',
        'consultoria': 'Consultoria',
        'tecnologia': 'Tecnologia'
    };
    return categorias[categoria] || categoria;
}

// Funções de compartilhamento
function compartilharWhatsApp() {
    if (produtoAtual) {
        const texto = `Confira este produto: ${produtoAtual.titulo} - ${window.location.href}`;
        const url = `https://wa.me/?text=${encodeURIComponent(texto)}`;
        window.open(url, '_blank');
    }
}

function compartilharFacebook() {
    if (produtoAtual) {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
        window.open(url, '_blank');
    }
}

function compartilharTwitter() {
    if (produtoAtual) {
        const texto = `Confira: ${produtoAtual.titulo}`;
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(texto)}&url=${encodeURIComponent(window.location.href)}`;
        window.open(url, '_blank');
    }
}

function copiarLink() {
    navigator.clipboard.writeText(window.location.href).then(function() {
        alert('Link copiado para a área de transferência!');
    });
}
