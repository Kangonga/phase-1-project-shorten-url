document.addEventListener('DOMContentLoaded', fetchLink)

function fetchLink(){
    return(fetch(`https://short-link-api.vercel.app/?query=${link}`,{
        method:'GET',
        mode:'cors',
        headers:{
            'Access-Control-Allow-Origin':'*'
        }
    })
    .then(resp=>resp.json())
    .then(data=>console.log(data))
    )
}
console.log("hello")
let link = "https://jobs.gorails.com/"