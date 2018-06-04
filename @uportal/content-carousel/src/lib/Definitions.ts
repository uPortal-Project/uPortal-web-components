interface CarouselItem {
    id: string;
    destinationUrl: string;
    imageUrl: string;
    altText: string;
}

interface DataStrategy {
    feed: any;
    items: CarouselItem[];
}

type CarouselStrategy = (options: any) => CarouselItem[];

export { CarouselItem, DataStrategy, CarouselStrategy };
