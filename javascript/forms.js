document.getElementById('form').addEventListener('submit', async function(e){
    e.preventDefault();

    const formData = new FormData(this);
    try{
        const response = await fetch ('/api/submit-form.js', {
            method: 'POST',
            body: formData,
        });
          if (response.ok) {
            alert('Formulário enviado com sucesso!');
        } else {
            alert('Erro ao enviar o formulário.', response.statusText);
        }
    }     catch(error) {
        console.error('Erro ao enviar o formulário:', error);
    }
});