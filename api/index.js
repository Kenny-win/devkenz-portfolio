const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import Urusan Routing
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware Konfigurasi CORSnpm install -D nodemon
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? ['https://nama-web-anda.vercel.app'] 
        : 'http://localhost:5173', 
    methods: ['POST', 'GET'],
    credentials: true
}));

app.use(express.json());

// 1. Rute bawaan untuk cek kesehatan server (Health Check)
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Clean Backend siap digunakan!' });
});

// 2. Hubungkan Rute Kontak Utama (Prefix: /api/contact)
app.use('/api/contact', contactRoutes);

// Ekspor untuk keperluan Serverless Vercel
module.exports = app;

// Menjalankan server lokal (Development)
if (process.env.NODE_ENV !== 'production') {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Backend lokal berjalan dengan rapi di http://localhost:${PORT}`);
    });
}