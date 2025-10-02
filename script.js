const headerHeight= document.querySelector("header").offsetHeight;
const categoriesHeight= document.querySelector(".categories").offsetHeight;
document.querySelector("main").style.marginTop =(headerHeight+categoriesHeight) +"px";

//productsDescription("https://res.cloudinary.com/dkguge6rw/image/upload/v1758630054/Screenshot_2025-09-23_173813_t0r7zg.png", "Laptops and Gadgets", 34000)
//productsDescription("https://res.cloudinary.com/dkguge6rw/image/upload/v1758896477/Screenshot_2025-09-23_173916_xrart5.png", "Fashion", 3400)
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
                    <button class="buy-btn">Buy Now</button>
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