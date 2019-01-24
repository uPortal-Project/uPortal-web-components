import {CarouselItem} from '@/lib/CarouselItem';
import {DataStrategy} from '@/lib/DataStrategy';
import {parseXml} from '@/lib/parse';
import oidc from '@uportal/open-id-connect';

export class AuthenticatedRssStrategy implements DataStrategy {
  public readonly type = 'Authenticated RSS';

  public items: CarouselItem[] = [];

  constructor(public feed: string) {
    this.load(feed);
  }

  private async load(path: string): Promise<any> {
    const token = (await oidc()).encoded;
    const response = await fetch(path, {
      credentials: 'same-origin',
      headers: {
        'Authorization': 'Bearer ' + token,
        'content-type': 'application/jwt',
      },
    });
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
          const image = media ? media.content : enclosures ? enclosures[0] : null;
          return {
            id: `${index}-${new Date().getTime()}`,
            altText: `${title} - ${description}`,
            destinationUrl: link,
            imageUrl: image,
            title,
            description: image ? null : description,
          };
        },
    );
  }
}
