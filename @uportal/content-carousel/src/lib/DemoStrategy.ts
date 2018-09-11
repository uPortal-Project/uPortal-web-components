import { DataStrategy } from './DataStrategy';

export function getDemoStrategy(size: string = '1920x500'): DataStrategy {
  return {
    feed: '',
    type: 'rss',
    items: [
      {
        id: '7b35d00d-7f7f-449e-a4a0-58a8de88059d',
        destinationUrl: 'https://example.com',
        imageUrl: `http://placehold.it/${size}`,
        altText: 'demo 1',
      },
      {
        id: '7b35d00d-7f7f-449e-a4a0-58a8de88059f',
        destinationUrl: 'https://example.com',
        imageUrl: `http://placehold.it/${size}`,
        altText: 'demo 2',
      },
      {
        id: '7b35d00d-7f7f-449e-a4a0-58a8de88059g',
        destinationUrl: 'https://example.com',
        imageUrl: `http://placehold.it/${size}`,
        altText: 'demo 3',
      },
      {
        id: '7b35d00d-7f7f-449e-a4a0-58a8de88059h',
        destinationUrl: 'https://example.com',
        imageUrl: `http://placehold.it/${size}`,
        altText: 'demo 4',
      },
    ],
  };
}
