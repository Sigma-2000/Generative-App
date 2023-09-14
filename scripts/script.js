function randomCitation(list){
    return list[Math.floor(Math.random() * list.length)];
}

function startTheGame(){
    
    let listeBtnRadio = document.querySelectorAll(".optionSource input")
     for (let index = 0; index < listeBtnRadio.length; index++) {
         listeBtnRadio[index].addEventListener("change", (event) => {
             // Si c'est le premier élément qui a été modifié, alors nous voulons générer de l'absurde 
             if (event.target.value === "1") {
                 console.log(randomCitation(listAbsurd));
             } else {
                console.log(randomCitation(listCitation)); 
                
             }
             // Et on modifie l'affichage en direct, avec une fonction aélatoire 
             
         })
     }
}


