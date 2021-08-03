let produitEnregistreDansLeLocalStorage = JSON.parse(localStorage.getItem('Panier'));

console.log(produitEnregistreDansLeLocalStorage)

if(produitEnregistreDansLeLocalStorage){

}
else {
    produitEnregistreDansLeLocalStorage = [];
    console.log(produitEnregistreDansLeLocalStorage)
}
