import React from 'react';
import { motion } from 'framer-motion';
import { Users, BarChart2, CheckCircle2, Calendar } from 'lucide-react';

const features = [
  {
    icon: <Users className="feature-icon" />,
    title: "One-on-One Mentorship",
    description: "Get personalized guidance directly from Dr. Gourav Lalla to address your specific academic challenges and goals."
  },
  {
    icon: <BarChart2 className="feature-icon" />,
    title: "Grand Test Analysis",
    description: "Receive detailed analysis of your performance with actionable insights to improve your scores significantly."
  },
  {
    icon: <CheckCircle2 className="feature-icon" />,
    title: "Personalized Tasks",
    description: "Follow customized study plans designed to strengthen your weak areas and optimize your study time."
  },
  {
    icon: <Calendar className="feature-icon" />,
    title: "Live Sessions",
    description: "Participate in interactive live sessions focusing on high-yield topics and exam strategies."
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Eyeconic Mentorship?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our comprehensive approach addresses all aspects of academic excellence, providing
            you with the tools and guidance needed to succeed.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;