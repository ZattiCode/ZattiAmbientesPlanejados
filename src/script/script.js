$(document).ready(function () {
  // 📌 Envio do formulário de contato
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();
    alert("Mensagem enviada! Retornaremos em breve.");
    $(this).trigger("reset");
  });

  // 📌 Rolagem suave ao clicar nos links do menu
  $("nav ul li a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      let target = $(this.hash);
      $("html, body").animate(
        { scrollTop: target.offset().top - 70 },
        500, // Tempo de rolagem aumentado para 500ms
        "swing" // Suaviza a rolagem
      );
    }
  });

  // 📌 Botão "Conheça nossos projetos"
  $("#scrollToProjects").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      { scrollTop: $("#produtos").offset().top - 70 },
      300
    );
  });

  // 📌 Mostrar ou esconder header ao rolar
  let lastScrollTop = 0;
  $(window).on("scroll", function () {
    let scrollTop = $(this).scrollTop();
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      $("header").css("transform", "translateY(-100%)");
    } else {
      $("header").css("transform", "translateY(0)");
    }
    lastScrollTop = scrollTop;
  });

  // 📌 Efeito de entrada suave ao rolar a página
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

   // 📌 Mostrar botão "Voltar ao topo"
   $(window).on("scroll", function () {
    if ($(window).scrollTop() > 300) {
      $("#backToTop").addClass("show");
    } else {
      $("#backToTop").removeClass("show");
    }
  });
  

  // 📌 Menu responsivo
  $(".menu-toggle").on("click", function () {
    $("nav ul").toggleClass("active");
  });
  $("nav ul li a").on("click", function () {
    $("nav ul").removeClass("active");
  });

  // 📌 Função para voltar ao topo da página
  $("#backToTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 10);
  });
});

$(document).ready(function () {
  // Menu responsivo
  $(".menu-toggle").on("click", function () {
    $("nav ul").toggleClass("active");
  });

  // Fecha o menu ao clicar em um link
  $("nav ul li a").on("click", function () {
    $("nav ul").removeClass("active");
    $(".menu-toggle").removeClass("active"); // Remove a classe ativa do botão
  });
});

// 📌 Inicializa o Swiper
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    }
  });
});