import { DataStrategy } from '@/lib/Strategy';
import { CarouselItem } from '@/lib/CarouselItem';

export class RssStrategy implements DataStrategy {
    public readonly type = 'RSS';

    public readonly items = [];

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
        const data = await response.text();
        const dom = new DOMParser().parseFromString(data, 'application/xml');
        const items = dom.getElementsByTagName('item');
        /*
        items.forEach(item => {
            this.items.push({
                id: item.getElementsByTagName('guid')[0].textContent,
                altText: `${name} - ${description}`
            });
        });
        */
        return new Promise((resolve, reject) => resolve([]));
        /*
        try {
            const response = await fetch(`${path}`);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            this.items = data.results.map(
                ({ uuid, name, description, attachments }) => ({
                    id: uuid,
                    altText: `${ name } - ${ description }`,
                    destinationUrl,
                    imageUrl: attachments[0].links.view
                })
            );
        } catch (err) {
            // TODO: User-appropriate feedback
            // eslint-disable-next-line
            console.error(err);
        }
        */
    }
}

/*

id: string;
    destinationUrl: string;
    imageUrl: string;
    altText: string;

*/
