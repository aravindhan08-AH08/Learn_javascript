fetch(
  "https://my-json-server.typicode.com/msbAtGit/bootcamp-products-api/products",
)
  .then((response) => response.json())
  .then((data) => {
    let container = document.getElementById("product-container");

    for (let i = 0; i < data.length; i++) {
      let card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
            <img src="${data[i].image}" alt="Product-Image">
            <div class="title">${data[i].title}</div>
            <div class="category">${data[i].category}</div>
            <div class="price">₹${data[i].price}</div>
            <div class="rating">⭐ ${data[i].rating.rate} (${data[i].rating.count} reviews)</div>
            <div class="stock">In Stock: ${data[i].stock}</div>
            <button class="btn"> Add to Cart</button>
        `;

      container.appendChild(card);
    }
  })
  .catch((error) => console.error("Error:", error));