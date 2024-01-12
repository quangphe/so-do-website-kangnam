const data = [
    {
        label: 'dropdown-1',
        layout: '<li class="header_kn_2_0_0__head"><span class="header_kn_2_0_0__back">&#10094;</span>Dịch vụ </li> <li class="header_kn_2_0_0__dropdownItem"><a href="#">Thẩm mỹ mắt</a></li> <li class="header_kn_2_0_0__dropdownItem"><a href="#">Thẩm mỹ mũi</a></li> <li class="header_kn_2_0_0__dropdownItem"><a href="#">Thẩm mỹ hàm mặt</a></li> <li class="header_kn_2_0_0__dropdownItem"><a href="#">Thẩm mỹ vòng một</a></li> <li class="header_kn_2_0_0__dropdownItem"><a href="#">Thẩm mỹ vóc dáng</a></li> <li class="header_kn_2_0_0__dropdownItem"><a href="#">Điều trị da</a></li> <li class="header_kn_2_0_0__dropdownItem"><a href="#">Trẻ hóa da công nghệ cao</a></li> <li class="header_kn_2_0_0__dropdownItem"><a href="#">Thẩm mỹ không phẫu thuật</a></li>'
    },
]

const eventPC = () => {
    const elmHover = document.querySelectorAll('.header_kn_2_0_0__navItem a');
    const elmBg = document.querySelector('.header_kn_2_0_0__bg');
    for(let i = 0; i < elmHover.length; i++){
        elmHover[i].addEventListener('mouseover', () => {
            for(let i = 0; i < elmHover.length; i++){
                const elmId = elmHover[i].getAttribute('data-id');
                if(elmId !== null){
                    document.getElementById(elmId).innerHTML = '';
                }
            }
            const elmId = elmHover[i].getAttribute('data-id');
            const innerData = data.filter(item => item.label === elmId);
            if(innerData.length > 0){
                document.getElementById(elmId).innerHTML = innerData[0].layout;
                elmBg.style.display = 'block';
            }
        })
    }
    elmBg.addEventListener('mouseover', () => {
        for(let i = 0; i < elmHover.length; i++){
            const elmId = elmHover[i].getAttribute('data-id');
            if(elmId !== null){
                document.getElementById(elmId).innerHTML = '';
                elmBg.style.display = 'none';
            }
        }
    })
}

const eventMB = () => {
    const elmClick = document.querySelectorAll('.header_kn_2_0_0__navItem a');
    const elmBg = document.querySelector('.header_kn_2_0_0__bg');
    for(let i = 0; i < elmClick.length; i++){
        elmClick[i].addEventListener('click', () => {
            for(let i = 0; i < elmClick.length; i++){
                const elmId = elmClick[i].getAttribute('data-id');
                if(elmId !== null){
                    document.getElementById(elmId).innerHTML = '';
                }
            }
            const elmId = elmClick[i].getAttribute('data-id');
            const innerData = data.filter(item => item.label === elmId);
            if(innerData.length > 0){
                document.getElementById(elmId).innerHTML = innerData[0].layout;
            }
        })
    }
    elmBg.addEventListener('click', () => {
        for(let i = 0; i < elmClick.length; i++){
            const elmId = elmClick[i].getAttribute('data-id');
            if(elmId !== null){
                document.getElementById(elmId).innerHTML = '';
                elmBg.style.display = 'none';
                document.querySelector('.header_kn_2_0_0__bottom').classList.remove('show');
                document.body.classList.remove('fixed-body');
                const elmDown = document.querySelectorAll('.header_kn_2_0_0__dropdown');
                for(let i = 0; i < elmDown.length; i++){
                    elmDown[i].classList.remove('show');
                } 
            }
        }
    })
    
    document.querySelector('.header_kn_2_0_0__button').addEventListener('click', () => {
        document.querySelector('.header_kn_2_0_0__bottom').classList.add('show');
        elmBg.style.display = 'block';
        document.body.classList.add('fixed-body')
        const elmClickDown = document.querySelectorAll('.header_kn_2_0_0__bottom.show .header_kn_2_0_0__navItem a');
        for(let i = 0; i < elmClickDown.length; i++){
            elmClickDown[i].addEventListener('click', () => {
                const idElm = elmClickDown[i].getAttribute('data-id')
                const elmById = document.querySelector(`#${idElm}`)
                if(elmById){
                    elmById.classList.add('show');
                    const elmClickBack = document.querySelector('.header_kn_2_0_0__bottom.show .header_kn_2_0_0__dropdown.show .header_kn_2_0_0__back');
                    elmClickBack.addEventListener('click', () => {
                        elmById.classList.remove('show');
                    })
                }
            })
        }
    });
    document.querySelector('.header_kn_2_0_0__close').addEventListener('click', () => {
        document.querySelector('.header_kn_2_0_0__bottom').classList.remove('show');
        elmBg.style.display = 'none';
        document.body.classList.remove('fixed-body');
        const elmDown = document.querySelectorAll('.header_kn_2_0_0__dropdown');
        for(let i = 0; i < elmDown.length; i++){
            elmDown[i].classList.remove('show');
        } 
    });
}

const resizeHeader = () => {
    if (window.innerWidth < 1025) {
        eventMB()
    } else {
        eventPC()
    }
}
resizeHeader();
