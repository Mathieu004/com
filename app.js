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
    const citySquareMeterPrices = {
        Bordeaux: 4706,
        Merignac: 3771,
        Megles: 3892,
        Villenave_dornon: 3531,
        Pessac: 3870,
        Talence: 4158,
        Gradignan: 3637,
    };
    const image = document.querySelector('#typedebien');

    const resultat = document.querySelector('.resultat');

    const ville = document.querySelector('.ville');
    const surfaceH = document.querySelector('.surface');
    const prix = document.querySelector('.prixfinal');

    const surface = document.querySelector('input[type="text"][placeholder="Surface (m2)"]');
    const surfaceValue = surface.value;
    //const propertyRooms = parseInt(document.getElementById('property-rooms').value);
    const typeBienValue = document.getElementById('property-type').value;
    const villeValue = document.getElementById('property-city').value;
    let baseEstimation = 1000;

    if (typeBienValue === 'maison' || typeBienValue === 'appartement' && villeValue != 'ville' && villeValue != '--' && typeBienValue != 'Type de bien' && typeBienValue != '--'&& surfaceValue != '') {
        resultat.classList.remove('hidden2');
    
        if (typeBienValue === 'maison') {
            baseEstimation *= 2;
            alert(villeValue)

            if (citySquareMeterPrices[villeValue]) {
                baseEstimation *= citySquareMeterPrices[villeValue] / 1000;
            } else {
                console.error('Prix du mètre carré non défini pour la ville sélectionnée.');
                return;
            }

            image.src = 'maison.jpg';
            document.querySelector('#bien').textContent = 'Maison';

            prix.textContent = baseEstimation * surfaceValue /*+ propertyRooms*/ * 5000;
        } else if (typeBienValue === 'appartement') {
            baseEstimation *= 1.5;
            if (citySquareMeterPrices[villeValue]) {
                baseEstimation *= citySquareMeterPrices[villeValue] / 1000;
            } else {
                console.error('Prix du mètre carré non défini pour la ville sélectionnée.');
                return;
            }

            image.src = 'appartement.png';
            document.querySelector('#bien').textContent = 'Appartement';

            prix.textContent = baseEstimation * surfaceValue /*+ propertyRooms*/ * 5000;
        }

        

        

        ville.textContent = villeValue;
        surfaceH.textContent = surfaceValue;

        window.scrollTo(0, resultat.offsetTop);
        }
});

