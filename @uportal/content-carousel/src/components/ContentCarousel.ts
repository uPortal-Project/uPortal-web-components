import { Component, Prop, Provide, Vue } from 'vue-property-decorator';
import Slick from 'vue-slick';
import { CarouselStrategy, CarouselItem } from './../lib/Definitions';

@Component({
    components: {
        Slick,
    },
})
export default class ContentCarousel extends Vue {
    @Prop() public strategy!: CarouselStrategy;
    @Prop() public slickOptions: any; // TODO: track down an official slick options type definition

    get computedItems() {
        if (typeof this.strategy === 'function') {
            return this.strategy({});
        } else {
            return [];
        }
    }
}
