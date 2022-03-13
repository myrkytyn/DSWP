function runWfpWdgt(url, amount) {
    var wayforpay = new Wayforpay();
    wayforpay.invoice(url, true);
}

/* var pay = function() {
    wayforpay.run({
        merchantAccount: "dogmania_wayforpay_shop",
        merchantDomainName: "www.dogmania.com.ua",
        authorizationType: "SimpleSignature",
        merchantSignature: "b95932786cbe243a76b014846b63fe92",
        orderReference: "DH783023",
        orderDate: "1415379863",
        amount: "1547.36",
        currency: "UAH",
        productName: "Процессор Intel Core i5-4670 3.4GHz",
        productPrice: "1000",
        productCount: "1",
        clientFirstName: "Вася",
        clientLastName: "Васечкин",
        clientEmail: "some@mail.com",
        clientPhone: "380631234567",
        language: "UA"
    });
} */