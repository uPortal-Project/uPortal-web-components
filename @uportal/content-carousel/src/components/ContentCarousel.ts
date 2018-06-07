import { Component, Prop, Provide, Vue } from 'vue-property-decorator';
import Slick from 'vue-slick';
import { CarouselItem, DataStrategy } from './../lib/Definitions';

@Component({
    components: {
        Slick,
    },
})
export default class ContentCarousel extends Vue {
    @Prop() public strategy!: DataStrategy;
    @Prop() public slickOptions: any;
    @Prop([String]) public carouselHeight?: string;
    @Prop([Boolean]) public fitToContainer?: boolean;

    public mounted(): void {
        const list = Array.from(this.$el.getElementsByClassName('slick-list'));
        if (list.length > 0) {
            list.forEach((el) => el.setAttribute('style', `height:${this.height}`));
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
