emailjs.init("ADD-YOUR-Public Key");

const form = document.getElementById("booking-form");
const resultDiv = document.getElementById("result");

const checkinInput = document.getElementById("start-date");
const checkoutInput = document.getElementById("end-date");
const nightsInput = document.getElementById("nights");

function calculateNights() {
  const checkin = new Date(checkinInput.value);
  const checkout = new Date(checkoutInput.value);
  const diffTime = checkout - checkin;
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  nightsInput.value = nights > 0 ? nights : 0;
}

checkinInput.addEventListener("change", calculateNights);
checkoutInput.addEventListener("change", calculateNights);
window.addEventListener("load", calculateNights);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("ADD-YOUR-service-key", "ADD-YOUR-template-key", form)
    .then(() => {
      resultDiv.textContent = "Message sent successfully!";
      form.reset();
      calculateNights();
    })
    .catch((error) => {
      resultDiv.textContent = "Error sending.";
      console.error(error);
    });
});
