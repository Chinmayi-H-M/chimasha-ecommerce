const cartContainer=document.querySelector(".cart-container");

let cart=JSON.parse(localStorage.getItem("cart")) || [];
function renderCart(){
    cartContainer.innerHTML="";

if(cart.length===0){
    cartContainer.innerHTML="<p>Your cart is empty.</p>"; 
    return; 
}
cart.forEach((item, index) => {
    const div= document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML=`
    <img src=${item.image} alt=""
        class="image"/>
    <h1 class="name-cart">${item.title}</h1>
    <p class="cart-amount">₹ ${item.amount}</p>
    <div class="cart-btns">
    <button class="buy-btn cart-btn-page">Buy Now</button>
    <button class="buy-btn remove-btn" data-index="${index}">Remove</button>
    </div>
        `;
        cartContainer.appendChild(div);
    });
}

// Listen for remove button clicks

document.addEventListener("click", function(e){
    if (e.target.classList.contains("remove-btn")){
        const index=e.target.getAttribute("data-index");
        cart.splice(index,1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }
});

renderCart();