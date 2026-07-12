// frontend/src/features/about/CertificateModal.jsx
import { motion, AnimatePresence } from "framer-motion";
import { X, Award} from "lucide-react";

const CertificateModal = ({ isOpen, onClose }) => {
  // Data Sertifikat Anda (Silakan sesuaikan URL gambar/tautannya nanti)
  const certificates = [
    {
      title: "Data Science Expert",
      issuer: "IDCamp Indosat Ooredoo Hutchison",
      date: "2026",
      credentialNum: "IDCAMP2025/L3-DS-040",
      category: "IT",
    },
    {
      title: "Mathematics for Data Science",
      issuer: "Dicoding Indonesia",
      date: "2026",
      credentialNum: "07Z6783E2PQR",
      category: "IT",
    },
    {
      title: "Data Science Implementation",
      issuer: "Dicoding Indonesia",
      date: "2026",
      credentialNum: "2VX306J1JXYQ",
      category: "IT",
    },
    {
      title: "Data Science Intermediate Level",
      issuer: "IDCamp Indosat Ooredoo Hutchison",
      date: "2026",
      credentialNum: "IDCAMP2025/L2-DS-161",
      category: "IT",
    },
    {
      title: "Fundamental Analisis Data",
      issuer: "Dicoding Indonesia",
      date: "2026",
      credentialNum: "6RPN78KE9X2M",
      category: "IT",
    },
    {
      title: "Machine Learning Expert",
      issuer: "IDCamp Indosat Ooredoo Hutchison",
      date: "2025",
      credentialNum: "IDCAMP2024/L3-ML-019",
      category: "IT",
    },
    {
      title: "Machine Learning Implementation",
      issuer: "Dicoding Indonesia",
      date: "2025",
      credentialNum: "72ZD5NNVVZYW",
      category: "IT",
    },
    {
      title: "Machine Learning Intermediate",
      issuer: "IDCamp Indosat Ooredoo Hutchison",
      date: "2025",
      credentialNum: "IDCAMP2024/L2-ML-050",
      category: "IT",
      },
    {
      title: "Google Certified Educator L1",
      issuer: "Google",
      date: "2023",
      credentialNum: "-",
      category: "IT",
    },
    {
      title: "Indonesian Best Mandarin Speech Mentor (最佳輔導教師)",
      issuer: "Panin Bank",
      date: "2023",
      credentialNum: "-",
      category: "Language",
    },
    {
      title: "Indonesian Excellent Mandarin Speech Mentor (优秀辅导教师)",
      issuer: "Panin Bank",
      date: "2023",
      credentialNum: "-",
      category: "Language",
    },
    {
      title: "Fundamental Aplikasi Flutter",
      issuer: "Dicoding Indonesia",
      date: "2022",
      credentialNum: "MEPJKEMNWX3V",
      category: "IT",
    },
    {
      title: "華文教師線上遠距研習班",
      issuer: "Chung Yuan Christian University",
      date: "2022",
      credentialNum: "-",
      category: "Language",
    },
    {
      title: "僑務委員會結業證書",
      issuer: "Overseas Community Affairs Council, Taiwan (R.O.C.)",
      date: "2022",
      credentialNum: "1110200032",
      category: "Language",
      },
    {
      title: "Implementation Decision Tree With Python Certified",
      issuer: "Alibaba Cloud",
      date: "2021",
      credentialNum: "ACLD29210200045446",
      category: "IT",
    },
    {
      title: "Sertifikasi Kompetensi HSK 5",
      issuer: "Hanban / Center for Language Education and Cooperation",
      date: "2018",
      credentialNum: "-",
      category: "Language",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs">
          {/* Latar belakang penutup klik */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
            onClick={onClose}
          />

          {/* Konten Utama Modal (Responsif penuh mengikuti tinggi & lebar layar) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xl z-10 scrollbar-thin"
          >
            {/* Header Modal */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Award className="text-indigo-500" size={22} />
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Credentials & Certifications
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Daftar Sertifikat (Grid Responsif) */}
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-indigo-500/30 transition-all"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                        {cert.category}
                      </span>
                      <span className="text-xs text-slate-400">
                        {cert.date}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {cert.issuer}
                    </p>
                  </div>

                  <h4 className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 text-indigo-600 dark:text-indigo-400 transition-colors whitespace-nowrap">
                    Credential ID: {cert.credentialNum}
                  </h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal;
