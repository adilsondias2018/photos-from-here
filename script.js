

if( 'geolocation' in navigator){

    console.log("show");
    let latitude = 0
    let longitude = 0

   navigator.geolocation.getCurrentPosition(function(position){
       latitude = position.coords.latitude
       longitude = position.coords.longitude
        console.log(`latitude: ${latitude} longitude: ${longitude}`);      

    },)  
}else {
    console.log('indisponível');
}

// fetch("https://jsonplaceholder.typicode.com/users/1/")
//   .then(responseObject => console.log("This is the HTTP response object:", responseObject))

//   fetch("https://jsonplaceholder.typicode.com/users/1/")
//   .then(responseObject => responseObject.json())


//   fetch("https://jsonplaceholder.typicode.com/users/1/")
//   .then(responseObject => responseObject.json())
//   .then(hydratedBody => console.log(hydratedBody))

//   fetch("https://jsonplaceholder.typicode.com/users/1/")
//   .then(res => res.json())
//   .then(data => console.log(data))


//   const output = document.getElementById("output")

// fetch("https://jsonplaceholder.typicode.com/users/1/")
//   .then(responseObject => responseObject.json())
//   .then(hydratedBody => {

//     output.dataset.characterId = hydratedBody.id
//     output.querySelector("h1").textContent = `${hydratedBody.name}`

//     const email = document.createTextNode(hydratedBody.email)
//     output.appendChild(email)

//   })

//   fetch("https://jsonplaceholder.typicode.com/photos")
//     .then( req =>  req.json())
//     .then ( data => console.log(data) )
    
//     fetch("https://shrouded-mountain-15003.herokuapp.com/https://flickr.com/services/rest/?api_key=38e3132d1253b793f5ed2174291ba8da&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=-25.4284&lon=-49.2733&text=cachorros")
//     .then( req =>  req.json())
//     .then ( data => console.log(data) )
    


/*

//  Texto para ser passado para busca 
const text;


// link variaávei lon e lat a latitude e longitude
/*
per_page = 5

safe_search = 1



https://flickr.com/services/rest/?api_key=993fake589fake6cdfakefcb&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=-25.4284&lon=-49.2733&text=cachorros

https://flickr.com/services/rest/?api_key=38e3132d1253b793f5ed2174291ba8da&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=-25.4284&lon=-49.2733&text=cachorros


https://shrouded-mountain-15003.herokuapp.com/https://flickr.com/services/rest/?api_key=993c9d05898cfd6cd16b4fcb18401be0&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=-25.4284&lon=-49.2733&text=cachorros


// Exibir a primeira imagem

// Exibir a próxima imagem
*/