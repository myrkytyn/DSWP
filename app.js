let subscr = false;

window.onscroll = function() { stickyNavBar() };

var navbar = document.querySelector(".navbar");
var logo = document.querySelector(".logo");

function stickyNavBar() {
    if (window.pageYOffset >= 0) {
        navbar.classList.add("sticky");
        logo.classList.add("sticky-logo");
    } else {
        navbar.classList.remove("sticky");
        logo.classList.remove("sticky-logo");
    }
}

const collapse = () => {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}

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
helpButton();
collapse();