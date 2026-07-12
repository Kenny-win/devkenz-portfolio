// frontend/src/features/portfolio/ProjectCard.jsx
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 shadow-xs hover:shadow-md transition-all duration-300"
    >
      <div>
        <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center mb-5 border border-slate-100 dark:border-slate-800 text-indigo-500">
          <Code2 size={20} />
        </div>

        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h4>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
          {project.desc}
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="text-[10px] font-semibold px-2 py-0.5 rounded-sm bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200/20"
            >
              {t}
            </span>
          ))}
        </div>

        {/* PERBAIKAN LOGIKA RENDER TAUTAN AGAR LEBIH AMAN */}
        {/* GANTI BLOK BARIS TOMBOL LINK DENGAN INI */}
        <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            {/* SVG GITHUB MURNI - Anti Blank Screen */}
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.53 1.03 1.53 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.024A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.024 2.747-1.024.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
            Source Code
          </a>

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Live Demo <ExternalLink size={12} />
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
