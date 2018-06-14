import { Component, Provide, Vue } from 'vue-property-decorator';
import ContentCarousel from './components/ContentCarousel';

@Component({
    components: {
        ContentCarousel,
    },
})
export default class App extends Vue {
    @Provide() private heroOptions: any = {
        slidesToShow: 1,
        infinite: true,
        arrows: true,
    };

    @Provide() private contentOptions: any = {
        slidesToShow: 3,
        infinite: true,
        arrows: true,
        dots: true,
    };

    @Provide() private heroHeight = '500px';
    @Provide() private contentHeight = 'auto';
}
