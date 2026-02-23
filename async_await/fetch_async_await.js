// This is normal async await don't add fetch.
async function getData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Something went wrong: " + response.status);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getData(
  "https://my-json-server.typicode.com/msbAtGit/bootcamp-products-api/products?category=Electronics",
);

// This is code is add fetch