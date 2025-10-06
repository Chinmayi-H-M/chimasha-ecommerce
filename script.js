const headerHeight= document.querySelector("header").offsetHeight;
const categoriesHeight= document.querySelector(".categories").offsetHeight;
document.querySelector("main").style.marginTop =(headerHeight+categoriesHeight) +"px";

const products=[
    {
        image:"https://res.cloudinary.com/dkguge6rw/image/upload/v1758630054/Screenshot_2025-09-23_173813_t0r7zg.png",
        title:"Laptops and Gadgets",
        amount:34000,
        category:"electronics"
    },
    {
        image:"https://res.cloudinary.com/dkguge6rw/image/upload/v1758896477/Screenshot_2025-09-23_173916_xrart5.png",
        title:"Fashion",
        amount:34000,
        category:"fashion"
    },
    {
        image:"shoe.jpg",
        title:"Running shoes",
        amount:34000,
        category:"fashion"
    },
    {
        image:"glasses.jpg",
        title:"Sunglasses",
        amount:500,
        category:"accessorries"
    },
    {
        image:"headphones.jpeg",
        title:"Wireless Headphones",
        amount:3400,
        category:"electronics"
    },
    {
        image:"smartwatch.jpeg",
        title:"Smart Watch",
        amount:2999,
        category:"electronics"
    },
    {
        image:"leatherbag.jpeg",
        title:"Leather Handbag",
        amount:3499,
        category:"fashion"
    },
    {
        image:"necklace.jpeg",
        title:"Necklace",
        amount:1199,
        category:"accessories"
    }
]
function renderProducts(filterCategory="all"){
    const grid = document.querySelector(".product-grid");
    grid.innerHTML="";
    products.forEach(product => {
        if(filterCategory ==="all" || product.category=== filterCategory){
            let html=`<div class="card ${product.category}">
                    <img src=${product.image} alt=""
                    class="image"/>
                    <h1 class="name">${product.title}</h1>
                    <p class="amount">₹ ${product.amount}</p>
                    <div class="button-style">
                       <button class="buy-btn">Buy Now</button>
                       <button class="cart-button"
                       data-title="${product.title}"
                       data-amount="${product.amount}"
                       data-image="${product.image}">
                       Add to cart</button>
                    </div>
            </div>`
    grid.innerHTML+=html;
        }
});
}

document.querySelectorAll(".categories a").forEach (link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        const category=this.dataset.category;
        renderProducts(category);
    });
});
renderProducts("all");
let cart=[];
document.addEventListener("click", function(e){
    if(e.target.classList.contains("cart-button")){
        console.log(e.target.classList);
        const title=e.target.getAttribute("data-title");
        const amount=e.target.getAttribute("data-amount");
        const image=e.target.getAttribute("data-image");

        const product={title,amount,image};
        let cart=JSON.parse(localStorage.getItem("cart"))||[];
        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(`${title} added to cart!`);

}
});