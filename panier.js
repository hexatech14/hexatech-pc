// ======================================
// HEXATECH - panier.js
// ======================================

const PANIER_KEY = "hexatech_panier";

function getPanier() {
    return JSON.parse(localStorage.getItem(PANIER_KEY)) || [];
}

function savePanier(panier) {
    localStorage.setItem(PANIER_KEY, JSON.stringify(panier));
    updateCompteurPanier();
}

function ajouterAuPanier(idProduit) {
    if (typeof PRODUITS === "undefined" || !PRODUITS[idProduit]) {
        alert("Produit introuvable.");
        return;
    }

    let panier = getPanier();
    const ligne = panier.find(p => p.id === idProduit);

    if (ligne) {
        ligne.quantite++;
    } else {
        panier.push({
            id: idProduit,
            quantite: 1
        });
    }

    savePanier(panier);
    alert(PRODUITS[idProduit].nom + " ajouté au panier.");
}

function supprimerDuPanier(idProduit) {
    let panier = getPanier().filter(p => p.id !== idProduit);
    savePanier(panier);
    afficherPanier();
}

function modifierQuantite(idProduit, delta) {
    let panier = getPanier();
    const ligne = panier.find(p => p.id === idProduit);
    if (!ligne) return;

    ligne.quantite += delta;

    if (ligne.quantite <= 0) {
        panier = panier.filter(p => p.id !== idProduit);
    }

    savePanier(panier);
    afficherPanier();
}

function calculTotal() {
    let total = 0;
    getPanier().forEach(item => {
        total += PRODUITS[item.id].prix * item.quantite;
    });
    return total;
}

function updateCompteurPanier() {
    const badge = document.getElementById("panier-count");
    if (!badge) return;

    const total = getPanier().reduce((s,p)=>s+p.quantite,0);
    badge.textContent = total;
}

function afficherPanier() {
    const zone = document.getElementById("panier");
    if (!zone) return;

    const panier = getPanier();

    if (panier.length === 0) {
        zone.innerHTML = "<p>Votre panier est vide.</p>";
        return;
    }

    let html = "";

    panier.forEach(item => {
        const p = PRODUITS[item.id];

        html += `
<div class="card mb-3 p-3">
<div class="row align-items-center">
<div class="col-md-2">
<img src="${p.image}" class="img-fluid rounded">
</div>

<div class="col-md-5">
<h4>${p.nom}</h4>
<p>${p.prix.toFixed(2)} €</p>
</div>

<div class="col-md-3">
<button onclick="modifierQuantite('${item.id}',-1)">-</button>
<span class="mx-2">${item.quantite}</span>
<button onclick="modifierQuantite('${item.id}',1)">+</button>
</div>

<div class="col-md-2 text-end">
<button class="btn btn-danger" onclick="supprimerDuPanier('${item.id}')">
Supprimer
</button>
</div>
</div>
</div>`;
    });

    html += `<h3 class="text-end">Total : ${calculTotal().toFixed(2)} €</h3>`;
    zone.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
    updateCompteurPanier();
    afficherPanier();
});
