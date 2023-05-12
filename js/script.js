{
  const calculateResult = (amount, currency) => {
    const currencyDolar = 4.16;
    const currencyEuro = 4.59;
    const currencyGbp = 5.33;

    switch (currency) {
      case "USD":
        return amount / currencyDolar;

      case "EUR":
        return amount / currencyEuro;

      case "GBP":
        return amount / currencyGbp;
    }
  };

  const updateResult = (amount, currency, result) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(
      2
    )} ${currency}`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    updateResult(amount, currency, result);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
