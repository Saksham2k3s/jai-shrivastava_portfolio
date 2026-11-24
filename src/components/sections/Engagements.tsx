import { motion } from 'framer-motion';
import { Users, Trophy, TrendingUp } from 'lucide-react';

const engagements = [
  {
    title: 'HubSpot | Volunteer CV Reviewer',
    category: 'Volunteer',
    highlights: [
      'Reviewed CVs for Gen Z candidates, applying career strategy and ATS optimisation principles.'
    ],
    icon: Users
  },
  {
    title: 'Deloitte Case Competition',
    category: 'Competition Award',
    highlights: [
      'Ranked 3rd among 10 teams for designing a phased four-day workweek strategy for a technology client and presenting the recommendation to Deloitte consultants.'
    ],
    icon: Trophy
  },
  {
    title: 'Independent Analytics Project',
    category: 'Analytics Project',
    highlights: [
      'Developed a weighted tennis-ranking model using 14,000+ ATP matches.'
    ],
    icon: TrendingUp
  }
];

const Engagements = () => {
  return (
    <section id="engagements" className="py-24 relative">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4"><span className="text-gradient">Extra - Mural Engagements</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">Volunteering, competitive case analysis, and independent research models.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {engagements.map((eng, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: index * 0.1 }}>
              <div className="glass-card rounded-2xl p-6 sm:p-8 h-full hover-lift flex flex-col relative overflow-hidden group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors shrink-0">
                    <eng.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs text-primary font-medium tracking-wider uppercase">{eng.category}</span>
                    <h3 className="text-lg font-display font-semibold text-foreground leading-snug">{eng.title}</h3>
                  </div>
                </div>
                <ul className="space-y-3 mt-2 flex-grow">
                  {eng.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-muted-foreground font-body">
                      <span className="text-primary shrink-0">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engagements;
