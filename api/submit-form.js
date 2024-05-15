export default async function handler(req, res) {
    if (req.method === 'POST') {

      try{
        const formData = req.body;

        const spreadSheetId = '1hq6P0zWTC4oDjpYpQygPGEuinMEzDBBTF_F61wOzwg8';
        const range = 'A1:C1';

        const requestBody = {
          values: [
            ['Nome', 'Email', 'Mensagem'],
            [formData.name, formData.email, formData.message]
          ]
        };

        const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS&key=FORMS_KEY', {
          method: 'POST',
          headers: {
            'Content-Type': 'applicaion/json',
          },
          body:JSON.stringify(requestBody),
        });

        if (response.ok) {
          res.status(200).json({ success: true }); // Exemplo de resposta de sucesso
        } else {
          res.status(500).json({ success: false, message: 'Erro ao enviar os dados para a planilha.' });
        }
      } catch (error) {
        console.error('Erro ao envar os dados para a planilha:', error);
        res.status(500).json({success:false, message: 'Erro ao enviar os dados para a planilha.'});
      }
    } else {
      res.status(405).json({message: 'Método não permitido'});
    }
  }
