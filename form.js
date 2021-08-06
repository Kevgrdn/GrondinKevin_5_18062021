function sendOrder (){
    let validation = document.getElementById('valider')
    let firstName = document.getElementById('firstName')
    let lastName = document.getElementById('lastName')
    let adress = document.getElementById('adress')
    let city = document.getElementById('city')
    let mail = document.getElementById('mail')


    validation.onclick = function(e){
        let product = window.localStorage.getItem('Product')
        let productJSON = JSON.parse(product)
        let productToSend = []
    
    
    //Au clic sur valider si le formulaire n'est pas correct:
        if(!(
            firstName.value.length > 1 
            && lastName.value.length > 1 
            && adress.value.length > 6 
            && city.value.length > 1 
            && mail.value.length > 6
        ))  {
            alert('Veuillez remplir correctement le formulaire avant de valider la commande')
            }
    //Si le formulaire est correct :
        else {
            productJSON.forEach(element => {
                productToSend.push(element.split('-')[0])
           
            })     
        body = '{"contact": {"firstName": "'+ firstName.value+'","lastName": "'+lastName.value+'","address": "'+adress.value+'","city": "'+city.value+'", "email": "'+mail.value+'"},"products":'+JSON.stringify(productToSend)+'}'
            
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
    }
}
sendOrder()

//Redirection JS vers validation.html
function RedirectionJavascript(){
    document.location.href="validation.html"; 
}
