document.addEventListener("DOMContentLoaded", function () {
  const timerYoga = document.querySelector(".timer-yoga");
  const btnPrev = document.querySelector(".btn-prev");
  const btnNext = document.querySelector(".btn-next");

  let currentIndex = 0;

  btnPrev.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateTimerYoga();
    }
  });

  btnNext.addEventListener("click", function () {
    const totalItems = timerYoga.querySelectorAll(".schedule-yoga").length;
    if (currentIndex < totalItems - 1) {
      currentIndex++;
      updateTimerYoga();
    }
  });

  function updateTimerYoga() {
    const items = timerYoga.querySelectorAll(".schedule-yoga");

    items.forEach((item, index) => {
      if (index === currentIndex) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }

  // Hiển thị chỉ daily và weekly ban đầu khi độ rộng màn hình < 1280px
  if (window.matchMedia("(max-width: 1280px)").matches) {
    updateTimerYoga();
  }

  // Thêm sự kiện lắng nghe thay đổi độ rộng màn hình
  window.addEventListener("resize", function () {
    if (window.matchMedia("(max-width: 1280px)").matches) {
      updateTimerYoga();
    }
  });
});
