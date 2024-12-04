export const createElement = (tag, attributes = {}, children = []) => {
    const element = document.createElement(tag);
    Object.keys(attributes).forEach((key) => element.setAttribute(key, attributes[key]));
  
    if (typeof children === "string") {
      element.textContent = children;
    } else if (Array.isArray(children)) {
      children.forEach((child) => {
        if (typeof child === "string") {
          element.appendChild(document.createTextNode(child));
        } else if (child instanceof Element) {
          element.appendChild(child);
        }
      });
    }
    return element;
  };
  
  export const render = (element, target) => {
    if (!(element instanceof Element) || !(target instanceof Element)) {
      console.error("Invalid arguments: both element and target must be DOM nodes.");
      return;
    }
    target.appendChild(element);
  };
  