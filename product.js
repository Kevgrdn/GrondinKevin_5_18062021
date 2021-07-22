const params = new URLSearchParams(window.location.search)
let id = params.get('id');
let type = params.get('type');

async function apiproduct(){
    let response = await fetch('http://localhost:3000/api/'+ type +'/'+ id)
    let data = await response.text();
    let product = JSON.parse(data);
    console.log(product, type)
    showproduct(product, type)
    let addToCart = document.getElementById("add-to-cart")

    //envoyer les fichiers dans le localstorage
    addToCart.onclick = function(){
        select = document.getElementById("select").value
        panier = JSON.parse(window.localStorage.getItem('Panier'))
        panier.push([product.imageUrl, product.description, select, product.price])
        window.localStorage.setItem('Panier', JSON.stringify(panier))     
        console.log(panier)
       
    }

    
} 
apiproduct()



function showproduct(product, type){
        document.getElementById("product-data").innerHTML
            ='<img src="'
            + product.imageUrl
            + '" class="rounded fit">'
            + product.name
            + '<p class="d-block text-center">' 
            + product.description 
            +'</p>'
            +'<p class="d-block text-center">'
            + product.price / 100 
            +'€ </p>'
        if (type == "cameras"){
            product.lenses.forEach(function(lense){
            document.getElementById('select').innerHTML 
            +='<option value="'
            + lense
            +'">'
            + lense
            +'</option>'}) 
        }
        if (type == "furniture"){
            product.varnish.forEach(function(varnish){
                document.getElementById('select').innerHTML 
                +='<option value="'
                + varnish
                +'">'
                + varnish
                +'</option>'})
        }
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

