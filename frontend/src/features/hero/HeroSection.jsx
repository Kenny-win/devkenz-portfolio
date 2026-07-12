// frontend/src/features/hero/HeroSection.jsx
import { motion } from "framer-motion";
import { ArrowRight, Code, Award, GraduationCap, SpeakerIcon } from "lucide-react";
// Import foto profil Anda dari folder assets
import profileImg from "../../assets/profil.jpeg";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6 sm:px-12 md:px-20 z-0"
    >
      {/* Karakter Mandarin (Hanzi) Aesthetic di Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-1 flex items-center justify-center select-none pointer-events-none p-4"
      >
        <h1 className="text-[28vw] md:text-[22vw] font-black tracking-widest font-serif leading-none text-slate-300/30 dark:text-slate-800/30 transition-colors duration-300">
          科技
        </h1>
      </motion.div>

      {/* Grid Utama: Otomatis 1 kolom di HP, 2 kolom di Desktop Monitor */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center z-10 py-20">
        {/* KOLOM KIRI: Teks & Informasi (Mengambil 7 dari 12 bagian grid di desktop) */}
        <div className="md:col-span-7 text-center md:text-left order-2 md:order-1">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Badge Pengenalan */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 dark:bg-indigo-950/60 dark:border-indigo-900/50 dark:text-indigo-400 text-xs font-semibold tracking-wide uppercase shadow-xs"
            >
              <GraduationCap size={14} /> Master of Information Technology | HSK
              5 Certified
            </motion.div>

            {/* Headline Utama */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-slate-900 dark:text-white"
            >
              Hello, I'm <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-violet-500 to-emerald-500 dark:from-indigo-400 dark:via-purple-400 dark:to-emerald-400">
                Kenny Calnelius Winata, M.Kom.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="max-w-2xl mx-auto md:mx-0 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              I am a{" "}
              <strong className="text-slate-900 dark:text-slate-100 font-semibold">
                Computer Science Lecturer
              </strong>{" "}
              and a{" "}
              <strong className="text-slate-900 dark:text-slate-100 font-semibold">
                Mandarin Educator
              </strong>
              . My expertise focuses on website and mobile app technology development, mentoring both traditional and simplified Mandarin, and working as a freelance short drama translator.
            </motion.p>

            {/* Tag Keahlian */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center md:justify-start gap-2.5"
            >
              <span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/60 shadow-xs">
                <Code size={12} className="text-indigo-500" /> Full-Stack Coding
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/60 shadow-xs">
                🎓 Data Analysis
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/60 shadow-xs">
                <Award size={12} className="text-emerald-500" /> Mandarin
                Traditional & Simplified
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/60 shadow-xs">
                <SpeakerIcon size={12} className="text-orange-500" />
                Public Speaking
              </span>
            </motion.div>

            {/* Tombol CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md shadow-indigo-600/10 transition-all hover:-translate-y-0.5"
              >
                View Portfolio
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 font-medium transition-all"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* KOLOM KANAN: Foto Profil Interaktif (Mengambil 5 bagian grid di desktop) */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center"
          >
            {/* Ornamen Bingkai Belakang Bergerak (Blob Animation) */}
            <div className="absolute inset-0 bg-linear-to-tr from-indigo-500 to-emerald-400 rounded-full blur-xl opacity-30 dark:opacity-20 animate-pulse" />

            {/* Bingkai Luar Foto (Geometris Bulat Lembut) */}
            <div className="absolute inset-2 border-2 border-dashed border-indigo-500/40 dark:border-indigo-400/30 rounded-4xl animate-[spin_40s_linear_infinite]" />

            {/* Wadah Foto Utama */}
            <div className="w-full h-full bg-linear-to-b from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-4xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl flex items-center justify-center">
              {/* Jika file profile.png belum Anda masukkan, teks alt ini akan muncul sementara */}
              <img
                src={profileImg}
                alt="Foto Profil"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  // Fallback jika gambar belum dipasang di folder assets
                  e.target.style.display = "none";
                  e.target.parentNode.innerHTML =
                    '<span class="text-slate-400 font-medium text-sm">Your Photo Profile</span>';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
