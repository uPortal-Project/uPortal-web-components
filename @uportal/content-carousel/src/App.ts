import { Component, Provide, Vue } from 'vue-property-decorator';
import ContentCarousel from './components/ContentCarousel.vue';
import { demoStrategy } from './lib/DemoStrategy';

@Component({
    components: {
        ContentCarousel,
    },
})
export default class App extends Vue {
    @Provide() private demoStrategy = demoStrategy;
}
