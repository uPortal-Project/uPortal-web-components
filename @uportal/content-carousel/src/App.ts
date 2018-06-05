import { Component, Provide, Vue } from 'vue-property-decorator';
import ContentCarousel from './components/ContentCarousel';
import { demoStrategy } from './lib/DemoStrategy';

@Component({
    components: {
        ContentCarousel,
    },
})
export default class App extends Vue {
    @Provide() private demoStrategy = demoStrategy;

    @Provide() private options: any = {
        slidesToShow: 1,
        infinite: true,
        arrows: true,
    };
}
