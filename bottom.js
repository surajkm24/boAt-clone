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
