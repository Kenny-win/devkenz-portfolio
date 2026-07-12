// frontend/src/features/portfolio/PortfolioSection.jsx
import ProjectCard from "./ProjectCard";

const PortfolioSection = () => {
  const projects = [
    {
      title: "School Library Management",
      desc: "Built with React.js & Express. Features include Real-time Analytics Dashboard, Role-Based Access Control, and Smart Circulation.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express", "MySQL"],
      githubUrl: "https://github.com/Kenny-win/libtech-library-system",
      demoUrl: "", // Diubah dari "#" menjadi string kosong agar lebih aman
    },
    {
      title: "Restaurant App",
      desc: "Build Restaurant App using flutter and fetch API data, Fiture: Detail and Search.",
      tech: ["Flutter", "Dart", "Provider"],
      githubUrl: "https://github.com/Kenny-win/Restaurant_App_with_API",
      demoUrl: "", // Link demo simulasi
    },
    {
      title: "KeniFy App",
      desc: "Music App with flutter, build with FingerPrint and QR Scanner, and voice recognition",
      tech: ["Flutter", "Dart", "Carousel Slider", "Local Auth", "Mobile Scanner", "Audio Player"],
      githubUrl: "https://github.com/Kenny-win/KeniFy_App",
      demoUrl: "", // Diubah menjadi string kosong
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 w-full bg-slate-100/50 dark:bg-slate-900/30 transition-colors duration-300 px-6 sm:px-12 md:px-20 border-t border-slate-200/60 dark:border-slate-800/60"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-16 space-y-3">
          <h2 className="text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            Portfolio
          </h2>
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Technical Projects &{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-400">
              Software Applications
            </span>
          </h3>
          <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            A collection of web and mobile applications developed through research, experimentation, and real-world institutional needs, documented and shared on open-source platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
