
// AddToCart ajoute dans le localStorage au clic sur "Ajouter au panier"

let addToCart = document.getElementById("add-to-cart")


addToCart.onclick = function(){
    select = document.getElementById("select").value
    console.log(document.getElementById("select").value)
    panier = JSON.parse(window.localStorage.getItem('Panier'))
    panier = [] 
    panier.push([select, id, type])
    window.localStorage.setItem('Panier', JSON.stringify(panier))
    
}

