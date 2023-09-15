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


function startTheGame(){
    //initialization
    initAddEventListenerPopup()
    const capitalizeListAbsurd = [... listAbsurd];
    capitalizeFirstLetter(capitalizeListAbsurd);

    let listeBtnRadio = document.querySelectorAll(".optionSource input")
     for (let index = 0; index < listeBtnRadio.length; index++) {
         listeBtnRadio[index].addEventListener("change", (event) => {
             // Si c'est le premier élément qui a été modifié, alors nous voulons générer de l'absurde 
             if (event.target.value === "1") {
             
                displayResult(`“${randomCitation(capitalizeListAbsurd)} ${randomCitation(listAbsurd)}, ${randomCitation(listAbsurd)}.”`);
                displayImg(randomCitation(listImg));
                console.log(randomCitation(listImg));
            } else {
                displayResult(randomCitation(listCitation)); 
                displayImg(randomCitation(listImg));
                
             }
             
         })
     }
}

