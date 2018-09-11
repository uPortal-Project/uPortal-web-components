import { Component, Provide, Vue } from 'vue-property-decorator';
import ContentCarousel from './components/ContentCarousel';

@Component({
  components: {
    ContentCarousel,
  },
})
export default class App extends Vue {
  @Provide()
  public heroOptions: any = {
    slidesToShow: 1,
    infinite: true,
    arrows: true,
  };

  @Provide()
  public contentOptions: any = {
    slidesToShow: 3,
    infinite: true,
    arrows: true,
    dots: true,
    variableWidth: true,
  };

  @Provide()
  public portletOptions: any = {
    slidesToShow: 6,
    infinite: true,
    arrows: true,
    dots: true,
  };

  @Provide() public heroHeight = '30rem';

  @Provide() public contentHeight = 'auto';

  @Provide() public portletHeight = 'auto';

  @Provide() public alignText = 'right';
}
