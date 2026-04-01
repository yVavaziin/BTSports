/* ==========================================
   EFEITOS DE REVELAÇÃO - FUNCIONAL
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Efeito de surgimento ao rolar a página
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Aplicar animação nos itens de estatística e texto
    const animatables = document.querySelectorAll(".stat-item, .info-text, .info-image");
    
    animatables.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        observer.observe(el);
    });

    // 2. Efeito de Header Transparente -> Sólido ao rolar
    const header = document.querySelector(".main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "#2A2A2A";
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
        } else {
            header.style.background = "transparent";
            header.style.boxShadow = "none";
        }
    });
});