interface HeroBackgroundProps {
    image: string
}

export const HeroBackground = ({ image }: HeroBackgroundProps) => {
    return (
        <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
        />
    )
}