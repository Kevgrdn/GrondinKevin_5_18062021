
let validation = document.getElementById('valider')
let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let adress = document.getElementById('adress')
let city = document.getElementById('city')
let mail = document.getElementById('mail') 

// Au clic sur valider la commande, déclenche la fonction de validation du formulaire
validation.onclick = function(e){
    let product = window.localStorage.getItem('Product')
    let productJSON = JSON.parse(product)
    let productToSend = []

    productJSON.forEach(element => {
     productToSend.push(element.split('-')[0])

    
});
    console.log(e)
    //Contenu du formulaire à envoyer
    body = '{"contact": {"firstName": "'+ firstName.value+'","lastName": "'+lastName.value+'","address": "'+adress.value+'","city": "'+city.value+'", "email": "'+mail.value+'"},"products":'+JSON.stringify(productToSend)+'}'
        console.log(body)
    
        
    //POST sur l'API teddy/order
    const requestOptions = {
        method: 'POST',
        body: body,
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }
    fetch('http://localhost:3000/api/teddies/order', requestOptions)
    .then((response) => response.json()) 
    .then((apiData) => {
        localStorage.setItem("order", JSON.stringify(apiData));
        RedirectionJavascript()
    })
    .catch(() => {
        alert(error)
    })
    
   
    
}

//Redirection JS vers validation.html
function RedirectionJavascript(){
    document.location.href="validation.html"; 
  }
  
