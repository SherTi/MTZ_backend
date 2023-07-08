window.addEventListener('DOMContentLoaded', (event) => {
    if ( new Swiper('partner_swiper')){
        const partner_swiper = new Swiper('.partner_swiper',{
            direction: 'horizontal',
            loop: true,
            freeMode:true,
            breakpoints: {
                320:{
                    slidesPerView:2,
                },
                375:{
                    slidesPerView:2,
                },
                425:{
                    slidesPerView:2,
                },
                525:{
                    slidesPerView:3,
                },
                990:{
                    slidesPerView: 4,
                },
                1024:{
                    slidesPerView: 4,
                },
                1020:{
                    slidesPerView: 4,
                },
                1080:{
                    slidesPerView: 5,
                },
                1630:{
                    slidesPerView: 5,
                },
                1920:{
                    slidesPerView: 6,
                    speed:8000,
                },
                2556:{
                    slidesPerView: 7,
                }
            }

        });
    }

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
            1920:{
                slidesPerView: 5,
                width:1920,
                loop:true,
            },
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
    let navCatalog = document.querySelector('.nav-block2')
    let icon = document.querySelectorAll('.icon_block')
    icon.forEach((el) => {
        el.addEventListener('click' ,() =>{
            navCatalog.classList.toggle('active_stroke')
            if (el.click){
                icon.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\" class=\"icon-nav_item \"><path d=\"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z\" fill=\"#387EC1\"/></svg>"
            }else {
                icon.innerHTML = "<svg width=\"8\" height=\"12\" viewBox=\"0 0 8 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"icon-nav_item \" ><path d=\"M1.1709 11.3083C1.02507 11.1624 0.952148 10.9898 0.952148 10.7903C0.952148 10.5911 1.02507 10.4187 1.1709 10.2728L5.44382 5.99992L1.15632 1.71242C1.0202 1.57631 0.952148 1.40617 0.952148 1.202C0.952148 0.997835 1.02507 0.822835 1.1709 0.677002C1.31673 0.531169 1.4894 0.458252 1.6889 0.458252C1.88801 0.458252 2.06048 0.531169 2.20632 0.677002L7.10632 5.59159C7.16465 5.64992 7.20607 5.71311 7.23057 5.78117C7.25468 5.84922 7.26673 5.92214 7.26673 5.99992C7.26673 6.0777 7.25468 6.15061 7.23057 6.21867C7.20607 6.28672 7.16465 6.34992 7.10632 6.40825L2.19173 11.3228C2.05562 11.4589 1.88801 11.527 1.6889 11.527C1.4894 11.527 1.31673 11.4541 1.1709 11.3083Z\" fill=\"#387EC1\"/></svgsvg>"
            }
        })
    })

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

    // info_active_block  info_block
    let btn_info_block = document.querySelector('.info_block')
    let soc_block =document.querySelector('.info_soc')
    let btn_img = document.querySelector('.info_img')
    if  (btn_info_block) {
        btn_info_block.addEventListener('click' , () =>  {
            soc_block.classList.toggle('info_active_block')
            if (soc_block.classList.contains('info_active_block')) {
                btn_img.setAttribute('src' ,'/images/cansel.png')
            }else {
                btn_img.setAttribute('src' ,'/images/Union.png')
            }
        })
    }


    const bg = document.querySelector('.background')

    if (bg){
        bg.style.height = `${Math.round(bg.clientWidth / (2882 / 2064))}px`;
        window.addEventListener('resize', () => {
            if (bg.clientWidth > 972) {
                bg.style.height = `${Math.round(bg.clientWidth / (2882 / 2064))}px`;
            } else {
                bg.style.height = '';
            }

        });
    }

});