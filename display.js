//Afficher les oursons
function displayteddy(teddy){
    document.getElementById("teddies").innerHTML 
        += '<div class="teddy col-8 col-md-4 col-lg-3  m-2 border border-dark px-0 h-100 rounded">' 
                + '<a href="product.html?id=' + teddy._id + '&type=teddies" class="unstyled-link">'
                + '<img class="w-100 h-75 fit rounded-top"src="' + teddy.imageUrl +'">' 
                + '<div class="bg-dark bg-gradient rounded-top"><p class="px-1  text-light fw-bold"> Ours : ' + teddy.name + '</p>' 
                + '<p class="px-1  text-light "> Description : ' + teddy.description + '</p>' 
                + '<p class="px-1 fw-bold text-light m-0"> Prix : ' + teddy.price / 100 + '€ </p></a>' 
                + '</div></div>'
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




