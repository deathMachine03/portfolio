import { heroSlides } from './model/heroSlides'
import { useHeroSlider } from './hooks/useHeroSlider'
import { HeroBackground } from './HeroBackground'
import { HeroContent } from './HeroContent'
import { HeroNavigation } from './HeroNavigation'

export const Hero = () => {
    const {
        currentSlide,
        currentIndex,
        slides,
        goNext,
        goPrev,
        goTo,
        pause,
        resume,
    } = useHeroSlider(heroSlides, {
        interval: 5000,
        autoplay: true,
    })

    return (
        <section
            className="relative h-[85vh] w-full overflow-hidden bg-black"
            onMouseEnter={pause}
            onMouseLeave={resume}
        >
            <HeroBackground image={currentSlide.backgroundUrl} />

            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/70 to-transparent" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0b0b0f] via-transparent to-transparent" />

            <HeroContent slide={currentSlide} />

            <HeroNavigation
                currentIndex={currentIndex}
                slidesCount={slides.length}
                onPrev={goPrev}
                onNext={goNext}
                onGoTo={goTo}
            />
        </section>
    )
}