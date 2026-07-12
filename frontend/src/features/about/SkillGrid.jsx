// frontend/src/features/about/SkillGrid.jsx
import { motion } from "framer-motion";

const SkillGrid = ({ credentials }) => {
  return (
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {credentials.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }} // Efek animasi hover naik sedikit yang keren
          className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 shadow-xs hover:shadow-md transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-800">
            {item.icon}
          </div>
          <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">
            {item.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillGrid;
