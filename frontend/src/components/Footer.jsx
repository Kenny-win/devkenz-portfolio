// frontend/src/components/Footer.jsx
const Footer = () => {
  // Mengambil tahun secara dinamis agar tidak perlu diubah manual setiap tahun
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-900 transition-colors duration-300 px-6 sm:px-12 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
        
        {/* Sisi Kiri: Hak Cipta & Nama Gelar Anda */}
        <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
          © {currentYear} <span className="text-slate-900 dark:text-slate-100 font-semibold">Kenny Calnelius Winata, M.Kom.</span> • All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;