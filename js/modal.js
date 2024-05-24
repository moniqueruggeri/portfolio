const modal = document.querySelector(".modal");
const fade = document.querySelector(".fade");
    
    export function showModal() {
        modal.style.display = "block";
        fade.style.display = "block";
        setTimeout(()=> {
            closeModal();
            window.location.reload();
        }, 5000);
    }
    
    export function closeModal() {
        modal.style.display = "none";
        fade.style.display = "none";
    }
