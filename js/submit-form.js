import { showLoading } from "./button-loader.js";
import { valida } from "./form-validation.js";
import { showModal } from "./modal.js";

export function submitForm() {

    const scriptURL = 'https://script.google.com/macros/s/AKfycbx116AzMQ1UUa0B6FojtXvvpPULmN9EkSc1NkqxivZ0NojTKmeNP2HbFWYnJLcPjnCDPA/exec';

    const form = document.forms['form']
    const submitButton = document.getElementById("submit");
    
    valida();
    
    form.addEventListener('submit', e => {
        e.preventDefault();
        
        const loader = showLoading(submitButton);

        fetch(scriptURL, {method:'POST', body:new FormData(form)})
            .then(response => {
                loader.restore();
                showModal();
            }) 
            .catch(error => {
                console.error("Error!", error.message);
                loader.restore();
            })
    });
}