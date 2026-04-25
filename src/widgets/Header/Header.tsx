import { useEffect, useState } from 'react';

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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-8 py-4">
        <div className="font-bold text-lg">
          Sanzhar.dev
        </div>

        <nav className="flex gap-6 text-sm text-gray-300">
          <a href="#">Проекты</a>
          <a href="#">Обо мне</a>
          <a href="#">Контакты</a>
        </nav>
      </div>
    </header>
  );
};