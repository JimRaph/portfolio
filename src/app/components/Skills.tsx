'use client'

import React, { useState } from 'react';
import { FaBrain, FaCode, FaServer } from 'react-icons/fa';

const skillGroups = [
  {
    icon: FaBrain,
    title: "AI/ML Engineering Depth",
    description: `Building, training, and deploying intelligent models. 
    Focus on Retrieval-Augmented Generation (RAG), predictive analytics, and data optimization. `,
    skills: ['Python', 'RAG', 'LLMs', 'TensorFlow/PyTorch', 'Vector DBs', 'FastAPI', 'PowerBI']
  },
  {
    icon: FaCode,
    title: "Full-Stack Web Breadth",
    description: `Crafting scalable, responsive, and user-friendly web 
    applications to house the intelligent systems.`,
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js/Express', 'MongoDB/SQL', 'TailwindCSS', 'Shadcn', 'Postgres', 'Prisma']
  },
  {
    icon: FaServer,
    title: "Deployment & Operations",
    description: `Ensuring high availability and reliability through modern DevOps 
    practices and cloud integration.`,
    skills: ['Docker', 'CI/CD (GitHub Actions)', 'Vercel/Netlify', 'AWS/GCP Concepts', 'API Integration', 'Monitoring']
  }
];

const Skills = () => {
  const [activeGroup, setActiveGroup] = useState(skillGroups[0]);

  return (
    <section className="py-24 px-6 bg-backg" id='competence'>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-primary-text font-serif">
          Core Skills
        </h2>
        <p className="text-center text-primary-text opacity-70 max-w-2xl mx-auto mb-16">
          My expertise spans the entire development lifecycle, structured across three key domains.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          <div className='md:w-1/3 flex md:flex-col gap-2 overflow-x-auto p-1'>
            {skillGroups.map((group) => (
              <button
                key={group.title}
                onClick={() => setActiveGroup(group)}
                className={`text-left p-4 rounded-lg flex items-center space-x-3 transition-all duration-300 min-w-[150px] md:min-w-full border-l-4
                  ${group.title === activeGroup.title
                    ? 'bg-border-subtle border-accent text-accent'
                    : 'bg-transparent border-transparent text-primary-text opacity-60 hover:opacity-100 hover:bg-border-subtle/50'
                  }`}
              >
                <group.icon size={20} className={group.title === activeGroup.title ? 'text-accent' : ''} />
                <span className='font-semibold text-lg'>{group.title}</span>
              </button>
            ))}
          </div>

          <div className='md:w-2/3 p-6 border border-border-subtle rounded-lg shadow-lg bg-backg'>
            <p className='text-sm mb-6 text-primary-text opacity-80'>{activeGroup.description}</p>
            <div className="flex flex-wrap gap-2">
              {activeGroup.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full border border-accent text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;