export function handleLeftClick(carousel: React.RefObject<HTMLDivElement>) {
    carousel.current?.scrollBy({
        left: -carousel.current.offsetWidth
    });
}

export function handleRightClick(carousel: React.RefObject<HTMLDivElement>) {
    carousel.current?.scrollBy({
        left: carousel.current.offsetWidth
    });
}