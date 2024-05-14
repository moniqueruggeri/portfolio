export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Aqui você pode escrever a lógica para enviar os dados para o Google Sheets
      // Você pode usar bibliotecas como axios ou fetch para fazer solicitações HTTP
      // Exemplo:
      // const response = await fetch('URL_DA_API_DO_GOOGLE_SHEETS', {
      //   method: 'POST',
      //   body: JSON.stringify(req.body),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
      // if (response.ok) {
      //   res.status(200).json({ success: true });
      // } else {
      //   res.status(500).json({ success: false });
      // }
      res.status(200).json({ success: true }); // Exemplo de resposta de sucesso
    } else {
      res.status(405).json({ message: 'Método não permitido' });
    }
  }