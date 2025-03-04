

const url = "https://dummyjson.com/product";



const productse = document.querySelector(".products");
const templates = document.querySelector("#template");

function publishProd({ products }) {
    let linear_div; 
    products.forEach((product,index) => {
            if (index % 3 === 0) {
                linear_div = document.createElement("div");
                linear_div.setAttribute("class","linear_div");
            }

            let clone = templates.content.cloneNode(true);
            clone.querySelector(".product__image").src = product.thumbnail
            clone.querySelector(".product__title").textContent = product.title;
            clone.querySelector(".product__price").textContent = `$${product.price}`;
            clone.querySelector(".product__description").textContent = product.description;
            linear_div.appendChild(clone);
            productse.appendChild(linear_div);
    });
   
}

fetch(url)
    .then(res => res.json())
    .then(data => publishProd(data))
    .catch(error => console.log(error));
