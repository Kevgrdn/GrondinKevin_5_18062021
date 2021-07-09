const params = new URLSearchParams(window.location.search)
let id = params.get('id');
let type = params.get('type');

async function apiproduct(){
    let response = await fetch('http://localhost:3000/api/'+ type +'/'+ id)
    let data = await response.text();
    let teddy = JSON.parse(data);
    console.log(teddy)
} 
apiproduct()
