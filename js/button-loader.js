
export function showLoading(button) {
    
    const originalButtonValue = button.value;
    const load = document.querySelector(".img-load");
    

    // Esconde o texto do botão e mostra o spinner
    button.disabled = true; // Desabilita o botão para evitar multiplos cliques
    button.value = ""; //Limpa o texto do botão
    load.style.display = "block"; //Mostra o spinner

    return {
        restore: function () {
            //Reverte o botãode volta ao texto original
            button.disabled = false;
            button.value = originalButtonValue;
            load.style.display = "none"; //Esconde o spinner
        }
    }
}