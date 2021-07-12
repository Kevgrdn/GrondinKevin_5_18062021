const params = new URLSearchParams(window.location.search)
let id = params.get('id');
let type = params.get('type');

async function apiproduct(){
    let response = await fetch('http://localhost:3000/api/'+ type +'/'+ id)
    let data = await response.text();
    let product = JSON.parse(data);
    console.log(product, type)
    showproduct(product, type)
} 
apiproduct()

function showproduct(product, type){
    console.log(type)
        document.getElementById("product").innerHTML
            +='<img src="'
            + product.imageUrl
            + '" class="rounded fit">'
            + product.name
            + '<p>' 
            +product.description 
            +'</p>'
            +'<p>'
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
        else{

        product.colors.forEach(function(color) { 
            document.getElementById('select').innerHTML 
            +='<option value="'
            + color
            +'">'
            + color
            +'</option>'})
        }
        

}
