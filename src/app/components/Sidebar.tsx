'use client'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const navLinks = [
    { label: "Home", id: "home" },
    { label: "Competence", id: "competence" },
    { label: "Portfolio", id: "project" },
    { label: "Contact", id: "contact" },
];

const Sidebar = () => {
    const jumpTo = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, section: string) => {
        e.preventDefault()
        const element = document.getElementById(section)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
    }

    return (
        <aside className="fixed left-0 top-0 w-[200px] h-full p-6 flex-col justify-between border-r border-border-subtle hidden md:flex bg-backg">
            <div>
                <div className="mb-16 pb-4 border-b border-border-subtle">
                    <h1 className="text-3xl font-extrabold cursor-pointer font-serif text-primary-text">
                        Jimmy <span className="text-accent">Esang</span>
                    </h1>
                    <p className="text-sm mt-1 text-primary-text opacity-80">AI/ML Engineer</p>
                </div>

                <ul className="space-y-4">
                    {navLinks.map((link) => (
                        <li key={link.id} 
                            onClick={(e) => jumpTo(e, link.id)}
                            className="text-lg font-medium cursor-pointer transition-all border-l-4 border-transparent hover:border-accent group text-primary-text"
                        >
                            <span className="pl-3 group-hover:pl-5 transition-all duration-300">
                                {link.label}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex space-x-5 justify-center">
                <a 
                href="https://github.com/JimRaph"
                target="_blank" rel="noopener noreferrer" 
                className="hover:opacity-70 transition-opacity text-accent">
                    <FaGithub size={22} />
                </a>
                <a 
                href="https://www.linkedin.com/in/esangubong-jimmy"
                target="_blank" rel="noopener noreferrer" 
                className="hover:opacity-70 transition-opacity text-accent">
                    <FaLinkedin size={22} />
                </a>
                <a 
                href="https://twitter.com/i_m_ej"
                target="_blank" rel="noopener noreferrer" 
                className="hover:opacity-70 transition-opacity text-accent">
                    <FaTwitter size={22} />
                </a>
            </div>
        </aside>
    );
}

export default Sidebar;