{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.4615;
        const rateGBP = 5.1471;
        const rateUSD = 4.1512;
        const rateJPY = 0.0277;

        switch (currency) {
            case "EUR":
                return amount / rateEUR

            case "GBP":
                return amount / rateGBP

            case "USD":
                return amount / rateUSD

            case "JPY":
                return amount / rateJPY
        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency}</strong>`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency)

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

}