//validate contact-us form
function validateName(name) {
  let validationMsg = document.getElementsByClassName("validation-msg")[0];
  if (!String(name).length) {
    validationMsg.classList.remove("validation-msg-hide");
  } else validationMsg.classList.add("validation-msg-hide");
}
function validateEmail(email) {
  let validationMsg = document.getElementsByClassName("validation-msg")[1];

  if (!String(email).length) {
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
  validateName(document.getElementsByClassName("form-input")[0].value);
  validateEmail(document.getElementsByClassName("form-input")[1].value);
  validateMsg(document.getElementsByClassName("form-input")[2].value);
});
