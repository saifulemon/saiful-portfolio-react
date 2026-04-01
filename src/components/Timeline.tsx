import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  bullets?: string[];
  isLast?: boolean;
}

export function TimelineItem({ title, subtitle, period, bullets, isLast }: TimelineItemProps) {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] md:left-[50%] top-8 bottom-[-2rem] w-[2px] bg-border md:-translate-x-1/2" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-[50%] top-2 w-6 h-6 rounded-full border-4 border-background bg-primary md:-translate-x-1/2 shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10" />

      <div className="md:grid md:grid-cols-2 md:gap-8 items-start">
        {/* Date for Desktop (Left Side) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="hidden md:block text-right pt-2"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium text-sm">
            {period}
          </span>
        </motion.div>

        {/* Content (Right Side) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 rounded-2xl md:col-start-2"
        >
          <div className="md:hidden mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium text-xs">
              {period}
            </span>
          </div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <h4 className="text-lg font-medium text-muted-foreground mt-1 mb-4">{subtitle}</h4>
          
          {bullets && bullets.length > 0 && (
            <ul className="space-y-2">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start text-sm text-muted-foreground">
                  <span className="mr-2 text-accent mt-1">▹</span>
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </div>
  );
}
