'use client'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaBuilding, FaCodeBranch } from 'react-icons/fa'
import { GiOilDrum } from 'react-icons/gi' 
import { RiBrainLine } from 'react-icons/ri' 
import { PiCubeFill } from 'react-icons/pi'
import { JSX, useEffect, useState } from 'react';

type ProjectLink = {
  live?: string;
  github?: string;
  status?: string; 
  admin?: string;
};

type Project = {
  title: string;
  description: string;
  tools: string[];
  links: ProjectLink;
  image: string;
};

type Sector = {
  name: 'All' | 'Blockchain' | 'AI' | 'Oil & Gas' | 'Others';
  icon: JSX.Element;
  description: string;
  projects: Project[];
};

const projectData: Sector[] = [
  {
    name: 'Blockchain',
    icon: <PiCubeFill size={20} />,
    description: `Deep dive into Web3 development, focusing on cross-chain functionality, 
                  tokenomics integration, and secure user interfaces using Substrate and Ethereum.`,
    projects: [
      {
        title: "Xorion Network",
        description: `Built and deployed the IDO page with full user functionality, user portfolio dashboard 
                      (token info, airdrop claims), and integrated two-way Substrate-Ethereum bridging. 
                      Restructured the codebase for maintainability.`,
        tools: ['Next.js', 'Substrate', 'Ethereum Wallets', 'TypeScript', 'Tailwind CSS', 'Relayer'],
        links: {
          live: 'https://explorer.xorion.network/explorer', 
          github: 'https://github.com/Xorion-Network/xorionV2', 
          status: 'Live'
        },
        image: "/xorion.png" 
      },
    ]
  },
  {
    name: 'AI',
    icon: <RiBrainLine size={20} />,
    description: `Specializing in Machine Learning operations (MLOps), RAG system architecture, 
                  model deployment via FastAPI, and full-stack integration (Python/Next.js).`,
    projects: [
      {
        title: "MediFact",
        description: `Full-stack RAG project. Automated data pipeline (scrapping, cleaning, chunking) 
                      using Airflow, ChromaDB, and AWS S3. Built a chat application using NextJS connected to a Llama 3B 
                      model deployed via Modal/FastAPI.`,
        tools: ['Python', 'NextJS', 'Airflow', 'ChromaDB', 'Modal', 'Llama 3B', 'Docker', 'CI/CD'],
        links: {
            live: 'https://medifact.vercel.app/',
            github: 'https://github.com/JimRaph/MediFact', 
            status: 'Live'
        },
        image: "/medifact.png" 
      },
      {
        title: "DiaWatch",
        description: `A full-stack ML app (Random Forest/Logistic Regression) allowing users to check 
                      diabetes risk based on medical inputs. Backend built with Flask, deployed via Fly.io, 
                      and frontend in React/Tailwind.`,
        tools: ['Python', 'Flask', 'React', 'Random Forest', 'Docker', 'Fly.io', 'scikit-learn'],
        links: {
            live: 'https://diawatch.fly.dev/',
            github: 'https://github.com/JimRaph/DiaWatch',
            status: 'Live'
        },
        image: "/diabetes.png" 
      },
    ]
  },
  {
    name: 'Oil & Gas',
    icon: <GiOilDrum size={20} />,
    description: `IT Consulting and infrastructure management experience, establishing initial digital
                  presence and ensuring operational technology reliability.`,
    projects: [
      {
        title: "Chrism Oil & Gas (IT Consultant)",
        description: `Designed and built the company’s first official website. Managed the entire IT 
                      infrastructure, led the migration from Gmail to Microsoft Outlook, and acted as 
                      the primary technical point of contact.`,
        tools: ['IT Infrastructure', 'System Troubleshooting', 'Website Design', 'Microsoft Exchange', 'Network Maintenance'],
        links: {
            live: undefined,
            github: undefined,
            status: 'Client Work'
        },
        image: "/nan.png" 
      },
    ]
  },
  {
    name: 'Others',
    icon: <FaCodeBranch size={20} />,
    description: `Diverse applications demonstrating core Full-Stack competence, design skills,
                  and proficiency with modern development tooling.`,
    projects: [
      {
        title: "EchozChat",
        description: `A full-stack real-time chat application that mirrors 
                      the core experience and interface of WhatsApp. Includes all the 
                      major functionalities, video & audio call support, real-time
                      messaging, etc`,
        tools: ['React', 'Nodejs', 'Socket.io', 'WebRTC', 'MongoDB', 'Cloudinary', 'TailwindCss', 'Express', 'Multer', 'Render', 'AWS'],
        links: { 
          live: 'https://echozchat.vercel.app/', 
          github: 'https://github.com/JimRaph/EchozChat', 
          status: 'Live' 
        },
        image: "/social.png"
      },
      {
        title: "Lumina",
        description: `Responsive E-commerce site with separate public application and a full Admin web 
                      application for product/order management.`,
        tools: ['React', 'Nodejs', 'Express', 'MongoDB', 'Cloudinary'],
        links: { 
          live: 'https://shoplumina.vercel.app/',
          admin: 'https://shoplumina-admin.vercel.app/', 
          github: 'https://github.com/JimRaph/Lumina', 
          status: 'Live' },
        image: "/sl.png"
      },
      {
        title: "JimmyInWeb3",
        description: `A responsive personal portfolio with Web3 branding, 
                      client-side form validation, captcha and integrated email delivery.
                      Detailing my journey in web3`,
        tools: ["Typescript", "Next.js", "Redis", "Resend", "Tailwind","Zod", "Framer"],
        links: { 
          live: 'https://jimmyinweb3.vercel.app/', 
          github: 'https://github.com/JimRaph/web3-portfolio', 
          status: 'Live' },
        image: "/web3.png"
      },
      {
        title: "Codeforces Student Tracker",
        description: `Full-stack management system. Synchronizes Codeforces 
                      data for students including their context history, problem 
                      submissions, and statistics.  It supports automated syncing via 
                      cron job, manual sync trigger, light and dark theme  `,
        tools: ["React","Tailwind","Shadcn","vercel","lucide-react"],
        links: { 
                live: 'https://cfst.vercel.app/', 
                github: 'https://github.com/JimRaph/Codeforces-Student-Tracker', 
                status: 'Live' },
        image: "/cfst.png"
      },
      {
        title: "Inventory Management Dashboard",
        description: `Dashboard with analytics and admin tools for inventory management. 
                      Focus on data visualization and robust state management. POC`,
        tools: ['Nextjs', 'Redux Toolkit', 'TypeScript', 'Prisma', 'Recharts', "Nodejs"],
        links: { 
                live: 'https://inventory-mgmt-dashboard.vercel.app/', 
                github: 'https://github.com/JimRaph/Inventory-Management-Dashboard', 
                status: 'Live' },
        image: "/imd.png"
      },
      {
        title: "WePay",
        description: `A SaaS platform landing page for a future solution aimed 
                      at optimizing and managing Human Resources (HR) pipelines POC`,
        tools: ["React","Tailwind","Shadcn","vercel","lucide-react"],
        links: { 
                live: 'https://wepay-sigma.vercel.app/', 
                github: 'https://github.com/JimRaph/WePay', 
                status: 'Live' },
        image: "/wepay.png"
      },
    ]
  },
];

