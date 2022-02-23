const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navItem = document.querySelectorAll('.nav-item')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navItem.forEach((item, index) => {
            if (item.style.animation) {
                item.style.animation = ''
            } else {
                item.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle')
    });
}

navSlide();