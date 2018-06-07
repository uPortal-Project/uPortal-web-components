import { Component, Provide, Vue } from 'vue-property-decorator';
import ContentCarousel from './components/ContentCarousel';
import { getDemoStrategy } from './lib/DemoStrategy';

@Component({
    components: {
        ContentCarousel,
    },
})
export default class App extends Vue {
    @Provide() private heroStrategy = getDemoStrategy();

    @Provide() private contentStrategy = getDemoStrategy('200x100');


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
