// Fonction de filtrage des photos
function filterPhotos(category) {
    // Récupérer toutes les images de la galerie
    const images = document.querySelectorAll('.gallery img');
    
    // Si 'all' est sélectionné, on montre toutes les images
    if (category === 'all') {
        images.forEach(image => {
            image.classList.remove('hidden');
        });
    } else {
        images.forEach(image => {
            // Vérifier si l'image a la classe de la catégorie et afficher/masquer
            if (image.classList.contains(category)) {
                image.classList.remove('hidden');
            } else {
                image.classList.add('hidden');
            }
        });
    }
}