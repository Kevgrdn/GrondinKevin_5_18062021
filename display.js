//Pour afficher les oursons, on utilise fetch pour appeler l'API qui nous renvoie une promesse.

fetch("http://localhost:3000/api/teddies")
    .then((response) => {
        return response.json()
        //console.log(response)
})
    .then((teddies) => {
        //Boucle forEach pour afficher chaque ourson avec ses informations dans une <div>.
        teddies.forEach(teddy => {
            document.getElementById("teddies").innerHTML 
            += '<div class="teddy h-75 col-11 col-md-4 col-lg-3 m-2 border border-dark px-0 rounded">' 
                    + '<a href="product.html?id=' + teddy._id + '&type=teddies" class="unstyled-link">'
                    + '<img class="w-100 h-75 fit rounded-top"src="' + teddy.imageUrl +'">' 
                    + '<div class="bg-dark bg-gradient rounded-top"><p class="px-1  text-light fw-bold font-style-google-font h2 text-center">' + teddy.name + '</p>' 
                    + '<p class="px-1  text-light"> Description : ' + teddy.description + '</p>' 
                    + '<p class="px-1 fw-bold text-light m-0 text-center"> Prix : ' + teddy.price / 100 + '€ </p></a>' 
                    + '</div></div>'
        });
})





