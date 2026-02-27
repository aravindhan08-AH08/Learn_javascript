const container = document.getElementById("post-container");

async function fetchPosts() {
    try {
        const response = await fetch("https://my-json-server.typicode.com/msbAtGit/instafeed-api/posts");

        if (!response.ok) {
            throw new Error("Network response was not okay");
        }

        const posts = await response.json();

        posts.forEach(post => {
            
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");
            
            postDiv.innerHTML = `
                <div class="post-header">
                    <img src="${post.profilePic}" width="35"
                    <strong>${post.username}</strong>
                </div>

                <img class="post-image" src="${post.image}">
                
                <div class="post-content">
                    <div class="likes">${post.likes} likes</div>
                    <div>${post.description}</div>
                    <div>${post.comments} comments</div>
                    <div>${post.timestamp} </div>
                </div>
                `;

                container.appendChild(postDiv);
            });
    } catch (error) {
        console.log("Error fetching data:", error);
    }
};

fetchPosts();