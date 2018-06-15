import { DataStrategy } from '@/lib/Strategy';
import { CarouselItem } from '@/lib/CarouselItem';
import { parseXml } from '@/lib/parse';

export class RssStrategy implements DataStrategy {
    public readonly type = 'RSS';

    public readonly items: CarouselItem[] = [];

    constructor(
        public feed: string,
    ) {
        this.load(feed);
    }

    private async load(path: string): Promise<any> {
        const response = await fetch(`${path}`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const feed = await response.text();

        return parseXml(feed).then(
            (data) => {
                data.items.forEach((item: any, index: number) => {
                    const { title, description, link } = item;
                    this.items.push({
                        id: `${index}-${new Date().getTime()}`,
                        altText: `${title} - ${description}`,
                        destinationUrl: link,
                        imageUrl: item.media ? item.media.content : item.enclosures ? item.enclosures[0] : null,
                    });
                });
                return this.items;
            },
        );
    }
}
