import { motion } from 'framer-motion';
import { ShieldCheck, Database, BarChart3 } from 'lucide-react';

const projects = [
  {
    title: 'Real-Time Aviation Telemetry & Log Monitoring Platform',
    organization: 'L&T Technology Services',
    highlights: [
      'Led a 4-member team to develop a real-time flight telemetry platform enabling severity-based subsystem log monitoring for an aviation client.',
      'Coordinated requirements and delivery, ensuring client objectives were met and team output aligned with project milestones.'
    ],
    tags: ['Aviation Telemetry', 'Log Monitoring', 'L&T Technology Services'],
    icon: ShieldCheck
  },
  {
    title: 'Secured Data Governance & Reporting Platform',
    organization: 'Data Governance Platform',
    highlights: [
      'Designed tiered access controls and row-level security across 10+ user groups, reducing data exposure by 93%.',
      'Enabled risk reporting and analytics for 50+ user tiers, supporting compliance and data governance requirements.',
      'Tools Used: Python, MySQL, Power BI'
    ],
    tags: ['Python', 'MySQL', 'Power BI', 'Access Control', 'Row-Level Security'],
    icon: Database
  },
  {
    title: 'COVID-19 Air Travel Decision Support System',
    organization: 'Aviation Decision Support',
    highlights: [
      'Analysed 1.2M+ flights across 321 airlines, identifying a 71% decline in average daily flights and developing a 7-page decision-support tool for capacity analysis.',
      'Tools Used: Tableau, Excel, Pandas'
    ],
    tags: ['Tableau', 'Excel', 'Pandas', 'Data Analysis'],
    icon: BarChart3
  }
];

const Projects = () => {
  return (
    <section id="projects" className="pt-12 pb-24 relative bg-gradient-subtle">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4"><span className="text-gradient">Projects Undertaken</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">Telemetry platforms, secure governance systems, and analytical decision-support tools.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: index * 0.15 }} className="group">
              <div className="glass-card rounded-2xl p-6 sm:p-8 h-full hover-lift flex flex-col relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-1">{project.title}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{project.organization}</p>
                  <ul className="space-y-3 mb-6 flex-grow">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-muted-foreground font-body">
                        <span className="text-primary shrink-0">✦</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground font-body">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
