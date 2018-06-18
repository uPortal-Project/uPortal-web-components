import { DataStrategy } from '@/lib/Strategy';
import { CarouselItem } from '@/lib/CarouselItem';
import { parseXml } from '@/lib/parse';

export class RssStrategy implements DataStrategy {
  public readonly type = 'RSS';

  public readonly items: CarouselItem[] = [];

  constructor(public feed: string) {
    this.load(feed);
  }

  private async load(path: string): Promise<any> {
    const response = await fetch(`${path}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const feed = await response.text();

    const { items } = await parseXml(feed);
    this.items = items.map(
      (
        {
          title,
          description,
          link,
          media,
          enclosures,
        }: {
          title: string;
          description: string;
          link: string;
          media: any;
          enclosures: any;
        },
        index: number
      ) => ({
        id: `${index}-${new Date().getTime()}`,
        altText: `${title} - ${description}`,
        destinationUrl: link,
        imageUrl: media ? media.content : enclosures ? enclosures[0] : null,
      })
    );
  }
}
