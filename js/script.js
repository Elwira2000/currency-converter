let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");

let rateEUR = 4.4615;
let rateGBP = 5.1471;
let rateUSD = 4.1512;
let rateJPY = 0.0277;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR
            break;
        case "GBP":
            result = amount / rateGBP
            break;
        case "USD":
            result = amount / rateUSD
            break;
        case "JPY":
            result = amount / rateJPY
            break;
    }

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency}</strong>`;
});