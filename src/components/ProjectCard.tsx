import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  highlights?: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

export function ProjectCard({ title, description, tags, highlights, liveUrl, githubUrl, index }: ProjectCardProps) {
  return (
    <motion.a
      href={liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: Math.min(index * 0.07, 0.35), duration: 0.35 }}
      className={`group relative h-full block${!liveUrl ? ' pointer-events-none' : ''}`}
    >
      {/* Glow effect behind card */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative h-full flex flex-col justify-between glass-card p-6 md:p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 ease-out border border-white/5 hover:border-primary/30">
        <div>
          <div className="flex justify-between items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
              <ExternalLink size={24} />
            </div>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={20} />
              </a>
            )}
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>

          {highlights && highlights.length > 0 && (
            <ul className="space-y-2">
              {highlights.map((point, idx) => (
                <li key={idx} className="flex items-baseline text-sm text-muted-foreground">
                  <span className="mr-2 text-accent shrink-0">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
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
    </motion.a>
  );
}
