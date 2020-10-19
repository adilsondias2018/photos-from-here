img = document.createElement('img')
foto = document.getElementById('foto')
buttom = document.getElementById('buttom')

const showData1 = (result)=>{
let  i = 1
let arrayImages = []
console.log(result);  
  
img.src = `https://farm${result[0].farm}.staticflickr.com/${result[0].server}/${result[0].id}_${result[0].secret}.jpg`
document.getElementById('foto').appendChild(img)   
    buttom.addEventListener('click', function(){

        if( i < 5){
            img.src = `https://farm${result[i].farm}.staticflickr.com/${result[i].server}/${result[i].id}_${result[i].secret}.jpg`
            document.getElementById('foto').appendChild(img) 
            i++
        }else if( i == 5){
            img.src = `https://farm${result[0].farm}.staticflickr.com/${result[0].server}/${result[0].id}_${result[0].secret}.jpg`
            document.getElementById('foto').appendChild(img)            
            i = 1      
       }      

    })  

}

if( 'geolocation' in navigator){
    console.log("show");
    let latitude = 0
    let longitude = 0
    let text = 'cats'
    navigator.geolocation.getCurrentPosition(function(position){
        latitude = position.coords.latitude
        longitude = position.coords.longitude
         console.log(`latitude: ${latitude} longitude: ${longitude} texto: ${text}`);     
 
     },)  

    fetch(`https://shrouded-mountain-15003.herokuapp.com/https://flickr.com/services/rest/?api_key=38e3132d1253b793f5ed2174291ba8da&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=${latitude}&lon=${longitude}&text=${text}`)
    .then( req =>  req.json())
    .then ( data => showData1(data.photos.photo))  
}else {
    console.log('Serviço de Geolocalizçaão desabilitado');
}
