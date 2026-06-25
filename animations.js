// =====================================================
// HEXATECH animations.js V3
// Partie 1 : Moteur d'animations
// =====================================================

"use strict";

// =====================================================
// Paramètres
// =====================================================

const HEXA = {

    duration:800,

    distance:40,

    threshold:0.15

};

// =====================================================
// Défilement fluide
// =====================================================

document.documentElement.style.scrollBehavior="smooth";

// =====================================================
// Détection des éléments
// =====================================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("hexa-visible");

        }

    });

},{
    threshold:HEXA.threshold
});

// =====================================================
// Eléments animés
// =====================================================

document.querySelectorAll(

`
section,
.card,
.hero h1,
.hero h2,
.hero h3,
.hero p,
.btn,
img,
footer
`

).forEach(element=>{

    element.classList.add("hexa-hidden");

    observer.observe(element);

});

// =====================================================
// CSS injecté automatiquement
// =====================================================

const style=document.createElement("style");

style.innerHTML=`

.hexa-hidden{

opacity:0;

transform:translateY(${HEXA.distance}px);

transition:

opacity ${HEXA.duration}ms ease,

transform ${HEXA.duration}ms ease;

}

.hexa-visible{

opacity:1;

transform:translateY(0);

}

/* Zoom */

.hexa-zoom{

opacity:0;

transform:scale(.8);

transition:.8s;

}

.hexa-zoom.hexa-visible{

opacity:1;

transform:scale(1);

}

/* Slide gauche */

.hexa-left{

opacity:0;

transform:translateX(-60px);

transition:.8s;

}

.hexa-left.hexa-visible{

opacity:1;

transform:none;

}

/* Slide droite */

.hexa-right{

opacity:0;

transform:translateX(60px);

transition:.8s;

}

.hexa-right.hexa-visible{

opacity:1;

transform:none;

}

`;

document.head.appendChild(style);

// =====================================================
// Fin Partie 1
// =====================================================
// =====================================================
// HEXATECH animations.js V3
// Partie 2 : Particules HexaTech
// =====================================================

// Création du canvas

const canvas = document.createElement("canvas");

canvas.id = "hexaParticles";

document.body.prepend(canvas);

const ctx = canvas.getContext("2d");

// Mise en arrière-plan

canvas.style.position = "fixed";

canvas.style.top = "0";

canvas.style.left = "0";

canvas.style.width = "100%";

canvas.style.height = "100%";

canvas.style.pointerEvents = "none";

canvas.style.zIndex = "-1";

canvas.style.opacity = ".45";

// Taille

function resizeCanvas(){

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize",resizeCanvas);

// =====================================================
// Particules
// =====================================================

const particles=[];

const NB=70;

for(let i=0;i<NB;i++){

    particles.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        r:Math.random()*3+1,

        dx:(Math.random()-.5)*0.4,

        dy:(Math.random()-.5)*0.4,

        color:Math.random()>.5
            ?"rgba(255,193,7,.55)"
            :"rgba(20,120,255,.45)"

    });

}

// =====================================================
// Animation
// =====================================================

function animateParticles(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{

        p.x+=p.dx;

        p.y+=p.dy;

        if(p.x<0||p.x>canvas.width)p.dx*=-1;

        if(p.y<0||p.y>canvas.height)p.dy*=-1;

        ctx.beginPath();

        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

        ctx.fillStyle=p.color;

        ctx.fill();

    });

    requestAnimationFrame(animateParticles);

}

animateParticles();

// =====================================================
// Fin Partie 2
// =====================================================
// =====================================================
// HEXATECH animations.js V3
// Partie 3 : Effets Premium
// =====================================================

// =====================================================
// Halo lumineux qui suit la souris
// =====================================================

const light=document.createElement("div");

light.id="hexaLight";

document.body.appendChild(light);

Object.assign(light.style,{

position:"fixed",

width:"300px",

height:"300px",

borderRadius:"50%",

background:"radial-gradient(circle, rgba(255,193,7,.20), rgba(0,0,0,0))",

pointerEvents:"none",

zIndex:"999",

left:"0px",

top:"0px",

transform:"translate(-50%,-50%)",

transition:"transform .05s linear"

});

document.addEventListener("mousemove",(e)=>{

light.style.left=e.clientX+"px";

light.style.top=e.clientY+"px";

});

// =====================================================
// Cartes 3D
// =====================================================

