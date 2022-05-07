var user = document.querySelector("#userMenu")

var cart = document.querySelector("#userCart");
document.querySelector("#userbtn").addEventListener("click", function () {
    user.style.display = "block";

})
document.querySelector("#cross").addEventListener("click", function () {
    user.style.display = "none";
})

window.addEventListener("mouseup", function (event) {
    var box = document.querySelector("#userMenu");
    if (event.target != box && event.target.parentNode != box) {
        box.style.display = "none";
    }
})
document.querySelector(".cartbtn").addEventListener("click", function () {
    cart.style.display = "block";
    document.querySelector("body").style.overflow = "hidden"
})
document.querySelector("#cross1").addEventListener("click", function () {
    cart.style.display = "none";
    document.querySelector("body").style.overflow = "auto"
})
// window.addEventListener("mouseup", function (event) {
//     var box = document.querySelector("#cartContent");
//     var box1 = document.querySelectorAll("#empCart div");
//     var flag = false;

//     for (var i = 0; i < box1.length; i++) {
//         var cont = box1[i];
//         if (event.target == cont || event.target.parentNode == cont) {
//             flag = true
//         }
//     }

//     if (event.target == box || event.target.parentNode == box || flag === true) {
//         cart.style.display = "block";
//         document.querySelector("body").style.overflow = "hidden"
//     }
//     else {
//         cart.style.display = "none";
//         document.querySelector("body").style.overflow = "auto"
//     }
// })
var cartItemsNo = document.querySelector("#itemsNo");
var cartArr = JSON.parse(localStorage.getItem("cartData"))||[];
var c1 = 0;
cartItemsNo.innerText = cartArr.length;
showCart(cartArr);
function showCart(cartArr) {
    if (cartArr.length === 0) {
        cartItemsNo.innerText = cartArr.length;
        document.querySelector("#empCart").innerHTML = "";
        document.querySelector("#empCart").innerHTML = " <p>Your cart is empty</p> <button onclick='goToShop()' style='cursor:pointer;'>START SHOPPING</button>"
        document.querySelector("#empCart").style.display="grid";
            document.querySelector("#empCart").style.justifyContent="center";
            // document.querySelector("#empCart").style.flexDirection="column";
   
    }
    else {
        document.querySelector("#empCart").innerHTML = "";
        var Tprice = 0;
        var totalItems = 0;

        var uniqueCartItems = [];
        var itemsQuantity = [];

        cartArr.forEach(function (ele) {
            var flag = false;
            for (var i = 0; i < uniqueCartItems.length; i++) {
                var obj = uniqueCartItems[i];
                if (obj.image_url === ele.image_url && obj.name === ele.name && obj.price === ele.price && obj.original_price === ele.original_price) {
                    flag = true;
                    break;
                }
            }
            if (flag) {
                itemsQuantity[i] = itemsQuantity[i] + 1;
            }
            else {
                uniqueCartItems.push(ele);
                itemsQuantity.push(1);
            }
        })
        uniqueCartItems.forEach(function (ele, index) {

            var box = document.createElement("div");
            box.style.display = "flex";

            var card1 = document.createElement("div");

            var img = document.createElement("img");
            img.setAttribute("src", ele.image_url);

            card1.append(img);

            var card2 = document.createElement("div");

            var name = document.createElement("p");
            name.innerText = ele.name

            var card3 = document.createElement("div");
            card3.style.display = "flex";

            var price = document.createElement("p");
            price.innerText = "Rs. " + ele.price;

            var Ogprice = document.createElement("p");
            Ogprice.innerText = "Rs. " + ele.original_price;

            card3.append(price, Ogprice);

            var card4 = document.createElement("div");
            var card5 = document.createElement("div");

            var dec = document.createElement("p");
            dec.innerHTML = "<i class='fa fa-minus' style='font-size:16px'>"
            dec.addEventListener("click", function () {
                delCount(ele, index);
            })

            function delCount(ele, index) {

                for (var i = cartArr.length - 1; i >= 0; i--) {
                    var elem = cartArr[i]
                    if (ele.image_url === elem.image_url && ele.name === elem.name && ele.price === elem.price && ele.original_price === elem.original_price) {
                        break;
                    }
                }
                cartArr.splice(i, 1)
                localStorage.setItem("cartData", JSON.stringify(cartArr));
                showCart(cartArr);
            }


            var qty = document.createElement("p");
            qty.innerText = itemsQuantity[index];

            Tprice += itemsQuantity[index] * (Number(ele.price))

            var inc = document.createElement("p");
            inc.innerHTML = "<i class='fa fa-plus' style='font-size:16px'>"
            inc.addEventListener("click", function () {
                addItems(ele);
            })

            function addItems(elem) {
                cartArr.push(elem);
                localStorage.setItem("cartData", JSON.stringify(cartArr));
                showCart(cartArr)
            }

            card5.style.display = "flex";
            card5.append(dec, qty, inc);

            var del = document.createElement("p");
            del.innerHTML = "<i class='fa fa-trash' style='font-size:20px'>"
            del.addEventListener("click", function () {
                delItems(ele, index)
            })

            function delItems(elem, index) {
                event.target.parentNode.remove();
                var newCartArr = [];
                cartArr.forEach(function (ele) {
                    if (ele.image_url !== elem.image_url || ele.name !== elem.name || ele.price !== elem.price || ele.strikedoffprice !== elem.strikedoffprice) {
                        newCartArr.push(ele);
                    }
                })
                cartArr = newCartArr;
                localStorage.setItem("cartData", JSON.stringify(cartArr));
                showCart(cartArr);
            }
            card4.append(card5, del);
            card2.append(name, card3, card4);
            box.append(card1, card2);
            document.querySelector("#empCart").append(box);
            cartItemsNo.innerText = cartArr.length;
            document.querySelector("#empCart").style.display="flex";
            document.querySelector("#empCart").style.justifyContent="flex-start";
            document.querySelector("#empCart").style.flexDirection="column";
        })
        var order = document.createElement("div");
        order.setAttribute("id","disc");
        var disbox1 = document.createElement("section");
        disbox1.style.display="flex";
        var disBox = document.createElement("input");
        disBox.setAttribute("placeholder","Discount Code");
        disBox.setAttribute("type","text");
        var p1 = document.createElement("p");
        p1.innerText = "Apply";
        p1.addEventListener("click",function(){
            c1++;
            var coupon = document.querySelector("#disc>section>input").value;
            if(coupon==="masai30"&&c1<=1){
                Tprice=Math.floor(Tprice*(7/10));
                var price3 = "Rs. "+Tprice+".00"
                document.querySelector("#disc>section+p+p>span").innerText = price3;
            }
        })
        disbox1.append(disBox,p1)
        var p2 = document.createElement("p");
        p2.innerText="SHIPPING:"
        var span1 = document.createElement("span");
        span1.innerText = "FREE";
        var p3 = document.createElement("p");
        p3.innerText="TOTAL:"
        var span2 = document.createElement("span");
        span2.innerText = "Rs. "+Tprice+".00";
        p2.append(span1);
        p3.append(span2);
        var orderButton = document.createElement("button");
        orderButton.innerText="PLACE ORDER"
        order.append(disbox1,p2,p3,orderButton);
        document.querySelector("#empCart").append(order)
    }
}
function goToShop(){
    cart.style.display = "none";
    document.querySelector("body").style.overflow = "auto"
    window.location.href="index.html#shoP";
}

