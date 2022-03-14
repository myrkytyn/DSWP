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

const switchPayment = () => {
    const oneTime = document.querySelector('.onetime')
    const subscription = document.querySelector('.subscription')
    const helpbtn = document.querySelector('.helpbtn')

    oneTime.addEventListener('click', () => {
        oneTime.classList.toggle('switch-active');
        subscription.classList.remove('switch-active');
        helpbtn.setAttribute("onClick", "pay(this.form.custom_amount.value);")
    });
    subscription.addEventListener('click', () => {
        subscription.classList.toggle('switch-active');
        oneTime.classList.remove('switch-active');
        helpbtn.setAttribute("onClick", "subscription(this.form.custom_amount.value);")
    });


}

switchPayment();