// Import views
import OrderView from "./views/order.js";
import ProductView from "./views/product.js";

class App {
  constructor() {
    this.orderView = new OrderView();
    this.productView = new ProductView();

    this.init();
  }

  init() {
    console.log("App initialized");

    // Set up routing or event listeners
    this.setupEventListeners();

    // Load initial view
    this.loadView("order");
  }

  setupEventListeners() {
    document.addEventListener("DOMContentLoaded", () => {
      document
        .getElementById("dashboardBtn")
        .addEventListener("click", () => this.loadView("order"));
      document
        .getElementById("productBtn")
        .addEventListener("click", () => this.loadView("product"));
      document
        .getElementById("userBtn")
        .addEventListener("click", () => this.loadView("user"));
    });
  }

  loadView(view) {
    switch (view) {
      case "order":
        this.orderView.render();
        break;
      case "product":
        this.productView.render();
        break;
      default:
        console.error("View not found:", view);
    }
  }
}

// Start application
const app = new App();

export default app;
