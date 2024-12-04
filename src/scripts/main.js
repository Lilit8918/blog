import { validateLoginForm } from "./validation.js";
import { createElement, render } from "./utils.js";

let isLoggedIn = false;

const createLoginLayout = () => {
  const container = createElement("div", { class: "container-root" }, [
    createElement("header", { class: "header" }, [
      createElement("a", { href: "home.html" }, "Home"),
      createElement("a", { href: "registration.html" }, "Register"),
    ]),
    createElement("div", { class: "form-wrapper" }, [
      createElement("div", { class: "login-container" }, [
        createElement("form", {}, [
          createElement("input", { type: "text", placeholder: "Username", id: "username" }),
          createElement("input", { type: "password", placeholder: "Password", id: "password" }),
          createElement("button", { type: "submit" }, "Login"),
        ]),
      ]),
    ]),
  ]);

  container.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    try {
      validateLoginForm(username, password);
      isLoggedIn = true;
      window.location.href = "home.html";
    } catch (error) {
      if (error instanceof ValidationError) {
        alert(error.message);
      } else {
        console.error(error);
      }
    }
  });

  document.body.appendChild(container);
};

createLoginLayout();
