
//language switch
const langSwitch = document.querySelectorAll('.c-lang-toggle');
const introTitles = document.querySelectorAll('.intro__title');
const introTexts = document.querySelectorAll('.intro__text');
const showcaseTitles = document.querySelectorAll('.p-single-showcase__title--small');
const showcaseTexts = document.querySelectorAll('.p-single-showcase__text');
const showcaseListItems = document.querySelectorAll('.p-single-showcase-list__item');
for (let index = 0; index < langSwitch.length; index++) {
    langSwitch[index].addEventListener('click', () => {

        if (langSwitch[index].textContent.trim() === 'ja') {
            langSwitch[index].classList.add('active-lang');
            langSwitch[index - 1].classList.remove('active-lang');
            introTitles.forEach((title) => {
                title.textContent = title.getAttribute('data-jp');
                title.classList.add('intro__title--jp');
            })
            introTexts.forEach((text) => {
                text.textContent = text.getAttribute('data-jp');
                text.classList.add('intro__text--jp');
            })
            showcaseTitles.forEach((title) => {
                title.textContent = title.getAttribute('data-jp');
                title.classList.add('p-single-showcase__title--jp');
            })
            showcaseTexts.forEach((text) => {
                text.textContent = text.getAttribute('data-jp');
                text.classList.add('p-single-showcase__text--jp');
            })
            showcaseListItems.forEach((item) => {
                item.textContent = item.getAttribute('data-jp');
                item.classList.add('p-single-showcase-list__item--jp');
            })
        } else {
            langSwitch[index].classList.add('active-lang');
            langSwitch[index + 1].classList.remove('active-lang'); 
            introTitles.forEach((title) => {
                title.textContent = title.getAttribute('data-en');
                title.classList.remove('intro__title--jp');
            })
            introTexts.forEach((text) => {
                text.textContent = text.getAttribute('data-en');
                text.classList.remove('intro__text--jp');
            })
            showcaseTexts.forEach((text) => {
                text.textContent = text.getAttribute('data-en');
                text.classList.remove('p-single-showcase__text--jp');
            })
            showcaseTitles.forEach((title) => {
                title.textContent = title.getAttribute('data-en');
                title.classList.remove('p-single-showcase__title--jp');
            })
            showcaseListItems.forEach((item) => {
                item.textContent = item.getAttribute('data-en');
                item.classList.remove('p-single-showcase-list__item--jp');
            })
        }

    });
}


// menuBtn

const menuBtn = document.querySelector('.menu-btn');
const headerNav = document.querySelector('.header__nav');
const menuBtnClose = document.querySelector('.menu-btn .menu-btn-label--close');
const menuBtnOpen = document.querySelector('.menu-btn .menu-btn-label--open');


menuBtn.addEventListener('click', () => {

    if (headerNav.classList.contains('is-active')) {
        headerNav.classList.remove('is-active');
        menuBtnClose.classList.remove('is-active');
        menuBtnOpen.classList.remove('is-active');
    } else {
        headerNav.classList.add('is-active');
        menuBtnClose.classList.add('is-active');
        menuBtnOpen.classList.add('is-active');
    }
})

//email
const emailBtn = document.querySelectorAll('.c-btn-email');
emailBtn.forEach((item, index) => {

    //pc
    item.addEventListener('click', (event) => {
        event.preventDefault();
        // for (let i = 0; i < emailBtn.length; i++) {
        //     emailBtn[i].textContent = 'Copy Email';
        // }
        navigator.clipboard.writeText('k25ts09@outlook.jp');
        emailBtn[index].textContent = 'Copied!';
        setTimeout(() => {
            emailBtn[index].textContent = 'Copy Email';
        }, 1700);
    })
    
})

//smooth scroll
const backTop = document.querySelector(".c-btn-backtop");
console.log(backTop);

function smoothScroll(target, duration) {
    const startPosition = window.scrollY;
    const distance = target - startPosition;
    let start = null;

    function animation(currentTime) {
        if (start === null) {
            start = currentTime;
        }
        const timeElapsed = currentTime - start;
        const run = Math.min(1, timeElapsed / duration);
        window.scrollTo(0, startPosition + distance * easeInOutQuad(run));
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    window.requestAnimationFrame(animation);
}

backTop.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(0, 1500);
})

