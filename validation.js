window.addEventListener("DOMContentLoaded", function () {
  let cardNumberInput = document.getElementById("card_number");
  let monthInput = document.getElementById("card_date_MM");
  let yearInput = document.getElementById("card_date_YY");
  let cvcInput = document.getElementById("card_cvc");

  cardNumberInput.addEventListener("input", function () {
      let pattern = /^\d{16}$/;
      if (!pattern.test(cardNumberInput.value)) {
          displayErrorMessage(cardNumberInput, "Wrong format, numbers only");
          cardNumberInput.setCustomValidity("Card number must be 16 digits");
      } else {
          cardNumberInput.setCustomValidity("");

          if (!isValidLuhn(cardNumberInput.value)) {
              displayErrorMessage(cardNumberInput, "Invalid card number");
              cardNumberInput.setCustomValidity("Invalid card number");
          } else {
              clearErrorMessage(cardNumberInput);
          }
      }
  });

  monthInput.addEventListener("input", function () {
      let pattern = /^(0[1-9]|1[0-2])$/;
      if (!pattern.test(monthInput.value)) {
          // displayErrorMessage(monthInput, "Can't be blank");
          monthInput.setCustomValidity("Invalid month format (MM)");
      } else {
          monthInput.setCustomValidity("");
      }
  });

  yearInput.addEventListener("input", function () {
      let pattern = /^\d{2}$/;
      if (!pattern.test(yearInput.value)) {
          // displayErrorMessage(yearInput, "Can't be blank");
          yearInput.setCustomValidity("Invalid year format (YY)");
      } else {
          yearInput.setCustomValidity("");
      }
  });

  cvcInput.addEventListener("input", function () {
      let pattern = /^\d{3}$/;
      if (!pattern.test(cvcInput.value)) {
          // displayErrorMessage(cvcInput, "Can't be blank");
          cvcInput.setCustomValidity("CVC must be a 3-digit number");
      } else {
          cvcInput.setCustomValidity("");
      }
  });

  function displayErrorMessage(inputElement, message) {
      let errorMessage = inputElement.nextElementSibling;
      if (!errorMessage || !errorMessage.classList.contains("error-message")) {
          errorMessage = document.createElement("p");
          errorMessage.classList.add("error-message");
          inputElement.parentNode.insertBefore(errorMessage, inputElement.nextSibling);
      }
      errorMessage.textContent = message;
  }

  function clearErrorMessage(inputElement) {
      let errorMessage = inputElement.nextElementSibling;
      if (errorMessage && errorMessage.classList.contains("error-message")) {
          errorMessage.textContent = "";
      }
  }

  // function isValidLuhn(number) {
  //   let total = 0;
  //   let isEven = false;

  //   for (let i = number.length - 1; i >= 0; i--) {
  //       let digit = parseInt(number.charAt(i), 10);

  //       if (isEven) {
  //           digit *= 2;
  //           if (digit > 9) {
  //               digit -= 9;
  //           }
  //       }

  //       total += digit;
  //       isEven = !isEven;
  //   }

  //   return total % 10 === 0;
  // }
});

document.getElementById("card_information").addEventListener("submit", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Perform form validation here
  // ...

  // If form validation is successful, redirect to the success page
  if (isFormValid()) {
      window.location.href = "/pages/success.html";
  }
});

function isFormValid() {
  // Implement your form validation logic here
  // Return true if the form is valid, otherwise return false
  return true;
}