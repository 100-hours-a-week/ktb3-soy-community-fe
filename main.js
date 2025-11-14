import { initRouter, navigateTo } from "./router/router.js";
import { renderHeader } from "./utils/renderUtils.js";

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  initRouter(); 
});

