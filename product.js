const params = new URLSearchParams(window.location.search)
let id = params.get('id');
let type = params.get('type');

fetch('http://localhost:3000/api/'+ type +'/'+ id)
.then((response) => {
    return response.json()
})
.then((product) => {

    console.log(product, type)
    let addToCart = document.getElementById("add-to-cart")
    showproduct(product, type)
    //envoyer les fichiers dans le localstorage
    addToCart.onclick = function(){
        //ID du produit
        productStorage = JSON.parse(window.localStorage.getItem('Product'))
            if (productStorage == null){
                productStorage = []
            }
        select = document.getElementById("select").value
        panier = JSON.parse(window.localStorage.getItem('Panier'))
        //Si le panier est vide, ça crée le tableau d'item
            if (panier == null){
                panier = []
            }
        let indexTableauPanier = productStorage.indexOf(id + '-' + select)
            // ??
            if (indexTableauPanier >= 0){
                quantity = parseInt(panier[indexTableauPanier][5]) + 1
                panier[indexTableauPanier][5] = quantity
            }

            else {
                quantity = 1
                productStorage.push(id + '-' + select)
                panier.push([product.imageUrl, product.description, select, product.price, id, quantity])

            }
        //console.log(quantity)   
        window.localStorage.setItem('Panier', JSON.stringify(panier))   
        window.localStorage.setItem('Product', JSON.stringify(productStorage))       
        console.log(panier)
       document.getElementById('added-to-cart').innerHTML = 'Votre produit a été ajouté au panier !'
    }   
}) 




function showproduct(product, type){
        document.getElementById("product-data").innerHTML
            ='<img class="px-0" src="'
            + product.imageUrl
            + '" class="rounded fit"><div class="bg-dark rounded bg-gradient"><p class="text-center font-style-google-font h1 py-3 text-light">'
            + product.name
            + '</p><p class="d-block text-center text-light">' 
            + product.description 
            +'</p>'
            +'<p class="d-block text-center text-light">'
            + product.price / 100 
            +' € </p></div>'
       
        
        if (type == "teddies"){
            product.colors.forEach(function(color) { 
            document.getElementById('select').innerHTML 
            +='<option value="'
            + color
            +'">'
            + color
            +'</option>'})
        }
}

