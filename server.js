const express = require('express');
const path = require('path');
const app = express();
const port = 5000; // Cambia el puerto según sea necesario

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor de Typer-D escuchando en el puerto ${port}`);
});
