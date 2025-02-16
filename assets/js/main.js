// Инициализация Swiper для миниатюр
const galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    watchSlidesProgress: true,
  });
  
  // Инициализация Swiper для основного изображения
  const galleryTop = new Swiper(".gallery-top", {
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {
      swiper: galleryThumbs, // <-- Вынесено на верхний уровень
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
      768: {
        slidesPerView: 1,
      },
    },
  });
  
  

// Инициализация нового свайпера для секции "Versatile Compatibility"
const compatibilitySwiper = new Swiper(".compatibility-swiper", {
  spaceBetween: 10, // Расстояние между слайдами
  slidesPerView: 6, // Количество видимых слайдов
  loop: true, // Бесконечная прокрутка
  pagination: {
    el: ".custom-pagination", // Укажите класс пагинации
    clickable: true, // Возможность переключать слайды по клику на пагинацию
  },
  breakpoints: {
    // Адаптация для разных экранов
    320: {
      slidesPerView: 1.8,
      centeredSlides: true,
      centeredSlidesBounds: true,
      initialSlide: 3,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4.9,
    },
  },
});

// Инициализация Swiper для отзывов
const testimonialsSwiper = new Swiper(".testimonials-swiper", {
  slidesPerView: 3, // Всегда видно 3 слайда
  spaceBetween: 20, // Расстояние между слайдами
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".custom-paginations", // Укажите класс пагинации
    clickable: true, // Возможность переключать слайды по клику на пагинацию
  },
  breakpoints: {
    // Адаптация для мобильных устройств
    320: {
      slidesPerView: 1.2,
      centeredSlides: true,
      centeredSlidesBounds: true,
      initialSlide: 3,
      spaceBetween: 10, // Расстояние между слайдами
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});



document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion__item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion__header");

    header.addEventListener("click", () => {
      // Закрываем все открытые аккордеоны, кроме текущего
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
          const otherContent = otherItem.querySelector(".accordion__content");
          otherContent.style.maxHeight = null;
        }
      });

      // Открываем или закрываем текущий аккордеон
      item.classList.toggle("active");
      const content = item.querySelector(".accordion__content");
      if (item.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + 40 + "px"; // Добавляем +20px
      } else {
        content.style.maxHeight = null;
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");

  stars.forEach((star) => {
    star.addEventListener("mouseover", function () {
      const index = this.getAttribute("data-index");
      fillStars(index); // Заполняем звезды при наведении
    });

    star.addEventListener("mouseout", function () {
      const activeIndex = document.querySelector(".star.active")?.getAttribute("data-index") || 0;
      fillStars(activeIndex); // Восстанавливаем состояние после ухода мыши
    });

    star.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      document.querySelectorAll(".star").forEach((s) => s.classList.remove("active")); // Сбрасываем активные звезды
      fillStars(index); // Заполняем звезды до выбранной
      this.classList.add("active"); // Сохраняем состояние после клика
    });
  });

  function fillStars(index) {
    stars.forEach((star) => {
      if (star.getAttribute("data-index") <= index) {
        star.style.fill = "#FFC025"; // Заполняем звезду
      } else {
        star.style.fill = "none"; // Сбрасываем заполнение
      }
    });
  }
});

// Accordion Functionality
const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    // Close all other accordion items
    accordionButtons.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.classList.remove("active");
        otherButton.nextElementSibling.style.maxHeight = null;
      }
    });

    // Toggle current item
    button.classList.toggle("active");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});


