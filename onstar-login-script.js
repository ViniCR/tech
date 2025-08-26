
// Inicializar página
document.addEventListener('DOMContentLoaded', function() {
    configurarEventListeners();
});

function configurarEventListeners() {
    // Form de login
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    
    // Form novo usuário
    document.getElementById('form-novo-usuario').addEventListener('submit', handleNovoUsuario);
    
    // Form licença existente
    document.getElementById('form-licenca-existente').addEventListener('submit', handleLicencaExistente);
    
    // Fechar modais ao clicar fora
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
}

// Handle Login
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simular validação
    if (email && password) {
        // Mostrar loading
        const btn = e.target.querySelector('.login-btn');
        const originalText = btn.textContent;
        btn.textContent = 'Entrando...';
        btn.disabled = true;
        
        // Simular tempo de resposta
        setTimeout(() => {
            // Verificar credenciais demo
            if (email === 'demo@tekoha.com' && password === 'demo123') {
                alert('Login realizado com sucesso!\nRedirecionando para o dashboard OnStar...');
                // Em produção, redirecionar para dashboard
                window.location.href = 'index.html';
            } else {
                alert('Credenciais inválidas.\n\nUse para teste:\nE-mail: demo@tekoha.com\nSenha: demo123');
                btn.textContent = originalText;
                btn.disabled = false;
            }
        }, 1500);
    }
}

// Handle Novo Usuário
function handleNovoUsuario(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome-completo').value;
    const email = document.getElementById('email-novo').value;
    const empresa = document.getElementById('empresa').value;
    const cargo = document.getElementById('cargo').value;
    const telefone = document.getElementById('telefone').value;
    
    if (nome && email && empresa && cargo && telefone) {
        const btn = e.target.querySelector('.modal-btn');
        const originalText = btn.textContent;
        btn.textContent = 'Enviando...';
        btn.disabled = true;
        
        setTimeout(() => {
            alert(`Solicitação enviada com sucesso!\n\nOlá ${nome}, sua solicitação de acesso ao OnStar foi recebida. Nossa equipe entrará em contato em até 24 horas através do e-mail ${email}.`);
            fecharModal('modal-novo-usuario');
            document.getElementById('form-novo-usuario').reset();
            btn.textContent = originalText;
            btn.disabled = false;
        }, 2000);
    }
}

// Handle Licença Existente
function handleLicencaExistente(e) {
    e.preventDefault();
    
    const codigo = document.getElementById('codigo-licenca').value;
    const email = document.getElementById('email-licenca').value;
    
    if (codigo && email) {
        const btn = e.target.querySelector('.modal-btn');
        const originalText = btn.textContent;
        btn.textContent = 'Verificando...';
        btn.disabled = true;
        
        setTimeout(() => {
            // Simular verificação de licença
            if (codigo.startsWith('ONSTR-')) {
                alert(`Licença ativada com sucesso!\n\nCódigo: ${codigo}\nE-mail: ${email}\n\nVocê receberá as credenciais de acesso por e-mail em instantes.`);
                fecharModal('modal-licenca-existente');
                document.getElementById('form-licenca-existente').reset();
            } else {
                alert('Código de licença inválido.\nVerifique o código e tente novamente.\n\nFormato esperado: ONSTR-XXXX-XXXX-XXXX');
            }
            btn.textContent = originalText;
            btn.disabled = false;
        }, 2000);
    }
}

// Mostrar modais
function mostrarNovoUsuario() {
    document.getElementById('modal-novo-usuario').style.display = 'block';
}

function mostrarLicencaExistente() {
    document.getElementById('modal-licenca-existente').style.display = 'block';
}

// Fechar modal
function fecharModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const passwordIcon = document.getElementById('password-icon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordIcon.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        passwordIcon.textContent = '👁️';
    }
}

// Validação em tempo real para código de licença
document.getElementById('codigo-licenca').addEventListener('input', function(e) {
    let value = e.target.value.replace(/[^A-Z0-9]/g, '');
    
    // Formatar como ONSTR-XXXX-XXXX-XXXX
    if (value.length > 0 && !value.startsWith('ONSTR')) {
        value = 'ONSTR' + value.substring(5);
    }
    
    if (value.length > 5) {
        value = value.substring(0, 5) + '-' + value.substring(5);
    }
    if (value.length > 10) {
        value = value.substring(0, 10) + '-' + value.substring(10);
    }
    if (value.length > 15) {
        value = value.substring(0, 15) + '-' + value.substring(15);
    }
    if (value.length > 20) {
        value = value.substring(0, 20);
    }
    
    e.target.value = value;
});
