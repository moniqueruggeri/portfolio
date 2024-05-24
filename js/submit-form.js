import { valida } from "./form-validation.js";

export function submitForm() {

    const scriptURL = 'https://script.google.com/macros/s/AKfycbx116AzMQ1UUa0B6FojtXvvpPULmN9EkSc1NkqxivZ0NojTKmeNP2HbFWYnJLcPjnCDPA/exec';

    const form = document.forms['form']
    
    valida();

    form.addEventListener('submit', e => {
        e.preventDefault();

        fetch(scriptURL, {method:'POST', body:new FormData(form)})
            .then(response => alert("Dados enviados com sucesso!"))
            .then(() => {window.location.reload();})
            .catch(error => console.error("Error!", error.message))
    });
}