const allProjects = projectData.flatMap(sector => sector.projects);
const allSectors: Sector[] = [
    { name: 'All', icon: <FaBuilding size={20} />, description: 'View all projects across all sectors.', projects: allProjects },
    ...projectData
];

const Projects = () => {
    const [activeSector, setActiveSector] = useState<Sector>(allSectors[0]);

    const PROJECTS_PER_PAGE = 6;
    const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);
    
    useEffect(() => {
        setVisibleCount(PROJECTS_PER_PAGE);
    }, [activeSector]);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + PROJECTS_PER_PAGE);
    };

    const projectsToDisplay = activeSector.projects.slice(0, visibleCount);
    const hasMoreToLoad = activeSector.projects.length > visibleCount;

  return (
    <section className="py-24 px-6 bg-backg" id='project'>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-primary-text font-serif">
           Portfolio by Domain
        </h2>
        <p className="text-center text-primary-text opacity-70 max-w-2xl mx-auto mb-10">
          Filter projects based on industry sector or technical domain to explore specialized expertise.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
            {allSectors.map((sector) => (
                <button
                    key={sector.name}
                    onClick={() => setActiveSector(sector)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 border text-sm
                      ${sector.name === activeSector.name 
                        ? 'border-accent bg-accent/15 text-accent' 
                        : 'border-border-subtle text-primary-text hover:border-accent hover:text-accent'}`}
                >
                    {sector.icon}
                    {sector.name}
                </button>
            ))}
        </div>
        
        <p className="text-center text-md italic mb-10 text-primary-text opacity-60 max-w-3xl mx-auto">
            {activeSector.description}
        </p>


        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projectsToDisplay.map((project, idx) => (
            <div key={idx} className="relative rounded-lg overflow-hidden border border-border-subtle transition-all duration-300 group bg-backg">
              
              <div className="w-full h-64 relative bg-gray-100 dark:bg-gray-800">
                <Image src={project.image} 
                alt={project.title} fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className={`absolute top-3 right-3 px-3 py-1 text-xs rounded-full font-bold 
                  ${project.links.status === 'Client Work' ? 
                    'bg-red-600 text-white' : 'bg-green-600 text-white'}`}>
                    {project.links.status || 'Live'}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-accent font-serif">
                    {project.title}
                </h3>
                <p className="text-sm text-primary-text opacity-85 mb-4 min-h-[40px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full border border-border-subtle text-primary-text">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-accent hover:opacity-70 transition-opacity">
                      <FaGithub className="text-base" /> Repository
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-accent hover:opacity-70 transition-opacity">
                      <FaExternalLinkAlt className="text-sm" /> Live 
                    </a>
                  )}
                  {project.links.admin && (
                    <a href={project.links.admin} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-accent hover:opacity-70 transition-opacity">
                      <FaExternalLinkAlt className="text-sm" /> Admin 
                    </a>
                  )}
                  {!project.links.live && !project.links.github && (
                       <span className="text-sm text-primary-text opacity-50 italic">Work experience details above.</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMoreToLoad && (
            <div className="text-center mt-12">
                <button
                    onClick={handleLoadMore}
                    className="px-6 py-3 rounded-full font-bold transition-all duration-300 border border-accent text-accent hover:bg-accent hover:text-backg"
                >
                    Load More Projects ({activeSector.projects.length - visibleCount} remaining)
                </button>
            </div>
        )}

      </div>
    </section>
  )
}
export default Projects