import ValidationError from "./errors.js";

export const validateLoginForm = (username, password) => {
  if (!username || !password) {
    throw new ValidationError("Username և Password դաշտերը պարտադիր են։");
  }
};

export const validatePost = (post) => {
  const { title, story, authorName, img } = post;
  if (!title || !story || !authorName || !img) {
    throw new ValidationError("Բոլոր դաշտերը պարտադիր են։");
  }
};

