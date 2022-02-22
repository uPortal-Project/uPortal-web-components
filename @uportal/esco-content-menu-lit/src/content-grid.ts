/*Lit*/
import {
  html,
  LitElement,
  css,
  unsafeCSS,
  TemplateResult,
  PropertyValues,
} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
/*SCSS*/
import ContentGridScss from '@styles/content-grid.scss';
/*Localization*/
import { msg, localized, str } from '@lit/localize';
import { setLocale } from '@helpers/localization';
import langHelper from '@helpers/langHelper';
/*Mixins*/
import { LitLoggable } from '@mixins/litLoggable';
/*Services*/
import portletService from '@services/portletService';
import favoritesService from '@services/favoritesService';
/*Helpers*/
import sizeHelper from '@helpers/sizeHelper';
/*Dependencies*/
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { matchSorter } from 'match-sorter';
import debounce from 'lodash/debounce';
/*Components*/
import './portlet-card';

@localized()
@customElement('esco-content-grid')
export class ContentGrid extends LitLoggable(LitElement) {
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
  cardSize = 'medium';
  @property({
    type: String,
    hasChanged(newVal: string) {
      return sizeHelper.validate(newVal, true, true);
    },
    attribute: false,
  })
  elementSize = 'medium';
  @property({ type: String, attribute: 'background-color' })
  backgroundColor = 'rgba(0, 0, 0, 0)';
  @property({ type: String, attribute: 'context-api-url' })
  contextApiUrl = process.env.APP_PORTAL_CONTEXT ?? '';
  @property({ type: String, attribute: 'favorite-api-url' })
  favoriteApiUrl =
    (process.env.APP_PORTAL_CONTEXT ?? '') +
    (process.env.APP_FAVORITES_PORTLETS_URI ?? '');
  @property({ type: String, attribute: 'layout-api-url' })
  layoutApiUrl =
    (process.env.APP_PORTAL_CONTEXT ?? '') +
    (process.env.APP_FAVORITES_URI ?? '');
  @property({ type: String, attribute: 'portlet-api-url' })
  portletApiUrl =
    (process.env.APP_PORTAL_CONTEXT ?? '') +
    (process.env.APP_BROWSABLE_PORTLETS_URI ?? '');
  @property({ type: String, attribute: 'user-info-api-url' })
  userInfoApiUrl =
    (process.env.APP_PORTAL_CONTEXT ?? '') +
    (process.env.APP_USER_INFO_URI ?? '');
  @property({ type: Array, reflect: true })
  favorites = [];
  @property({ type: Array, attribute: 'all-categories', reflect: true })
  allCategories: string[] = [];
  @property({ type: Array })
  portlets = [];
  @property({ type: Boolean, attribute: 'hide-title' })
  hideTitle = false;
  @property({ type: Boolean, attribute: 'hide-action' })
  hideAction = false;
  @property({ type: Boolean, attribute: 'use-external-filter' })
  useExternalFilter = false;
  @property({ type: Boolean })
  debug = false;
  @property({ type: Boolean, attribute: 'portlet-background-is-dark' })
  portletBackgroundIsDark = false;

