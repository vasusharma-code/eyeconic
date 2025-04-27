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
    <section id="about" className="py-20 bg-white">
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
            Eyeconic by Dr. Lalla was born out of a simple yet powerful insight: every topper's journey is unique — and so is every student's struggle.
          </motion.p>
        </div>
        <div className="relative flex flex-col items-center mt-16">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-teal-200 -translate-x-1/2 z-0"></div>
          {/* Timeline Items */}
          {timelineItems.map((item, index) => (
            <div key={index} className="w-full flex flex-col md:flex-row items-center mb-16 relative z-10">
              {/* Left side (even index) */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : ''} hidden md:block`}>
                {index % 2 === 0 && (
                  <>
                    <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 font-semibold">{item.description}</p>
                  </>
                )}
              </div>
              {/* Year Circle */}
              <div className="flex flex-col items-center md:w-0 w-full mb-4 md:mb-0">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-800 text-white rounded-full font-bold text-lg border-4 border-white shadow-md">
                  {item.year}
                </div>
              </div>
              {/* Right side (odd index) */}
              <div className={`md:w-1/2 ${index % 2 !== 0 ? 'md:pl-12 md:text-left' : ''} hidden md:block`}>
                {index % 2 !== 0 && (
                  <>
                    <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 font-semibold">{item.description}</p>
                  </>
                )}
              </div>
              {/* Mobile: always show content below year */}
              <div className="w-full md:hidden text-center mt-4">
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 font-semibold">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <span className="text-blue-800 text-xl italic font-semibold">"A movement more than a brand, a community more than a course."</span>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;