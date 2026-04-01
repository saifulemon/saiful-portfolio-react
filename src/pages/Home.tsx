import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/data';
import { Hero3D } from '@/components/Hero3D';
import { Navbar } from '@/components/Navbar';
import { SectionHeading } from '@/components/SectionHeading';
import { TimelineItem } from '@/components/Timeline';
import { ProjectCard } from '@/components/ProjectCard';

export function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      {/* Background grid pattern */}
      <div className="fixed inset-0 z-[-2] bg-grid-pattern opacity-[0.15] pointer-events-none" />

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <Hero3D />
          
          <div className="max-w-7xl mx-auto w-full z-10 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-primary font-medium tracking-wider uppercase mb-4 pl-1">
                  Hello, world. I am
                </h2>
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold text-foreground tracking-tight leading-none mb-6">
                  {PORTFOLIO_DATA.personal.name}.<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    I build the web.
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                  A {PORTFOLIO_DATA.personal.title} specializing in transforming ideas into clean, maintainable, and user-centric digital products.
                </p>
                
                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="#projects" 
                    className="px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-primary to-accent text-background hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1 transition-all duration-300"
                  >
                    View My Work
                  </a>
                  <a 
                    href="#contact" 
                    className="px-8 py-4 rounded-full font-semibold bg-white/5 border border-white/10 text-foreground hover:bg-white/10 transition-all duration-300"
                  >
                    Contact Me
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative aspect-square rounded-3xl overflow-hidden glass border border-white/10 p-2">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/avatar.png`} 
                    alt="Saiful Islam" 
                    className="w-full h-full object-cover rounded-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 lg:pl-10">
                <SectionHeading title="About Me" subtitle="A brief introduction to who I am and what I do." />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="prose prose-invert max-w-none prose-lg text-muted-foreground"
                >
                  <p>{PORTFOLIO_DATA.personal.bio}</p>
                  
                  <div className="mt-8 grid sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-primary font-medium">Location</span>
                      <span className="text-foreground">{PORTFOLIO_DATA.personal.location}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-primary font-medium">Email</span>
                      <span className="text-foreground">{PORTFOLIO_DATA.personal.email}</span>
                    </div>
                  </div>
                  
                  <div className="mt-10 flex gap-4">
                    {[
                      { icon: Github, url: PORTFOLIO_DATA.personal.github },
                      { icon: Linkedin, url: PORTFOLIO_DATA.personal.linkedin },
                      { icon: Facebook, url: PORTFOLIO_DATA.personal.facebook }
                    ].map((social, i) => (
                      <a 
                        key={i} 
                        href={social.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Technical Arsenal" subtitle="The tools and technologies I use to build digital experiences." />
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Frontend", skills: PORTFOLIO_DATA.skills.frontend, color: "from-blue-500 to-cyan-400" },
                { title: "Backend", skills: PORTFOLIO_DATA.skills.backend, color: "from-purple-500 to-blue-500" },
                { title: "Tools & Others", skills: PORTFOLIO_DATA.skills.tools, color: "from-teal-400 to-emerald-400" }
              ].map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-8 rounded-3xl"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map(skill => (
                      <span 
                        key={skill}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION SECTION */}
        <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-12">
              {/* Experience */}
              <div>
                <SectionHeading title="Experience" />
                <div className="space-y-12">
                  {PORTFOLIO_DATA.experience.map((exp, idx) => (
                    <TimelineItem 
                      key={exp.id}
                      title={exp.role}
                      subtitle={exp.company}
                      period={exp.period}
                      bullets={exp.achievements}
                      isLast={idx === PORTFOLIO_DATA.experience.length - 1}
                    />
                  ))}
                </div>
              </div>
              
              {/* Education */}
              <div id="education">
                <SectionHeading title="Education" />
                <div className="space-y-12">
                  {PORTFOLIO_DATA.education.map((edu, idx) => (
                    <TimelineItem 
                      key={edu.id}
                      title={edu.degree}
                      subtitle={edu.institution}
                      period={edu.period}
                      isLast={idx === PORTFOLIO_DATA.education.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Featured Projects" subtitle="A selection of my recent work and personal projects." />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {PORTFOLIO_DATA.projects.map((project, idx) => (
                <ProjectCard 
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6"
            >
              Let's Build Something <span className="text-primary text-glow">Together</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground mb-12"
            >
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-6"
            >
              <a 
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-background font-bold hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300 hover:-translate-y-1"
              >
                <Mail size={20} />
                Say Hello
              </a>
              <button 
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-foreground font-bold hover:bg-white/10 transition-all duration-300"
                onClick={() => window.open(PORTFOLIO_DATA.personal.linkedin, '_blank')}
              >
                <Linkedin size={20} />
                Connect
              </button>
            </motion.div>
            
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <span>{PORTFOLIO_DATA.personal.phone}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 px-4 text-center">
        <p className="text-muted-foreground text-sm">
          Designed & Built with 💙 by {PORTFOLIO_DATA.personal.name}. <br className="sm:hidden" />
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </div>
  );
}
