window.addEventListener("DOMContentLoaded", () => {
  if (new Swiper("partner_swiper")) {
    const partner_swiper = new Swiper(".partner_swiper", {
      direction: 'horizontal',
      freeMode: true,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
      loop: true,
      rewind: true,
      margin: 15,
      speed: 5000,
      breakpoints: {
        2556: {
          slidesPerView: 9,
        },
        1920: {
          slidesPerView: 7,
        },
        1630: {
          slidesPerView: 6,
        },
        1185:{
          slidesPerView: 5,
        },
        1120: {
          slidesPerView: 5,
        },
        1080: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 4.5,
        },
        1020: {
          slidesPerView: 4,
        },
        990: {
          slidesPerView: 5,
        },
        825: {
          slidesPerView: 5,
        },
        768: {
          slidesPerView: 4,
        },
        650:{
          slidesPerView: 4,
        },
        620:{
          slidesPerView: 4,
        },
        525: {
          slidesPerView: 3,
        },
        425: {
          slidesPerView: 2.5,
        },
        375: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1.8,
        },
      },
    });
  }

  const certificate_slider = new Swiper(".certificate-slider", {
    direction: "horizontal",
    effect: "slide",
    loop:true,
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
      slidesPerGroup: 1,
    },
    breakpoints: {
      1170:{
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1080: {
        slidesPerView: 4,
      },
      1024: {
        spaceBetween: 12,
      },
      768:{
        slidesPerView: 3.8,
        spaceBetween: 40,
      },
      700:{
        slidesPerView: 3.5,
      },
      690: {
        slidesPerView: 3,
        spaceBetween:17,
      },
      560:{
        slidesPerView:2.8,
      },
      425:{
        slidesPerView: 1.7,
      },
      375: {
        slidesPerView: 1.7,
      },
      320: {
        slidesPerView: 1.6,
      },
    },
  });

  const nav_bnt = document.querySelector(".catalog-btn");
  const menu = document.querySelector(".container-nav");
  const nav_bnt_2 = document.querySelector(".under_categories")
  const nav_btn_part = document.querySelector(".under_categories_2")
  const menu_part = document.querySelector(".container-nav_part")
  if (nav_bnt) {
    nav_bnt.addEventListener("click", (event) => {
      event.preventDefault();
      menu.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }
  if (nav_bnt_2) {
    nav_bnt_2.addEventListener("click" , (event) => {
      event.preventDefault();
      menu.classList.add("active");
      document.body.style.overflow = "hidden";
    })
  }
  if (nav_btn_part) {
    nav_btn_part.addEventListener("click" , (event) => {
      event.preventDefault();
      menu_part.classList.add("active")
      document.body.style.overflow = "hidden";
    })
  }
  if (menu) {
    menu.addEventListener("click", (event) => {
      if (event.target.classList.contains("nav-left-panel")) {
        menu.classList.remove("active");
        document.body.style.overflow = "visible";
      }
    });
  }
  if(menu_part) {
    menu_part.addEventListener("click" , (event) => {
      if( event.target.classList.contains("nav-left-panel")) {
        menu_part.classList.remove("active");
        document.body.style.overflow = "visible"
      }
    })
  }


  let btn_menu = document.querySelector(".btn_nav_panel");
  let menu_body = document.querySelector(".background_r-nav-menu");
  let menu_active_btn = document.querySelector(".catalog-btn");
  if (btn_menu) {
    if (menu_active_btn){
      menu_active_btn.addEventListener("click", () => {
        menu_body.classList.add("active_menu");
        document.body.style.overflow = "hidden";
      });
    }
    btn_menu.addEventListener("click", (event) => {
      event.preventDefault();
      menu_body.classList.toggle("active_menu");
      if (menu_body.classList.contains("active_menu")){
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    });
  }
  if (menu_body) {
    menu_body.addEventListener("click", (event) => {
      if (event.target.classList.contains("background_r-nav-menu")) {
        menu_body.classList.remove("active_menu");
        document.body.style.overflow = "visible";
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
        console.log('worked')
      } else if(bg.clientWidth < 972)  {
        bg.style.height = "";
        console.log('not worked')
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
  const ser_big = document.querySelectorAll(".cer-block");
  const ser_big_banner = document.querySelectorAll(".ser_container");
  if (ser_big) {
    ser_big.forEach((ser) => {
      ser.addEventListener('click' , (event) => {
        ser_big_banner.forEach((el) => {
          if (ser.id === el.id) {
             el.style.display = "inline-flex"
              document.body.style.overflow = "hidden"
              el.addEventListener('click' , (event) => {
                el.style.display = "none"
                document.body.style.overflow = "visible"
              })
          } else {

          }
        })
        event.preventDefault()
      })
    })
  }
  const general = document.querySelector('[data-type="general"]');
  const characters = document.querySelector('[data-type="characters"]');
  const equipment = document.querySelector('[data-type="equipment"]');
  const certs = document.querySelector('[data-type="certs"]');

  const generalContainer = document.querySelector('[data-container-type="general"]');
  const charactersContainer = document.querySelector('[data-container-type="characters"]');
  const equipmentContainer = document.querySelector('[data-container-type="equipment"]');
  const certsContainer = document.querySelector('[data-container-type="certs"]');
  let content_type = 'general';
  general.classList.add('active_button');

  function removeClass() {
    if (generalContainer) {
      generalContainer.classList.remove('hidden_page_container');
    }
    if (charactersContainer) {
      charactersContainer.classList.remove('hidden_page_container');
    }
    if (equipmentContainer) {
      equipmentContainer.classList.remove('hidden_page_container');
    }
    if (certsContainer) {
      certsContainer.classList.remove('hidden_page_container');
    }
    if (general) {
      general.classList.remove('active_button');
    }
    if (characters) {
      characters.classList.remove('active_button');
    }
    if (equipment) {
      equipment.classList.remove('active_button');
    }
    if (certs) {
      certs.classList.remove('active_button');
    }
  }
  function changeContentType(type = 'general') {
    content_type = type;
    removeClass();
    switch(content_type) {
      case "general":
        if (general) {
          general.classList.add('active_button');
        }
        break;
      case "characters":
        if (generalContainer) {
          generalContainer.classList.add('hidden_page_container');
        }
        if (equipmentContainer) {
          equipmentContainer.classList.add('hidden_page_container');
        }
        if (certsContainer) {
          certsContainer.classList.add('hidden_page_container');
        }
        if (characters) {
          characters.classList.add('active_button');
        }
        break;
      case "equipment":
        if (generalContainer) {
          generalContainer.classList.add('hidden_page_container');
        }
        if (charactersContainer) {
          charactersContainer.classList.add('hidden_page_container');
        }
        if (certsContainer) {
          certsContainer.classList.add('hidden_page_container');
        }
        if (equipment) {
          equipment.classList.add('active_button');
        }
        break;
      case "certs":
        if (generalContainer) {
          generalContainer.classList.add('hidden_page_container');
        }
        if (charactersContainer) {
          charactersContainer.classList.add('hidden_page_container');
        }
        if (equipmentContainer) {
          equipmentContainer.classList.add('hidden_page_container');
        }
        if (certs) {
          certs.classList.add('active_button');
        }
        break;
    }
  }
  if (general) {
    general.addEventListener("click", () => {
      changeContentType('general');
    });
  }
  if (characters) {
    characters.addEventListener("click", (e) => {
      changeContentType('characters');
    });
  }
  if (equipment) {
    equipment.addEventListener("click", (e) => {
      changeContentType('equipment');
    });
  }
  if (certs) {
    certs.addEventListener("click", (e) => {
      changeContentType('certs');
    });
  }

});
