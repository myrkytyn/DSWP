 function runWfpWdgt(url, amount) {
     var wayforpay = new Wayforpay();
     wayforpay.invoice(url, true);
 }

 var wayforpay = new Wayforpay();
 var pay = function(amount) {
     var date = Date.now();
     const key = "fe22ced72fb466ccc54c55d96f99aac482137b3f"
     const auth = "dogmania_wayforpay_shop;www.dimsirka.if.ua;" + date + ";" + date + ";" + amount + ";UAH;Допомога Дому Сірка;1;" + amount;
     var hash = Crypto.HMAC(Crypto.MD5, auth, key);
     wayforpay.run({
         merchantAccount: "dogmania_wayforpay_shop",
         merchantDomainName: "www.dimsirka.if.ua",
         authorizationType: "SimpleSignature",
         orderReference: date,
         orderDate: date,
         amount: amount,
         currency: "UAH",
         productName: "Допомога Дому Сірка",
         productPrice: amount,
         productCount: "1",
         merchantSignature: hash,
         straightWidget: true,
         language: "UA"
     });
 }

 var subscription = function(amount) {
     var date = Date.now();
     const key = "fe22ced72fb466ccc54c55d96f99aac482137b3f"
     const auth = "dogmania_wayforpay_shop;www.dimsirka.if.ua;" + date + ";" + date + ";" + amount + ";UAH;Допомога Дому Сірка;1;" + amount;
     var hash = Crypto.HMAC(Crypto.MD5, auth, key);
     wayforpay.run({
         merchantAccount: "dogmania_wayforpay_shop",
         merchantDomainName: "www.dimsirka.if.ua",
         authorizationType: "SimpleSignature",
         orderReference: date,
         orderDate: date,
         amount: amount,
         regularOn: "1",
         regularCount: "12",
         regularMode: "monthly",
         currency: "UAH",
         productName: "Допомога Дому Сірка",
         productPrice: amount,
         productCount: "1",
         merchantSignature: hash,
         straightWidget: true,
         language: "UA"
     });
 }