// frontend/src/features/contact/ContactSection.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { sendContactMessage } from '../../services/api';

const ContactSection = () => {
  // State untuk menyimpan data input form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State untuk status pengiriman
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  // Menangani perubahan input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Menangani submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await sendContactMessage(formData);
      if (response.success) {
        setStatus({ loading: false, success: true, error: null });
        // Reset form setelah berhasil kirim
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      setStatus({ 
        loading: false, 
        success: false, 
        error: err.message || 'Gagal mengirim pesan. Silakan coba lagi.' 
      });
    }
  };

  return (
    <section id="contact" className="py-24 w-full bg-white dark:bg-slate-950 transition-colors duration-300 px-6 sm:px-12 md:px-20 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center md:text-left mb-16 space-y-3">
          <h2 className="text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            Contact
          </h2>
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Let's Connect & <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-purple-400">Collaborate</span>
          </h3>
          <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Have an exciting project, an academic research opportunity, a Mandarin language program, or simply want to start a conversation? Feel free to get in touch!
          </p>
        </div>

        {/* Layout Grid Responsif 2 Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* KOLOM KIRI: Info Kontak / Teks (5 dari 12 bagian) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60">
              <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <Mail size={18} className="text-indigo-500" /> Contact Information
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Messages submitted through this contact form will be delivered directly to my personal email inbox.
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                I typically respond within 1–2 business days.
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: Formulir Kontak Interaktif (7 dari 12 bagian) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              
              {/* Notifikasi Sukses */}
              {status.success && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 text-emerald-800 dark:text-emerald-400 flex items-center gap-2 text-xs sm:text-sm font-medium">
                  <CheckCircle2 size={18} /> Your message has been sent successfully! Please check your email inbox regularly for my response.
                </motion.div>
              )}

              {/* Notifikasi Error */}
              {status.error && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 text-rose-800 dark:text-rose-400 flex items-center gap-2 text-xs sm:text-sm font-medium">
                  <AlertCircle size={18} /> {status.error}
                </motion.div>
              )}

              {/* Input Nama & Email Sejajar di Desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Full Name *</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Full Name" className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-hidden focus:border-indigo-500 transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Email Address *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-hidden focus:border-indigo-500 transition-colors" />
                </div>
              </div>

              {/* Input Subject */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Message Subject" className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-hidden focus:border-indigo-500 transition-colors" />
              </div>

              {/* Input Area Pesan */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Message *</label>
                <textarea required name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Write your message here..." className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-hidden focus:border-indigo-500 transition-colors resize-none" />
              </div>

              {/* Tombol Kirim / Submit */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium shadow-md shadow-indigo-600/10 transition-all cursor-pointer"
              >
                {status.loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;