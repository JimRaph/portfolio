'use client'
import { BsMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useTheme } from './Theme';
import { BiSolidDownload } from 'react-icons/bi';

const TopBar = () => {
    const { isDark, toggleDarkMode } = useTheme();
    const CV_DOWNLOAD_URL = process.env.NEXT_PUBLIC_CV_URL;

    return (
        <header className='sticky top-0 z-40 p-4 border-b border-border-subtle bg-backg'>
            <div className='flex justify-end items-center space-x-4'>
                
               
                <button 
                  className="flex items-center gap-2 py-2 px-4 rounded-full font-semibold transition-colors bg-accent text-backg hover:opacity-90"
                > 
                    <BiSolidDownload size={18} />
                    <a target='_blank' rel='noopener noreferrer' 
                        className='pt-0.5'
                        href={CV_DOWNLOAD_URL}
                    >
                        Download CV
                    </a>
                </button>


                <button 
                    onClick={toggleDarkMode} 
                    className='p-3 rounded-full transition-colors bg-border-subtle text-accent hover:opacity-80'
                    aria-label="Toggle Theme"
                >
                    {isDark ? <BsFillSunFill size={20}/> : <BsMoonFill size={20}/>}
                </button>
            </div>
        </header>
    )
}

export default TopBar;