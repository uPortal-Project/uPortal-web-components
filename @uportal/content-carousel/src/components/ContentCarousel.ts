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
    @Prop() public type!: string;
    @Prop() public source!: string;
    @Prop() public slickOptions: any = {};
    @Prop([String]) public carouselHeight?: string;
    @Prop([Boolean]) public fitToContainer?: boolean;

    @Watch('computedItems')
    public onComputedItemsChange() {
        const currentIndex = this.$refs.slick.currentSlide();

        this.$refs.slick.destroy();
        this.$nextTick(() => {
            this.$refs.slick.create();
            this.$refs.slick.goTo(currentIndex, true);
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
}
