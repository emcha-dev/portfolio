let menu = `
        <div><a href="../pages/storyboard.html" id="sb">Storyboard</a></div>
        <div><a href="../pages/animation.html" id="anim">Animation</a></div>
        <div><a href="../pages/bd.html" id="bd">Bande dessinée</a></div>           
        <div><a href="../pages/travauxperso.html" id="tp">Travaux personnels</a></div>
        <div><a href="../pages/cv.html" id="cv">CV</a></div>
        <div>
        <a href="mailto:marion.charve@yahoo.com">@</a>
        </div>
`
let menusmartphone = `
        <i onclick="fermermenusmartphone()" class="bi bi-x-lg"></i>
        <div>
            <a href="../pages/storyboard.html">Storyboard</a>
        </div>
        <div>
            <a href="../pages/animation.html">Animation</a>
        </div>
        <div>
            <a href="../pages/bd.html">Bande dessinée</a>
        </div>
        <div>
            <a href="../pages/travauxperso.html">Travaux personnels</a>
        </div>
        <div>
            <a href="../pages/cv.html">CV</a>
        </div>
`
let page = document.body.dataset.page

let footer = `
        <div id="mail">
            <a class="fushia accueil" href="mailto:marion.charve@yahoo.com">marion.charve[at]yahoo.com</a> 
        </div>
        <div id="separateur">|</div>
        <div id="liens">
            <a target="_blank" href="https://www.linkedin.com/in/marion-charve/"><i class="bi bi-linkedin"></i></a>     
            <a target="_blank" href="https://www.instagram.com/jackpot_comics/"><i class="bi bi-instagram"></i></a> 
            <a target="_blank" href="https://vimeo.com/user107763820"><i class="bi bi-vimeo"></i></a>            
        </div>
`

document.querySelector('.navbar').innerHTML = menu;

document.querySelector('footer').innerHTML = footer;

document.getElementById('menusmartphone').innerHTML = menusmartphone;

switch (page) {
        case "sb":
                document.getElementById("sb").classList.add("pageactuelle");
                break;

        case "anim":
                document.getElementById("anim").classList.add("pageactuelle");
                break;

        case "bd":
                document.getElementById("bd").classList.add("pageactuelle");
                break;

        case "tp":
                document.getElementById("tp").classList.add("pageactuelle");
                break;

        case "cv":
                document.getElementById("cv").classList.add("pageactuelle");
                break;
}