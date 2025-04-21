import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Video, CheckSquare, BarChart, LineChart } from 'lucide-react';

const tabItems = [
  {
    id: "1-on-1",
    title: "1-on-1 Mentorship",
    icon: <Users className="w-6 h-6" />
  },
  {
    id: "live-sessions",
    title: "Live Sessions",
    icon: <Video className="w-6 h-6" />
  },
  {
    id: "daily-tasks",
    title: "Daily Tasks & Quizzes",
    icon: <CheckSquare className="w-6 h-6" />
  },
  {
    id: "gt-analysis",
    title: "GT Analysis",
    icon: <BarChart className="w-6 h-6" />
  },
  {
    id: "progress",
    title: "Progress Tracking",
    icon: <LineChart className="w-6 h-6" />
  }
];

const tabContent = {
  "1-on-1": {
    title: "1-on-1 Mentorship",
    description: "Personalized guidance from Dr. Lalla to address your specific needs and challenges. Our mentors help create custom study plans, track your progress, and adapt strategies for optimal results.",
    image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  "live-sessions": {
    title: "Live Sessions",
    description: "Interactive live classes covering high-yield topics, recent exam patterns, and strategic approaches to difficult subjects. Participate in Q&A sessions with expert faculty.",
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  "daily-tasks": {
    title: "Daily Tasks & Quizzes",
    description: "Structured daily assignments and quizzes to reinforce learning and maintain consistent progress. Regular assessment helps identify strengths and areas needing improvement.",
    image: "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  "gt-analysis": {
    title: "Grand Test Analysis",
    description: "Comprehensive analysis of your test performance with actionable insights. Our detailed reports help you understand patterns in your mistakes and develop targeted improvement strategies.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  "progress": {
    title: "Progress Tracking",
    description: "Small group discussions and performance tracking to keep you motivated and accountable throughout your preparation journey. Regular feedback sessions help adjust your approach as needed.",
    image: "https://images.pexels.com/photos/7710027/pexels-photo-7710027.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
};

const OfferingsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("1-on-1");

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive support designed for medical aspirants who aim for excellence.
          </motion.p>
        </div>
        
        {/* Tabs */}
        <div className="mt-12">
          <div className="flex flex-wrap justify-center mb-8">
            {tabItems.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 mx-2 my-2 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-teal-600 shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                <span>{tab.title}</span>
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/3">
                <img 
                  src={tabContent[activeTab].image} 
                  alt={tabContent[activeTab].title} 
                  className="rounded-lg shadow-md w-full h-72 object-cover"
                />
              </div>
              
              <div className="w-full lg:w-2/3">
                <h3 className="text-2xl font-bold mb-4">{tabContent[activeTab].title}</h3>
                <p className="text-gray-700">{tabContent[activeTab].description}</p>
                
                <div className="mt-6">
                  <a href="#contact" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 bg-gray-100 p-8 rounded-xl">
          <p className="text-center text-lg text-gray-700">
            Whether you're targeting NEET PG or INiCET, our approach is designed to match your pace, style, and goals. 
            We don't believe in one-size-fits-all solutions because medical preparation is as individual as the doctors it creates.
          </p>
          <p className="text-center text-xl font-semibold text-teal-600 mt-4 italic">
            "Because we believe your preparation journey deserves to be as iconic as your dream."
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;