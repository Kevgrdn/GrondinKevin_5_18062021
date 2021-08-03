
// Afficher le panier sur la page Panier
let storageData = JSON.parse(localStorage.getItem("Panier"))




function displayCart(){
    //La fonction affiche le contenu du localStorage, il faut boucler avec un forEach afin d'afficher tous les items du tableau
    storageData.forEach(function(elementInStorage, index, array) {
        //console.log(index)

        document.getElementById('items').innerHTML 
        += '<div id="product-'+ index +'" class="row justify-content-around"><div class="col-3 py-2"><img src="'
        + elementInStorage[0]
        +'" class="d-flex rounded w-100 m-auto flex-rowfit py-2"></div>'
        + '<div class="col-3  text-center align-items-center text-light">'
        + elementInStorage[2]
        + '</p></div><div id="quantity" class=" text-center col-3 py-2 text-light">'
        + '<button class="rounded btnLessQuantity" data-pos="'+ index +'"> - </button><span class="quantity">'
        + elementInStorage[5]+ '</span>'
        +'<button id="" class="rounded btnMoreQuantity" data-pos="'+ index +'"> + </button"></div>'
        + '<div class="col-2 py-2  text-center text-light">'
        + elementInStorage[3] / 100 + ' €'
        + '</div></div>'
       
    });

    document.addEventListener('click', function(e){
        //////////////////console.log(e)
        //Quantité +
        if(e.target && e.target.className == 'rounded btnMoreQuantity'){
             //do something
             let quantity = parseInt(e.target.previousElementSibling.innerText)  + 1
             e.target.previousElementSibling.innerText = quantity

             panier = JSON.parse(window.localStorage.getItem('Panier')) 
             panier[e.target.dataset.pos][5] += 1
             window.localStorage.setItem('Panier', JSON.stringify(panier))
             displayPrice()
        }
        //Quantité -
        if(e.target && e.target.className == 'rounded btnLessQuantity'){
            let quantity = parseInt(e.target.nextElementSibling.innerText) - 1
            console.log()
            //Si la quantité passe à 0
            if (quantity <= 0) {
                panier = JSON.parse(window.localStorage.getItem('Panier'))
                product = JSON.parse(window.localStorage.getItem('Product'))
                panier.splice(e.target.dataset.pos, 1)
                product.splice(e.target.dataset.pos, 1)
                window.localStorage.setItem('Panier', JSON.stringify(panier)) 
                window.localStorage.setItem('Product', JSON.stringify(product))
                //console.log(product.splice(e.target.dataset.pos, 1))
                document.getElementById('product-'+ e.target.dataset.pos).remove()
                
                displayPrice()

            }
            // Si elle ne passe pas à 0
            else{
                e.target.nextElementSibling.innerText = quantity
                panier = JSON.parse(window.localStorage.getItem('Panier')) 
                panier[e.target.dataset.pos][5] -= 1
                window.localStorage.setItem('Panier', JSON.stringify(panier))
                displayPrice()
            }
        }
    });


    //console.log(document.getElementsByClassName('btnMoreQuantity'))
    document.querySelectorAll('.btnMoreQuantity').addEventListener


   
}
displayCart()


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