var user = document.querySelector("#userMenu")

var cart = document.querySelector("#userCart");
document.querySelector("#userbtn").addEventListener("click",function(){
    user.style.display="block";
    
})
document.querySelector("#cross").addEventListener("click",function(){
    user.style.display="none";
})
function myFunction() {
    document.getElementById("#userMenu").classList.toggle("show");
  }
  
window.addEventListener("mouseup",function(event){
    var box = document.querySelector("#userMenu");
    if(event.target != box && event.target.parentNode != box) {
        box.style.display="none";
    }
})
document.querySelector(".cartbtn").addEventListener("click",function(){ 
    cart.style.display="block";
    document.querySelector("body").style.overflow="hidden"
})
window.addEventListener("mouseup",function(event){
    var box = document.querySelector("#cartContent");
    if(event.target != box && event.target.parentNode != box) {
        cart.style.display="none";
        document.querySelector("body").style.overflow="auto"
    }
})
var cartItemsNo = document.querySelector("#itemsNo");
var cartArr = [];
cartItemsNo.innerText = cartArr.length;


  