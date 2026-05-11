import { useEffect, useState } from 'react';
import HeaderNav from "./components/HeaderNav";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
<header className="w-full px-6 py-4 bg-black text-white">
  <div className="grid grid-cols-[1fr_auto_1fr] items-center">

    {/* LEFT */}
    <div className="flex items-center gap-4 justify-self-start">
      <button className="text-gray-400 text-xl">
        ☰
      </button>

      <div className="font-bold text-xl tracking-wide">
        Sanzhar
      </div>
    </div>

    {/* CENTER */}
          <HeaderNav />


    {/* RIGHT */}
    <div className="flex items-center gap-4 justify-self-end">
      <button className="text-gray-400">🔍</button>
      <button className="text-gray-400">◻</button>

      <div className="w-8 h-8 rounded-full bg-gray-500"></div>
    </div>

  </div>
</header>
  );
};