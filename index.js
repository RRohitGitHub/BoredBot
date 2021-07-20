const callBoredApi=function(){
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response=>response.json())
    .then(data=>{
        document.getElementById("activity").textContent = data.activity;
        if(document.body.classList.contains("jungle")){
            document.body.classList.remove("jungle")
        }else{
        document.body.classList.add("jungle")
        }
    })
}

document.getElementById("button").addEventListener("click",callBoredApi);