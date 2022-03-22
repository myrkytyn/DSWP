const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navItem = document.querySelectorAll('.nav-item');

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

let subscr = false;
const helpButton = () => {
    const button = document.querySelector('.helpbtn');
    const errorElement = document.querySelector('.error');
    const inputAmount = document.querySelector('.amount');
    const form = document.querySelector('.form')

    button.addEventListener('click', (e) => {
        let message = '';
        let reg = /^\d+$/;
        if (!reg.test(inputAmount.value)) {
            message = 'Введіть тільки цифри, будь ласка';

        }
        if (inputAmount.value === '' || inputAmount.value == null) {
            message = 'Введіть бажану суму допомоги притулку';
        }
        if (inputAmount.value.length > 6) {
            message = 'Введіть суму меншу за 999 999'
        }
        if (message !== '') {
            e.preventDefault()
            errorElement.innerText = message
        } else {
            errorElement.innerText = '';
            if (!subscr) {
                pay(inputAmount.value);
            } else {
                subscription(inputAmount.value);
            }
        }
    })

}


const switchPayment = () => {
    const oneTime = document.querySelector('.onetime')
    const subscription = document.querySelector('.subscription')
    const helpbtn = document.querySelector('.helpbtn')

    oneTime.addEventListener('click', () => {
        oneTime.classList.add('switch-active');
        subscription.classList.remove('switch-active');
        subscr = false;
    });
    subscription.addEventListener('click', () => {
        subscription.classList.add('switch-active');
        oneTime.classList.remove('switch-active');
        subscr = true;
    });


}

switchPayment();
navSlide();
helpButton();