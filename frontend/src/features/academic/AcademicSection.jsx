// frontend/src/features/academic/AcademicSection.jsx
import { motion } from 'framer-motion';
// import { ExternalLink, Bookmark } from 'lucide-react';
import JournalCard from './JournalCard';

const AcademicSection = () => {
  // 1. Data Pengenalan Akademis / Riwayat Mengajar
  const teachingHistory = [
    {
      role: "Lecturer in Computer Science",
      institution: "Private University",
      period: "Present",
      desc: "Teaching core computer science courses and mentoring undergraduate students in software development projects."
    },
    {
      role: "Mandarin Teacher",
      institution: "Private School",
      period: "Present",
      desc: "Designing competency-based curriculum, teaching Mandarin grammar and conversation, serving as a liaison between Indonesian and Taiwanese schools, delivering technology-enhanced instruction, and preparing students for the HSK proficiency examinations."
    },
    {
      role: "Freelance Short Drama Translator",
      institution: "Freelance",
      period: "Past Experience",
      desc: "Translated Mandarin short-drama scripts into Indonesian while adapting cultural references and expressions to suit local audiences."
    }
  ];

  // 2. Data Publikasi Jurnal SINTA Anda
  const journals = [
    {
      title: "THE ROLE OF PERCEIVED CONVENIENCE ON WHATSAPP ADOPTION USING UTAUT2 MODEL",
      journalName: "Jurnal Teknologi dan Sistem Informasi (Jurteksi)",
      sintaLevel: "SINTA 3",
      year: "2025",
      url: "https://jurnal.stmikroyal.ac.id/index.php?journal=jurteksi&page=article&op=view&path%5B%5D=3765", // Ganti dengan link URL jurnal asli Anda nanti
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "PENGEMBANGAN DAN IMPLEMENTASI APLIKASI PENGELOLAAN PROSES BISNIS PADA PT XYZ",
      journalName: "Universitas Muhammadiyah Mataram (Selaparang : Jurnal Pengabdian Masyarakat Berkemajuan)",
      sintaLevel: "SINTA 4",
      year: "2023",
      url: "https://journal.ummat.ac.id/index.php/jpmb/article/view/19616", // Ganti dengan link URL jurnal asli Anda nanti
      color: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <section id="academic" className="py-24 w-full bg-white dark:bg-slate-950 transition-colors duration-300 px-6 sm:px-12 md:px-20 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center md:text-left mb-16 space-y-3">
          <h2 className="text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            Academic & Research
          </h2>
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Educational Dedication & <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-indigo-500 dark:from-purple-400 dark:to-indigo-400">Research Publications</span>
          </h3>
          <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Dedicated to empowering students through formal education while advancing academic knowledge through nationally accredited research and scholarly publications.
          </p>
        </div>

        {/* Layout Grid Responsif */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* KOLOM KIRI: Lini Masa Mengajar (6 dari 12 bagian grid) */}
          <div className="lg:col-span-6 space-y-8">
            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-6">
              🏫 Teaching & Professional Experience
            </h4>
            
            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 pl-6 space-y-8">
              {teachingHistory.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Titik Penanda Lini Masa */}
                  <div className="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-indigo-600 dark:border-indigo-400 group-hover:bg-indigo-600 transition-colors" />
                  
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-2.5 py-0.5 rounded-sm">
                    {item.period}
                  </span>
                  <h5 className="text-base font-bold text-slate-900 dark:text-slate-100 mt-2">
                    {item.role}
                  </h5>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {item.institution}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* KOLOM KANAN: Pajangan Jurnal SINTA (6 dari 12 bagian grid) */}
          <div className="lg:col-span-6 space-y-6">
            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-6">
              📚 Accredited Journal Publications
            </h4>

            <div className="space-y-4">
              {journals.map((journal, index) => (
                <JournalCard key={index} journal={journal} index={index} />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AcademicSection;