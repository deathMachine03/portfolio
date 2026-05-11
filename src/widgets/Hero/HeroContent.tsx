import type { HeroSlide } from './hooks/useHeroSlider'

interface HeroContentProps {
    slide: HeroSlide
}

export const HeroContent = ({ slide }: HeroContentProps) => {
    return (
        <div className="relative z-20 flex h-full items-center px-10">
            <div className="max-w-3xl">
                <div className="mb-4 flex items-center gap-3 text-sm text-gray-300">
          <span className="rounded bg-green-600 px-2 py-1 font-semibold text-white">
            {slide.rating}
          </span>
                    <span>{slide.year}</span>
                    <span>{slide.ageRating}</span>
                    <span>{slide.genres.join(', ')}</span>
                </div>

                <h1 className="text-6xl font-bold leading-tight">
                    {slide.title}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
                    {slide.description}
                </p>

                <div className="mt-8 flex gap-4">
                    <a
                        href={slide.watchUrl}
                        className="rounded-md bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
                    >
                        Смотреть
                    </a>

                    <button className="rounded-md bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-md transition hover:bg-white/20">
                        Подробнее
                    </button>
                </div>
            </div>
        </div>
    )
}