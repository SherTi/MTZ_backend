window.addEventListener("DOMContentLoaded", () => {
  if (new Swiper("partner_swiper")) {
    const partner_swiper = new Swiper(".partner_swiper", {
      direction: "horizontal",
      loop: true,
      freeMode: true,
      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        375: {
          slidesPerView: 2,
        },
        425: {
          slidesPerView: 2,
        },
        525: {
          slidesPerView: 3,
        },
        990: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 4,
        },
        1020: {
          slidesPerView: 4,
        },
        1080: {
          slidesPerView: 5,
        },
        1630: {
          slidesPerView: 5,
        },
        1920: {
          slidesPerView: 6,
          speed: 8000,
        },
        2556: {
          slidesPerView: 7,
        },
      },
    });
  }

  const certificate_slider = new Swiper(".certificate-slider", {
    direction: "horizontal",
    loop: true,
    effect: "slide",
    width: 1200,
    navigation: {
      nextEl: ".right-btn-n",
      prevEl: ".left-btn-n",
    },
    pagination: {
      clickable: true,
      enabled: true,
      type: "bullets",
      bulletActiveClass: "slider-dots-active",
      el: "#dots-container",
      bulletClass: "s-dot",
    },
    breakpoints: {
      1920: {
        slidesPerView: 5,
        width: 1920,
        loop: true,
      },
      1080: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        width: 1200,
        loop: true,
      },
      425: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        width: 750,
        loop: true,
      },
      375: {
        slidesPerView: 5,
        slidesPerGroup: 1,
        width: 750,
        loop: true,
      },
      320: {
        slidesPerView: 5,
        slidesPerGroup: 1,
        width: 750,
        loop: true,
      },
    },
  });

  const nav_bnt = document.querySelector(".catalog-btn");
  const menu = document.querySelector(".container-nav");

  if (nav_bnt) {
    nav_bnt.addEventListener("click", (event) => {
      event.preventDefault();
      menu.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }
  if (menu) {
    menu.addEventListener("click", (event) => {
      if (event.target.classList.contains("nav-left-panel")) {
        menu.classList.remove("active");
        document.body.style.overflow = "visible";
      }
    });
  }

  const strokes = document.querySelectorAll(".stroke-nav");
  const catalog_btns = document.querySelectorAll(".nav-btn_item");
  const icons = document.querySelectorAll(".icon-nav_item");
  const texts = document.querySelectorAll(".text-nav");

  strokes.forEach((stroke) => {
    stroke.addEventListener("click", (event) => {
      stroke = !stroke;
      if (stroke) {
        navCatalog.classList.add("active_stroke");
      } else if (!stroke) {
        navCatalog.classList.remove("active_stroke");
      }
    });
  });

  let btn_menu = document.querySelector(".btn_nav_panel");
  let menu_body = document.querySelector(".background_r-nav-menu");
  let menu_active_btn = document.querySelector(".catalog-btn");
  if (btn_menu) {
    menu_active_btn.addEventListener("click", () => {
      menu_body.classList.add("active_menu");
      document.body.style.overflow = "hidden";
    });
    btn_menu.addEventListener("click", (event) => {
      event.preventDefault();
      menu_body.classList.toggle("active_menu");
      document.body.style.overflow = "hidden";
    });
  }
  if (menu_body) {
    menu_body.addEventListener("click", (event) => {
      if (event.target.classList.contains("background_r-nav-menu")) {
        document.body.style.overflow = "visible";
        menu_body.classList.remove("active_menu");
      }
    });
  }

  document.querySelectorAll(".r-nav-title-btn").forEach((el) => {
    el.addEventListener("click", () => {
      let icons_btn = el.children[1];
      let icon = icons_btn.children[0];
      let content = el.nextElementSibling;
      if (content.style.maxHeight) {
        document
          .querySelectorAll(".r-n-block_link")
          .forEach((el) => (el.style.maxHeight = null));
        icon.style.rotate = "0deg";
      } else {
        document
          .querySelectorAll(".r-n-block_link")
          .forEach((el) => (el.style.maxHeight = null));
        content.style.maxHeight = content.scrollHeight + "px";
        icon.style.rotate = "180deg";
      }
    });
  });

  let swipe_block = document.querySelectorAll(".r-nav-menu_tablet");
  if (swipe_block) {
    document.querySelectorAll(".r-nav-title-btn").forEach((el) => {
      el.addEventListener("click", (event) => {
        document.querySelectorAll(".r-nav-icon").forEach((el) => {
          swipe_block.forEach((el) => {
            el.classList.add("swipe_block");
          });
        });
      });
    });
  }

  // let icon_btnS = document.querySelectorAll(".r-nav-icon");
  // let btn_change = document.querySelector(".r-nav-title-btn");
  // function changeIconR() {
  //   icon_btnS.forEach((el) => {
  //     el.innerHTML =
  //       '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>';
  //   });
  // }
  // function changeIconL() {
  //   icon_btnS.forEach((el) => {
  //     el.innerHTML =
  //       '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>';
  //   });
  // }
  // if (btn_change) {
  //   btn_change.addEventListener("click", (event) => {
  //     event.preventDefault();
  //     changeIconR();
  //   });
  // } else if (changeIconR()) {
  //   btn_change.addEventListener("click", (event) => {
  //     event.preventDefault();
  //     changeIconL();
  //   });
  // }

  let order_btn = document.querySelector(".p-btn-more-info");
  let order_box = document.querySelector(".modal_container");
  if (order_btn) {
    order_btn.addEventListener("click", (event) => {
      event.preventDefault();
      order_box.classList.add("modal_view");
    });
  }
  if (order_box) {
    order_box.addEventListener("click", (event) => {
      if (event.target.classList.contains("modal_container")) {
        order_box.classList.remove("modal_view");
      }
    });
  }

  let search = document.querySelector(".search-btn");
  let search_block = document.querySelector(".search-input-block");
  if (search) {
    search.addEventListener("click", (event) => {
      search_block.classList.toggle("width_100");
    });
  }

  // info_active_block  info_block
  let btn_info_block = document.querySelector(".info_block");
  let soc_block = document.querySelector(".info_soc");
  let btn_img = document.querySelector(".info_img");
  if (btn_info_block) {
    btn_info_block.addEventListener("click", () => {
      soc_block.classList.toggle("info_active_block");
      if (soc_block.classList.contains("info_active_block")) {
        btn_img.setAttribute("src", "/images/cansel.png");
      } else {
        btn_img.setAttribute("src", "/images/Union.png");
      }
    });
  }

  const bg = document.querySelector(".background");

  if (bg) {
    bg.style.height = `${Math.round(bg.clientWidth / (2882 / 2064))}px`;
    window.addEventListener("resize", () => {
      if (bg.clientWidth > 972) {
        bg.style.height = `${Math.round(bg.clientWidth / (2882 / 2064))}px`;
      } else {
        bg.style.height = "";
      }
    });
  }

  const nav_catalogs = document.querySelectorAll(".nav_catalog_bnt");
  nav_catalogs.forEach((el) => {
    el.addEventListener("click", () => {
      let nav_catalog = el.nextElementSibling;
      if (nav_catalog.style.maxHeight) {
        document
          .querySelectorAll(".tractors")
          .forEach((el) => (el.style.maxHeight = null));
      } else {
        document
          .querySelectorAll(".tractors")
          .forEach((el) => (el.style.maxHeight = null));
        nav_catalog.style.maxHeight = nav_catalog.scrollHeight + "px";
      }
    });
  });
});
