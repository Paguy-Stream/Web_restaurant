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






const amenitiesContainer = document.querySelector('.amenities-container');

// Ajout de l'effet dynamique au survol
amenitiesContainer.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY, clientWidth, clientHeight } = e.target;
    const blurFactor = Math.min((offsetX / clientWidth) * 5, (offsetY / clientHeight) * 5);
    amenitiesContainer.style.filter = `blur(${5 - blurFactor}px)`;
});

// Événement pour rétablir le style
amenitiesContainer.addEventListener('mouseleave', () => {
    // Rétablir le style initial lorsque la souris quitte l'élément
    amenitiesContainer.style.filter = 'blur(5px)';
    amenitiesContainer.style.transform = 'scale(1)';
});


// pour le bouton home de ameneties

document.querySelectorAll('.home-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        // Ripple effect is handled by CSS
        this.blur(); // Remove focus after click if needed
    });
});

