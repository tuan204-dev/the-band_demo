//Đóng mở modal
const buyBtns = document.querySelectorAll(".js-buy-tickets");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const payBtn = document.querySelector(".js-modal-pay-btn");
const modalContainer = document.querySelector(".js-modal-container");

const toggleModal = () => {
  modal.classList.toggle("open");
};

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", toggleModal);
}

modalClose.addEventListener("click", toggleModal);
payBtn.addEventListener("click", toggleModal);
modal.addEventListener("click", toggleModal);
modalContainer.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Đóng mở mobile menu
var header = document.getElementById("header");
var menuBarBtn = document.getElementById("menu-bar-btn");
var headerHeight = header.clientHeight;

menuBarBtn.onclick = function () {
  var isClose = header.clientHeight === headerHeight;
  if (isClose) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

// Tự động đóng mở mobile menu
var menuItems = document.querySelectorAll('.nav-bar > li > a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];
  menuItem.onclick = function (event) {
    var isParentMenu =
      this.nextElementSibling &&
      menuItem.nextElementSibling.classList.contains("sub-nav");
    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}


const submitContactBtn = document.querySelector('.form-submit-btn');
console.log(submitContactBtn);