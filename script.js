$(document).ready(function () {
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
  });
});

$(document).ready(function () {
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();
    alert("Mensagem enviada! Retornaremos em breve.");
    $(this).trigger("reset");
  });

  $(".btn-primary").on("click", function () {
    $("html, body").animate({ scrollTop: $(".content-section").offset().top }, 800);
  });
});

$(document).ready(function () {
  let lastScrollTop = 0;
  const header = $("header");

  $(window).on("scroll", function () {
    let scrollTop = $(this).scrollTop();

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Rolando para baixo -> Esconde o header
      header.css("transform", "translateY(-100%)");
    } else {
      // Rolando para cima -> Mostra o header
      header.css("transform", "translateY(0)");
    }

    lastScrollTop = scrollTop;
  });
});

$(document).ready(function () {
  $("nav ul li a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      let target = $(this.hash);
      
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 70, // Ajuste para não ficar atrás do header
        },
        800
      );
    }
  });
});

$(document).ready(function () {
  let currentIndex = 0;
  const images = $(".carousel-images img");
  const totalImages = images.length;
  let interval;
  const slideDuration = 1000; // Tempo de troca entre imagens (5 segundos)

  function updateCarousel() {
    $(".carousel-images").css("transition", "transform 0.8s ease-in-out");
    const offset = -currentIndex * 100;
    $(".carousel-images").css("transform", `translateX(${offset}%)`);
  }

  function nextImage() {
    if (currentIndex < totalImages - 1) {
      currentIndex++;
      updateCarousel();
    } else {
      // Se estiver na última imagem, volta para o início suavemente
      setTimeout(() => {
        $(".carousel-images").css("transition", "none");
        $(".carousel-images").css("transform", "translateX(0)");
        currentIndex = 0;
      }, 800);
    }
  }

  function prevImage() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    } else {
      // Se estiver na primeira imagem, vai para a última sem pular
      setTimeout(() => {
        $(".carousel-images").css("transition", "none");
        currentIndex = totalImages - 1;
        $(".carousel-images").css("transform", `translateX(-${currentIndex * 100}%)`);
      }, 800);
    }
  }

  function startAutoSlide() {
    interval = setInterval(nextImage, slideDuration);
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

  $(".next").on("click", function () {
    stopAutoSlide();
    nextImage();
    startAutoSlide();
  });

  $(".prev").on("click", function () {
    stopAutoSlide();
    prevImage();
    startAutoSlide();
  });

  // Inicia o carrossel automaticamente
  startAutoSlide();
});


$(document).ready(function () {
  function revealOnScroll() {
    $(".hidden").each(function () {
      let elementTop = $(this).offset().top;
      let windowBottom = $(window).scrollTop() + $(window).height();
      
      if (elementTop < windowBottom - 50) {
        $(this).addClass("visible");
      }
    });
  }

  $(window).on("scroll", revealOnScroll);
  revealOnScroll();
});

$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 300) {
      $("#backToTop").fadeIn();
    } else {
      $("#backToTop").fadeOut();
    }
  });

  $("#backToTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });
});
