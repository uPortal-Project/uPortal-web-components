import { DataStrategy } from '@/lib/Strategy';
import { CarouselItem } from '@/lib/CarouselItem';

export class RssStrategy implements DataStrategy {
    public readonly type = 'RSS';

    public readonly items: CarouselItem[] = [];

    constructor(
        public feed: string,
    ) {
        this.load(feed);
    }

    private getFirst(item: Element, key: string): string {
        return [
            ...item.getElementsByTagName(key),
        ].reduce((c: string, val: Node, index: number) => index < 1 ? `${val.textContent}` : c, '');
    }

    private async load(path: string): Promise<any> {
        try {
            const response = await fetch(`${path}`);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.text();
            const dom = new DOMParser().parseFromString(data, 'application/xml');
            const rssItems = [...dom.getElementsByTagName('item')];
            rssItems.forEach((item, index) => {
                this.items.push({
                    id: `${index}-${new Date().getTime()}`,
                    altText: `${this.getFirst(item, 'name')} - ${this.getFirst(item, 'description')}`,
                    destinationUrl: this.getFirst(item, 'link'),
                    imageUrl: `http://placehold.it/1920x500`,
                });
            });
            return Promise.resolve(this.items);
        } catch {
            return Promise.reject('not found');
        }
    }
}

/*

id: string;
    destinationUrl: string;
    imageUrl: string;
    altText: string;

*/
