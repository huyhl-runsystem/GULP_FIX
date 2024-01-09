document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".slider-text");
  const dotsContainer = document.querySelector(".dots-box");

  let currentSlide = 0;

  function showSlide(index) {
    sliders.forEach((slide) => {
      slide.style.display = "none";
    });

    sliders[index].style.display = "block";
  }

  function createDots() {
    sliders.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.addEventListener("click", () => {
        currentSlide = index;
        showSlide(currentSlide);
        updateDots();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= sliders.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
    updateDots();
  }

  // Hiển thị slide đầu tiên khi trang web được tải xong
  showSlide(currentSlide);
  createDots();
  updateDots();

  setInterval(nextSlide, 2000);

  document.getElementById("search-icon").addEventListener("click", function () {
    var searchInput = document.getElementById("search-input");
    searchInput.classList.toggle("show");
    if (searchInput.classList.contains("show")) {
      searchInput.focus();
    }
  });
});
