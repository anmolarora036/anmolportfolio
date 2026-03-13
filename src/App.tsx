import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  FileText, 
  BookOpen,
  Mail,
  PieChart,
  ChevronRight,
  Binary,
  Instagram
} from "lucide-react";

export default function App() {
  // 1. UPDATE YOUR LINKS HERE:
  // Replace the 'url' strings with your actual profile links.
  const links = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/anmol-arora", // <--- Change this
      icon: <Linkedin size={18} />,
      label: "Professional Network",
      color: "group-hover:text-[#0077b5]"
    },
    {
      name: "GitHub",
      url: "https://github.com/anmolarora036", // <--- Change this
      icon: <Github size={18} />,
      label: "Development Portfolio",
      color: "group-hover:text-[#333]"
    },
    {
      name: "Medium",
      url: "https://medium.com/@anmolarora036", // <--- Change this
      icon: <BookOpen size={18} />,
      label: "Research & Insights",
      color: "group-hover:text-[#00ab6c]"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/anmolarora036", // <--- Change this
      icon: <Instagram size={18} />,
      label: "Visual Stories",
      color: "group-hover:text-[#e4405f]"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 selection:bg-accent selection:text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg w-full space-y-8"
      >
        {/* Header Section */}
        <div className="text-center space-y-6">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative inline-block"
          >
            {/* 3. PROFILE PICTURE SIZE INCREASED BY 15% (w-32 h-32) */}
            <div className="w-32 h-32 rounded-2xl overflow-hidden border border-border data-card p-1 mx-auto shadow-xl transition-transform duration-500">
              <img 
                // TO USE YOUR OWN PICTURE:
                // 1. Upload your photo to the 'public' folder and name it 'profile.jpg'
                src="/profile.jpg" 
                alt="Anmol Arora" 
                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  // Fallback to placeholder if profile.jpg is not found
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/data/400/400";
                }}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-2 -right-2 bg-accent p-2 rounded-lg shadow-lg">
              <Binary size={16} className="text-white" />
            </div>
          </motion.div>
          
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">Anmol Arora</h1>
            <div className="flex items-center justify-center gap-2 text-accent font-mono text-sm uppercase tracking-widest">
              <PieChart size={14} />
              <span>Data Scientist turned Strategist</span>
            </div>
          </div>
          
          <p className="text-muted text-sm leading-relaxed max-w-sm mx-auto">
            Bridging the gap between "trust me bro" and actual ROI.


          </p>
        </div>

        {/* Portals Section */}
        <div className="space-y-3">
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted font-bold px-2">Follow my work!</h2>
          <div className="grid gap-3">
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group flex items-center justify-between p-4 rounded-xl data-card border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg bg-slate-50 transition-colors ${link.color}`}>
                    {link.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-slate-800 group-hover:text-accent transition-colors">{link.name}</div>
                    <div className="text-[10px] text-muted uppercase tracking-wider">{link.label}</div>
                  </div>
                </div>
                <ChevronRight size={16} className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Action Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col gap-4 pt-4"
        >
          <a 
            href="/cv.pdf" 
            download
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-accent text-white font-bold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20"
          >
            <FileText size={20} />
            Download Executive CV
          </a>
          
          <div className="flex justify-center gap-6 text-muted">
            <a href="mailto:anmolarora036@gmail.com" className="hover:text-accent transition-colors flex items-center gap-2 text-xs font-medium">
              <Mail size={16} /> anmolarora036@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Terminal Footer */}
        <div className="pt-8 text-center">
          <div className="inline-block font-mono text-[10px] text-accent/60 bg-accent/5 px-3 py-1 rounded-full border border-accent/10">
            $ system.status: operational_v2.0.4
          </div>
        </div>
      </motion.div>
    </div>
  );
}
