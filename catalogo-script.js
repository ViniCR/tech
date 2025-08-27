
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
    },
    {
        id: 6,
        titulo: "Residencial Sustentável",
        descricao: "Projeto eco-friendly com tecnologias verdes",
        preco: 95000,
        precoFormatado: "R$ 95.000",
        categoria: "residencial",
        localizacao: "zona-norte",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/f59e0b/white?text=Eco+House"
    },
    {
        id: 7,
        titulo: "Torre Comercial Inteligente",
        descricao: "Edifício comercial com automação e IoT",
        preco: 200000,
        precoFormatado: "R$ 200.000",
        categoria: "comercial",
        localizacao: "centro",
        status: "em-andamento",
        imagem: "https://via.placeholder.com/280x200/e53e3e/white?text=Torre+Smart"
    },
    {
        id: 8,
        titulo: "Cashback Imobiliário",
        descricao: "Sistema de recompensas para transações imobiliárias",
        preco: 35000,
        precoFormatado: "R$ 35.000",
        categoria: "tecnologia",
        localizacao: "zona-sul",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/805ad5/white?text=Cashback+$"
    },
    {
        id: 9,
        titulo: "Condomínio Luxo",
        descricao: "Desenvolvimento de condomínio fechado de alto padrão",
        preco: 180000,
        precoFormatado: "R$ 180.000",
        categoria: "residencial",
        localizacao: "zona-oeste",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/667eea/white?text=Condominio+Luxo"
    },
    {
        id: 10,
        titulo: "Centro Médico",
        descricao: "Consultoria para desenvolvimento de centro médico",
        preco: 220000,
        precoFormatado: "R$ 220.000",
        categoria: "comercial",
        localizacao: "centro",
        status: "concluido",
        imagem: "https://via.placeholder.com/280x200/764ba2/white?text=Centro+Medico"
    },
    {
        id: 11,
        titulo: "Aplicativo Imobiliário",
        descricao: "Desenvolvimento de app para gestão de imóveis",
        preco: 90000,
        precoFormatado: "R$ 90.000",
        categoria: "tecnologia",
        localizacao: "zona-norte",
        status: "em-andamento",
        imagem: "https://via.placeholder.com/280x200/8b5cf6/white?text=App+Imovel"
    },
    {
        id: 12,
        titulo: "Fundo Imobiliário",
        descricao: "Estruturação de fundo de investimento imobiliário",
        preco: 65000,
        precoFormatado: "R$ 65.000",
        categoria: "investimento",
        localizacao: "centro",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/06b6d4/white?text=Fundo+FII"
    },
    
    {
        id: 13,
        titulo: "Loteamento de Alto Padrão",
        descricao: "Desenvolvimento e venda de lotes em área nobre",
        preco: 250000,
        precoFormatado: "R$ 250.000",
        categoria: "residencial",
        localizacao: "zona-sul",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/a3b18a/white?text=Loteamento"
    },
    {
        id: 14,
        titulo: "Espaço Coworking",
        descricao: "Criação de espaço de trabalho compartilhado",
        preco: 55000,
        precoFormatado: "R$ 55.000",
        categoria: "comercial",
        localizacao: "zona-leste",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/588157/white?text=Coworking"
    },
    {
        id: 15,
        titulo: "Realidade Virtual Imobiliária",
        descricao: "Tour virtual imersivo para clientes",
        preco: 40000,
        precoFormatado: "R$ 40.000",
        categoria: "tecnologia",
        localizacao: "centro",
        status: "em-andamento",
        imagem: "https://via.placeholder.com/280x200/3a5a40/white?text=VR+Imobiliaria"
    },
    {
        id: 16,
        titulo: "Análise de Viabilidade",
        descricao: "Estudo detalhado para novos empreendimentos",
        preco: 30000,
        precoFormatado: "R$ 30.000",
        categoria: "consultoria",
        localizacao: "zona-oeste",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/344e41/white?text=Viabilidade"
    },
    {
        id: 17,
        titulo: "Casa Inteligente",
        descricao: "Automação residencial completa",
        preco: 110000,
        precoFormatado: "R$ 110.000",
        categoria: "residencial",
        localizacao: "zona-norte",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/1b4332/white?text=Casa+Smart"
    },
    {
        id: 18,
        titulo: "Hotel Boutique",
        descricao: "Consultoria para criação de hotel temático",
        preco: 170000,
        precoFormatado: "R$ 170.000",
        categoria: "comercial",
        localizacao: "centro",
        status: "concluido",
        imagem: "https://via.placeholder.com/280x200/283618/white?text=Hotel"
    },
    {
        id: 19,
        titulo: "Plataforma de Leilões",
        descricao: "Sistema online para leilão de imóveis",
        preco: 80000,
        precoFormatado: "R$ 80.000",
        categoria: "tecnologia",
        localizacao: "zona-sul",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/4a4e69/white?text=Leilao+Online"
    },
    {
        id: 20,
        titulo: "Edifício Corporativo",
        descricao: "Desenvolvimento de prédio para empresas",
        preco: 300000,
        precoFormatado: "R$ 300.000",
        categoria: "comercial",
        localizacao: "zona-leste",
        status: "em-andamento",
        imagem: "https://via.placeholder.com/280x200/9a8c98/white?text=Edificio"
    },
        {
        id: 21,
        titulo: "Cripto Imobiliário",
        descricao: "Consultoria para investimentos em imóveis com criptomoedas",
        preco: 70000,
        precoFormatado: "R$ 70.000",
        categoria: "investimento",
        localizacao: "centro",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/c9ada7/white?text=Cripto"
    },
      {
        id: 22,
        titulo: "Resort de Luxo",
        descricao: "Projeto para construção de resort exclusivo",
        preco: 450000,
        precoFormatado: "R$ 450.000",
        categoria: "comercial",
        localizacao: "zona-oeste",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/f2e9e4/white?text=Resort"
    },
    {
        id: 23,
        titulo: "Hotel Fazenda",
        descricao: "Consultoria para construção de hotel rural",
        preco: 280000,
        precoFormatado: "R$ 280.000",
        categoria: "comercial",
        localizacao: "zona-norte",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/c69749/white?text=Fazenda"
    },
    {
        id: 24,
        titulo: "Realidade Aumentada",
        descricao: "Aplicação de RA para visualização de imóveis",
        preco: 60000,
        precoFormatado: "R$ 60.000",
        categoria: "tecnologia",
        localizacao: "centro",
        status: "em-andamento",
        imagem: "https://via.placeholder.com/280x200/6c5b7b/white?text=RA"
    },
    {
        id: 25,
        titulo: "Due Diligence",
        descricao: "Análise completa de documentos imobiliários",
        preco: 32000,
        precoFormatado: "R$ 32.000",
        categoria: "consultoria",
        localizacao: "zona-sul",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/355c7d/white?text=DD"
    },
    {
        id: 26,
        titulo: "Cobertura de Luxo",
        descricao: "Projeto de interiores para cobertura",
        preco: 160000,
        precoFormatado: "R$ 160.000",
        categoria: "residencial",
        localizacao: "zona-leste",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/6c5b7b/white?text=Cobertura"
    },
    {
        id: 27,
        titulo: "Galpão Industrial",
        descricao: "Construção de galpão para indústrias",
        preco: 210000,
        precoFormatado: "R$ 210.000",
        categoria: "comercial",
        localizacao: "zona-oeste",
        status: "concluido",
        imagem: "https://via.placeholder.com/280x200/c06c84/white?text=Galpao"
    },
    {
        id: 28,
        titulo: "Blockchain Imobiliário",
        descricao: "Implementação de blockchain para transações",
        preco: 95000,
        precoFormatado: "R$ 95.000",
        categoria: "tecnologia",
        localizacao: "centro",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/f67280/white?text=Block"
    },
    {
        id: 29,
        titulo: "Avaliação de Imóveis",
        descricao: "Serviço de avaliação profissional de imóveis",
        preco: 28000,
        precoFormatado: "R$ 28.000",
        categoria: "consultoria",
        localizacao: "zona-norte",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/f8b195/white?text=Avaliacao"
    },
    {
        id: 30,
        titulo: "Casa de Campo",
        descricao: "Projeto para construção de casa de campo",
        preco: 130000,
        precoFormatado: "R$ 130.000",
        categoria: "residencial",
        localizacao: "zona-sul",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/355c7d/white?text=Campo"
    },
    {
        id: 31,
        titulo: "Restaurante Temático",
        descricao: "Consultoria para abertura de restaurante",
        preco: 190000,
        precoFormatado: "R$ 190.000",
        categoria: "comercial",
        localizacao: "zona-leste",
        status: "em-andamento",
        imagem: "https://via.placeholder.com/280x200/6c5b7b/white?text=Restaurante"
    },
    {
        id: 32,
        titulo: "CRM Imobiliário",
        descricao: "Software para gestão de clientes imobiliários",
        preco: 75000,
        precoFormatado: "R$ 75.000",
        categoria: "tecnologia",
        localizacao: "zona-oeste",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/c06c84/white?text=CRM"
    },
    {
        id: 33,
        titulo: "Análise de Tendências",
        descricao: "Relatório sobre tendências do mercado imobiliário",
        preco: 38000,
        precoFormatado: "R$ 38.000",
        categoria: "consultoria",
        localizacao: "centro",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/f67280/white?text=Tendencias"
    },
    {
        id: 34,
        titulo: "Loft Industrial",
        descricao: "Projeto de revitalização de loft",
        preco: 145000,
        precoFormatado: "R$ 145.000",
        categoria: "residencial",
        localizacao: "zona-norte",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/f8b195/white?text=Loft"
    },
    {
        id: 35,
        titulo: "Clínica Odontológica",
        descricao: "Consultoria para abertura de clínica",
        preco: 200000,
        precoFormatado: "R$ 200.000",
        categoria: "comercial",
        localizacao: "zona-sul",
        status: "concluido",
        imagem: "https://via.placeholder.com/280x200/355c7d/white?text=Clinica"
    },
    {
        id: 36,
        titulo: "Marketplace Imobiliário",
        descricao: "Plataforma para compra e venda de imóveis",
        preco: 88000,
        precoFormatado: "R$ 88.000",
        categoria: "tecnologia",
        localizacao: "zona-leste",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/6c5b7b/white?text=Marketplace"
    },
    {
        id: 37,
        titulo: "Planejamento Tributário",
        descricao: "Consultoria para otimização fiscal imobiliária",
        preco: 42000,
        precoFormatado: "R$ 42.000",
        categoria: "consultoria",
        localizacao: "zona-oeste",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/c06c84/white?text=Tributario"
    },
    {
        id: 38,
        titulo: "Apartamento Compacto",
        descricao: "Projeto para otimização de espaço",
        preco: 115000,
        precoFormatado: "R$ 115.000",
        categoria: "residencial",
        localizacao: "centro",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/f67280/white?text=Compacto"
    },
   {
        id: 39,
        titulo: "Escola de Idiomas",
        descricao: "Consultoria para abertura de escola",
        preco: 185000,
        precoFormatado: "R$ 185.000",
        categoria: "comercial",
        localizacao: "zona-norte",
        status: "em-andamento",
        imagem: "https://via.placeholder.com/280x200/f8b195/white?text=Escola"
    },
    {
        id: 40,
        titulo: "Inteligência Artificial",
        descricao: "Implementação de IA para análise de dados",
        preco: 92000,
        precoFormatado: "R$ 92.000",
        categoria: "tecnologia",
        localizacao: "zona-sul",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/355c7d/white?text=IA"
    },
    {
        id: 41,
        titulo: "Revisão Contratual",
        descricao: "Análise e revisão de contratos imobiliários",
        preco: 35000,
        precoFormatado: "R$ 35.000",
        categoria: "consultoria",
        localizacao: "zona-leste",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/6c5b7b/white?text=Contrato"
    },
    {
        id: 42,
        titulo: "Studio",
        descricao: "Projeto para construção de studio moderno",
        preco: 125000,
        precoFormatado: "R$ 125.000",
        categoria: "residencial",
        localizacao: "zona-oeste",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/c06c84/white?text=Studio"
    },
    {
        id: 43,
        titulo: "Bar Temático",
        descricao: "Consultoria para abertura de bar",
        preco: 195000,
        precoFormatado: "R$ 195.000",
        categoria: "comercial",
        localizacao: "centro",
        status: "concluido",
        imagem: "https://via.placeholder.com/280x200/f67280/white?text=Bar"
    },
    {
        id: 44,
        titulo: "Gestão de Portfólio",
        descricao: "Plataforma para gestão de ativos imobiliários",
        preco: 85000,
        precoFormatado: "R$ 85.000",
        categoria: "tecnologia",
        localizacao: "zona-norte",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/f8b195/white?text=Portfolio"
    },
    {
        id: 45,
        titulo: "Estratégias de Marketing",
        descricao: "Consultoria para marketing imobiliário",
        preco: 40000,
        precoFormatado: "R$ 40.000",
        categoria: "consultoria",
        localizacao: "zona-sul",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/355c7d/white?text=Marketing"
    },
    {
        id: 46,
        titulo: "Duplex",
        descricao: "Projeto para construção de duplex moderno",
        preco: 135000,
        precoFormatado: "R$ 135.000",
        categoria: "residencial",
        localizacao: "zona-leste",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/6c5b7b/white?text=Duplex"
    },
    {
        id: 47,
        titulo: "Cafeteria",
        descricao: "Consultoria para abertura de cafeteria",
        preco: 180000,
        precoFormatado: "R$ 180.000",
        categoria: "comercial",
        localizacao: "zona-oeste",
        status: "em-andamento",
        imagem: "https://via.placeholder.com/280x200/c06c84/white?text=Cafeteria"
    },
    {
        id: 48,
        titulo: "Análise Preditiva",
        descricao: "Implementação de análise preditiva de dados",
        preco: 90000,
        precoFormatado: "R$ 90.000",
        categoria: "tecnologia",
        localizacao: "centro",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/f67280/white?text=Preditiva"
    },
    {
        id: 49,
        titulo: "Mediação Imobiliária",
        descricao: "Serviço de mediação para resolução de conflitos",
        preco: 37000,
        precoFormatado: "R$ 37.000",
        categoria: "consultoria",
        localizacao: "zona-norte",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/f8b195/white?text=Mediacao"
    },
    {
        id: 50,
        titulo: "Triplex",
        descricao: "Projeto para construção de triplex moderno",
        preco: 140000,
        precoFormatado: "R$ 140.000",
        categoria: "residencial",
        localizacao: "zona-sul",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/355c7d/white?text=Triplex"
    },
    {
        id: 51,
        titulo: "Cinema",
        descricao: "Consultoria para construção de cinema",
        preco: 320000,
        precoFormatado: "R$ 320.000",
        categoria: "comercial",
        localizacao: "zona-leste",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/6c5b7b/white?text=Cinema"
    },
    {
        id: 52,
        titulo: "Tour 3D",
        descricao: "Criação de tour 3D para apresentação de imoveis",
        preco: 62000,
        precoFormatado: "R$ 62.000",
        categoria: "tecnologia",
        localizacao: "zona-oeste",
        status: "em-andamento",
        imagem: "https://via.placeholder.com/280x200/c06c84/white?text=Tour3D"
    },
    {
        id: 53,
        titulo: "Analise de Crédito",
        descricao: "Serviço de análise de crédito para financiamento imobiliário",
        preco: 39000,
        precoFormatado: "R$ 39.000",
        categoria: "consultoria",
        localizacao: "centro",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/f67280/white?text=Crédito"
    },
    {
        id: 54,
        titulo: "Flat",
        descricao: "Projeto para construção de flat",
        preco: 142000,
        precoFormatado: "R$ 142.000",
        categoria: "residencial",
        localizacao: "zona-norte",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/f8b195/white?text=Flat"
    },
    {
        id: 55,
        titulo: "Parque Aquático",
        descricao: "Consultoria para construção de parque aquático",
        preco: 330000,
        precoFormatado: "R$ 330.000",
        categoria: "comercial",
        localizacao: "zona-sul",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/355c7d/white?text=Aquatico"
    },
    {
        id: 56,
        titulo: "Realidade Virtual",
        descricao: "Criação de experiencia de realidade virtual para apresentar imóveis",
        preco: 64000,
        precoFormatado: "R$ 64.000",
        categoria: "tecnologia",
        localizacao: "zona-leste",
        status: "em-andamento",
        imagem: "https://via.placeholder.com/280x200/6c5b7b/white?text=RV"
    },
    {
        id: 57,
        titulo: "Consultoria Financeira",
        descricao: "Serviço de consultoria financeira para compra de imóvel",
        preco: 41000,
        precoFormatado: "R$ 41.000",
        categoria: "consultoria",
        localizacao: "zona-oeste",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/c06c84/white?text=Financeira"
    },
    {
        id: 58,
        titulo: "Kitnet",
        descricao: "Projeto para construção de kitnet",
        preco: 144000,
        precoFormatado: "R$ 144.000",
        categoria: "residencial",
        localizacao: "centro",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/f67280/white?text=Kitnet"
    },
    {
        id: 59,
        titulo: "Hotel 5 Estrelas",
        descricao: "Consultoria para construção de hotel 5 estrelas",
        preco: 340000,
        precoFormatado: "R$ 340.000",
        categoria: "comercial",
        localizacao: "zona-norte",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/f8b195/white?text=5Estrelas"
    },
    {
        id: 60,
        titulo: "Metaverso Imobiliário",
        descricao: "Criação de lojas dentro do metaverso",
        preco: 66000,
        precoFormatado: "R$ 66.000",
        categoria: "tecnologia",
        localizacao: "zona-sul",
        status: "em-andamento",
        imagem: "https://via.placeholder.com/280x200/355c7d/white?text=Metaverso"
    },
    {
        id: 61,
        titulo: "Regularização de Imóveis",
        descricao: "Serviço de regularização de imóveis",
        preco: 43000,
        precoFormatado: "R$ 43.000",
        categoria: "consultoria",
        localizacao: "zona-leste",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/6c5b7b/white?text=Regularização"
    },
    {
        id: 62,
        titulo: "Casa Geminada",
        descricao: "Projeto para construção de casa geminada",
        preco: 146000,
        precoFormatado: "R$ 146.000",
        categoria: "residencial",
        localizacao: "zona-oeste",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/c06c84/white?text=Geminada"
    },
    {
        id: 63,
        titulo: "Shopping Center",
        descricao: "Consultoria para construção de shopping center",
        preco: 350000,
        precoFormatado: "R$ 350.000",
        categoria: "comercial",
        localizacao: "centro",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/f67280/white?text=Shopping"
    },
    {
        id: 64,
        titulo: "Gêmeo Digital",
        descricao: "Criação de Gêmeo Digital de Imóvel",
        preco: 68000,
        precoFormatado: "R$ 68.000",
        categoria: "tecnologia",
        localizacao: "zona-norte",
        status: "em-andamento",
        imagem: "https://via.placeholder.com/280x200/f8b195/white?text=Digital"
    },
    {
        id: 65,
        titulo: "Investimento Seguro",
        descricao: "Serviço de consultoria de investimento",
        preco: 45000,
        precoFormatado: "R$ 45.000",
        categoria: "consultoria",
        localizacao: "zona-sul",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/355c7d/white?text=Seguro"
    },
    {
        id: 66,
        titulo: "Casa Container",
        descricao: "Projeto para construção de casa container",
        preco: 148000,
        precoFormatado: "R$ 148.000",
        categoria: "residencial",
        localizacao: "zona-leste",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/6c5b7b/white?text=Container"
    },
    {
        id: 67,
        titulo: "Igreja",
        descricao: "Consultoria para construção de igreja",
        preco: 360000,
        precoFormatado: "R$ 360.000",
        categoria: "comercial",
        localizacao: "zona-oeste",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/c06c84/white?text=Igreja"
    },
    {
        id: 68,
        titulo: "IoT",
        descricao: "Implementação de IoT em Imóveis",
        preco: 70000,
        precoFormatado: "R$ 70.000",
        categoria: "tecnologia",
        localizacao: "centro",
        status: "em-andamento",
        imagem: "https://via.placeholder.com/280x200/f67280/white?text=IOT"
    },
    {
        id: 69,
        titulo: "Serviço de Despachante",
        descricao: "Serviço de despachante para documentação de imóvel",
        preco: 47000,
        precoFormatado: "R$ 47.000",
        categoria: "consultoria",
        localizacao: "zona-norte",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/f8b195/white?text=Despachante"
    },
    {
        id: 70,
        titulo: "Casa Sustentável",
        descricao: "Projeto para construção de casa sustentável",
        preco: 150000,
        precoFormatado: "R$ 150.000",
        categoria: "residencial",
        localizacao: "zona-sul",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/355c7d/white?text=Sustentavel"
    },
    {
        id: 71,
        titulo: "Restaurante",
        descricao: "Consultoria para construção de restaurante",
        preco: 370000,
        precoFormatado: "R$ 370.000",
        categoria: "comercial",
        localizacao: "zona-leste",
        status: "disponivel",
        imagem: "https://via.placeholder.com/280x200/6c5b7b/white?text=Restaurante"
    },
    {
        id: 72,
        titulo: "Realidade Mista",
        descricao: "Criação de experiencia de realidade mista",
        preco: 72000,
        precoFormatado: "R$ 72.000",
        categoria: "tecnologia",
        localizacao: "zona-oeste",
        status: "em-andamento",
        imagem: "https://via.placeholder.com/280x200/c06c84/white?text=RM"
    }];

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
