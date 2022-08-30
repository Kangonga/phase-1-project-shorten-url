document.addEventListener('DOMContentLoaded', fetchLink)
function fetchLink(){
    return(fetch("https://gotiny.cc/api",
    {
        method:'POST',
        headers:{
            "Content-Type": "application/json" 
        },
        body:JSON.stringify({
            // input:"https://jobs.gorails.com/",
            long:"https://www.rubyjobboard.com/",
            custom:"abcd",
        
        })
    }))
    .then(resp=>resp.json())
    .then(data=>{
        console.log(data)
        console.log("gotiny.cc/"+data[0].code)
    })
}