import { Header } from '@/widgets/Header/Header';
import { Footer } from '@/widgets/Footer/Footer';
import { Hero } from '@/widgets/Hero/Hero';

export const HomePage = () => {
  return (
    <div className="bg-[#0b0b0f] text-white min-h-screen flex flex-col">
      <Header />

        <section>
          <div className=" h-220 flex-1">
              <Hero />
          </div>
        </section>

        <Footer />
    </div>
  );
};