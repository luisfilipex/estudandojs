// -------------------- Acordeon Trigger -------------------------

const acordeonTrigger = document.querySelectorAll('.acordeon .trigger')

// Remove a classe 'open' de todas as categorias
acordeonTrigger.forEach((trigger) => {
    const acordeon = trigger.parentElement;
    acordeon.classList.remove('open');
});

// Adiciona o evento de clique a todas as categorias
acordeonTrigger.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement;

        // Fecha todas as outras categorias
        acordeonTrigger.forEach((otherTrigger) => {
            const otherAcordeon = otherTrigger.parentElement;
            if (otherAcordeon !== acordeon) {
                otherAcordeon.classList.remove('open');
            }
        });

        // Alterna a classe 'open' na categoria clicada
        acordeon.classList.toggle('open');
    });
});
