export default async function handler(req:any, res:any) {
    const { message } = req.query;
  
    try {
      const response = await fetch(`https://api.qobilbek.dev/chatgpt/api?message=${encodeURIComponent(message)}`);
      const data = await response.text();
  
      res.status(200).send(data);
    } catch (error) {
      console.error('API bilan bog‘lanishda xatolik:', error);
      res.status(500).json({ ok: false, message: "Server bilan bog‘lanishda xatolik yuz berdi." });
    }
  }
  