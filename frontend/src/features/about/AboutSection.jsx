// frontend/src/features/about/AboutSection.jsx
import { useState } from 'react'; // <-- 1. Tambahkan useState
import { BookOpen, Award, GraduationCap, Globe, ArrowUpRight } from 'lucide-react';
import SkillGrid from './SkillGrid';
import CertificateModal from './CertificateModal'; // <-- 2. Import Modal

const AboutSection = () => {
  // 3. State untuk mengontrol buka/tutup modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const credentials = [
    { icon: <GraduationCap className="text-indigo-500" size={24} />, title: "Academic Education", desc: "Bachelor's Degree in Computer Science and a Master's Degree in Information Technology. Currently serving as a Lecturer in the Bachelor's Program in Computer Science." },
    { icon: <Globe className="text-emerald-500" size={24} />, title: "HSK Level 5 Certification", desc: "Proficient in advanced Mandarin Chinese. Actively working as a Mandarin teacher and a freelance short-drama translator." },
    { icon: <BookOpen className="text-violet-500" size={24} />, title: "Research & Publications", desc: "Published two peer-reviewed research papers in nationally accredited Indonesian journals (SINTA 3 and SINTA 4)." },
    { icon: <Award className="text-amber-500" size={24} />, title: "IT & Language Certifications", desc: "Holder of multiple professional certifications that combine expertise in Information Technology and language proficiency." }
  ];

  return (
    <section id="about" className="py-24 w-full bg-slate-100/50 dark:bg-slate-900/30 transition-colors duration-300 px-6 sm:px-12 md:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center md:text-left mb-16 space-y-3">
          <h2 className="text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">About Me</h2>
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            The Synergy Between <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-emerald-500 dark:from-indigo-400 dark:to-emerald-400">Code & Language</span>
          </h3>
          <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            My professional journey is driven by three core passions: academic, software engineering and bridging cross-cultural communication through the Mandarin language.
          </p>
        </div>

        {/* Grid Konten */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* KOLOM KIRI */}
          <div className="lg:col-span-5 space-y-6 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              As a <strong className="text-slate-900 dark:text-slate-100 font-semibold">Master's graduate in Information Technology</strong>, I have dedicated myself to higher education as a Lecturer.
            </p>
            <p>
             At the same time, backed by my <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">HSK-5</strong> certification, I actively work as a Mandarin teacher and a digital media translator.
            </p>
            
            {/* 4. TOMBOL BARU UNTUK MEMBUKA SERTIFIKAT */}
            <div className="pt-2">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors border-b-2 border-indigo-500/30 pb-1 cursor-pointer"
              >
                View All Official Certifications <ArrowUpRight size={14} />
              </button>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 shadow-xs">
              <span className="block font-serif text-lg italic text-slate-700 dark:text-slate-300 mb-1">"学而不思则罔，思而不学则殆"</span>
              <span className="text-xs text-slate-500">- Learning without thinking is futile; thinking without learning is perilous.</span>
            </div>
          </div>

          {/* KOLOM KANAN */}
          <div className="lg:col-span-7">
            <SkillGrid credentials={credentials} />
          </div>

        </div>

      </div>

      {/* 5. INJEKSI MODAL DI SINI */}
      <CertificateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default AboutSection;