document.querySelector("#btns1>p").addEventListener("click",function(){
    window.location.href="index.html#shoP";
})
var login = localStorage.getItem("login");
if(login) {
    document.querySelector("#userMenu").innerHTML=" <p>Hi boAthead!<span id='cross' style='color:white;font-size:25px;'>&times</span></p><button >Logout</button>"
}
else {
    document.querySelector("#userMenu").innerHTML=" <p>Hi boAthead!<span id='cross' style='color:white;font-size:25px;'>&times</span></p><button >Login</button>"
}
document.querySelector("#userMenu>button").addEventListener("click",function(event){
    if(event.target.innerText==="Login"){
        window.location.href="login.html";
    }
    else {
        localStorage.removeItem("login");
        window.location.href="index.html";
    }
})
document.querySelector("#btn5").addEventListener("click",function(){
var image=document.querySelector("#tyagi>img").getAttribute("src");
var name=document.querySelector("#st>h1").innerText;
var localprice=document.querySelector("#suraj>p:first-child>span").innerText;
var originalprice=document.querySelector("#suraj>p:nth-child(2)").innerText;
var obj={
    image_url:image,
    name:name,
    price:localprice,
    original_price:originalprice
}
cartArr.push(obj);
localStorage.setItem("cartData",JSON.stringify(cartArr));
showCart(cartArr);
})