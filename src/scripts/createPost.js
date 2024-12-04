import { validatePost } from "./validation.js";
import Storage from "./storage.js";

document.getElementById("createPostForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const post = {
    id: Date.now(),
    title: document.getElementById("title").value,
    story: document.getElementById("story").value,
    authorName: document.getElementById("authorName").value,
    img: document.getElementById("img").value,
  };

  try {
    validatePost(post);
    const posts = Storage.get("newPosts") || [];
    posts.push(post);
    Storage.set("newPosts", posts);
    window.location.href = "home.html";
  } catch (error) {
    if (error instanceof ValidationError) {
      alert(error.message);
    } else {
      console.error(error);
    }
  }
});
