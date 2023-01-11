//validate contact-us form
function validateName(name) {
  let validationMsg = document.getElementsByClassName("validation-msg")[0];
  let valid = true;
  if (String(name).length < 5) {
    validationMsg.textContent = "Name must be at least 5 characters";
    valid = false;
  } else if (/\d/.test(String(name))) {
    validationMsg.textContent = "Name can't contain numbers";
    valid = false;
  }
  if (valid) validationMsg.classList.add("validation-msg-hide");
  else validationMsg.classList.remove("validation-msg-hide");
}
function validateEmail(email) {
  let validationMsg = document.getElementsByClassName("validation-msg")[1];
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(String(email))) {
    validationMsg.classList.remove("validation-msg-hide");
  } else validationMsg.classList.add("validation-msg-hide");
}
function validateMsg(msg) {
  let validationMsg = document.getElementsByClassName("validation-msg")[2];
  if (!String(msg).length) {
    validationMsg.classList.remove("validation-msg-hide");
  } else validationMsg.classList.add("validation-msg-hide");
}

document.querySelector(".form-btn").addEventListener("click", (event) => {
  event.preventDefault();
  validateName(document.querySelector("#name-input").value);
  validateEmail(document.querySelector("#email-input").value);
  validateMsg(document.querySelector("#msg-input").value);
});

// testing
