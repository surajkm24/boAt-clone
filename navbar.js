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
var cartArr = [
    {
        image_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_1_3b4cc1b8-e1ed-4809-9ded-38355df461a1_600x.png?v=1651596525",
        name: "boAt Stone 1450",
        price: "3999.00",
        original_price: "6,999.00"
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_1_3b4cc1b8-e1ed-4809-9ded-38355df461a1_600x.png?v=1651596525",
        name: "boAt Stone 1450",
        price: "3999.00",
        original_price: "6,999.00"
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_1_3b4cc1b8-e1ed-4809-9ded-38355df461a1_600x.png?v=1651596525",
        name: "boAt Stone 1450",
        price: "3999.00",
        original_price: "6,999.00"
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_1_3b4cc1b8-e1ed-4809-9ded-38355df461a1_600x.png?v=1651596525",
        name: "boAt Stone 1450",
        price: "3999.00",
        original_price: "6,999.00"
    }, {
        image_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_1_3b4cc1b8-e1ed-4809-9ded-38355df461a1_600x.png?v=1651596525",
        name: "At Stone 1450",
        price: "3999.00",
        original_price: "6,999.00"
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_1_3b4cc1b8-e1ed-4809-9ded-38355df461a1_600x.png?v=1651596525",
        name: "Ate Stone 1450",
        price: "3999.00",
        original_price: "6,999.00"
    }
];
cartItemsNo.innerText = cartArr.length;
showCart(cartArr);
function showCart(cartArr) {
    if (cartArr.length === 0) {
        cartItemsNo.innerText = cartArr.length;
        document.querySelector("#empCart").innerHTML = "";
        document.querySelector("#empCart").innerHTML = " <p>Your cart is empty</p> <button style='cursor:pointer;'>START SHOPPING</button>"
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


    }
}



