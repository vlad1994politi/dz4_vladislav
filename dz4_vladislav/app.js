const btn = document.querySelector("button")

btn.addEventListener("click", ()=> {
    const request = new XMLHttpRequest() 
    request.open("GET", "data.json")
    request.setRequestHeader("Content-type","application/json")
    request.send() 
    request.addEventListener("load", ()=>{ 
        const data = JSON.parse(request.response)
        console.log(data);
        document.querySelector(".phone").innerHTML = data.phone
        document.querySelector(".model").innerHTML = data.model
    })
})