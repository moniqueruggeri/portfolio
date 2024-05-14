document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();

    const formData = new FormData(this);
    const object = {};

    formData.forEach((value, key)=>{
        object[key]= value;
    });

    const jsonData = JSON.stringify(object);

    fetch('URL_DA_SUA_FUNCAO_SERVERLESS', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: jsonData
    })

    .then(response => {
        if (response.ok) {
            alert('Formulário enviado com sucesso!');
        } else {
            alert('Erroao enviar o formulário.');
        }
    })

    .catch(error => {
        console.error('Erro:', error);
    })
})