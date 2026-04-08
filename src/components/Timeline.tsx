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
    <div className="relative">
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[11px] top-8 bottom-[-2rem] w-[2px] bg-border" />
      )}

      {/* Row: dot + period badge */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-6 h-6 shrink-0 rounded-full border-4 border-background bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10" />
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium text-xs"
        >
          {period}
        </motion.span>
      </div>

      {/* Card indented below dot */}
      <div className="ml-9">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 rounded-2xl"
        >
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <h4 className="text-lg font-medium text-muted-foreground mt-1 mb-4">{subtitle}</h4>
          {bullets && bullets.length > 0 && (
            <ul className="space-y-2">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-baseline text-sm text-muted-foreground">
                  <span className="mr-2 text-accent shrink-0">▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </div>
  );
}
