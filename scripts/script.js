function randomCitation(list){
    return list[Math.floor(Math.random() * list.length)];
}

function displayResult(citation){
    
    let spanResult= document.getElementById("spanResult")

    if(!spanResult){
        let zoneProposition = document.querySelector(".zoneProposition");
        spanResult= document.createElement("span");
        spanResult.id = "spanResult";
        zoneProposition.appendChild(spanResult); 
    } 
    spanResult.innerText = citation;
}

function displayImg(listImg){
    
    let imageDisplay = document.getElementById("imageDisplay");

    if(!imageDisplay){
        let zoneProposition = document.querySelector(".zoneProposition");
        imageDisplay= document.createElement("img");
        imageDisplay.id = "imageDisplay";
        zoneProposition.appendChild(imageDisplay); 
    } 
    imageDisplay.innerHTML = listImg;
    imageDisplay.src = "images/"+ listImg;
}

function capitalizeFirstLetter(list) {
    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] === 'string' && list[i].length > 0) {
            list[i] = list[i].charAt(0).toUpperCase() + list[i].slice(1);
        }
    }
    return list;
}

function afficherEmail(nom, email, citation) {
    let mailto = `mailto:${email}?subject=Partage de citation via GenerateAPP&body=Salut, c'est ${nom} et je viens de générer cette citation: ${citation} sur le site Generate App !`
    location.href = mailto
}

function validerNom(nom){
    if (nom.length < 2){
        throw new Error("le nom est trop court");   
    }
    return true;
}

function validerMail(email){
    let emailRegex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+"); //deux backslash car veut point !!
    if (!emailRegex.test(email)){ //il est indiqué que test inclue booléen on va tester mail
        throw new Error("email est invalide"); 
    }
   return true;
}

function afficherMessageErreur(message){
    
    let spanErreurMessage = document.getElementById("erreurMessage");
    
    if (!spanErreurMessage){
        let popup = document.querySelector(".popup");
        spanErreurMessage = document.createElement("span");
        spanErreurMessage.id = "erreurMessage";
        popup.appendChild(spanErreurMessage);
    }
    spanErreurMessage.innerText = message;
}

function gererFormulaire(citation){
    try{
        let baliseNom = document.getElementById("nom");
        let nom = baliseNom.value;
        validerNom(nom);
        let baliseMail = document.getElementById("email");
        let email=baliseMail.value;
        validerMail(email);
        afficherMessageErreur("");
        afficherEmail(email, nom, citation);
}
    catch(erreur){
        console.log(erreur);
        afficherMessageErreur(erreur.message);
    }
}

function startTheApp(){
    //initialization
    initAddEventListenerPopup()
    const capitalizeListAbsurd = [... listAbsurd];
    capitalizeFirstLetter(capitalizeListAbsurd);

    let btnValiderMot = document.getElementById("btnValiderMot");

    let listeBtnRadio = document.querySelectorAll(".optionSource input")
     for (let index = 0; index < listeBtnRadio.length; index++) {
         listeBtnRadio[index].addEventListener("change", (event) => {
             // Si c'est le premier élément qui a été modifié, alors nous voulons générer de l'absurde 
             if (event.target.value === "1") {
                btnValiderMot.addEventListener("click", () => {
                displayResult(`“${randomCitation(capitalizeListAbsurd)} ${randomCitation(listAbsurd)}, ${randomCitation(listAbsurd)}.”`);
                displayImg(randomCitation(listImg));
            })   
            } else {
                btnValiderMot.addEventListener("click", () => {
                displayResult(randomCitation(listCitation)); 
                displayImg(randomCitation(listImg));
            })    
             }
           
         })
     }

        let form = document.querySelector('form');
        form.addEventListener("submit", (event) => {
            // Quand on a cliqué sur le bouton partagé, on affiche la popup
            event.preventDefault();
            let baliseCitation= document.getElementById("spanResult");
            let citation = baliseCitation.innerHTML;  
            gererFormulaire(citation);
            console.log(citation)
            })      
}

