interface CarouselItem {
    id: string;
    destinationUrl: string;
    imageUrl: string;
    altText: string;
}

type CarouselStrategy = (options: any) => CarouselItem[];

export { CarouselItem, CarouselStrategy };
