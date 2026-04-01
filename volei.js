let planoSelecionado = "Não selecionado";

function toggleHorarios(id) {
    const todos = document.querySelectorAll('.horarios-container');
    todos.forEach(c => c.style.display = "none");
    const container = document.getElementById(id);
    container.style.display = "block";
}

function selecionarHorario(elemento, plano, preco) {
    const horarios = document.querySelectorAll('.horario-opcao');
    horarios.forEach(el => el.classList.remove('ativo'));
    elemento.classList.add('ativo');
    const horarioTexto = elemento.innerText;
    planoSelecionado = plano + " (" + horarioTexto + ")";
    document.getElementById('resumo-plano').innerText = planoSelecionado;
    document.getElementById('valor-total').innerText = preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
}

function enviarWhatsApp() {
    const total = document.getElementById('valor-total').innerText;
    if (total === "0,00") {
        alert("⚠️ Por favor, selecione um horário primeiro.");
        return;
    }
    const numero = "5561992039938"; // Número atualizado
    const mensagem = encodeURIComponent(
        "🏐 *INTERESSE EM VÔLEI DE PRAIA - BT SPORTS*\n\n" +
        "Olá! Gostaria de agendar minha aula de Vôlei:\n\n" +
        "📅 *Plano/Horário:* " + planoSelecionado + "\n" +
        "💰 *Total:* R$ " + total + "\n\n" +
        "Quais documentos preciso para finalizar a matrícula?"
    );
    window.open("https://wa.me/" + numero + "?text=" + mensagem, "_blank");
}