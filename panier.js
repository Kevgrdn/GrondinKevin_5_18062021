// Afficher le panier sur la page Panier

let storageData = JSON.parse(localStorage.getItem("Panier"))
document.getElementById('items').innerHTML 
    = '<div class="col-4"><img src="'
    + storageData[0]
    +'" class="d-flex w-25 m-auto flex-row fit"></div>'
    + '<div class="col-4">'
    + storageData[1]
    + '<p>'
    + storageData [2]
    + '</p>'
    + '</div><div class="col-2">'
    + '</div>' 
    + '<div class="col-2">'
    + storageData [3] / 100 + ' €'
    + '</div>'

    

    









