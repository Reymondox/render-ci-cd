import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
const app = express();
const port = 3000

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
})

app.listen(port, () => {
    console.log(`Aplicación ejecutandose en: http://localhost:${port}`)
})