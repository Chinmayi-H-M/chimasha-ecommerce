const cartContainer=document.querySelector(".cart-container");

const cart=JSON.parse(localStorage.getItem("cart")) || [];

if(cart.length===0){
    cartContainer.innerHTML="<p>Your cart is empty.</p>";  
}
else{
    cart.forEach(item => {
        const div= document.createElement("div");
        div.classList.add(".cart-item");
        div.innerHTML=`
        <img src=${item.image} alt=""
                    class="image"/>
                    <h1 class="name">${item.title}</h1>
                    <p class="cart-amount">₹ ${item.amount}</p>
                    <button class="buy-btn cart-btn-page">Buy Now</button>
        `;
        cartContainer.appendChild(div);
    });
}