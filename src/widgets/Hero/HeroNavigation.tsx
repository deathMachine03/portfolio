interface HeroNavigationProps {
    currentIndex: number
    slidesCount: number
    onPrev: () => void
    onNext: () => void
    onGoTo: (index: number) => void
}

export const HeroNavigation = ({
                                   currentIndex,
                                   slidesCount,
                                   onPrev,
                                   onNext,
                                   onGoTo,
                               }: HeroNavigationProps) => {
    return (
        <div className="absolute bottom-10 right-10 z-30 flex items-center gap-5">
            <button
                onClick={onPrev}
                className="rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-md transition hover:bg-white/20"
            >
                ←
            </button>

            <div className="flex gap-2">
                {Array.from({ length: slidesCount }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => onGoTo(index)}
                        className={`h-1.5 rounded-full transition-all ${
                            currentIndex === index
                                ? 'w-8 bg-white'
                                : 'w-3 bg-white/40'
                        }`}
                    />
                ))}
            </div>

            <button
                onClick={onNext}
                className="rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-md transition hover:bg-white/20"
            >
                →
            </button>
        </div>
    )
}