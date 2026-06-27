// menu-client.js
document.addEventListener("DOMContentLoaded",()=>{
const prenom=(JSON.parse(localStorage.getItem("hexatech_session")||"{}").prenom)||"Client";
document.getElementById("menu").innerHTML=`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container">
<a class="navbar-brand" href="index.html">HexaTech</a>
<div class="navbar-nav ms-auto">
<a class="nav-link" href="index.html">Accueil</a>
<a class="nav-link" href="services.html">Services</a>
<a class="nav-link" href="configuration.html">Configuration</a>
<a class="nav-link" href="pc-reconditionnes.html">PC reconditionnés</a>
<a class="nav-link" href="contact.html">Contact</a>
<a class="nav-link" href="panier.html">🛒 Panier</a>
<a class="nav-link" href="mon-compte.html">👋 ${prenom}</a>
</div></div></nav>`;
});