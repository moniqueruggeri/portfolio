document.getElementById('form').addEventListener('submit', async function(e){
    e.preventDefault();

    const formData = new FormData(this);
    try{
        const response = await fetch ('/api/submit-form', {
            method: 'POST',
            body: formData,
        });
          if (response.ok) {
            console.log('Formulário enviado com sucesso!');
        } else {
            console.error('Erro ao enviar o formulário.', response.statusText);
        }
    }     catch(error) {
        console.error('Erro ao enviar o formulário:', error);
    }
});