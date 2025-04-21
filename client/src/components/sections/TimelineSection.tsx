import React from 'react';
import { motion } from 'framer-motion';

const timelineItems = [
  {
    year: "2018",
    title: "The Genesis",
    description: "Eyeconic by Dr. Lalla was born out of a simple yet powerful insight: every topper's journey is unique — and so is every student's struggle."
  },
  {
    year: "2020",
    title: "Beyond Courses",
    description: "What started as a mentoring initiative quickly evolved into something more profound: a movement more than a brand, a community more than a course."
  },
  {
    year: "2022",
    title: "Personalized Approach",
    description: "We realized that generic preparation strategies were failing countless brilliant minds. Medical students needed guidance that understood their individual learning patterns, strengths, and areas for improvement."
  },
  {
    year: "Today",
    title: "A Thriving Community",
    description: "Today, Eyeconic represents personalized excellence in NEET PG preparation, with thousands of successful doctors who credit their journey to our mentorship."
  }
];

const TimelineSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The journey from an idea to a mentorship movement that's transforming medical education.
          </motion.p>
        </div>
        
        <div className="relative mt-16 pl-8">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-teal-200 ml-4"></div>
          
          {/* Timeline Items */}
          {timelineItems.map((item, index) => (
            <motion.div 
              key={index}
              className={`relative mb-16 ${index % 2 === 0 ? 'md:ml-0 md:mr-auto md:pr-8' : 'md:ml-auto md:mr-0 md:pl-8'} md:w-1/2`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Year Circle */}
              <div className="absolute left-0 w-8 h-8 bg-teal-500 rounded-full text-white flex items-center justify-center -ml-12 text-sm font-bold">
                {index === timelineItems.length - 1 ? (
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                ) : (
                  item.year.slice(-2)
                )}
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="inline-block bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {item.year}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;