//constants
const buttons = document.querySelector('.buttons')
const custom = document.querySelector('.custom')
const random = document.querySelector('.random')
const search = document.querySelector('.go')
const rating = document.querySelector('.rating')
const results = document.querySelector('.results')
const shortened = document.querySelector('.short')
const long = document.querySelector('.long')
const customText = document.querySelector('#customText')
const textArea = document.querySelector('textarea')
const submit = document.querySelector('.submit')
const previousComment = document.querySelector('.appendComment')
let linktype;


//event listeners
document.addEventListener('DOMContentLoaded', hideInput)

custom.addEventListener('click',(e)=>{
    customText.style.display = 'inline';
    console.log(e.target.textContent)
    return(linktype=e.target.textContent)
})
search.addEventListener('click',(e)=>{
    console.log(e.target.textContent)
    console.log (linktype)
    console.log(customText.value)
    fetchCustom()
}
)
submit.addEventListener('submit',(event)=>{
    event.preventDefault();
    let li = document.createElement('li')
    li.textContent = `${textArea.value}`
    previousComment.appendChild(li)
    textArea.value = ''
})



//callback functions
function hideInput(){
    document.querySelector('#customText').style.display = 'none';
}

function fetchCustom(){
return(fetch("https://gotiny.cc/api",
{
    method:'POST',
    headers:{
        "Content-Type": "application/json" 
    },
    body:JSON.stringify({
        long:long.value,
        custom:customText.value
    })
})
.then(resp=>resp.json())
.then(data=>{
console.log(data)
shortened.value="gotiny.cc/"+data[0].code
}))}
document.querySelector('.submit').addEventListener('click',e=>e.preventDefault())
function fetchRandom(){
    
return(
    fetch("https://gotiny.cc/api",
            {
                method:'POST',
                headers:{
                    "Content-Type": "application/json" 
                },
                body:JSON.stringify({
                    input:long.value,
                })
            })
.then(resp=>resp.json())
.then(data=>{
console.log(data)
shortened.value="gotiny.cc/"+data[0].code
        }))}