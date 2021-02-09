function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const qty = product.getElementsByTagName("input")[0].value;
  const price = product.querySelector(".price > span");
  const subtotal = product.querySelector(".subtotal > span");
  // console.log(qty, price.innerText, subtotal);
  subtotal.innerText = qty * price.innerText;
  return qty * price.innerText;
}

function calculateAll() {
  const shoppingList = document.getElementsByClassName("product");
  let totalShown = document.querySelector("#total-value > span");
  let a = 0;
  for (product of shoppingList) {
    a += updateSubtotal(product);
  }
  totalShown.innerText = a;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  const removeBtn = document.getElementsByClassName("btn-remove")
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
