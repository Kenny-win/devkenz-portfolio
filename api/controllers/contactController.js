const nodemailer = require('nodemailer');

// @desc    Kirim pesan dari form kontak ke email pribadi
// @route   POST /api/contact
// @access  Public
const sendContactEmail = async (req, res) => {
    const { name, email, subject, message } = req.body;

    // 1. Validasi Input
    if (!name || !email || !message) {
        return res.status(400).json({ 
            success: false, 
            message: 'Nama, Email, dan Pesan wajib diisi!' 
        });
    }

    // 2. Konfigurasi Transporter Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // 3. Konfigurasi Konten Email
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `[Personal Web] ${subject || 'Pesan Baru'} dari ${name}`,
        html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333;">
                <h3 style="color: #4F46E5;">Pesan Baru dari Website Personal</h3>
                <hr style="border: 1px solid #eee;" />
                <p><strong>Nama Pengirim:</strong> ${name}</p>
                <p><strong>Email Pengirim:</strong> ${email}</p>
                <p><strong>Isi Pesan:</strong></p>
                <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb; white-space: pre-wrap;">
                    ${message}
                </div>
            </div>
        `
    };

    // 4. Eksekusi Pengiriman
    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ 
            success: true, 
            message: 'Pesan Anda berhasil dikirim!' 
        });
    } catch (error) {
        console.error('Error di Contact Controller:', error);
        return res.status(500).json({ 
            success: false, 
            message: 'Gagal mengirim pesan. Silakan coba lagi nanti.' 
        });
    }
};

module.exports = {
    sendContactEmail
};