/*Lit*/
import { html, LitElement, css, TemplateResult, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { repeat } from 'lit/directives/repeat.js';
/*SCSS*/
import ContentFavoritesScss from '@styles/content-favorites.scss';
/*Localization*/
import { msg, localized, str } from '@lit/localize';
import { setLocale } from '@helpers/localization';
import langHelper from '@helpers/langHelper';
/*Mixins*/
import { LitLoggable } from '@mixins/litLoggable';
/*Services*/
import portletService from '@services/portletService';
/*Helpers*/
import sizeHelper from '@helpers/sizeHelper';
/*Dependencies*/
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import debounce from 'lodash/debounce';
import Swiper, { Navigation } from 'swiper';
/*Components*/
import './portlet-card';
import './content-grid';

@localized()
@customElement('esco-content-favorites')
export class ContentFavorites extends LitLoggable(LitElement) {
  @property({ type: Array })
  messages = [];
  @property({
    type: String,
    hasChanged(newVal: string) {
      return sizeHelper.validate(newVal, true, true);
    },
    attribute: 'parent-screen-size',
  })
  parentScreenSize = 'medium';
  @property({
    type: String,
    hasChanged(newVal: string) {
      return sizeHelper.validate(newVal, true, true);
    },
    attribute: 'card-size',
  })
  cardSize = 'small';
  @property({ type: String, attribute: 'background-color' })
  backgroundColor = 'rgba(0, 0, 0, 0)';
  @property({ type: String, attribute: 'context-api-url' })
  contextApiUrl = process.env.APP_PORTAL_CONTEXT ?? '';
  @property({ type: String, attribute: 'favorite-api-url' })
  favoriteApiUrl =
    (process.env.APP_PORTAL_CONTEXT ?? '') +
    (process.env.APP_FAVORITES_PORTLETS_URI ?? '');
  @property({ type: String, attribute: 'portlet-api-url' })
  portletApiUrl =
    (process.env.APP_PORTAL_CONTEXT ?? '') +
    (process.env.APP_BROWSABLE_PORTLETS_URI ?? '');
  @property({ type: String, attribute: 'user-info-api-url' })
  userInfoApiUrl =
    (process.env.APP_PORTAL_CONTEXT ?? '') +
    (process.env.APP_USER_INFO_URI ?? '');
  @property({ type: Array })
  portlets: Portlet[] = [];
  @property({ type: Array })
  favorites: string[] = [];
  @property({ type: Boolean })
  hide = false;
  @property({ type: Boolean, attribute: 'hide-action' })
  hideAction = false;
  @property({ type: Boolean, attribute: 'disable-swiper' })
  disableSwiper = false;
  @property({ type: Boolean, attribute: 'disable-cache' })
  disableCache = false;
  @property({ type: Number, attribute: 'cache-ttl' })
  cacheTTL = parseInt(process.env.CACHE_TTL ?? '60');
  @property({ type: Boolean })
  debug = false;

  @state()
  _elementSize = 'medium';
  @state()
  _swiperObj: Swiper | undefined = undefined;
  @state()
  _prevSiperBtnIsAtive = false;
  @state()
  _nextSiperBtnIsAtive = true;

  @query('#swiper')
  swiper!: HTMLElement;

  constructor() {
    super();

    this.debugLog('Component loaded');

    const lhOpts = {
      languageCodeOnly: true,
      availableLanguages: ['fr', 'en'],
      defaultLanguage: 'en',
    };
    const lang = langHelper.getPageLang(lhOpts);
    setLocale(lang);
    langHelper.setLocale(lang);
  }

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener(
      'resize',
      this.debounceCalculateSize.bind(this),
      false
    );
  }

  disconnectedCallback(): void {
    super.connectedCallback();
    window.removeEventListener(
      'resize',
      this.debounceCalculateSize.bind(this),
      false
    );
  }

  shouldUpdate(
    changedProperties: Map<string | number | symbol, unknown>
  ): boolean {
    if (changedProperties.has('cacheTTL')) {
      portletService.cacheTtl = this.cacheTTL;
    }
    if (changedProperties.has('disableCache')) {
      portletService.enabled = !this.disableCache;
    }
    return true;
  }

  willUpdate(changedProperties: Map<string | number | symbol, unknown>): void {
    if (changedProperties.has('messages')) {
      langHelper.setReference(this.messages);
    }
  }

  firstUpdated(
    changedProperties: Map<string | number | symbol, unknown>
  ): void {
    super.firstUpdated && super.firstUpdated(changedProperties);

    const swiperEl = this.renderRoot.querySelector('#swiper') as HTMLElement;

    if (swiperEl) {
      this._swiperObj = new Swiper(swiperEl, {
        modules: [Navigation],
        slidesPerView: 'auto',
        spaceBetween: 15,
        speed: 800,
        freeMode: true,
        navigation: {
          nextEl: swiperEl.querySelector('.swiper-button-next') as HTMLElement,
          prevEl: swiperEl.querySelector('.swiper-button-prev') as HTMLElement,
        },
      });
      this._swiperObj.on(
        'sliderMove',
        this.debounceUpdateNavigation.bind(this)
      );
      this._swiperObj.on('reachEnd', this.debounceUpdateNavigation.bind(this));
      this._swiperObj.on(
        'reachBeginning',
        this.debounceUpdateNavigation.bind(this)
      );
      this.debounceUpdateNavigation.bind(this);
    }
    this.calculateSize();
  }

  updated(_changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(_changedProperties);
    this.updateNavigation();
  }

  debounceCalculateSize = debounce(this.calculateSize, 300);

  calculateSize(): void {
    if (this.cardSize === 'auto') {
      const _size = sizeHelper.elementWidth(
        this.shadowRoot?.querySelector('#favsSection')
      );
      if (this.parentScreenSize === 'smaller' || _size < 660) {
        this._elementSize = 'smaller';
      } else if (this.parentScreenSize === 'small' || _size < 1280) {
        this._elementSize = 'small';
      } else if (this.parentScreenSize === 'medium' || _size < 1680) {
        this._elementSize = 'medium';
      } else {
        this._elementSize = 'large';
      }
    } else {
      this._elementSize = this.cardSize;
    }
    this.updateNavigation();
  }

  portletCardSize(): string {
    if (this.cardSize === 'auto') {
      return this._elementSize;
    }
    return this.cardSize;
  }

  getRenderPortletUrl(portlet: Portlet): string {
    return portletService.getRenderUrl(portlet, this.contextApiUrl);
  }

  hasAlternativeMaximizedUrl(portlet: Portlet): boolean {
    return portletService.getAlternativeMaximizedUrl(portlet)?.length > 0;
  }

  getAlternativeMaximizedTarget(portlet: Portlet): string {
    return portletService.getAlternativeMaximizedTarget(portlet);
  }

  debounceUpdateNavigation = debounce(this.updateNavigation, 500);

  updateNavigation(): void {
    this._swiperObj?.update();
    this._prevSiperBtnIsAtive = this._swiperObj?.isBeginning ? false : true;
    this._nextSiperBtnIsAtive = this._swiperObj?.isEnd ? false : true;
  }

  swipeRight(): void {
    this._swiperObj?.slideNext();
    this.debounceUpdateNavigation();
  }

  swipeLeft(): void {
    this._swiperObj?.slidePrev();
    this.debounceUpdateNavigation();
  }

  favorited(): Portlet[] {
    return (this.portlets as Portlet[])
      .filter((portlet) => (this.favorites as string[]).includes(portlet.fname))
      .sort((a, b) => {
        return (
          (this.favorites as string[]).indexOf(a.fname) -
          (this.favorites as string[]).indexOf(b.fname)
        );
      });
  }

  toggleFavorite(e: CustomEvent): void {
    const event = new CustomEvent('toggle-favorite', {
      bubbles: true,
      detail: e.detail,
    });
    this.dispatchEvent(event);
  }

  render(): TemplateResult {
    const calcFavorites = this.favorited();
    const displayFavs = calcFavorites.length > 0;
    return html`
      <section
        class="content-favorites ${classMap({
          ['parent-' + this.parentScreenSize]: true,
          [this._elementSize]: true,
        })}"
        style="${styleMap({ 'background-color': this.backgroundColor })}"
      >
        <div class="content-favorites-title">
          <h1>
            ${langHelper.localTransation(
              'favorites.title',
              msg(str`My favorites`)
            )}
          </h1>
        </div>
        <div
          id="favsSection"
          class="${classMap({
            favorites: displayFavs,
            'empty-favorites': !displayFavs,
          })}"
        >
          ${displayFavs
            ? html`
                ${!this.disableSwiper
                  ? html`
                      <link
                        rel="stylesheet"
                        href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
                      />
                      <div id="swiper" class="swiper">
                        <div class="swiper-wrapper">
                          ${repeat(
                            calcFavorites,
                            (portlet) => portlet.fname,
                            (portlet) => {
                              const hasAlternativeMaximizedUrl =
                                this.hasAlternativeMaximizedUrl(portlet);
                              return html`
                                <div class="swiper-slide">
                                  <a
                                    href="${this.getRenderPortletUrl(portlet)}"
                                    target="${hasAlternativeMaximizedUrl
                                      ? this.getAlternativeMaximizedTarget(
                                          portlet
                                        )
                                      : '_self'}"
                                    rel="${hasAlternativeMaximizedUrl
                                      ? 'noopener noreferrer'
                                      : ''}"
                                    class="no-style"
                                  >
                                    <esco-portlet-card
                                      .messages="${this.messages}"
                                      .portletDesc="${portlet}"
                                      is-favorite
                                      size="${this.portletCardSize()}"
                                      ?hide-action=${this.hideAction}
                                      ?debug="${this.debug}"
                                      @toggle-favorite=${this.toggleFavorite}
                                      background-is-dark
                                    ></esco-portlet-card>
                                  </a>
                                </div>
                              `;
                            }
                          )}
                        </div>
                      </div>
                      <div
                        slot="button-prev"
                        class="swiper-button-prev ${classMap({
                          'fav-swiper-button-disabled':
                            !this._prevSiperBtnIsAtive,
                        })}"
                        @click=${this.swipeLeft.bind(this)}
                      >
                        ${unsafeHTML(`${icon(faChevronLeft).html}`)}
                      </div>
                      <div
                        slot="button-next"
                        class="swiper-button-next ${classMap({
                          'fav-swiper-button-disabled':
                            !this._nextSiperBtnIsAtive,
                        })}"
                        @click=${this.swipeRight.bind(this)}
                      >
                        ${unsafeHTML(`${icon(faChevronRight).html}`)}
                      </div>
                    `
                  : html`
                      <esco-content-grid
                        hide-title
                        portlet-card-size="${this._elementSize}"
                        .favorites="${this.favorites}"
                        .portlets="${calcFavorites}"
                        ?hide-action="${this.hideAction}"
                        favorite-api-url="${this.favoriteApiUrl}"
                        user-info-api-url="${this.userInfoApiUrl}"
                        portlet-background-is-dark
                        parent-screen-size="${this.parentScreenSize}"
                        context-api-url="${this.contextApiUrl}"
                        portlet-api-url="${this.portletApiUrl}"
                        ?disable-cache="${this.disableCache}"
                        cache-ttl="${this.cacheTTL}"
                        ?debug=${this.debug}
                        @gridFavoritesUpdated="${this.toggleFavorite}"
                      ></esco-content-grid>
                    `}
              `
            : html`
                <div>
                  ${langHelper.localTransation(
                    'favorites.empty',
                    msg(str`You have no favorites`)
                  )}
                </div>
              `}
        </div>
      </section>
    `;
  }

  static styles = [
    css`
      ${unsafeCSS(ContentFavoritesScss)}
    `,
  ];
}
