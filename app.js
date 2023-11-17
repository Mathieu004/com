/*---------------------------------------------------------- OVERLAY -------------------------------------------------------------*/
console.log("toto")
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
console.log("toto")
//Remonte le site en haut lors du reload de page et affiche l'overlay
window.addEventListener('load', function() {
    overlay.classList.remove('hidden');
    body.style.overflow = 'hidden';

    document.addEventListener('wheel', preventDefault, { passive: false });
    setTimeout(function() {
        document.removeEventListener('wheel', preventDefault);
        body.style.overflow = '';
        overlay.classList.add('hidden');
        
        setTimeout(function() {
            overlay.style.zIndex = '-30';
        }, 1000);
    }, 3000); 
});

// Pour supprimer la barre de defilement verticale durant l'animation overlay
function preventDefault(e) {
    e.preventDefault();
}
