import { useState, useEffect, useCallback, useRef } from 'react'

// ─── Типы ────────────────────────────────────────────────────────────────────

export interface HeroSlide {
    id: string
    backgroundUrl: string
    title: string
    description: string
    rating: number
    genres: string[]
    year: number
    ageRating: string
    watchUrl: string
}

export interface UseHeroSliderOptions {
    /** Интервал автоплея в мс. По умолчанию 5000 */
    interval?: number
    /** Выключить автоплей совсем */
    autoplay?: boolean
}

export interface UseHeroSliderReturn {
    slides: HeroSlide[]
    currentIndex: number
    currentSlide: HeroSlide
    isAnimating: boolean
    isPaused: boolean
    goNext: () => void
    goPrev: () => void
    goTo: (index: number) => void
    pause: () => void
    resume: () => void
}

// ─── Хук ─────────────────────────────────────────────────────────────────────

export function useHeroSlider(
    slides: HeroSlide[],
    options: UseHeroSliderOptions = {}
): UseHeroSliderReturn {
    const { interval = 5000, autoplay = true } = options

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    // Ref для таймера — чтобы сбрасывать его при ручном переключении
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

    // ─── Навигация ──────────────────────────────────────────────────────────────

    // Переход на конкретный слайд.
    // isAnimating блокирует повторные клики пока идёт переход.
    const goTo = useCallback((index: number) => {
        if (isAnimating || index === currentIndex) return

        setIsAnimating(true)
        setCurrentIndex(index)

        // Снимаем блокировку после завершения CSS-перехода (600ms в HeroBackground)
        setTimeout(() => setIsAnimating(false), 600)
    }, [isAnimating, currentIndex])

    const goNext = useCallback(() => {
        goTo((currentIndex + 1) % slides.length)
    }, [currentIndex, slides.length, goTo])

    const goPrev = useCallback(() => {
        goTo((currentIndex - 1 + slides.length) % slides.length)
    }, [currentIndex, slides.length, goTo])

    // ─── Пауза / возобновление ──────────────────────────────────────────────────

    const pause = useCallback(() => setIsPaused(true), [])
    const resume = useCallback(() => setIsPaused(false), [])

    // ─── Автоплей ───────────────────────────────────────────────────────────────

    // Эффект перезапускается при каждом изменении currentIndex —
    // это гарантирует сброс таймера при ручном переключении.
    useEffect(() => {
        if (!autoplay || isPaused) return

        timerRef.current = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % slides.length)
        }, interval)

        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [currentIndex, isPaused, autoplay, interval, slides.length])

    // ─── Keyboard navigation ────────────────────────────────────────────────────

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') goNext()
            if (e.key === 'ArrowLeft') goPrev()
        }

        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [goNext, goPrev])

    // ─── Возврат ─────────────────────────────────────────────────────────────────

    return {
        slides,
        currentIndex,
        currentSlide: slides[currentIndex],
        isAnimating,
        isPaused,
        goNext,
        goPrev,
        goTo,
        pause,
        resume,
    }
}