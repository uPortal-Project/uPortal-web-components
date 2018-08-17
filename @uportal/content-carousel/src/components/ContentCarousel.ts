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

  @Prop() public slickOptions: any;

  @Prop([String])
  public carouselHeight?: string;

  @Prop([Boolean])
  public fitToContainer?: boolean;

  @Watch('computedItems')
  public onComputedItemsChange() {
    const slick: any = this.$refs.slick;
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
    return this.carouselHeight || 'auto';
  }

  get isResponsiveToContainer(): boolean {
    return this.fitToContainer ? true : false;
  }

  get computedItems(): CarouselItem[] {
    return this.strategy.items;
  }

  get computedSlickOptions(): any {
    return typeof this.slickOptions === 'string' ? JSON.stringify(this.slickOptions) : slickOptions;
  }
}
