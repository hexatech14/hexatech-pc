// menu-admin.js
document.addEventListener("DOMContentLoaded",()=>{
document.getElementById("menu").innerHTML=`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container">
<a class="navbar-brand" href="dashboard-admin.html">Administration HexaTech</a>
<div class="navbar-nav ms-auto">
<a class="nav-link" href="dashboard-admin.html">Dashboard</a>
<a class="nav-link" href="clients-admin.html">Clients</a>
<a class="nav-link" href="produits-admin.html">Produits</a>
<a class="nav-link" href="pc-reconditionne-admin.html">PC reconditionnés</a>
<a class="nav-link" href="commandes-admin.html">Commandes</a>
<a class="nav-link" href="livraison-admin.html">Livraisons</a>
<a class="nav-link" href="statistiques-admin.html">Statistiques</a>
<a class="nav-link" href="parametres-admin.html">Paramètres</a>
<a class="nav-link text-warning" href="../index.html">Retour au site</a>
</div></div></nav>`;
});