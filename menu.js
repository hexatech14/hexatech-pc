// ===============================
// HEXATECH MENU V4
// Partie 1
// ===============================

const menu = `
<style>

:root{
    --bleu:#08111f;
    --bleu2:#0b3d91;
    --jaune:#FFC107;
}

body{
    padding-top:105px;
}

.navbar{

    position:fixed;
    top:0;
    left:0;
    width:100%;
    z-index:9999;

    background:rgba(8,17,31,.82);

    backdrop-filter:blur(16px);

    transition:.35s;

    border-bottom:1px solid rgba(255,193,7,.25);

}

.navbar.scrolled{

    background:rgba(8,17,31,.97);

    box-shadow:0 10px 30px rgba(0,0,0,.45);

}

.logo-hexa{

    height:95px;

    transition:.35s;

    filter:drop-shadow(0 0 12px rgba(255,193,7,.45));

}

.logo-hexa:hover{

    transform:scale(1.08) rotate(-2deg);

    filter:drop-shadow(0 0 22px rgba(255,193,7,.9));

}

.nav-link{

    color:var(--jaune)!important;

    font-weight:700;

    margin-left:15px;

    transition:.3s;

    position:relative;

}

.nav-link:hover{

    color:white!important;

    transform:translateY(-2px);

}

.nav-link::after{

    content:"";

    position:absolute;

    bottom:-7px;

    left:0;

    width:0;

    height:3px;

    background:linear-gradient(90deg,#FFC107,#ffffff);

    transition:.3s;

}

.nav-link:hover::after,

.active-link::after{

    width:100%;

}

.dropdown-menu{

    background:#08111f;

    border:1px solid rgba(255,193,7,.30);

    border-radius:14px;

}

.dropdown-item{

    color:#FFC107;

}

.dropdown-item:hover{

    background:#0b3d91;

    color:white;

}

.call-btn{

    margin-left:18px;

    border-radius:30px;

    background:linear-gradient(135deg,#FFC107,#ffd95b);

    color:black!important;

    font-weight:bold;

    box-shadow:0 0 18px rgba(255,193,7,.45);

}

.call-btn:hover{

    transform:scale(1.05);

}

.search-box{

    max-width:180px;

    margin-left:20px;

}

.search-box input{

    background:#152238;

    color:white;

    border-radius:25px;

}

.search-box input::placeholder{

    color:#bbb;

}

</style>

<nav class="navbar navbar-expand-lg navbar-dark">

<div class="container">

<a class="navbar-brand d-flex align-items-center" href="index.html">

<img
class="logo-hexa me-2"
src="assets/images/logohexatech.png"
alt="HexaTech">

<strong
style="font-size:1.9rem;color:#FFC107;">

HexaTech

</strong>

</a><button
class="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#hexamenu">

<span class="navbar-toggler-icon"></span>

</button>

<div class="collapse navbar-collapse" id="hexamenu">

<ul class="navbar-nav ms-auto">

<li class="nav-item">

<a class="nav-link" href="index.html">

🏠 Accueil

</a>

</li>

<li class="nav-item dropdown">

<a
class="nav-link dropdown-toggle"
href="#"
data-bs-toggle="dropdown">

💻 Boutique

</a>

<ul class="dropdown-menu">

<li>

<a
class="dropdown-item"
href="configuration.html">

Configurations

</a>

</li>

<li>

<a
class="dropdown-item"
href="reconditionnes.html">

PC reconditionnés

</a>

</li>

<li>

<a
class="dropdown-item"
href="tarifs.html">

Tarifs

</a>

</li>

</ul>

</li>

<li class="nav-item dropdown">

<a
class="nav-link dropdown-toggle"
href="#"
data-bs-toggle="dropdown">

🏢 Entreprise

</a>

<ul class="dropdown-menu">

<li>

<a
class="dropdown-item"
href="apropos.html">

À propos

</a>

</li>

<li>

<a
class="dropdown-item"
href="realisations.html">

Réalisations

</a>

</li>

<li>

<a
class="dropdown-item"
href="contact.html">

Contact

</a>

</li>

</ul>

</li>

<li class="nav-item">

<a
class="nav-link"
href="services.html">

🔧 Services

</a>

</li>

<li class="nav-item">

<a
class="nav-link call-btn"
href="tel:+33625370973">

📞 Appeler

</a>

</li>

</ul>

<form class="d-flex search-box">

<input

class="form-control form-control-sm"

placeholder="Recherche">

</form>

</div>

</div>

</nav>`;

document.getElementById("menu").innerHTML = menu;

// Détection automatique de la page active
const page = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-link, .dropdown-item").forEach(link => {

    const href = link.getAttribute("href");

    if(href === page){

        link.classList.add("active-link");

    }

});

// Animation du menu au scroll
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 20){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

// Animation du logo
const logo = document.querySelector(".logo-hexa");

logo.addEventListener("mouseenter", () => {

    logo.style.transform = "scale(1.08) rotate(-2deg)";

});

logo.addEventListener("mouseleave", () => {

    logo.style.transform = "scale(1)";

});

// Fermeture automatique du menu sur mobile
document.querySelectorAll(".nav-link, .dropdown-item").forEach(link => {

    link.addEventListener("click", () => {

        const menu = document.querySelector("#hexamenu");

        if(menu.classList.contains("show")){

            bootstrap.Collapse.getOrCreateInstance(menu).hide();

        }

    });

});