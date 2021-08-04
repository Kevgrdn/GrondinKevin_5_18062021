//Récupérer la clef local storage Order pour obtenir le numero de commande
form = window.localStorage.getItem('order')
form = JSON.parse(form)
console.log(form.products)
//Envoyer le n° de commande sur le site
document.getElementById('orderNumber').innerHTML
    +='<u>' +form.orderId+'</u>'

let quantity = JSON.parse(window.localStorage.getItem('Panier'))

console.log(quantity)
//Afficher le prix total sur la page formulaire
function setPrice(){
    let products = form.products
    totalPrice = 0

    products.forEach(function(element, index, array) {
        productQuantity = quantity[index][5]
        totalPrice += element.price * productQuantity
        console.log(index)
        
    });   
    document.getElementById('finalPrice').innerHTML
        += totalPrice / 100 + '€'
        
}
setPrice()
// Au clic sur retour à la page d'accueil, vide le localStorage
document.getElementById('finDeCommande').onclick = function(){
    window.localStorage.removeItem('Panier')
    window.localStorage.removeItem('order')
    window.localStorage.removeItem('Product')
    RedirectionJavascript()
}
//Function qui redirige vers la page d'accueil en fin de commande
function RedirectionJavascript(){
    document.location.href="index.html"; 
  }

