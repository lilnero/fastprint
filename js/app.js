"use strict"

let selector = document.querySelector('input[type="tel"]');
let im = new Inputmask('+375 (99) 999-99-99');
im.mask(selector);

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);
            
    async function formSend(e) {
        e.preventDefault();
        let error = 0;
        let formReq = document.querySelectorAll('.__req');
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
            
            if (input.classList.contains('__email')) {
                if(emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            }
            else if(input.value === '') {
                formAddError(input);
                error++;
            }
        }

        let size = document.getElementById('size');

        let formData = new FormData(form)

        if (error === 0) {
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            })
            if (response.ok) {
                let result = await response.json()
                alert(result.message)
                form.reset()
                fileNamePreview = '';
                filePreview.innerHTML = fileNamePreview;
            }
            else {
              alert('Ошибка')  
            }

        }
    }

    function formAddError(input) {
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.classList.remove('_error');
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    const fileInput = document.querySelector('input[type="file"]');
    const filePreview = document.getElementById('file__name');
    var fileNamePreview = '';

    fileInput.addEventListener('change', (e) => {
        let files = e.currentTarget.files;
        console.log(files.length);
        if(files.length) {
            for (let index = 0; index < files.length; index++) {
                fileNamePreview += `<li>${files[index].name}</li>`;
            }
        }
        filePreview.innerHTML = fileNamePreview;
    })
})