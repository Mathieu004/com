/*---------------------------------------------------------- OVERLAY -------------------------------------------------------------*/

const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

//Remonte le site en haut lors du reload de page et affiche l'overlay
window.addEventListener('load', function() {
    overlay.classList.remove('hidden');
    body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

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


/*---------------------------------------------------------- FORMULAIRE -------------------------------------------------------------*/
  
document.querySelector('.but').addEventListener('click', function() {
    const image = document.querySelector('#typedebien');

    const typeBienInput = document.querySelector('input[type="text"][placeholder="Type de bien"]');
    const typeBienValue = typeBienInput.value;

    const villeInput = document.querySelector('input[type="text"][placeholder="Ville"]');
    const villeValue = villeInput.value;

    const surface = document.querySelector('input[type="text"][placeholder="Surface (m2)"]');
    const surfaceValue = surface.value;

    const resultat = document.querySelector('.resultat');

    const ville = document.querySelector('.ville');
    const surfaceH = document.querySelector('.surface');
    const prix = document.querySelector('.prixfinal');

    if (((typeBienValue === 'maison' || typeBienValue === 'Maison') 
    || (typeBienValue === 'appartement' || typeBienValue === 'Appartement'))
    && villeValue != '' && surfaceValue != '' && typeBienValue != '') {
    
        resultat.classList.remove('hidden2');
    
        if (typeBienValue === 'maison' || typeBienValue === 'Maison') {
            image.src = 'maison.jpg';
            document.querySelector('#bien').textContent = 'Maison';
            prix.textContent = 5000*surfaceValue;
        } else if (typeBienValue === 'appartement' || typeBienValue === 'Appartement') {
            image.src = 'appartement.png';
            document.querySelector('#bien').textContent = 'Appartement';
            prix.textContent = 4000*surfaceValue;
        }

        ville.textContent = villeValue;
        surfaceH.textContent = surfaceValue;

        window.scrollTo(0, resultat.offsetTop);
        }
});
