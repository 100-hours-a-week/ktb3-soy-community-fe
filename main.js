import { initRouter } from "./router/router.js";
import { renderHeader } from "../handle/RenderHeader.js";

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  initRouter(); 
});