window.addEventListener('load', () => {
    const footer = document.querySelector('.footer');
    const headerTitle = document.querySelectorAll('.header__title');
    const headerLink = document.querySelectorAll('.header__list-pc .header-list__link');
    const footerHeight = footer.getBoundingClientRect().top + window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY >= ( footerHeight - 20 ) ) {
            headerTitle.forEach((title) => {
                title.classList.remove('c-scroll-text--inactive');
                title.classList.add('c-scroll-text--active');
            })
            headerLink.forEach((link) => {
                link.classList.remove('c-scroll-text--inactive');
                link.classList.add('c-scroll-text--active');
            })
            menuBtnClose.classList.remove('c-scroll-text--inactive');
            menuBtnClose.classList.add('c-scroll-text--active');
        } else {
            headerTitle.forEach((title) => {
                title.classList.remove('c-scroll-text--active');
                title.classList.add('c-scroll-text--inactive');
                
            })
            headerLink.forEach((link) => {
                link.classList.remove('c-scroll-text--active');
                link.classList.add('c-scroll-text--inactive');
                
            })
            menuBtnClose.classList.remove('c-scroll-text--active');
            menuBtnClose.classList.add('c-scroll-text--inactive');
        }
    })
    
})

window.addEventListener('resize', () => {
    const footer = document.querySelector('.footer');
    const headerTitle = document.querySelectorAll('.header__title');
    const headerLink = document.querySelectorAll('.header__list-pc .header-list__link');
    const footerHeight = footer.getBoundingClientRect().top + window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY >= ( footerHeight - 20 ) ) {
            headerTitle.forEach((title) => {
                title.classList.remove('c-scroll-text--inactive');
                title.classList.add('c-scroll-text--active');
            })
            headerLink.forEach((link) => {
                link.classList.remove('c-scroll-text--inactive');
                link.classList.add('c-scroll-text--active');
            })
            menuBtnClose.classList.remove('c-scroll-text--inactive');
            menuBtnClose.classList.add('c-scroll-text--active');
        } else {
            headerTitle.forEach((title) => {
                title.classList.remove('c-scroll-text--active');
                title.classList.add('c-scroll-text--inactive');
            })
            headerLink.forEach((link) => {
                link.classList.remove('c-scroll-text--active');
                link.classList.add('c-scroll-text--inactive');
            })
            menuBtnClose.classList.remove('c-scroll-text--active');
            menuBtnClose.classList.add('c-scroll-text--inactive');
        }
    })
    
})


const scrollNumberEffect = () => {
    const introInner = document.querySelectorAll('.intro__inner');
    const introNumberSpan = document.querySelectorAll('.intro__number--visible');
    const introNumberHidden = document.querySelectorAll('.intro__number--hidden');

    introInner.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        const stopY = 200; // 止める位置（上から200px）
        const range = window.innerHeight - stopY;
    
        // 対象要素
        const numberSpan = introNumberSpan[index];
        const numberHidden = introNumberHidden[index];
    
        // 画面に入ってる場合
        if (itemTop < window.innerHeight && itemTop >= stopY) {
            // 進捗率 0〜1（スクロールに応じて変化）
            const progress = (window.innerHeight - itemTop) / range;
            const clampedProgress = Math.min(Math.max(progress, 0), 1);
            const translateYPercent = (1 - clampedProgress) * 100;
    
            numberSpan.style.transform = `translateY(-${translateYPercent}%)`;
            numberHidden.style.transform = `translateY(-${translateYPercent}%)`;
        }
        // stopYより上までスクロールされたら、固定位置で止める
        else if (itemTop < stopY) {
            numberSpan.style.transform = `translateY(-100%)`;
            numberHidden.style.transform = `translateY(-100%)`;
        }
        // まだ画面に入ってない時
        else {
            numberSpan.style.transform = `translateY(0%)`;
            numberHidden.style.transform = `translateY(0%)`;
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        scrollNumberEffect();
    })
})

//cursor 
const cursor = document.querySelector('.cursor');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.opacity = '1';
});

document.addEventListener('mouseout', () => {
    cursor.style.opacity = '0';
});

const animateCursor = () => {
    currentX += (mouseX - currentX) / 10;
    currentY += (mouseY - currentY) / 10;
    cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
    requestAnimationFrame(animateCursor);
}

animateCursor();