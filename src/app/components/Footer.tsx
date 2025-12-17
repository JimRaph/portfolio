'use client'
import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="px-6 py-8 border-t border-border-subtle bg-backg">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-sm text-primary-text opacity-50 text-center">
          &copy; {new Date().getFullYear()} Jimmy Esang.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/JimRaph"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:opacity-70 transition-opacity"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://twitter.com/i_m_ej"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:opacity-70 transition-opacity"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/esangubong-jimmy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:opacity-70 transition-opacity"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;