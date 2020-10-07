import {CarouselItem} from '@/lib/CarouselItem';
import {DataStrategy} from '@/lib/DataStrategy';
import {parseXml} from '@/lib/parse';

export class RssStrategy implements DataStrategy {
  public readonly type = 'RSS';

  public items: CarouselItem[] = [];

  constructor(public feed: string) {
    this.load(feed);
  }

  private extractImageFromRss(media: any, enclosures: any) {
    const mediaContent = media ? media.content : enclosures ? enclosures[0] : null;

    if (media && Array.isArray(mediaContent) && mediaContent.length > 0 && mediaContent[0].$) {
      return mediaContent[0].$.url;
    }

    return mediaContent;
  }

  private async load(path: string): Promise<any> {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const feed = await response.text();

    const {items} = await parseXml(feed);
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

          return {
            id: `${index}-${new Date().getTime()}`,
            altText: title && description ?
              `${title} - ${description}` :
              title ? title :
              description ? description : '',
            destinationUrl: link,
            imageUrl: this.extractImageFromRss(media, enclosures),
            title,
            description,
          };
        },
    );
  }
}
