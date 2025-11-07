// TODO
//Changer la couleur
aMettreEnRouge = document.querySelector("#a-mettre-en-rouge")
aMettreEnRouge.style.color= "red"
//Bouton
enRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click")
enRougeSuiteAClick.addEventListener("click", (evt)=>{enRougeSuiteAClick.style.color = "red"});
//h2
collH2 = document.querySelectorAll("h2")
collH2.forEach((collH2)=>{
    collH2.addEventListener('click', (evt)=>{
        evt.target.style.color = "red";
    });
});
