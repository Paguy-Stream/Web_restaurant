document.addEventListener('click', function (e) {
    // Création du conteneur d'ondes
    const rippleContainer = document.createElement('div');
    rippleContainer.className = 'ripple-container';

    // Position du conteneur basé sur le clic
    rippleContainer.style.left = `${e.clientX}px`;
    rippleContainer.style.top = `${e.clientY}px`;

    // Ajout des cercles concentriques
    for (let i = 0; i < 4; i++) { // Création de 4 cercles
        const ripple = document.createElement('span');
        ripple.className = `ripple ripple-${i}`;
        rippleContainer.appendChild(ripple);
    }

    // Ajouter le conteneur au corps de la page
    document.body.appendChild(rippleContainer);

    // Supprimer le conteneur une fois l'animation terminée
    rippleContainer.addEventListener('animationend', () => {
        rippleContainer.remove();
    });
});