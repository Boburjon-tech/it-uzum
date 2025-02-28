const url = "https://dummyjson.com/products";

const productStore = document.querySelector(".products");

function publishProd({ products }) {
    let linear_div; 
    
    products.forEach((item, index) => {
        
        if (index % 3 === 0) {
            linear_div = document.createElement("div");
            linear_div.setAttribute("class", "linear_div");
        }

        const product = document.createElement("div");
        product.setAttribute("class", "product");

        const image = document.createElement("img");
        image.setAttribute("class", "image");
        image.src = item.thumbnail;

        const title = document.createElement("h2");
        title.setAttribute("class", "title");
        title.textContent = item.title;

        const price = document.createElement("p");
        price.setAttribute("class", "price");
        price.textContent = `Price : $${item.price}`;

        const sale_button = document.createElement("button");
        sale_button.textContent = "Cart";
        sale_button.setAttribute("class","sale_button");

        product.append(image, title, price,sale_button);

        linear_div.appendChild(product);

        if (index % 3 === 2 || index === products.length - 1) {
            productStore.appendChild(linear_div);
        }
    });
}

fetch(url)
    .then(res => res.json())
    .then(data => publishProd(data))
    .catch(error => console.log(error));
