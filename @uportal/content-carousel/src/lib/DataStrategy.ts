import { CarouselItem } from './CarouselItem';

export interface DataStrategy {
  type: string;
  feed: any;
  items: CarouselItem[];
}

export type CarouselStrategy = (options: any) => {};
