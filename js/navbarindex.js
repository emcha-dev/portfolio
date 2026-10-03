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
document.querySelector('footer').innerHTML = footer;

function ouvrirmenusmartphone(){
        document.getElementById("menusmartphone").style.display = "flex";
}
function fermermenusmartphone(){
        document.getElementById("menusmartphone").style.display = "none";
}