document.addEventListener("DOMContentLoaded", function () {
  const pricing = document.querySelector(".prizes-container");
  const buttonPrev = document.querySelector(".button-prev");
  const buttonNext = document.querySelector(".button-next");

  let current = 0;

  buttonPrev.addEventListener("click", function () {
    if (current > 0) {
      current--;
      updatePricing();
    }
  });

  buttonNext.addEventListener("click", function () {
    const total = pricing.querySelectorAll(".prize").length;
    if (current < total - 1) {
      current++;
      updatePricing();
    }
  });

  function updatePricing() {
    const items = pricing.querySelectorAll(".prize");

    items.forEach((item, index) => {
      if (index === current) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }

  // Hiển thị chỉ daily và weekly ban đầu khi độ rộng màn hình < 1280px
  if (window.matchMedia("(max-width: 1280px)").matches) {
    updatePricing();
  }

  // Thêm sự kiện lắng nghe thay đổi độ rộng màn hình
  window.addEventListener("resize", function () {
    if (window.matchMedia("(max-width: 1280px)").matches) {
      updatePricing();
    }
  });
});
