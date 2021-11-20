const email = document.getElementById("email");
const button = document.getElementById("submit-btn");
const errorMsg = document.getElementById("error-message");

// Check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    console.log("submitted");
  } else {
    errorMsg.className = "error fw-bold";
    setTimeout(function () {
      errorMsg.className = "fw-bold";
      email.value = "";
    }, 3000);
  }
}

// Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkEmail(email);
});
