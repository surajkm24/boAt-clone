function changeBg(event){
    var box = event.target;
    var path = event.target.querySelector("a>svg>path")
    box.style.backgroundColor="white"
   path.style.fill="black";
   path.style.backgroundColor="black";
}
function returnOg(event){
    var box = event.target;
    var path = event.target.querySelector("a>svg>path")
    box.style.backgroundColor="black"
   path.style.fill="white";
   path.style.backgroundColor="black";
}

document.querySelector("#boatOptions>div>div>button").addEventListener("click",function(){
   var value = document.querySelector("#boatOptions>div>div>input").value
        if(value){
    alert("You have successfully subscribed for email alerts.")}
    else {
        alert("Enter Email!")
    }
})