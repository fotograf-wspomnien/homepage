console.log("Cześć!");

let button = document.querySelector(".js-priceListbutton");
let priceList = document.querySelector(".js-tableContainer");

button.addEventListener("click", () => {
  if (priceList.classList.contains("hidden")) {
    priceList.classList.remove("hidden");
    button.innerText = "Ukryj cennik";
  } else {
    priceList.classList.add("hidden");
    button.innerText = "Pokaż cennik";
  }
});
