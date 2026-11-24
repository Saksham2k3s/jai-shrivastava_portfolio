import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Security & Risk Assessment',
    color: 'from-purple-500 to-purple-600',
    skills: [
      'Risk Assessment',
      'Risk Quantification',
      'Third-Party Risk',
      'Security Compliance',
      'Remediation Governance',
      'Audit Readiness',
      'Application Security',
      'Vulnerability Management'
    ]
  },
  {
    title: 'Frameworks & Standards',
    color: 'from-purple-600 to-purple-700',
    skills: [
      'NIST CSF',
      'ISO 27001',
      'SOC 2',
      'GDPR',
      'CIS Benchmarks',
      'OWASP Top 10',
      'CWE Top 25',
      'ISO 42001',
      'DORA',
      'NIS2',
      'EU AI Act'
    ]
  },
  {
    title: 'Cloud & DevOps',
    color: 'from-purple-500 to-violet-600',
    skills: [
      'Azure',
      'Azure DevOps',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'CI/CD',
      'YAML',
      'Bash'
    ]
  },
  {
    title: 'Security Tools',
    color: 'from-violet-500 to-purple-600',
    skills: [
      'Jira',
      'GitGuardian',
      'SonarQube',
      'Checkmarx',
      'Burp Suite',
      'Docker Bench',
      'Clair',
      'Kube-Bench'
    ]
  },
  {
    title: 'Data & Analytics',
    color: 'from-purple-600 to-indigo-600',
    skills: [
      'Power BI',
      'Excel',
      'Tableau',
      'Python',
      'Pandas',
      'SQL',
      'MySQL'
    ]
  },
  {
    title: 'Languages',
    color: 'from-purple-500 to-fuchsia-600',
    skills: [
      'English (Professionally Fluent)'
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4"><span className="text-gradient">Technical Skills &amp; Languages</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">Security engineering, regulatory frameworks, DevSecOps tools, and analytical systems.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: index * 0.1 }}>
              <div className="glass-card rounded-2xl p-6 h-full relative overflow-hidden group hover-lift">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${category.color}`} />
                <h3 className="text-xl font-display font-semibold text-foreground mb-6 pt-2">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="text-xs px-3 py-1.5 rounded-lg bg-secondary text-foreground font-body">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
