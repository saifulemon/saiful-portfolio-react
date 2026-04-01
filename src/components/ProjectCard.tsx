import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  index: number;
}

export function ProjectCard({ title, description, tags, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className="group relative h-full"
    >
      {/* Glow effect behind card */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative h-full flex flex-col justify-between glass-card p-6 md:p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 ease-out border border-white/5 hover:border-primary/30">
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
              <ExternalLink size={24} />
            </div>
            <div className="flex gap-3">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={20} />
              </button>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map(tag => (
            <span 
              key={tag} 
              className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-foreground/80 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
