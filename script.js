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



document.addEventListener("DOMContentLoaded", function () {
    const nbEtoiles = 15; // Nombre d'étoiles filantes
    const body = document.body;

    function creerEtoile() {
        const etoile = document.createElement("div");
        etoile.classList.add("etoile-filante");
        document.body.appendChild(etoile);

        // Position de départ aléatoire en haut de l'écran
        let startX = Math.random() * window.innerWidth;
        let startY = Math.random() * window.innerHeight * 0.2; // 20% en haut

        // Position de fin aléatoire vers le bas
        let endX = startX + (Math.random() * 200 - 100); // Légère variation horizontale
        let endY = startY + window.innerHeight * 0.8; // Descend sur 80% de l'écran

        etoile.style.left = `${startX}px`;
        etoile.style.top = `${startY}px`;

        // Animation avec une durée aléatoire
        etoile.animate(
            [
                { transform: `translate(0, 0)`, opacity: 1 },
                { transform: `translate(${endX - startX}px, ${endY - startY}px)`, opacity: 0 }
            ],
            {
                duration: Math.random() * 2000 + 1000, // Entre 1s et 3s
                easing: "linear",
                iterations: 1
            }
        );

        // Suppression après l'animation
        setTimeout(() => etoile.remove(), 3000);
    }

    // Génère des étoiles filantes à intervalles réguliers
    setInterval(creerEtoile, 500);
});

console.log("Le fichier script.js est bien chargé !");

