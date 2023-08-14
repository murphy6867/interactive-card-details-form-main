const cardNum = document.getElementById('showCardnumber');
    const inputForm = document.getElementById("card_information");

    inputForm.addEventListener("submit", function(event) {
      event.preventDefault();

      window.location.href = "./pages/success.html"

})