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

function capitalizeFirstLetter(list) {
    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] === 'string' && list[i].length > 0) {
            list[i] = list[i].charAt(0).toUpperCase() + list[i].slice(1);
        }
    }
    return list;
}

   

function startTheGame(){

    const capitalizeListAbsurd = [... listAbsurd];
    capitalizeFirstLetter(capitalizeListAbsurd);

    let listeBtnRadio = document.querySelectorAll(".optionSource input")
     for (let index = 0; index < listeBtnRadio.length; index++) {
         listeBtnRadio[index].addEventListener("change", (event) => {
             // Si c'est le premier élément qui a été modifié, alors nous voulons générer de l'absurde 
             if (event.target.value === "1") {
             
                displayResult(`“${randomCitation(capitalizeListAbsurd)} ${randomCitation(listAbsurd)}, ${randomCitation(listAbsurd)}.”`);
                
            } else {
                displayResult(randomCitation(listCitation)); 
                
             }
             
         })
     }
}

