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
    attribute: 'portlet-card-size',
  })
  cardSize = 'auto';
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
  @property({ type: String, attribute: 'card-hover-src' })
  cardHoverSrc = 'none';
  @property({ type: Array, reflect: true })
  favorites = [];
  @property({ type: Array, attribute: 'all-categories', reflect: true })
  allCategories: string[] = [];
  @property({ type: Array })
  portlets: Portlet[] = [];
  @property({ type: Boolean, attribute: 'hide-title' })
  hideTitle = false;
  @property({ type: Boolean, attribute: 'show-footer-categories' })
  showFooterCategories = false;
  @property({ type: Boolean, attribute: 'hide-action' })
  hideAction = false;
  @property({ type: Boolean, attribute: 'use-external-filter' })
  useExternalFilter = false;
  @property({ type: Boolean })
  debug = false;
  @property({ type: Boolean, attribute: 'portlet-background-is-dark' })
  portletBackgroundIsDark = false;

  @state()
  _isVisible = false;
  @state()
  _filterValue = '';
  @state()
  _filterCategory = '';
  @state()
  _localFavorites: string[] | undefined = undefined;
  @state()
  _localPortlets: Portlet[] | undefined = undefined;

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

  shouldUpdate(): boolean {
    return this.portlets.length > 0 || this._localPortlets !== undefined;
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

  async fetchPortlets(): Promise<void> {
    const portlets = await portletService.fetch(
      this.userInfoApiUrl,
      this.portletApiUrl,
      this.debug
    );
    if (portlets !== null) {
      this._localPortlets = portletService.portletRegistryToArray(portlets);
    } else {
      this.errorLog('No portlets found');
    }
  }

  async fetchFavorites(): Promise<void> {
    const favoritesTree = await favoritesService.fetch(
      this.userInfoApiUrl,
      this.layoutApiUrl,
      this.debug
    );
    if (favoritesTree != null) {
      this._localFavorites = favoritesService.flattenFavorites(favoritesTree);
    }
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
      this.portlets.length > 0 ? this.portlets : this._localPortlets;
    const allCategories = portlets?.flatMap(({ categories }) => categories);
    this.allCategories = [...new Set(allCategories)].sort() as string[];
    this.sendCategories();
  }

  filteredPortlets(): Portlet[] {
    const portlets: Portlet[] =
      this.portlets.length > 0 ? this.portlets : this._localPortlets ?? [];
    const categoryFilter =
      this._filterCategory.trim() === ''
        ? // no filter applied return everything
          (portlets: Portlet[]): Portlet[] => portlets
        : // filter by category
          (portlets: Portlet[]): Portlet[] =>
            matchSorter(portlets, this._filterCategory, {
              keys: ['categories'],
              threshold: matchSorter.rankings.EQUAL,
            });
    const valueFilter =
      this._filterValue.trim() === ''
        ? // no filter applied return everything
          (portlets: Portlet[]): Portlet[] => portlets
        : // filter and sort by best match
          (portlets: Portlet[]): Portlet[] =>
            matchSorter(portlets, this._filterValue, {
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

  getAlternativeMaximizedTarget(portlet: Portlet): string {
    return portletService.getAlternativeMaximizedTarget(portlet);
  }

  isFavorite(fname: string): boolean {
    const favorites =
      this.favorites.length > 0 ? this.favorites : this._localFavorites;
    return favorites?.includes(fname as never) || false;
  }

  debounceCatFilterChange = debounce((value) => {
    this._filterCategory = value;
    this.sendExternalFilter();
  }, 500);

  catFilterChange(e: Event): void {
    const target = (e.target || e.srcElement) as HTMLInputElement;
    const value = target?.value;
    this.debounceCatFilterChange(value);
  }

  debounceValFilterChange = debounce((value) => {
    this._filterValue = value;
    this.sendExternalFilter();
  }, 500);

  valFilterChange(e: Event): void {
    const target = (e.target || e.srcElement) as HTMLInputElement;
    const value = target?.value;
    this.debounceValFilterChange(value);
  }

  getExternalFilter(e: CustomEvent): void {
    if (
      (this.allCategories.includes(e.detail.category) ||
        e.detail.category == '') &&
      this._filterCategory != e.detail.category
    ) {
      this._filterCategory = e.detail.category;
    }

    if (e.detail?.value && this._filterValue != e.detail.value) {
      this._filterValue = e.detail.value;
    }
  }

  sendExternalFilter(): void {
    const filterEvt = new CustomEvent('esco-cm-grid-filter', {
      detail: {
        category: this._filterCategory,
        value: this._filterValue,
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

  toggleFavorite(e: CustomEvent): void {
    if (this.favorites.length == 0) {
      if (this._localFavorites === undefined) this._localFavorites = [];
      if (!this._localFavorites.includes(e.detail.fname)) {
        this._localFavorites.push(e.detail.fname);
      } else {
        this._localFavorites.splice(
          this._localFavorites.indexOf(e.detail.fname),
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
      favoritesService.deleteCachedData(this.favoriteApiUrl);
      e.detail.send = true;
    }

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
            opened: this._isVisible,
            closed: !this._isVisible,
          })}"
        >
          <input
            title="${langHelper.localTransation(
              'services.filter',
              msg(str`Search a service...`)
            )}"
            .value="${this._filterValue}"
            placeholder="${langHelper.localTransation(
              'services.filter',
              msg(str`Search a service...`)
            )}"
            type="text"
            @keyup=${this.valFilterChange}
            @focus=${() => {
              this._filterValue = '';
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
                  ?selected=${this._filterCategory === cat}
                >
                  ${cat}
                </option> `
            )}
          </select>
          <div
            @click="${() => {
              this._isVisible = !this._isVisible;
            }}"
          >
            ${unsafeHTML(`${icon(faSearch).html}`)}
          </div>
        </div>
      `;
    }
  }

  renderCatFilterFooter(): TemplateResult {
    if (this.showFooterCategories) {
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
                ?selected=${this._filterCategory === cat}
              >
                ${cat}
              </option> `
          )}
        </select>
      `;
    } else {
      return html``;
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
              ? this.getAlternativeMaximizedTarget(portlet)
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
              size="${cardSize}"
              card-hover-src="${this.cardHoverSrc}"
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

  static styles = css`
    ${unsafeCSS(ContentGridScss)}
  `;
}
