// frontend/src/features/academic/JournalCard.jsx
import { motion } from "framer-motion";
import { Bookmark, ExternalLink } from "lucide-react";

const JournalCard = ({ journal, index }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 shadow-xs flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all"
    >
      <div>
        {/* Badge SINTA Tingkat Akreditasi */}
        <div className="flex justify-between items-center mb-4">
          <span className="flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <Bookmark size={14} /> Peer-Reviewed Journal • {journal.year}
          </span>
          <span
            className={`text-[10px] font-bold tracking-wider px-2 py-1 rounded-md text-white bg-linear-to-r ${journal.color} shadow-xs`}
          >
            {journal.sintaLevel}
          </span>
        </div>

        <h5 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 leading-snug mb-2 group-hover:text-indigo-600">
          "{journal.title}"
        </h5>

        <p className="text-xs italic text-slate-500 dark:text-slate-400">
          Published in: {journal.journalName}
        </p>
      </div>

      {/* Tombol Tautan Eksternal ke Jurnal */}
      <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex justify-end">
        <a
          href={journal.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          View Journal <ExternalLink size={12} />
        </a>
      </div>
    </motion.div>
  );
};

export default JournalCard;
