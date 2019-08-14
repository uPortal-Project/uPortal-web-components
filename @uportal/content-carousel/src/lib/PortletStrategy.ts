import {CarouselItem} from '@/lib/CarouselItem';
import {DataStrategy} from '@/lib/DataStrategy';
import oidc from '@uportal/open-id-connect';
import {portletRegistryToArray} from '@uportal/portlet-registry-to-array';

export class PortletStrategy implements DataStrategy {
  public readonly type = 'Portlet';

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
    const registry = await response.json();

    this.items = portletRegistryToArray(registry).map(
        ({
          fname,
          title,
          description,
          parameters,
        }) => {
          let imageUrl = '';
          let altText = '';
          const alternativeMaximized =
          parameters &&
          parameters.alternativeMaximizedLink &&
          parameters.alternativeMaximizedLink.value;

          if (parameters && parameters.iconUrl) {
            imageUrl = parameters.iconUrl.value;
            altText = parameters.iconUrl.description || description;
          }

          return {
            id: fname,
            altText,
            destinationUrl: alternativeMaximized || '/uPortal/p/' + fname,
            imageUrl,
            title,
            description,
          };
        },
    );
  }
}
