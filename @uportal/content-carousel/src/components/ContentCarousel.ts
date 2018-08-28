import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Slick from 'vue-slick';
import { DataStrategy } from '../lib/DataStrategy';
import { CarouselItem } from '../lib/CarouselItem';
import { RssStrategy } from '@/lib/RssStrategy';
import { PortletStrategy } from '@/lib/PortletStrategy';

@Component({
  components: {
    Slick,
  },
})
export default class ContentCarousel extends Vue {
  @Prop([String])
  public type!: string;

  @Prop([String])
  public source!: string;

  @Prop({ type: [String, Object], default: () => ({}) })
  public slickOptions!: string | Object;

  @Prop({ type: [String], default: 'auto' })
  public carouselHeight!: string;

  @Prop([Boolean])
  public fitToContainer?: boolean;

  @Watch('computedItems')
  public onComputedItemsChange() {
    const slick: any = this.$refs.slick || {
      currentSlide: () => {},
      destroy: () => {},
      create: () => {},
      goTo: () => {},
    };
    const currentIndex = slick.currentSlide();

    slick.destroy();
    this.$nextTick(() => {
      slick.create();
      slick.goTo(currentIndex, true);
    });
  }

  public strategy: DataStrategy = {
    items: [] as CarouselItem[],
  } as DataStrategy;

  public mounted(): void {
    const list = Array.from(this.$el.getElementsByClassName('slick-list'));
    if (list.length > 0) {
      list.forEach((el) => el.setAttribute('style', `height:${this.height}`));
    }

    switch (this.type.toLowerCase()) {
      case 'rss': {
        this.strategy = new RssStrategy(this.source);
        break;
      }
      case 'portlet': {
        this.strategy = new PortletStrategy(this.source);
        break;
      }
      case 'passthrough': {
        // ensure 'passthrough' is lowercase
        this.type = this.type.toLowerCase();
        break;
      }
      default: {
        console.error(`type: "${this.type}" is not recognized`);
      }
    }
  }

  get height(): string {
    return this.carouselHeight;
  }

  get isResponsiveToContainer(): boolean {
    return this.fitToContainer ? true : false;
  }

  get computedItems(): CarouselItem[] {
    return this.strategy.items;
  }

  get computedSlickOptions(): Object {
    const options =
      typeof this.slickOptions === 'string'
        ? JSON.parse(this.slickOptions)
        : this.slickOptions;

    // NOTE: in web component mode, jquery `$('')` goes haywire
    // this ensures vue slick will get a consistent reference to itself
    // NOTE: changing the swipe to slide default gives a better touch experience
    return { slick: this.$el || '', swipeToSlide: true, ...options };
  }
}
