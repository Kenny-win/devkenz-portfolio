// frontend/src/services/api.js

const API_BASE_URL = import.meta.env.PROD 
    ? 'https://nama-web-backend-anda.vercel.app/api' // URL Vercel Anda nanti
    : 'http://localhost:3000/api';

/**
 * Fungsi untuk mengirim pesan kontak ke backend
 * @param {Object} formData - { name, email, subject, message }
 */
export const sendContactMessage = async (formData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Terjadi kesalahan pada server.');
        }

        return data; // Mengembalikan { success: true, message: '...' }
    } catch (error) {
        console.error('API Error:', error.message);
        throw error;
    }
};