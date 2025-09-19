
// Função para download de documentação (usada no menu)
function baixarDocumentacaoParceria() {
    const confirmacao = confirm('Deseja fazer o download do modelo de documentação para parceria? GIT ');
    if (confirmacao) {
        // Simular download de PDF
        const link = document.createElement('a');
        link.href = 'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVGl0bGUgKERvY3VtZW50byBkZSBQYXJjZXJpYSAtIFRla29oYSBDb25zdWx0b3JpYSkKL0NyZWF0b3IgKFRla29oYSBDb25zdWx0b3JpYSkKL1Byb2R1Y2VyIChUZWtvaGEgU3lzdGVtKQovQ3JlYXRpb25EYXRlIChEOjIwMjQxMjE5MTIwMDAwKQo+PgplbmRvYmoKCjIgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL1BhZ2VzIDMgMCBSCj4+CmVuZG9iagoKMyAwIG9iago8PAovVHlwZSAvUGFnZXMKL0tpZHMgWzQgMCBSXQovQ291bnQgMQo+PgplbmRvYmoKCjQgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAzIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCgo1IDAgb2JqCjw8Ci9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCi9GMSAxMiBUZgoxMDAgNzAwIFRkCihEb2N1bWVudG8gZGUgUGFyY2VyaWEpIFRqCkVUCmVuZHN0cmVhbQplbmRvYmoKCnhyZWYKMCA2CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAwOSAwMDAwMCBuIAowMDAwMDAwMTc0IDAwMDAwIG4gCjAwMDAwMDAyMjEgMDAwMDAgbiAKMDAwMDAwMDI3OCAwMDAwMCBuIAowMDAwMDAwMzc4IDAwMDAwIG4gCnRyYWlsZXIKPDwKL1NpemUgNgovUm9vdCAyIDAgUgo+PgpzdGFydHhyZWYKNDcwCiUlRU9G';
        link.download = 'Documentacao_Parceria_Tekoha.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        alert('Download iniciado! Verifique sua pasta de downloads.');
    }
}



