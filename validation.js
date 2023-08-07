  document.getElementById("card_form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    var cardholderName = document.getElementById("card-name").value;
    var cardNumber = document.getElementById("card_number").value;
    var expMonth = document.getElementById("card_exp_month").value;
    var expYear = document.getElementById("card_exp_year").value;
    var cvc = document.getElementById("card_cvc").value;

    if (cardholderName.trim() === "") {
      alert("Please enter a cardholder name.");
      return;
    }

    if (!isValidCardNumber(cardNumber)) {
      alert("Please enter a valid card number.");
      return;
    }

    if (!isValidExpirationDate(expMonth, expYear)) {
      alert("Please enter a valid expiration date.");
      return;
    }

    if (!isValidCVC(cvc)) {
      alert("Please enter a valid CVC code.");
      return;
    }

    window.location.href = "./pages/success.html";
  });

  function isValidCardNumber(cardNumber) {
    return /^\d{16}$/.test(cardNumber);
  }

  function isValidExpirationDate(month, year) {
    return /^\d{2}$/.test(month) && /^\d{2}$/.test(year);
  }

  function isValidCVC(cvc) {
    return /^\d{3}$/.test(cvc);
  }
