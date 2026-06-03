//afficher la visionneuse
function ouvrirVisionneuse() {
    document.getElementById("visionneuse").style.display = "flex";
}

//fermer la visionneuse
function fermerVisionneuse() {
    document.getElementById("visionneuse").style.display = "none";
}

var galerie = ""
var slideMax
var slideMin
var slideIndex = 1

// galerie illustrations
let listeIllus = document.querySelectorAll(".illustrations div")

for (i = 0; i < listeIllus.length; i++) {

    listeIllus[i].addEventListener("click", (event) => {
        galerie = "illus"
        nbSlides = listeIllus.length
        ouvrirVisionneuse()
        afficherImage(event.target.id, event.target.src)
    })
}

// galerie chara design
let listeImages = document.querySelectorAll(".vignette")

for (i = 0; i < listeImages.length; i++) {

    listeImages[i].addEventListener("click", (event) => {
        galerie = "chara"
        slideMax = listeIllus.length+listeImages.length
        slideMin = listeIllus.length+1
        ouvrirVisionneuse()
        afficherImage(event.target.id, event.target.src)
    })
}


//afficher l'image voulue
function afficherImage(indice, src) {
    document.getElementById("imageHD").src = src
    slideIndex = Number(indice)
}

// avancer/reculer
function ensuite(n) {

    slideIndex += n

    // calcul des boucles en fonction de la liste d'images affichée
    switch (galerie) {
        case "chara":
            if (slideIndex > slideMax) { slideIndex = slideMin }
            if (slideIndex < slideMin) { slideIndex = slideMax }
            break;

        case "illus":
            if (slideIndex > nbSlides) { slideIndex = 1 }
            if (slideIndex < 1) { slideIndex = nbSlides }
            break;
    }

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