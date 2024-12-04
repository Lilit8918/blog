import Storage from "./storage.js";
import { createElement, render } from "./utils.js";
import { bloggers, posts } from "./data.js";

const createHomeLayout = () => {
  
  const newPosts = Storage.get("newPosts") || [];

 
  const container = createElement("div", { class: "container-root" }, [
    // Գլխամաս (header)
    createElement("header", { class: "header" }, [
      createElement("a", { href: "index.html" }, "Log In"),
      createElement("a", { href: "registration.html" }, "Register"),
      createElement("a", { href: "createPost.html" }, "Create New Post"),
    ]),

    createElement("main", { class: "main-section" }, [
      
      createElement("nav", { class: "sidebar" }, [
        createElement("h2", {}, "Bloggers"),
        ...bloggers.map((blogger) =>
          createElement("div", { class: "blogger-card" }, [
            createElement("img", {
              src: blogger.avatar,
              alt: `${blogger.firstName} ${blogger.lastName}`,
              class: "avatar",
            }),
            createElement("h3", { class: "blogger-name" }, `${blogger.firstName} ${blogger.lastName}`),
          ])
        ),
      ]),

      createElement("section", { class: "section" }, [
        createElement("h2", {}, "Posts"),
        ...[...posts, ...newPosts].map((post) =>
          createElement("div", { class: "post-card" }, [
            createElement("img", {
              src: post.img,
              alt: post.title,
              class: "post-image",
            }),
            createElement("h3", { class: "post-title" }, post.title),
            createElement("p", { class: "post-story" }, post.story),
            createElement("p", { class: "author-name" }, `By ${post.authorName}`),
          ])
        ),
      ]),
    ]),
  ]);

  render(container, document.body);
};


createHomeLayout();
