const postListEl = document.querySelector('.post-list');
const id = localStorage.getItem("id");

async function onSearchChange(event) {
    const id =event.target.value;
    renderPosts(id);
}

async function renderPosts(id) {
    const posts = await fetch (`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json();
    postListEl.innerHTML = postsData.map(post => postHTML(post)).join('')
}

function postHTML(post) {
   return `
    <div class="post">
        <hr>
        <div class="post_title">
            ${post.title}
        </div>
        <hr>
        <p class="post_body">
            ${post.body}
        </p>
    </div>
    `
}

renderPosts(id);