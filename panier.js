// Afficher le panier sur la page Panier
let storageData = JSON.parse(localStorage.getItem("Panier"))
document.getElementById('items').innerHTML 
    = '<div class="col-4"><img src="'
    + storageData[0][0]
    +'" class="d-flex w-25 m-auto flex-row fit"></div>'
    + '<div class="col-4">'
    + storageData[0][1] 
    + '<p>'
    + storageData [0][2]
    + '</p>'
    + '</div> <div class="col-4">'
    + storageData [0][3] / 100 + ' €'
    + '</div>'

    

    









