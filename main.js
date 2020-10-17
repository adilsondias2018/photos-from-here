const cep = document.querySelector("#cep")

const showData = (result) =>{

    for( const campo in result){

        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
        console.log("campo" + campo);
    }
}

showData()

cep.addEventListener('blur', (e)=>{

    let search = cep.value.replace("_","")
    const options = {

        method:'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`http://viacep.com.br/ws/${search}/json/`, options)
    .then((response)=>{response.json()
        .then((data)=> showData(data)) 
       })
    .catch(e => console.log('Deu erro' + e, message))
    console.log(cep.value);

})


fetch("https://jsonplaceholder.typicode.com/users/1/")
  .then(responseObject => console.log("This is the HTTP response object:", responseObject))