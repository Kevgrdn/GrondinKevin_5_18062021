// Afficher le panier sur la page Panier
let storageData = JSON.parse(localStorage.getItem("Panier"))

//La fonction affiche le contenu du localStorage, il faut boucler avec un forEach afin d'afficher tous les items du tableau
function displayCart(){
    let productInformations = JSON.parse(window.localStorage.getItem('Product'))
//Si le localStorage est vide OU si la clef Panier est vide : 
    if(window.localStorage.length == 0 || storageData.length == 0)
    {
        document.getElementById('items').innerHTML = '<div class="text-light mx-auto text-center"> Votre panier est vide </div>'
        document.getElementById('valider').onclick = function (){
            alert('Votre panier est vide !')
        }
    }
    else 
    {
        //Boucle qui affiche tous les produits de la clef "Panier"
    storageData.forEach(function(elementInStorage, index, array) {
        document.getElementById('items').innerHTML 
        += '<div id="'+ productInformations[index] +'" class="row justify-content-around align-items-center p-0"><div class="col-3 py-2"><img src="'
        + elementInStorage[0]
        +'" class="d-flex rounded w-100 m-auto flex-rowfit py-2"></div>'
        + '<div class="col-3  text-center text-light">'
        + elementInStorage[2]
        + '</div><div id="quantity" class=" text-center px-0 col-3 py-2 text-light">'
        + '<button class="rounded btnLessQuantity btn-secondary mx-1" data-id="'+ productInformations[index] +'"> - </button><span class="quantity">'
        + elementInStorage[5]+ '</span>'
        +'<button id="" class="rounded btnMoreQuantity btn-primary mx-1" data-id="'+ productInformations[index] +'"> + </button"></div>'
        + '<div class="col-2 py-2 px-0  text-center text-light">'
        + elementInStorage[3] / 100 + ' €'
        + '</div></div>'
       
    });
    }
    
    
    //Ecoute les informations lors du clic
    document.addEventListener('click', function(e){
        //console.log(e)
        product = JSON.parse(window.localStorage.getItem('Product'))

        // Au clic Quantité +
        if(e.target && e.target.className == 'rounded btnMoreQuantity btn-primary mx-1'){
            let productIndex = product.indexOf(e.target.dataset.id)
            console.log(productIndex)
            let quantity = parseInt(e.target.previousElementSibling.innerText)  + 1
            panier = JSON.parse(window.localStorage.getItem('Panier')) 

            e.target.previousElementSibling.innerText = quantity
            panier.splice(1, productIndex)
            product.splice(1, productIndex)
            panier[productIndex][5] += 1
            window.localStorage.setItem('Panier', JSON.stringify(panier))
            displayPrice()
        }
        //Au clic Quantité -
        if(e.target && e.target.className == 'rounded btnLessQuantity btn-secondary mx-1'){
            let quantity = parseInt(e.target.nextElementSibling.innerText) - 1
            product = JSON.parse(window.localStorage.getItem('Product'))
            let productIndex = product.indexOf(e.target.dataset.id)
            console.log(productIndex)

            console.log(e)
            //Si la quantité passe à 0
            if (quantity <= 0) {
                panier = JSON.parse(window.localStorage.getItem('Panier'))
                panier.splice(productIndex, 1)
                product.splice(productIndex, 1)
                window.localStorage.setItem('Panier', JSON.stringify(panier)) 
                window.localStorage.setItem('Product', JSON.stringify(product))
                //console.log(product.splice(e.target.dataset.pos, 1))
                document.getElementById(e.target.dataset.id).remove()
                
                displayPrice()

            }
            // Si elle ne passe pas à 0
            else{
                e.target.nextElementSibling.innerText = quantity
                panier = JSON.parse(window.localStorage.getItem('Panier')) 
                panier[productIndex][5] -= 1
                window.localStorage.setItem('Panier', JSON.stringify(panier))
                displayPrice()
            }
        }
    });

    document.querySelectorAll('.btnMoreQuantity').addEventListener
}
displayCart()


if(window.localStorage.length == 0 || storageData.length == 0)
{
            
}
else
{
    //Fonction pour boucler sur le prix afin d'obtenir le prix total
function displayPrice(){
    totalPrice = 0
    let storageData = JSON.parse(localStorage.getItem("Panier"))
    storageData.forEach(elementInStorage => {
        
        totalPrice += elementInStorage[3] * elementInStorage[5]
    })
    document.getElementById('totalPrice').innerHTML
    = 'Total : ' +  totalPrice / 100 + ' €'
}
displayPrice()

}





