let splash = document.querySelector('.splash')



function loadPage(){
    let html = '';
    let splashTitle = document.querySelector('.splash-title');
    let splashTitleArray = splashTitle.innerText.split('');
    splashTitleArray.forEach(letter => {
        html += `<span>${letter}</span>`
    })
    splashTitle.innerHTML = html;

    [...splashTitle.querySelectorAll('span')].forEach((span, idx) => {
        setTimeout(() => {
            span.style.transform = 'translateY(0px)'
        }, (idx + 1) * 50);
    })

    setTimeout(() => {
        splash.classList.add('active');

        setTimeout(() => {
            main.style.transform = `translateY(0px)`;
            main.style.opacity = 1;
            splash.style.display = 'none';
            image.style.transform = 'scale(1)';
        }, 50)
    }, 2000)
}

loadPage()
