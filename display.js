function displayteddy(teddy){
    document.getElementById("teddies").innerHTML 
        += '<div class="teddy col-8 col-md-4 col-lg-3  m-2 border border-dark px-0 h-100 rounded">' 
                + '<a href="product.html?id=' + teddy._id + '&type=teddies">'
                + '<img class="w-100 h-75 fit rounded-top"src="' + teddy.imageUrl +'">' 
                + '<p class="px-1 fw-bold"> Ours : ' + teddy.name + '</p>' 
                + '<p class="px-1"> Description : ' + teddy.description + '</p>' 
                + '<p class="px-1 fw-bold"> Prix : ' + teddy.price / 100 + '€ </p></a>' 
                + '<a href="panier.html" class="btn-info rounded px-1" >Ajouter au panier</a>'
        +'</a> </div>'
}
async function apiteddy(){
    let response = await fetch("http://localhost:3000/api/teddies")
    let data = await response.text();
    let teddies = JSON.parse(data);
    teddies.forEach(teddy => {
        displayteddy(teddy)
    });
} 
apiteddy()

function displaycamera(camera){
    document.getElementById("cameras").innerHTML
                +='<div class="camera col-8 col-md-4 col-lg-3 m-2 border border-dark px-0 h-100 rounded">' 
                + '<a href="product.html?id=' + camera._id + '&type=cameras">'
                + '<img class="w-100 h-75 fit rounded-top"src="' + camera.imageUrl +'">' 
                + '<p class="px-1 fw-bold"> Caméra : ' + camera.name + '</p>' 
                + '<p class="px-1"> Description : ' + camera.description + '</p>' 
                + '<p class="px-1 fw-bold"> Prix : ' + camera.price / 100 + '€ </p>' 
                + '<a class="btn-info rounded px-1">Ajouter au panier</a>'
                +'</a> </div>'
}
async function apicamera(){
    let response = await fetch("http://localhost:3000/api/cameras")
    let data = await response.text();
    let camera = JSON.parse(data);
    camera.forEach(cam => {
        displaycamera(cam)
    });
}
apicamera()

function displaymeuble(meuble){
    document.getElementById("meubles").innerHTML
    += '<div class="meubles col-8 col-md-4 col-lg-3  m-2 border border-dark px-0 h-100 rounded">' 
                + '<a href="product.html?id=' + meuble._id + '&type=furniture">'
                + '<img class="w-100 h-75 fit rounded-top"src="' + meuble.imageUrl +'">' 
                + '<p class="px-1 fw-bold"> Meuble : ' + meuble.name + '</p>' 
                + '<p class="px-1"> Description : ' + meuble.description + '</p>' 
                + '<p class="px-1 fw-bold"> Prix : ' + meuble.price / 100 + '€ </p>' 
                + '<a href="panier.html" class="btn-info rounded px-1">Ajouter au panier</a>'
            +'</a> </div>'
}
async function apimeubles(){
    let response = await fetch("http://localhost:3000/api/furniture")
    let data = await response.text();
    let meuble = JSON.parse(data);
        meuble.forEach(bois => {
            displaymeuble(bois)
        });
}
apimeubles()



