import { getAllBeverageNames } from "../models/beverages.js";

class ProductView {
  constructor() {}

  render() {
    const appContent = document.getElementById("app-content");

    const beverages = getAllBeverageNames();

    appContent.innerHTML = `
      <!--Menus-->
      <div class="container">
        <img src="public/img/pho.webp" alt="pho.webp" />
        <div class="menu-container">
          <h3>Menu</h3>
          <div class="menus">
            ${beverages
              .map((name) => `<div class="menu-item">${name}</div>`)
              .join("")}
          </div>
        </div>
      </div> 
    `;

    this.setupEventListeners();
  }

  setupEventListeners() {}
}

export default ProductView;