  @state()
  isVisible = false;
  @state()
  filterValue = '';
  @state()
  filterCategory = '';
  @state()
  localFavorites: string[] | undefined = undefined;
  @state()
  localPortlets: Portlet[] | undefined = undefined;

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
      'esco-cm-grid-filter',
      this.getExternalFilter.bind(this) as EventListener
    );

    window.addEventListener(
      'esco-cm-request-grid-filter',
      this.sendExternalFilter as EventListener
    );

    window.addEventListener(
      'esco-cm-request-categories',
      this.sendCategories as EventListener
    );

    window.addEventListener(
      'gridFavoritesUpdated',
      this.reload.bind(this) as EventListener
    );
    this.loadData();
  }

  disconnectedCallback(): void {
    super.connectedCallback();

    window.removeEventListener(
      'esco-cm-grid-filter',
      this.getExternalFilter as EventListener
    );

    window.removeEventListener(
      'esco-cm-request-grid-filter',
      this.sendExternalFilter as EventListener
    );

    window.removeEventListener(
      'esco-cm-request-categories',
      this.sendCategories as EventListener
    );

    window.removeEventListener(
      'gridFavoritesUpdated',
      this.reload.bind(this) as EventListener
    );
    window.removeEventListener(
      'resize',
      this.debounceCalculateSize.bind(this),
      false
    );
  }

  willUpdate(changedProperties: PropertyValues): void {
    if (changedProperties.has('parentScreenSize')) {
      this.elementSize = this.parentScreenSize;
    }
    if (changedProperties.has('messages')) {
      langHelper.setReference(this.messages);
    }
  }

  loadData(): void {
    if (this.portlets.length < 1) this.fetchPortlets();
    if (this.favorites.length < 1) this.fetchFavorites();
    window.addEventListener(
      'resize',
      this.debounceCalculateSize.bind(this),
      false
    );
  }

  getExternalFilter(e: CustomEvent): void {
    if (
      e.detail?.category &&
      this.allCategories.includes(e.detail.category) &&
      this.filterCategory != e.detail.category
    ) {
      this.filterCategory = e.detail.category;
    }

    if (e.detail?.value && this.filterValue != e.detail.value) {
      this.filterValue = e.detail.value;
    }
  }

  sendExternalFilter(): void {
    const filterEvt = new CustomEvent('esco-cm-grid-filter', {
      detail: {
        category: this.filterCategory,
        value: this.filterValue,
      },
    });
    window.dispatchEvent(filterEvt);
  }

  sendCategories(): void {
    const catsEvt = new CustomEvent('esco-cm-categories', {
      detail: {
        categories: this.allCategories,
      },
    });
    window.dispatchEvent(catsEvt);
  }

  reload(): void {
    if (!this.debug) this.fetchPortlets();
  }

  debounceCalculateSize = debounce(this.calculateSize, 500);

  calculateSize(): void {
    const element = this.shadowRoot?.getElementById('content-grid');
    const size = sizeHelper.elementWidth(element);
    this.elementSize = sizeHelper.breakPointName(size);
  }

  calculateCategories(): void {
    const portlets =
      this.portlets.length > 0 ? this.portlets : this.localPortlets;
    const allCategories = portlets?.flatMap(({ categories }) => categories);
    this.allCategories = [...new Set(allCategories)].sort() as string[];
    this.sendCategories();
  }

  async fetchPortlets(): Promise<void> {
    const portlets = await portletService.fetch(
      this.userInfoApiUrl,
      this.portletApiUrl,
      this.debug
    );
    if (portlets !== undefined) {
      this.localPortlets = portletService.portletRegistryToArray(portlets);
    }
  }

  async fetchFavorites(): Promise<void> {
    const favoritesTree = await favoritesService.fetch(
      this.userInfoApiUrl,
      this.layoutApiUrl,
      this.debug
    );

    this.localFavorites = favoritesService.flattenFavorites(favoritesTree);
  }

  filteredPortlets(): Portlet[] {
    const portlets: Portlet[] =
      this.portlets.length > 0 ? this.portlets : this.localPortlets ?? [];
    const categoryFilter =
      this.filterCategory.trim() === ''
        ? // no filter applied return everything
          (portlets: Portlet[]): Portlet[] => portlets
        : // filter by category
          (portlets: Portlet[]): Portlet[] =>
            matchSorter(portlets, this.filterCategory, {
              keys: ['categories'],
              threshold: matchSorter.rankings.EQUAL,
            });
    const valueFilter =
      this.filterValue.trim() === ''
        ? // no filter applied return everything
          (portlets: Portlet[]): Portlet[] => portlets
        : // filter and sort by best match
          (portlets: Portlet[]): Portlet[] =>
            matchSorter(portlets, this.filterValue, {
              keys: ['title', 'name', 'description'],
              threshold: matchSorter.rankings.ACRONYM,
            });

    return valueFilter(
      categoryFilter(portlets).sort(portletService.sortPortlets)
    );
  }

  portletCardSize(): string {
    // this.calculateSize();
    if (this.cardSize === 'auto') {
      return this.elementSize;
    }
    return this.cardSize;
  }

  getRenderPortletUrl(portlet: Portlet): string {
    return portletService.getRenderUrl(portlet, this.contextApiUrl);
  }
  hasAlternativeMaximizedUrl(portlet: Portlet): string {
    return portletService.getAlternativeMaximizedUrl(portlet);
  }
  isFavorite(fname: string): boolean {
    const favorites =
      this.favorites.length > 0 ? this.favorites : this.localFavorites;
    return favorites?.includes(fname as never) || false;
  }
  toggleFavorite(e: CustomEvent): void {
    const GFUevent = new CustomEvent('gridFavoritesUpdated', {
      bubbles: true,
      detail: e.detail,
    });
    window.dispatchEvent(GFUevent);
    const TFevent = new CustomEvent('toggle-favorite', {
      bubbles: true,
      detail: e.detail,
    });
    this.dispatchEvent(TFevent);

    if (this.favorites.length == 0) {
      if (this.localFavorites === undefined) this.localFavorites = [];
      if (!this.localFavorites.includes(e.detail.fname)) {
        this.localFavorites.push(e.detail.fname);
      } else {
        this.localFavorites.splice(
          this.localFavorites.indexOf(e.detail.fname),
          1
        );
      }
    }

    if (
      !this.debug &&
      e.detail?.chanId !== undefined &&
      this.portlets.length >= 1
    ) {
      if (e.detail?.isFavorite) {
        favoritesService.add(
          this.userInfoApiUrl,
          this.favoriteApiUrl,
          e.detail.chanId
        );
      } else {
        favoritesService.remove(
          this.userInfoApiUrl,
          this.favoriteApiUrl,
          e.detail.chanId
        );
      }
    }
  }

  render(): TemplateResult {
    this.calculateCategories();
    return html`
      <section
        class="content-grid ${classMap({
          ['parent-' + this.parentScreenSize]: true,
          [this.elementSize]: true,
        })}"
        style="${styleMap({ 'background-color': this.backgroundColor })}"
        id="content-grid"
      >
        <div>
          ${this.hideTitle
            ? html``
            : html`
                <div class="title">
                  <slot name="header-left">
                    <h1>
                      ${langHelper.localTransation(
                        'services.title',
                        msg(str`All the services`)
                      )}
                    </h1>
                  </slot>
                  <slot name="header-right">${this.renderCatFilter()}</slot>
                </div>
              `}

          <div class="preamble">
            <slot name="preamble" class="preamble"></slot>
          </div>
          <div class="flex-grid">${this.renderPortlets()}</div>
          <slot name="footer">${this.renderCatFilterFooter()} </slot>
        </div>
      </section>
    `;
  }

  renderCatFilter(): TemplateResult {
    if (this.hideTitle) {
      return html``;
    } else {
      return html`
        <div
          class="filter custom-caret ${classMap({
            opened: this.isVisible,
            closed: !this.isVisible,
          })}"
        >
          <input
            title="${langHelper.localTransation(
              'services.filter',
              msg(str`Search a service...`)
            )}"
            .value="${this.filterValue}"
            placeholder="${langHelper.localTransation(
              'services.filter',
              msg(str`Search a service...`)
            )}"
            type="text"
            @keyup=${this.valFilterChange}
            @focus=${() => {
              this.filterValue = '';
              this.sendExternalFilter();
            }}
            autofocus
          />
          <select id="catFilter" @change=${this.catFilterChange}>
            <option class="default" selected value="">
              ${langHelper.localTransation(
                'filter.selectOption',
                msg(str`All the categories`)
              )}
            </option>
            ${this.allCategories.map(
              (cat) =>
                html`<option
                  value="${(cat as string) ?? ''}"
                  ?selected=${this.filterCategory === cat}
                >
                  ${cat}
                </option> `
            )}
          </select>
          <div
            @click="${() => {
              this.isVisible = !this.isVisible;
            }}"
          >
            ${unsafeHTML(`${icon(faSearch).html}`)}
          </div>
        </div>
      `;
    }
  }

  renderCatFilterFooter(): TemplateResult {
    if (this.hideTitle) {
      return html``;
    } else {
      return html`
        <select class="footer-categories" @change=${this.catFilterChange}>
          <option class="default" selected value="">
            ${langHelper.localTransation(
              'filter.selectOption',
              msg(str`All the categories`)
            )}
          </option>
          ${this.allCategories.map(
            (cat) =>
              html`<option
                value="${(cat as string) ?? ''}"
                ?selected=${this.filterCategory === cat}
              >
                ${cat}
              </option> `
          )}
        </select>
      `;
    }
  }

  renderPortlets(): TemplateResult {
    const portlets = this.filteredPortlets();

    const cardSize = this.portletCardSize();

    const template = html`${portlets.map((portlet) => {
      return html`
        <div
          data-key="${portlet.id}"
          class="flex-item ma-3 text-xs-center ${classMap({
            ['portlet-card-' + cardSize]: true,
          })}"
        >
          <a
            href="${this.getRenderPortletUrl(portlet)}"
            target="${this.hasAlternativeMaximizedUrl(portlet)
              ? '_blank'
              : '_self'}"
            rel="${this.hasAlternativeMaximizedUrl(portlet)
              ? 'noopener noreferrer'
              : ''}"
            class="no-style"
          >
            <esco-portlet-card
              .messages=${this.messages}
              .portletDesc="${portlet}"
              ?is-favorite=${this.isFavorite(portlet.fname)}
              size="${this.portletCardSize()}"
              ?hide-action=${this.hideAction}
              ?background-is-dark="${this.portletBackgroundIsDark}"
              ?debug="${this.debug}"
              @toggle-favorite=${this.toggleFavorite}
            ></esco-portlet-card>
          </a>
        </div>
      `;
    })} `;

    return template;
  }

  catFilterChange(e: Event): void {
    const target = (e.target || e.srcElement) as HTMLInputElement;
    const value = target?.value;
    this.debounceCatFilterChange(value);
  }
  debounceCatFilterChange = debounce((value) => {
    this.filterCategory = value;
    this.sendExternalFilter();
  }, 500);

  valFilterChange(e: Event): void {
    const target = (e.target || e.srcElement) as HTMLInputElement;
    const value = target?.value;
    this.debounceValFilterChange(value);
  }
  debounceValFilterChange = debounce((value) => {
    this.filterValue = value;
    this.sendExternalFilter();
  }, 500);

  static styles = css`
    ${unsafeCSS(ContentGridScss)}
  `;
}
