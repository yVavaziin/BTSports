// ==========================================
// 1. LÓGICA DO CARROSSEL (IPHONE MOCKUP)
// ==========================================
let currentIdx = 0;
const slides = document.querySelectorAll('.slide');

function moveSlide(n) {
    slides[currentIdx].classList.remove('active');
    currentIdx = (currentIdx + n + slides.length) % slides.length;
    slides[currentIdx].classList.add('active');
}

//  Muda a foto sozinho a cada 4 segundos
setInterval(() => {
    moveSlide(1);
}, 4000);


// ==========================================
// 2. LÓGICA DAS CALCULADORAS (ACORDEÃO)
// =========================================
function toggleCalc(element) {
    const panel = element.nextElementSibling;
    const allPanels = document.querySelectorAll('.calc-panel');
    
    allPanels.forEach(p => {
        if (p !== panel) {
            p.style.display = 'none';
        }
    });

    if (panel.style.display === 'flex') {
        panel.style.display = 'none';
    } else {
        panel.style.display = 'flex';
    }
}

// ==========================================
// 3. FÓRMULAS DAS 7 CALCULADORAS
// ==========================================

// 1. IMC
function calcIMC() {
    const peso = parseFloat(document.getElementById('pImc').value);
    const altura = parseFloat(document.getElementById('aImc').value) / 100;
    const res = document.getElementById('resImc');

    if (peso && altura) {
        const imc = (peso / (altura * altura)).toFixed(2);
        let status = "";
        if (imc < 18.5) status = "(Abaixo do peso)";
        else if (imc < 25) status = "(Peso ideal)";
        else status = "(Sobrepeso)";
        
        res.innerText = `Resultado: ${imc} ${status}`;
    } else {
        res.innerText = "Preencha os campos!";
    }
}

// 2. Gasto Calórico Diário
function calcGasto() {
    const peso = parseFloat(document.getElementById('pGasto').value);
    const res = document.getElementById('resGasto');

    if (peso) {
        const tmb = (peso * 24 * 1.2).toFixed(2);
        res.innerText = `Gasto Estimado: ${tmb} kcal/dia`;
    }
}

// 3. Frequência Cardíaca Máxima
function calcFC() {
    const idade = parseFloat(document.getElementById('idade').value);
    const res = document.getElementById('resFc');

    if (idade) {
        const fcMax = (208 - (0.7 * idade)).toFixed(2);
        res.innerText = `Sua FC Máx: ${fcMax} BPM`;
    }
}

// 4. Carga Máxima (1RM)
function calcRM() {
    const peso = parseFloat(document.getElementById('pRm').value);
    const reps = parseInt(document.getElementById('rRm').value);
    const res = document.getElementById('resRm');

    if (peso && reps) {
        const rm = (peso * (1 + reps / 30)).toFixed(2);
        res.innerText = `Sua Carga Máxima (1RM): ${rm} kg`;
    }
}

// 5. Carga Interna
function calcCarga() {
    const duracao = parseFloat(document.getElementById('dur').value);
    const rpe = parseFloat(document.getElementById('rpe').value);
    const res = document.getElementById('resCarga');

    if (duracao && rpe) {
        const carga = (duracao * rpe).toFixed(2);
        res.innerText = `Volume de Treino: ${carga} u.a.`;
    }
}

// 6. Impulsão
function calcSalto() {
    const salto = parseFloat(document.getElementById('s1').value);
    const estatico = parseFloat(document.getElementById('s2').value);
    const res = document.getElementById('resSalto');

    if (salto && estatico) {
        const impulsao = (salto - estatico).toFixed(2);
        res.innerText = `Sua Impulsão: ${impulsao} cm`;
    }
}

// 7. Hidratação
function calcHid() {
    const peso = parseFloat(document.getElementById('pHid').value);
    const res = document.getElementById('resHid');

    if (peso) {
        const litros = ((peso * 35) / 1000).toFixed(2);
        res.innerText = `Meta: ${litros} Litros de água/dia`;
    }
}
// ==========================================
// 4. INSTAGRAM FEED (PLAY AUTOMÁTICO DOS VÍDEOS)
// ==========================================

const instaVideos = document.querySelectorAll('.insta-video video');

// play ao passar o mouse
instaVideos.forEach(video => {

    video.addEventListener('mouseenter', () => {
        video.play();
    });

    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });

});


// play automático 
const instaObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        const video = entry.target;

        if (entry.isIntersecting) {
            video.play();
        } else {
            video.pause();
        }

    });

}, { threshold: 0.6 });

instaVideos.forEach(video => {
    instaObserver.observe(video);
});


