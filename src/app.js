// Import views
import OrderView from "./views/order.js";
import ProductView from "./views/product.js";
import StorageView from "./views/storage.js";

class App {
  constructor() {
    this.orderView = new OrderView();
    this.productView = new ProductView();
    this.storageView = new StorageView();

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
      //const userRole = localStorage.getItem("userRole");

      let userRole = "owner"; //just for testing
      if (userRole === "owner") {
        document.getElementById("storageBtn").style.display = "inline-block"; // Show storage tab for owners
      } else {
        document.getElementById("storageBtn").style.display = "none"; // Hide for waitresses
      }

      document
        .getElementById("dashboardBtn")
        .addEventListener("click", () => this.loadView("order"));
      // document
      //   .getElementById("productBtn")
      //   .addEventListener("click", () => this.loadView("product"));
/*      document
        .getElementById("userBtn")
        .addEventListener("click", () => this.loadView("user"));*/
      document
          .getElementById("storageBtn")
          .addEventListener("click", () => this.loadView("owner"));
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
      case "owner":
        this.storageView.render();
        break;
      default:
        console.error("View not found:", view);
    }
  }
}

// Start application
const app = new App();

export default app;
