import { CarouselStrategy, CarouselItem, DataStrategy } from './Definitions';

function getDemoStrategy(): DataStrategy {
  return {
    feed: '',
    items: [
      {
        id: '7b35d00d-7f7f-449e-a4a0-58a8de88059d',
        destinationUrl: 'https://example.com',
        imageUrl: 'http://placehold.it/2000x1000',
        altText: 'demo 1',
      },
      {
        id: '7b35d00d-7f7f-449e-a4a0-58a8de88059f',
        destinationUrl: 'https://example.com',
        imageUrl: 'http://placehold.it/2000x1000',
        altText: 'demo 2',
      },
      {
        id: '7b35d00d-7f7f-449e-a4a0-58a8de88059g',
        destinationUrl: 'https://example.com',
        imageUrl: 'http://placehold.it/2000x1000',
        altText: 'demo 3',
      },
      {
        id: '7b35d00d-7f7f-449e-a4a0-58a8de88059h',
        destinationUrl: 'https://example.com',
        imageUrl: 'http://placehold.it/2000x1000',
        altText: 'demo 4',
      },
    ],
  };
}

export const demoStrategy: DataStrategy = getDemoStrategy();


