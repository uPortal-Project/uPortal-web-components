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

    get computedItems(): CarouselItem[] {
        return this.strategy.items;
    }
}
