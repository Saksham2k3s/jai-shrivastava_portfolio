import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Sales Consultant',
    company: 'Specsavers Opticians',
    period: 'Apr 2025 – Present',
    highlights: [
      'Ranked #2 among 20+ colleagues in 3 of 4 quarters, serving 1,500+ customers and consistently exceeding sales value, eye test conversion, and ATV targets.',
      'Maintained average transaction values 4-8% above regional benchmarks and achieved a 62% cross-sell rate versus a 54% Dublin average using Excel and Power BI.',
      'Contributed to a 9-point NPS increase from 66 to 75.5 by applying GDPR-aware, customer-focused communication and building trust for repeat business.'
    ]
  },
  {
    title: 'Associate Security Consultant',
    company: 'Infosys Limited',
    period: 'Feb 2023 – Aug 2023',
    highlights: [
      'Delivered 20+ security and compliance risk assessments for financial-services applications, evaluating risks against OWASP and CWE Top 25.',
      'Conducted automated and manual security testing, including secure code reviews and Burp Suite assessments, identifying vulnerabilities such as SQL injection, XSS, CSRF, and IDOR.',
      'Analysed scan results to distinguish true and false positives, documenting technical findings with replication evidence and tracking remediation through JIRA.',
      'Partnered with development teams to address vulnerabilities in application code and server configurations, translating findings into actionable remediation requirements.',
      'Secured €180K executive approval within 14 days for priority security fixes by translating critical technical vulnerabilities into business, financial, and regulatory risk.',
      'Streamlined JIRA-based security triage across security and development teams, improving resolution time by 84% and fix rate by 67%.',
      'Prepared technical, executive, and remediation reports, presenting security exposure and treatment priorities to technical teams and management stakeholders.'
    ]
  },
  {
    title: 'Security Engineer',
    company: 'L&T Technology Services',
    period: 'Feb 2021 – Jan 2023',
    highlights: [
      'Promoted from Associate Engineer to Engineer for contributions to cloud-based DevOps platform security.',
      'Embedded security across the SDLC, integrating controls into development and deployment workflows for a cloud-based platform.',
      'Improved CIS compliance from 52% to 84% across five Kubernetes environments through Kube-Bench audits, RBAC controls, automated policies, and cluster hardening.',
      'Reduced hardcoded credential exposure by 87% by implementing automated repository monitoring with GitGuardian across GitHub workflows.',
      'Integrated SonarQube and Checkmarx with Jenkins and Azure DevOps CI/CD pipelines using YAML, enabling automated SAST and software composition analysis.',
      'Prioritized 50+ security risks per release cycle by exposure and business impact, reducing detection time by 90% and tracking remediation through closure.',
      'Strengthened Docker and container security using Docker Bench for Security and Clair, blocking deployments involving 40+ known CVEs.',
      'Hardened Kubernetes environments with Kube-Bench audits, RBAC controls, OPA/Gatekeeper policies, and YAML configuration fixes.',
      'Conducted security assessments against OWASP and CWE Top 25, preparing technical reports, proof-of-concepts, and remediation guidance for engineering teams.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="pt-24 pb-12 relative">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4"><span className="text-gradient">Work Experience</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">Proven experience in security engineering, risk assessment, DevSecOps, and compliance governance.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="glass-card rounded-2xl p-6 sm:p-8 hover-lift relative overflow-hidden group">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/25 via-primary/15 to-transparent" />
                <div className="relative z-10 flex flex-col">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10 border border-primary/30"><Briefcase className="w-5 h-5 text-primary" /></div>
                        <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">{exp.title}</h3>
                      </div>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground shrink-0"><Calendar className="w-4 h-4" /><span className="text-sm font-body">{exp.period}</span></div>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3 text-muted-foreground font-body text-sm sm:text-base">
                        <span className="text-primary mt-1.5 shrink-0">▹</span><span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
