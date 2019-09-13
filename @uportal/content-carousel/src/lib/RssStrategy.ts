import {CarouselItem} from '@/lib/CarouselItem';
import {DataStrategy} from '@/lib/DataStrategy';
import {parseXml} from '@/lib/parse';

export class RssStrategy implements DataStrategy {
  public readonly type = 'RSS';

  public items: CarouselItem[] = [];

  private displayTitle: boolean;
  private displayDescription: boolean;

  constructor(public feed: string, displayTitle: boolean, displayDescription: boolean) {
    this.displayTitle = displayTitle;
    this.displayDescription = displayDescription;
    this.load(feed);
  }

  private async load(path: string): Promise<any> {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const feed = await response.text();

    const {items} = await parseXml(feed, this.displayTitle, this.displayDescription);
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
            index: number,
        ) => {
          const image = media ? media.content : enclosures ? enclosures[0] : null;
          return {
            id: `${index}-${new Date().getTime()}`,
            altText: title && description ?
              `${title} - ${description}` :
              title ? title :
              description ? description : '',
            destinationUrl: link,
            imageUrl: image,
            title,
            description,
          };
        },
    );
  }
}
