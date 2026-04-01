let nivelSelecionado = "Não selecionado";
let planoSelecionado = "Não selecionado";

// =============================
// SELECIONAR NÍVEL
// =============================
function selecionarNivel(elemento, nivel) {
    // Estética: Destaca o box clicado
    const boxes = document.querySelectorAll('.nivel-box');
    boxes.forEach(box => {
        box.style.border = "1px solid rgba(255,255,255,0.1)";
        box.style.background = "rgba(255,255,255,0.05)";
    });

    elemento.style.border = "2px solid #ff3c00";
    elemento.style.background = "rgba(255, 60, 0, 0.2)";

    // Lógica: Salva e mostra no resumo
    nivelSelecionado = nivel;
    document.getElementById('resumo-nivel').innerText = nivel;
}

// =============================
// MOSTRAR / ESCONDER HORÁRIOS
// =============================
function toggleHorarios(id) {
    const container = document.getElementById(id);
    const todos = document.querySelectorAll('.horarios-container');

    todos.forEach(c => {
        if (c !== container) c.style.display = "none";
    });

    container.style.display = (container.style.display === "block") ? "none" : "block";
}

// =============================
// SELECIONAR HORÁRIO
// =============================
function selecionarHorario(elemento, plano, preco) {
    const horarios = document.querySelectorAll('.horario-opcao');
    horarios.forEach(el => el.classList.remove('ativo'));

    elemento.classList.add('ativo');

    const horarioTexto = elemento.innerText;
    planoSelecionado = plano + " (" + horarioTexto + ")";
    
    document.getElementById('resumo-plano').innerText = planoSelecionado;

    document.getElementById('valor-total').innerText = 
        preco.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
}

// =============================
// ENVIAR PARA WHATSAPP
// =============================
function enviarWhatsApp() {
    const total = document.getElementById('valor-total').innerText;
    
    if (nivelSelecionado === "Não selecionado") {
        alert("⚠️ Por favor, selecione seu NÍVEL primeiro.");
        return;
    }
    if (total === "0,00") {
        alert("⚠️ Por favor, selecione um HORÁRIO primeiro.");
        return;
    }

    const numero = "5561992039938"; 
    
    const mensagem = encodeURIComponent(
        "🏟️ *NOVO INTERESSE EM TREINAMENTO - BT SPORTS*\n\n" +
        "Olá, BT Sports! Gostaria de realizar meu agendamento de Futevôlei:\n\n" +
        "✅ *Nível do Aluno:* " + nivelSelecionado + "\n" +
        "📅 *Plano e Horário:* " + planoSelecionado + "\n" +
        "💰 *Investimento:* R$ " + total + "\n\n" +
        "Fico no aguardo das informações para o pagamento! ⚽"
    );

    window.open("https://wa.me/" + numero + "?text=" + mensagem, "_blank");
}