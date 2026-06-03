
var slideIndex = 1
let listeIllus = document.querySelectorAll(".grille1 div, .grille2 div")
var nbSlides = listeIllus.length

//ajout de l'événement clic sur chaque image
for (i = 0; i < listeIllus.length; i++) {
    
    listeIllus[i].addEventListener("click", (event) => {
        ouvrirVisionneuse()
        afficherImage(event.target.id, event.target.src)
    })
}

//afficher la visionneuse
function ouvrirVisionneuse() {
    document.getElementById("visionneuse").style.display = "block";
}

//fermer la visionneuse
function fermerVisionneuse() {
    document.getElementById("visionneuse").style.display = "none";
}

//afficher l'image voulue
function afficherImage(indice, src) {
    document.getElementById("imageHD").src = src
    slideIndex = Number(indice)
}

//avancer/reculer
function ensuite(n) {

    slideIndex += n

    if (slideIndex > nbSlides) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = nbSlides }

    image = document.getElementById(String(slideIndex))

    afficherImage(slideIndex, image.src)
}

//touches du clavier
window.document.addEventListener("keydown", (event) => {

    switch (event.key) {
        case "ArrowLeft":
            ensuite(-1)
            break;
        case "ArrowRight":
            ensuite(1)
            break;
        case "Escape":
            fermerVisionneuse()
            break;
    }
})