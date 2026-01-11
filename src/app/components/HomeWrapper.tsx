'use client'

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Footer from "./Footer";
import { useTheme } from "./Theme";

export default function HomeWrapper({ children }: { children: React.ReactNode }) {
  const { isDark } = useTheme();
  
  const accentColor = isDark === false ? '#003366' : '#FFC300'; 
  const bgColor = isDark === false ? '#FBFBFB' : '#050811'; 
  
  if (isDark === null) {
    return (
      <div
        className="md:mr-3 w-[100%] inset-0 absolute flex items-center justify-center"
        style={{ backgroundColor: bgColor }}
      >
        <div 
          className='w-20 h-10 border-4 border-t-transparent rounded-full animate-spin'
          style={{ borderColor: accentColor }}>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen cursor-default">
      <Sidebar />
      <div className="flex-1 md:pl-[200px]">
        <TopBar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
