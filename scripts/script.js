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


function startTheGame(){
    
    let listeBtnRadio = document.querySelectorAll(".optionSource input")
     for (let index = 0; index < listeBtnRadio.length; index++) {
         listeBtnRadio[index].addEventListener("change", (event) => {
             // Si c'est le premier élément qui a été modifié, alors nous voulons générer de l'absurde 
             if (event.target.value === "1") {
                 displayResult(randomCitation(listAbsurd));
             } else {
                displayResult(randomCitation(listCitation)); 
                
             }
             // Et on modifie l'affichage en direct 
             
         })
     }
}