// Dados dos produtos (simulando uma API)
const produtos = [
  { id: 1, titulo: "Anuncie Seu Imóvel aqui...", descricao: "Lead", preco: 85000, precoFormatado: "R$ -", categoria: "residencial", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/35/5b/4a/355b4a539303b9db3d3aa4aa115171f9.jpg" },
  { id: 2, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 150000, precoFormatado: "R$ -", categoria: "comercial", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/b6/95/a5/b695a50aae378d6851856ee251fdcdf7.jpg" },
  { id: 3, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 45000, precoFormatado: "R$ -", categoria: "investimento", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/73/7c/a3/737ca30baf082f73a2359ad02a4c9bc5.jpg" },
  { id: 4, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 120000, precoFormatado: "R$ -", categoria: "tecnologia", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/55/ab/96/55ab96204350212c458ced40efc8bfeb.jpg" },
  { id: 5, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 75000, precoFormatado: "R$ -", categoria: "consultoria", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/a6/44/e2/a644e27b601fcacada8e787f5d98bbc9.jpg" },
  { id: 6, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 95000, precoFormatado: "R$ -", categoria: "residencial", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/8b/ae/11/8bae11c0e4917619a75c8dd70b4b605c.jpg" },
  { id: 7, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 200000, precoFormatado: "R$ -", categoria: "comercial", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/94/9e/6f/949e6f14f2777447cd56178f23cbf61f.jpg" },
  { id: 8, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 35000, precoFormatado: "R$ -", categoria: "tecnologia", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/35/5b/4a/355b4a539303b9db3d3aa4aa115171f9.jpg" },
  { id: 9, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 180000, precoFormatado: "R$ -", categoria: "residencial", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/b6/95/a5/b695a50aae378d6851856ee251fdcdf7.jpg" },
  { id: 10, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 220000, precoFormatado: "R$ -", categoria: "comercial", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/73/7c/a3/737ca30baf082f73a2359ad02a4c9bc5.jpg" },
  { id: 11, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 90000, precoFormatado: "R$ -", categoria: "tecnologia", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/55/ab/96/55ab96204350212c458ced40efc8bfeb.jpg" },
  { id: 12, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 65000, precoFormatado: "R$ -", categoria: "investimento", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/a6/44/e2/a644e27b601fcacada8e787f5d98bbc9.jpg" },
  { id: 13, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 250000, precoFormatado: "R$ -", categoria: "residencial", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/8b/ae/11/8bae11c0e4917619a75c8dd70b4b605c.jpg" },
  { id: 14, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 55000, precoFormatado: "R$ -", categoria: "comercial", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/94/9e/6f/949e6f14f2777447cd56178f23cbf61f.jpg" },
  { id: 15, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 40000, precoFormatado: "R$ -", categoria: "tecnologia", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/35/5b/4a/355b4a539303b9db3d3aa4aa115171f9.jpg" },
  { id: 16, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 30000, precoFormatado: "R$ -", categoria: "consultoria", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/b6/95/a5/b695a50aae378d6851856ee251fdcdf7.jpg" },
  { id: 17, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 110000, precoFormatado: "R$ -", categoria: "residencial", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/73/7c/a3/737ca30baf082f73a2359ad02a4c9bc5.jpg" },
  { id: 18, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 170000, precoFormatado: "R$ -", categoria: "comercial", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/55/ab/96/55ab96204350212c458ced40efc8bfeb.jpg" },
  { id: 19, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 80000, precoFormatado: "R$ -", categoria: "tecnologia", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/a6/44/e2/a644e27b601fcacada8e787f5d98bbc9.jpg" },
  { id: 20, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 300000, precoFormatado: "R$ -", categoria: "comercial", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/8b/ae/11/8bae11c0e4917619a75c8dd70b4b605c.jpg" },
  { id: 21, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 70000, precoFormatado: "R$ -", categoria: "investimento", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/94/9e/6f/949e6f14f2777447cd56178f23cbf61f.jpg" },
  { id: 22, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 450000, precoFormatado: "R$ -", categoria: "comercial", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/35/5b/4a/355b4a539303b9db3d3aa4aa115171f9.jpg" },
  { id: 23, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 280000, precoFormatado: "R$ -", categoria: "comercial", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/b6/95/a5/b695a50aae378d6851856ee251fdcdf7.jpg" },
  { id: 24, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 60000, precoFormatado: "R$ -", categoria: "tecnologia", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/73/7c/a3/737ca30baf082f73a2359ad02a4c9bc5.jpg" },
  { id: 25, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 32000, precoFormatado: "R$ -", categoria: "consultoria", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/55/ab/96/55ab96204350212c458ced40efc8bfeb.jpg" },
  { id: 26, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 160000, precoFormatado: "R$ -", categoria: "residencial", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/a6/44/e2/a644e27b601fcacada8e787f5d98bbc9.jpg" },
  { id: 27, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 210000, precoFormatado: "R$ -", categoria: "comercial", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/8b/ae/11/8bae11c0e4917619a75c8dd70b4b605c.jpg" },
  { id: 28, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 95000, precoFormatado: "R$ -", categoria: "tecnologia", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/94/9e/6f/949e6f14f2777447cd56178f23cbf61f.jpg" },
  { id: 29, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 28000, precoFormatado: "R$ -", categoria: "consultoria", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/35/5b/4a/355b4a539303b9db3d3aa4aa115171f9.jpg" },
  { id: 30, titulo: "Anuncie Seu Imóvel aqui", descricao: "Lead", preco: 130000, precoFormatado: "R$ -", categoria: "residencial", localizacao: "centro", status: "disponivel", imagem: "https://i.pinimg.com/736x/b6/95/a5/b695a50aae378d6851856ee251fdcdf7.jpg" }
];

let produtosFiltrados = [...produtos];
let termoBusca = '';
let paginaAtual = 1;
const itensPorPagina = 30;

// Elementos DOM
const produtosGrid = document.getElementById('produtos-grid');
const totalResultados = document.getElementById('total-resultados');
const buscaInput = document.getElementById('busca-input');
const buscaBtn = document.getElementById('busca-btn');
const limparFiltrosBtn = document.querySelector('.limpar-filtros');
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
        checkbox.addEventListener('change', function() {
            paginaAtual = 1; // Reset para primeira página
            aplicarFiltros();
        });
    });
    
    // Limpar filtros
    limparFiltrosBtn.addEventListener('click', limparFiltros);
    
    // Ordenação
    ordenarSelect.addEventListener('change', function() {
        paginaAtual = 1; // Reset para primeira página
        aplicarFiltros();
    });
    
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
    paginaAtual = 1; // Reset para primeira página
    aplicarFiltros();
}

// Aplicar filtros
function aplicarFiltros() {
    const categoriasSelecionadas = getCheckboxValues('categoria');
    const precosSelecionados = getCheckboxValues('preco');
    const localizacoesSelecionadas = getCheckboxValues('localizacao');
    const statusSelecionados = getCheckboxValues('status');
    
    produtosFiltrados = produtos.filter(produto => {
        // Busca por texto
        const matchBusca = !termoBusca || 
            produto.titulo.toLowerCase().includes(termoBusca) ||
            produto.descricao.toLowerCase().includes(termoBusca);
        
        // Filtros de categoria
        const matchCategoria = categoriasSelecionadas.length === 0 || 
            categoriasSelecionadas.includes(produto.categoria);
        
        // Filtros de localização
        const matchLocalizacao = localizacoesSelecionadas.length === 0 || 
            localizacoesSelecionadas.includes(produto.localizacao);
        
        // Filtros de status
        const matchStatus = statusSelecionados.length === 0 || 
            statusSelecionados.includes(produto.status);
        
        // Filtros de preço
        const matchPreco = verificarFiltroPreco(produto.preco, precosSelecionados);
        
        return matchBusca && matchCategoria && matchLocalizacao && matchStatus && matchPreco;
    });
    
    aplicarOrdenacao();
    renderizarProdutos();
    atualizarPaginacao();
}

// Verificar filtro de preço
function verificarFiltroPreco(preco, filtrosSelecionados) {
    if (filtrosSelecionados.length === 0) return true;
    
    return filtrosSelecionados.some(filtro => {
        switch (filtro) {
            case 'ate-50k': return preco <= 50000;
            case '50k-100k': return preco > 50000 && preco <= 100000;
            case '100k-200k': return preco > 100000 && preco <= 200000;
            case 'acima-200k': return preco > 200000;
            default: return true;
        }
    });
}

// Obter valores dos checkboxes selecionados
function getCheckboxValues(name) {
    return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`))
        .map(cb => cb.value);
}

// Aplicar ordenação
function aplicarOrdenacao() {
    const ordenacao = ordenarSelect.value;
    
    switch (ordenacao) {
        case 'preco-menor':
            produtosFiltrados.sort((a, b) => a.preco - b.preco);
            break;
        case 'preco-maior':
            produtosFiltrados.sort((a, b) => b.preco - a.preco);
            break;
        case 'mais-recente':
            produtosFiltrados.sort((a, b) => b.id - a.id);
            break;
        default:
            // Ordenação por relevância (manter ordem original)
            produtosFiltrados.sort((a, b) => a.id - b.id);
            break;
    }
}

// Renderizar produtos com paginação
function renderizarProdutos() {
    // Atualizar contador
    totalResultados.textContent = `${produtosFiltrados.length} resultado${produtosFiltrados.length !== 1 ? 's' : ''} encontrado${produtosFiltrados.length !== 1 ? 's' : ''}`;
    
    // Limpar grid
    produtosGrid.innerHTML = '';
    
    // Calcular produtos da página atual
    const inicio = (paginaAtual - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina;
    const produtosPagina = produtosFiltrados.slice(inicio, fim);
    
    // Renderizar produtos
    if (produtosFiltrados.length === 0) {
        produtosGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #718096;">
                <h3>Nenhum produto encontrado</h3>
                <p>Tente ajustar os filtros ou termo de busca.</p>
            </div>
        `;
        return;
    }
    
    produtosPagina.forEach(produto => {
        const produtoCard = createProdutoCard(produto);
        produtosGrid.appendChild(produtoCard);
    });
}

// Criar card do produto
function createProdutoCard(produto) {
    const card = document.createElement('div');
    card.className = 'produto-card';
    card.onclick = () => abrirDetalheProduto(produto.id);
    
    const statusClass = `status-${produto.status.replace('-', '')}`;
    const statusText = produto.status.charAt(0).toUpperCase() + produto.status.slice(1).replace('-', ' ');
    
    card.innerHTML = `
        <div class="produto-img">
            <img src="${produto.imagem}" alt="${produto.titulo}" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <div class="produto-info">
            <h3 class="produto-titulo">${produto.titulo}</h3>
            <p class="produto-descricao">${produto.descricao}</p>
            <div class="produto-preco">${produto.precoFormatado}</div>
            <div class="produto-meta">
                <span class="produto-localizacao">${formatLocation(produto.localizacao)}</span>
                <span class="produto-status ${statusClass}">${statusText}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Atualizar paginação
function atualizarPaginacao() {
    const totalPaginas = Math.ceil(produtosFiltrados.length / itensPorPagina);
    const paginacaoContainer = document.querySelector('.paginacao');
    
    // Limpar paginação existente
    paginacaoContainer.innerHTML = '';
    
    if (totalPaginas <= 1) {
        paginacaoContainer.style.display = 'none';
        return;
    }
    
    paginacaoContainer.style.display = 'flex';
    
    // Botão Anterior
    const btnAnterior = document.createElement('button');
    btnAnterior.className = 'pag-btn';
    btnAnterior.textContent = 'Anterior';
    btnAnterior.disabled = paginaAtual === 1;
    btnAnterior.onclick = () => {
        if (paginaAtual > 1) {
            paginaAtual--;
            renderizarProdutos();
            atualizarPaginacao();
        }
    };
    paginacaoContainer.appendChild(btnAnterior);
    
    // Container dos números
    const paginasContainer = document.createElement('span');
    paginasContainer.className = 'paginas';
    
    // Lógica para mostrar páginas
    let inicioPaginas = Math.max(1, paginaAtual - 2);
    let fimPaginas = Math.min(totalPaginas, paginaAtual + 2);
    
    // Sempre mostrar página 1
    if (inicioPaginas > 1) {
        const btn1 = criarBotaoPagina(1);
        paginasContainer.appendChild(btn1);
        
        if (inicioPaginas > 2) {
            const span = document.createElement('span');
            span.textContent = '...';
            span.style.margin = '0 0.5rem';
            paginasContainer.appendChild(span);
        }
    }
    
    // Páginas do meio
    for (let i = inicioPaginas; i <= fimPaginas; i++) {
        const btnPagina = criarBotaoPagina(i);
        paginasContainer.appendChild(btnPagina);
    }
    
    // Sempre mostrar última página
    if (fimPaginas < totalPaginas) {
        if (fimPaginas < totalPaginas - 1) {
            const span = document.createElement('span');
            span.textContent = '...';
            span.style.margin = '0 0.5rem';
            paginasContainer.appendChild(span);
        }
        
        const btnUltima = criarBotaoPagina(totalPaginas);
        paginasContainer.appendChild(btnUltima);
    }
    
    paginacaoContainer.appendChild(paginasContainer);
    
    // Botão Próximo
    const btnProximo = document.createElement('button');
    btnProximo.className = 'pag-btn';
    btnProximo.textContent = 'Próximo';
    btnProximo.disabled = paginaAtual === totalPaginas;
    btnProximo.onclick = () => {
        if (paginaAtual < totalPaginas) {
            paginaAtual++;
            renderizarProdutos();
            atualizarPaginacao();
        }
    };
    paginacaoContainer.appendChild(btnProximo);
}

// Criar botão de página
function criarBotaoPagina(numeroPagina) {
    const btn = document.createElement('button');
    btn.className = `pag-numero ${numeroPagina === paginaAtual ? 'active' : ''}`;
    btn.textContent = numeroPagina;
    btn.onclick = () => {
        paginaAtual = numeroPagina;
        renderizarProdutos();
        atualizarPaginacao();
    };
    return btn;
}

// Formatar localização
function formatLocation(location) {
    return location.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
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
    
    // Resetar página
    paginaAtual = 1;
    
    // Aplicar filtros limpos
    aplicarFiltros();
}

// Abrir detalhe do produto
function abrirDetalheProduto(id) {
    window.location.href = `viewitem.html?id=${id}`;
}
