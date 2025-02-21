import { getAllBeverageNames } from "../models/beverages.js";

class OrderView {
  constructor() {}

  render() {
    const appContent = document.getElementById("app-content");

    const beverages = getAllBeverageNames();

    appContent.innerHTML = `
      <!--Menus-->
      <div class="container">
        <div class="menu-container">
          <h3>Products</h3>
          <div class="menus">
            ${beverages
              .map((name) => `<div class="menu-item">${name}</div>`)
              .join("")}
          </div>
        </div>

        <div class="order-container">
          <div class="customer-container">
            <h3>Customer Information</h3>
            <label for="customer-name">Customer Name:</label>
            <input type="text" id="customer-name" name="customer-name">
            <br><br>
            <label for="table-select">Table Number:</label>
            <select name="table" id="table-select">
              <option value="">--Choose a table--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <h3>Order Details</h3>  
          <ul class="order-list" id="order-list">
            <li>
              <span>Pizza</span>
              <span class="order-btn">
                <button id="decrease-btn" type="button">-</button>
                <span>1</span>
                <button id="increase-btn" type="button">+</button>
              </span>
            </li>
            <li>
              <span>Burger</span>
              <span class="order-btn">
                <button id="decrease-btn" type="button">-</button>
                <span>1</span>
                <button id="increase-btn" type="button">+</button>
              </span>
            </li>
          </ul>
          <hr>
          <h3>Order Summary</h3>
          <div class="order-summary">
            <h4><span>Subtotal:</span> <span>$69.90</span></h4>
            <h4><span>Tax(10%):</span> <span>$6.99</span></h4>
            <hr>
            <h4><span>Total:</span> <span>$76.89</span></h4>
          </div>
          <button id="confirm-btn" type="button">Confirm</button>
          <button id="clear-btn" type="button">Clear</button>
        </div>
      </div> 
    `;

    this.setupEventListeners();
  }

  setupEventListeners() {}
}

export default OrderView;
