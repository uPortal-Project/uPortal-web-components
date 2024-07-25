/*Lit */
import { html, LitElement, css, unsafeCSS, TemplateResult } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
/*SCSS*/
import ActionFavoritesScss from '@styles/action-favorites.scss';
/*Localization*/
import { msg, localized, str } from '@lit/localize';
import { setLocale } from '@helpers/localization';
import langHelper from '@helpers/langHelper';
/*Mixins*/
import { LitLoggable } from '@mixins/litLoggable';
/*Dependencies*/
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faStar as faStarS } from '@fortawesome/free-solid-svg-icons/faStar';
import { faStar as faStarR } from '@fortawesome/free-regular-svg-icons/faStar';

@localized()
@customElement('esco-action-favorites')
export class ActionFavorites extends LitLoggable(LitElement) {
  @property({ type: Array })
  messages = [];
  @property({ type: String })
  fname = '';
  @property({ type: Number, attribute: 'chan-id' })
  chanId = 0;
  @property({ type: Boolean, attribute: 'background-is-dark' })
  backGroundIsDark = false;
  @property({ type: Boolean })
  isFavorite = false;

  constructor() {
    super();
    const lhOpts = {
      languageCodeOnly: true,
      availableLanguages: ['fr', 'en'],
      defaultLanguage: 'en',
    };
    const lang = langHelper.getPageLang(lhOpts);
    setLocale(lang);
    langHelper.setLocale(lang);
  }

  protected shouldUpdate(): boolean {
    if (this.fname === '') {
      this.errorLog('fname attribute is required');
      return false;
    }
    return true;
  }

  firstUpdated(): void {
    this.setLogIdentifier(this.fname);
    this.debugLog('First update');
  }

  favoriteMessage(): string {
    return this.isFavorite
      ? langHelper.localTransation(
          'favorites.remove',
          msg(str`Remove from favorites`)
        )
      : langHelper.localTransation('favorites.add', msg(str`Add to favorites`));
  }

  toggleFavorite(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    this.isFavorite = !this.isFavorite;
    const toggleEvt = new CustomEvent('toggle', {
      detail: {
        fname: this.fname,
        chanId: this.chanId,
        isFavorite: this.isFavorite,
        send: false,
      },
    });
    this.dispatchEvent(toggleEvt);
  }

  render(): TemplateResult {
    const classList = {
      [this.fname]: true,
      'background-dark': this.backGroundIsDark,
    };
    const starIcon = this.isFavorite
      ? `${icon(faStarS).html}`
      : `${icon(faStarR).html}`;
    return html`
      <div
        class="action-favorites ${classMap(classList)}"
        title="${this.favoriteMessage()}"
        @click="${this.toggleFavorite}"
      >
        <button class="favorite-button">
          <span class="sr-only">${this.favoriteMessage()}</span>
          ${unsafeHTML(starIcon)}
        </button>
      </div>
    `;
  }

  static styles = css`
    ${unsafeCSS(ActionFavoritesScss)}
  `;
}
