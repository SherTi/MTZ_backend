window.addEventListener('DOMContentLoaded', (event) => {
    const partner_swiper = new Swiper(document.querySelector('.partner_swiper'),{
        direction: 'horizontal',
        effect: 'slide',
        margin: 30,
        autoplay: {
            delay:600,
        },
        breakpoints: {
            1080:{
                slidesPerView: 5,
                slidesPerGroup: 1,
                width:1200,
                loop: true,
            },
            425:{
                slidesPerView:5,
                slidesPerGroup:1,
                width:750,
                loop: true,
            },
            375:{
                slidesPerView:5,
                slidesPerGroup:1,
                width:750,
                loop: true,
            },
            320:{
                slidesPerView:5,
                slidesPerGroup:1,
                width:750,
                loop: true,
            }
        }

    });
    const certificate_slider = new Swiper('.certificate-slider' , {
        direction: 'horizontal',
        loop: true,
        effect: 'slide',
        width: 1200,
        navigation: {
            nextEl: '.right-btn-n',
            prevEl: '.left-btn-n',
        },
        pagination: {
            clickable: true,
            enabled: true,
            type: "bullets",
            bulletActiveClass: "slider-dots-active",
            el: "#dots-container",
            bulletClass: "s-dot",
        },
        breakpoints:{
            1080:{
                slidesPerView: 4,
                slidesPerGroup: 1,
                width:1200,
                loop: true,
            },
            425:{
                slidesPerView:4,
                slidesPerGroup:1,
                width:750,
                loop: true,
            },
            375:{
                slidesPerView:5,
                slidesPerGroup:1,
                width:750,
                loop: true,
            },
            320:{
                slidesPerView:5,
                slidesPerGroup:1,
                width:750,
                loop: true,
            }
        }
    });
    const nav = document.querySelector('.catalog-btn')
    const menu = document.querySelector('.container-nav')
    if (nav) {
        nav.addEventListener('click' , (event) =>{
            event.preventDefault()
            menu.classList.add('active')
            document.body.style.overflow = 'hidden'
        })
    }
    if(menu){
        menu.addEventListener('click' , (event) => {
            if (event.target.classList.contains('nav-left-panel')){
                menu.classList.remove('active')
                document.body.style.overflow = 'visible'
            }
        })
    }
    let stroke = document.querySelectorAll('.stroke-nav')
    let navCatalog = document.querySelector('.nav-block2')
    let text_active = document.querySelectorAll('.text-nav')
    let icon_active = document.querySelectorAll('.icon-nav_item')
    for (let i = 0 ; i<stroke.length ; i++){
        stroke[i].addEventListener('click' , () =>{
            navCatalog.classList.toggle('active_stroke')
            text_active[i].classList.toggle('active_string')
            icon_active[i].classList.toggle('active_icon')
        })
    }


    let btn_menu = document.querySelector('.btn_nav_panel')
    let menu_body = document.querySelector('.background_r-nav-menu')
    if(btn_menu){
        btn_menu.addEventListener('click' , (event) => {
            event.preventDefault()
            menu_body.classList.toggle('active_menu')
        })
    }
    if(menu_body){
        menu_body.addEventListener('click', (event) => {
            if(event.target.classList.contains('background_r-nav-menu')){
                menu_body.classList.remove('active_menu')
            }
        })
    }

    document.querySelectorAll('.r-nav-title-btn').forEach((el) => {
        el.addEventListener('click', () => {
            let content = el.nextElementSibling;
            if (content.style.maxHeight) {
                document.querySelectorAll('.r-n-block_link').forEach((el) => el.style.maxHeight = null )
            }else {
                document.querySelectorAll('.r-n-block_link').forEach((el) => el.style.maxHeight = null)
                content.style.maxHeight = content.scrollHeight + 'px'
            }
        })
    })
    let swipe_block = document.querySelectorAll('.r-nav-menu_tablet');
    if(swipe_block){
        document.querySelectorAll('.r-nav-title-btn').forEach((el) => {
            el.addEventListener('click' ,(event) =>{
                document.querySelectorAll('.r-nav-icon').forEach((el) =>{
                    swipe_block.forEach((el) =>{
                        el.classList.add('swipe_block')
                        if (swipe_block.classList.contains('swipe_block')){
                            swipe_block.classList.remove('swipe_block')
                        }
                    });
                })
            })
        });
    }
    let icon_change = document.querySelector('.r-nav-icon')
    let btn_change = document.querySelector('.r-nav-title-btn')
    if (btn_change){
        btn_change.addEventListener('click' , () => {
            icon_change.classList.toggle('b-icon')
        })
    }
    let order_btn = document.querySelector('.p-btn-more-info')
    let order_box = document.querySelector('.modal_container')
    if(order_btn){
        order_btn.addEventListener('click' , (event) => {
            event.preventDefault()
            order_box.classList.add('modal_view')
        })
    }
    if(order_box){
        order_box.addEventListener('click' , (event) => {
            if(event.target.classList.contains('modal_container')){
                order_box.classList.remove('modal_view')
            }
        })
    }
    let search = document.querySelector('.search-btn')
    let search_block = document.querySelector('.search-input-block')
    if (search){
        search.addEventListener('click' , (event) =>{
            search_block.classList.toggle('width_100')
        })
    }
});