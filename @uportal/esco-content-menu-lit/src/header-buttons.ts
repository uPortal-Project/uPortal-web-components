/*Lit*/
import { html, LitElement, css, TemplateResult, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { customElement, property } from 'lit/decorators.js';
/*SCSS*/
import HeaderButtonScss from '@styles/header-button.scss';
/*Localization*/
import { msg, localized, str } from '@lit/localize';
import { setLocale } from '@helpers/localization';
import langHelper from '@helpers/langHelper';
/*Mixins*/
import { LitLoggable } from '@mixins/litLoggable';
/*Dependencies*/
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

@localized()
@customElement('esco-header-buttons')
export class HeaderButtons extends LitLoggable(LitElement) {
  @property({ type: Array })
  messages = [];
  @property({ type: String, attribute: 'sign-out-url' })
  signOutUrl = process.env.APP_LOGOUT_URL;

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

  protected willUpdate(
    _changedProperties: Map<string | number | symbol, unknown>
  ): void {
    if (_changedProperties.has('messages')) {
      langHelper.setReference(this.messages);
    }
  }

  onClose(e: Event): void {
    e.preventDefault();
    const closeEvt = new CustomEvent('close');
    this.dispatchEvent(closeEvt);
  }

  render(): TemplateResult {
    return html` <section class="content-menu-header-buttons">
      <button
        title="${langHelper.localTransation(
          'buttons.menuClose',
          msg(str`Close menu`)
        )}"
        type="button"
        class="content-menu-close"
        aria-label="Close"
        @click=${this.onClose}
      >
        ${unsafeHTML(`${icon(faTimes).html}`)}
      </button>
      <a
        href="${this.signOutUrl || '#'}"
        title="${langHelper.localTransation(
          'buttons.logout',
          msg(str`Sign Out`)
        )}"
        class="signout"
      >
        ${unsafeHTML(`${icon(faSignOutAlt).html}`)}
      </a>
    </section>`;
  }

  static styles = css`
    ${unsafeCSS(HeaderButtonScss)}
  `;
}
