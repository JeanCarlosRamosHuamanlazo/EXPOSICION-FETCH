/* let fetch = require('node-fetch') */

async function getcountry(countryName){
   try{ 
   let response = await fetch(`http://restcountries.eu/rest/v2/name/${countryName}`)
   let country= await response.json()
   if(response.ok){
   return country[0].alpha2Code; 
   }else{
       "Pais no encontrado"
   }
    } catch(error){
        return "Error en la API"
    }
   
   
     /* .then(response=>{
        return response.json()
        
    }).then(response=>{
        console.log(response)
    })
    .catch(err=>console.log("Error: ",err)) */
}
(async function(){
    let country = await getcountry("Peru");

    document.getElementById("pais").innerHTML=country;
    
})()
