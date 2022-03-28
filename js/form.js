"use strict";

let selector = document.querySelector('input[type="tel"]');
let im = new Inputmask("+375 (99) 999-99-99");
im.mask(selector);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);
  const formButton = document.getElementById("form__button");
  var formButtonPreview = "";
  async function formSend(e) {
    e.preventDefault();
    let error = 0;
    let formReq = document.querySelectorAll(".__req");
    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("__email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (input.value === "") {
        formAddError(input);
        error++;
      }
    }

    let size = document.getElementById("size");

    let formData = new FormData(form);
    if (error === 0) {
      formButtonPreview =
        'Отправка... <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.001 512.001"style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve"><g><path d="M507.608,4.395c-4.243-4.244-10.609-5.549-16.177-3.321L9.43,193.872c-5.515,2.206-9.208,7.458-9.42,13.395c-0.211,5.936,3.101,11.437,8.445,14.029l190.068,92.181l92.182,190.068c2.514,5.184,7.764,8.455,13.493,8.455c0.178,0,0.357-0.003,0.536-0.01c5.935-0.211,11.189-3.904,13.394-9.419l192.8-481.998C513.156,15.001,511.851,8.638,507.608,4.395z M52.094,209.118L434.72,56.069L206.691,284.096L52.094,209.118z M302.883,459.907l-74.979-154.599l228.03-228.027L302.883,459.907z"></path></g></svg>';
      formButton.innerHTML = formButtonPreview;
      let response = await fetch("sendmail.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        form.reset();
        formButtonPreview =
          'Отправить <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.001 512.001"style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve"><g><path d="M507.608,4.395c-4.243-4.244-10.609-5.549-16.177-3.321L9.43,193.872c-5.515,2.206-9.208,7.458-9.42,13.395c-0.211,5.936,3.101,11.437,8.445,14.029l190.068,92.181l92.182,190.068c2.514,5.184,7.764,8.455,13.493,8.455c0.178,0,0.357-0.003,0.536-0.01c5.935-0.211,11.189-3.904,13.394-9.419l192.8-481.998C513.156,15.001,511.851,8.638,507.608,4.395z M52.094,209.118L434.72,56.069L206.691,284.096L52.094,209.118z M302.883,459.907l-74.979-154.599l228.03-228.027L302.883,459.907z"></path></g></svg>';
        formButton.innerHTML = formButtonPreview;
      } else {
      }
    }
  }

  function formAddError(input) {
    input.classList.add("_error");
  }
  function formRemoveError(input) {
    input.classList.remove("_error");
  }
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});
