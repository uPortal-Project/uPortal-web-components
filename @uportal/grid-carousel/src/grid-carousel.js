import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { portletRegistryToArray } from '@uportal/portlet-registry-to-array';
import { register } from 'swiper/element/bundle';
import swiperStyles from 'swiper/swiper.css?inline';
import get from 'lodash/get';
import oidc from '@uportal/open-id-connect/src/open-id-connect.js';

@customElement('grid-carousel')
class GridCarousel extends LitElement {
  @property({ type: String, attribute: 'data-api-url' })
  dataApiUrl = '/uPortal/api/v4-3/dlm/portletRegistry.json?favorite=true';

  @property({ type: String, attribute: 'oidc-url' })
  oidcUrl = '/uPortal/api/v5-1/userinfo';

  @property({ type: String, attribute: 'context-portlet-url' })
  contextPortletUrl = '/uPortal/p/';

  @property({ type: Boolean })
  debug = false;

  @property({ type: String, attribute: 'default-icon' })
  defaultIcon =
    '/ResourceServingWebapp/rs/tango/0.8.90/32x32/categories/applications-other.png';

  @property({ type: Number, attribute: 'truncate-length' })
  truncateLength = 50;

  @property({ type: Number, attribute: 'slides-per-view' })
  slidesPerView = 3;

  @property({ type: Number, attribute: 'slides-per-group' })
  slidesPerGroup = 3;

  @property({ type: Number })
  speed = 200;

  @property({ type: Number, attribute: 'space-between' })
  spaceBetween = 20;

  @property({ type: Number })
  breakpoint = 768;

  @state({ type: Boolean })
  mobile = false;

  @state({ type: Array })
  items = [];

  @state({ type: String })
  errorMessage = null;

  constructor() {
    super();
  }

  truncateTitle(title) {
    if (title.length > this.truncateLength) {
      return title.substring(0, this.truncateLength + 1) + '...';
    }

    return title;
  }

  mapRegistry(registry) {
    return registry.map(({ fname, parameters, title }) => {
      const imgUrl =
        get(parameters, 'waffleIconUrl.value') ||
        get(parameters, 'iconUrl.value') ||
        this.defaultIcon;
      const text = get(parameters, 'waffleLabel.value') || title;

      const alternativeMaximizedLink = get(
        parameters,
        'alternativeMaximizedLink.value'
      );

      let targetLinkValue = '_self';
      if (alternativeMaximizedLink) {
        targetLinkValue = '_blank';
      }

      return {
        id: fname,
        link: alternativeMaximizedLink || this.contextPortletUrl + fname,
        image: imgUrl ? imgUrl : this.defaultIcon,
        label: this.truncateTitle(text),
        type: 'box',
        targetLink: targetLinkValue,
      };
    });
  }

  handleError(err, msg) {
    console.error(err);
    this.errorMessage = msg;
  }

  async getToken() {
    try {
      return await oidc({ userInfoApiUrl: this.oidcUrl });
    } catch (err) {
      console.error(err);
      this.handleError(err, 'There was a problem authorizing this request.');
    }
  }

  async fetchData() {
    const token = this.debug ? null : (await this.getToken()).encoded;

    try {
      const response = await fetch(this.dataApiUrl, {
        credentials: 'same-origin',
        headers: {
          Authorization: 'Bearer ' + token,
          'content-type': 'application/jwt',
        },
      });

      if (!response.ok || response.status !== 200) {
        this.handleError(response, 'There was a problem retrieving data.');
      }

      const payload = await response.json();
      this.items = this.mapRegistry(portletRegistryToArray(payload));
    } catch (err) {
      console.error(err);
      this.handleError(err, 'There was a problem retrieving data.');
    }
  }

  firstUpdated() {
    register();
    this.fetchData();
    this.checkMobile();
    window.addEventListener('resize', () => this.checkMobile());
  }

  checkMobile() {
    const mql = window.matchMedia(`(max-width: ${this.breakpoint}px)`);
    this.mobile = mql.matches;
  }

  updated(_changedProperties) {
    if (_changedProperties.has('items') || _changedProperties.has('mobile')) {
      const swiperEl = this.renderRoot.querySelector('swiper-container');
      if (swiperEl) {
        const params = {
          pagination: {
            clickable: true,
          },
          slidesPerView: this.slidesPerView,
          slidesPerGroup: this.slidesPerGroup,
          spaceBetween: this.spaceBetween,
          speed: this.speed,
          injectStyles: [
            `
            :host .slider-wrapper {
              margin-bottom: 20px;
            }
            `,
          ],
        };

        Object.assign(swiperEl, params);

        swiperEl.initialize();
      }
    }
  }

  render() {
    if (this.errorMessage) {
      return html`${this.errorMessage}`;
    } else {
      if (!this.items.length) {
        return html`<slot name="zero"></slot>`;
      } else {
        if (this.mobile) {
          return html`
            <div class="menu">
              <swiper-container init="false">
                ${this.items.map(
                  (item) => html`
                    <swiper-slide>
                      <a
                        href="${item.link}"
                        background="${item.image}"
                        target="${item.targetLink}"
                        rel="${item.targetLink === '_blank'
                          ? 'noopener noreferrer'
                          : ''}"
                      >
                        <img src="${item.image}" alt="${item.label}" />
                        ${item.label}
                      </a>
                    </swiper-slide>
                  `
                )}
              </swiper-container>
            </div>
          `;
        } else {
          return html`
            <div class="grid">
              ${this.items.map(
                (item) => html`
                  <div class="grid-item">
                    <a
                      href="${item.link}"
                      background="${item.image}"
                      target="${item.targetLink}"
                      rel="${item.targetLink === '_blank'
                        ? 'noopener noreferrer'
                        : ''}"
                    >
                      <img src="${item.image}" alt="${item.label}" />
                      ${item.label}
                    </a>
                  </div>
                `
              )}
            </div>
          `;
        }
      }
    }
  }

  static styles = [
    css`
      ${unsafeCSS(swiperStyles)}
    `,
    css`
      :host {
        --swiper-pagination-bottom: 0px;
        --grid-carousel-font-size: 0.75rem;
      }
      * {
        box-sizing: border-box;
      }

      .grid {
        flex-wrap: wrap;
      }

      .grid-item {
        width: var(--grid-carousel-item-width, 33%);
        padding: var(--grid-carousel-item-padding, 1rem);
      }

      swiper-container,
      .grid {
        display: flex;
      }

      swiper-slide,
      .grid-item {
        margin-bottom: 20px;
        align-self: center;
      }
      swiper-slide > a,
      .grid-item a {
        display: block;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: var(--grid-carousel-item-margin, 0.25rem);
        color: var(--grid-carousel-item-text-color, black);
        font-size: var(--grid-carousel-item-font-size, 0.75rem);
        border: var(--grid-carousel-item-border, none);
      }
      swiper-slide a:hover,
      .grid-item a:hover {
        box-shadow: var(
          --grid-carousel-item-hover-shadow,
          0 0 2px rgba(0, 0, 0, 0.25)
        );
        border: var(--grid-carousel-item-hover-border, none);
      }
      swiper-slide img,
      .grid-item img {
        margin: 0 auto;
        display: block;
        width: 100%;
        object-fit: var(--grid-carousel-item-object-fit, contain);
      }
    `,
  ];
}

export default GridCarousel;