document.querySelectorAll(".card").forEach(card=>{

card.style.transition=".25s";

card.style.transformStyle="preserve-3d";

card.style.willChange="transform";

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*16;

const rotateX=((y/rect.height)-0.5)*-16;

card.style.transform=

`perspective(900px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(900px) rotateX(0deg) rotateY(0deg)";

});

});

// =====================================================
// Boutons Premium
// =====================================================

document.querySelectorAll(".btn").forEach(btn=>{

btn.style.transition=".3s";

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow="0 0 20px rgba(255,193,7,.45)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="";

});

});

// =====================================================
// Fin Partie 3
// =====================================================
// =====================================================
// HEXATECH animations.js V3
// Partie 4 : Loader + Typewriter + Compteurs + Parallaxe
// =====================================================

// =====================================================
// Loader HexaTech
// =====================================================

const loader=document.createElement("div");

loader.id="hexaLoader";

loader.innerHTML=`

<div class="hexa-loader-logo">

⚡ HEXATECH ⚡

</div>

`;

document.body.appendChild(loader);

const loaderStyle=document.createElement("style");

loaderStyle.innerHTML=`

#hexaLoader{

position:fixed;

top:0;

left:0;

width:100%;

height:100%;

background:#08111f;

display:flex;

justify-content:center;

align-items:center;

z-index:99999;

transition:opacity .8s;

}

.hexa-loader-logo{

font-size:40px;

font-weight:bold;

color:#FFC107;

animation:pulse 1s infinite;

}

@keyframes pulse{

0%{transform:scale(1);}

50%{transform:scale(1.15);}

100%{transform:scale(1);}

}

`;

document.head.appendChild(loaderStyle);

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},800);

},1000);

});

// =====================================================
// Effet machine à écrire
// =====================================================

document.querySelectorAll(".typewriter").forEach(el=>{

const text=el.textContent;

el.textContent="";

let i=0;

function write(){

if(i<text.length){

el.textContent+=text.charAt(i);

i++;

setTimeout(write,40);

}

}

write();

});

// =====================================================
// Compteurs animés
// =====================================================

document.querySelectorAll(".counter").forEach(counter=>{

const target=parseInt(counter.dataset.target);

let value=0;

const speed=Math.max(1,Math.ceil(target/100));

function update(){

value+=speed;

if(value>=target){

counter.textContent=target;

}else{

counter.textContent=value;

requestAnimationFrame(update);

}

}

update();

});

// =====================================================
// Effet Parallaxe
// =====================================================

window.addEventListener("scroll",()=>{

document.querySelectorAll(".parallax").forEach(el=>{

const speed=0.4;

el.style.backgroundPositionY=-(window.scrollY*speed)+"px";

});

});

// =====================================================
// Fin Partie 4
// =====================================================
// =====================================================
// HEXATECH animations.js V3
// Partie 5 : Finitions Premium
// =====================================================

// ===========================================
// Curseur lumineux
// ===========================================

const cursor=document.createElement("div");

cursor.id="hexaCursor";

document.body.appendChild(cursor);

Object.assign(cursor.style,{

position:"fixed",

width:"18px",

height:"18px",

borderRadius:"50%",

background:"#FFC107",

boxShadow:"0 0 25px #FFC107",

pointerEvents:"none",

zIndex:"999999",

transform:"translate(-50%,-50%)",

transition:"transform .05s linear"

});

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

// ===========================================
// Lueur sur les titres
// ===========================================

document.querySelectorAll("h1,h2,h3").forEach(title=>{

title.addEventListener("mouseenter",()=>{

title.style.textShadow="0 0 15px #FFC107";

title.style.transition=".3s";

});

title.addEventListener("mouseleave",()=>{

title.style.textShadow="";

});

});

// ===========================================
// Rotation légère des images
// ===========================================

document.querySelectorAll("img").forEach(img=>{

img.style.transition=".4s";

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.03) rotate(-1deg)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="";

});

});

// ===========================================
// Apparition progressive du body
// ===========================================

document.body.style.opacity="0";

document.body.style.transition="opacity .8s";

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

// ===========================================
// Effet de clic
// ===========================================

document.addEventListener("click",(e)=>{

const ring=document.createElement("div");

ring.style.position="fixed";

ring.style.left=e.clientX+"px";

ring.style.top=e.clientY+"px";

ring.style.width="10px";

ring.style.height="10px";

ring.style.border="2px solid #FFC107";

ring.style.borderRadius="50%";

ring.style.pointerEvents="none";

ring.style.zIndex="999999";

ring.style.transform="translate(-50%,-50%)";

ring.style.transition=".6s";

document.body.appendChild(ring);

setTimeout(()=>{

ring.style.width="80px";

ring.style.height="80px";

ring.style.opacity="0";

},20);

setTimeout(()=>{

ring.remove();

},650);

});

// ===========================================
// Console Signature
// ===========================================

console.log("%cHexaTech","font-size:28px;color:#FFC107;font-weight:bold;");
console.log("%cSite développé par HexaTech","color:#1E90FF;font-size:16px;");

// =====================================================
// FIN animations.js V3
// =====================================================