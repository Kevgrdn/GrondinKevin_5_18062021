// Afficher le panier sur la page Panier
let storageData = JSON.parse(localStorage.getItem("Panier"))

function displayCart(){
    //La fonction affiche le contenu du localStorage, il faut boucler avec un forEach afin d'afficher tous les items du tableau
    storageData.forEach(elementInStorage => {
        console.log(elementInStorage)

        document.getElementById('items').innerHTML 
        += '<div class="col-4"><img src="'
        + elementInStorage[0]
        +'" class="d-flex w-25 m-auto flex-row fit"></div>'
        + '<div class="col-4">'
        + elementInStorage[1]
        + '<p><u> Couleur :<u> '
        + elementInStorage[2]
        + '</p>'
        + '</div><div class="col-2">'
        + '</div>' 
        + '<div class="col-2">'
        + elementInStorage[3] / 100 + ' €'
        + '</div>'
    });
   
}
displayCart()


let totalPrice = console.log(storageData[4][3])





