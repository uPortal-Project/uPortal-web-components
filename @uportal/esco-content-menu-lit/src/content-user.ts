/*Lit*/
import { html, LitElement, css, TemplateResult, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
/*SCSS*/
import ContentUserScss from '@styles/content-user.scss';
/*Localization*/
import { msg, localized, str } from '@lit/localize';
import { setLocale } from '@helpers/localization';
import langHelper from '@helpers/langHelper';
/*Mixins*/
import { LitLoggable } from '@mixins/litLoggable';
/*Helpers*/
import sizeHelper from '@helpers/sizeHelper';
/*Dependencies*/
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons/faExchangeAlt';

@localized()
@customElement('esco-content-user')
export class ContentUser extends LitLoggable(LitElement) {
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
  @property({ type: String, attribute: 'org-display-name' })
  orgDisplayName = '';
  @property({ type: String, attribute: 'org-img-url' })
  orgImgUrl = '';
  @property({ type: String, attribute: 'user-display-name' })
  userDisplayName = '';
  @property({ type: String, attribute: 'user-avatar-url' })
  userAvatarUrl = '';
  @property({ type: String, attribute: 'switch-org-portlet-url' })
  switchOrgPortletUrl = process.env.VUE_APP_ORG_SWITCH_URI ?? '';
  @property({ type: String, attribute: 'user-info-portlet-url' })
  userInfoPortletUrl = '';
  @property({ type: Boolean, attribute: 'enable-switch' })
  enableSwitch = false;

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

  willUpdate(_changedProperties: Map<string | number | symbol, unknown>): void {
    if (_changedProperties.has('messages')) {
      langHelper.setReference(this.messages);
    }
  }

  render(): TemplateResult {
    this.debugLog('Render', this.parentScreenSize);
    const style =
      this.parentScreenSize == 'small' || this.parentScreenSize == 'smaller'
        ? {
            background:
              'linear-gradient(0deg, rgba(0,0,0,.2),rgba(0,0,0,.2)), url(' +
              this.orgImgUrl +
              ')',
          }
        : {};
    this.debugLog('Style : ', style);
    return html`
      <section
        class="content-user ${this.parentScreenSize}"
        style="${styleMap(style)}"
      >
        <div>
          <div class="org-img">
            <img
              src="${this.orgImgUrl}"
              title="${this.orgDisplayName}"
              alt="${this.orgDisplayName}"
            />
          </div>
          <div class="user-info">
            <div>
              <div class="user-avatar">
                ${this.userInfoPortletUrl.length > 0
                  ? html`
                      <a
                        href="${this.userInfoPortletUrl}"
                        title="${langHelper.localTransation(
                          'userInfoPortletUrl.title',
                          msg(str`See my account informations`)
                        )}"
                      >
                        ${this.renderAvatar()}
                      </a>
                    `
                  : html` ${this.renderAvatar()} `}
              </div>

              <div class="wrapper-info">
                <div class="user-name">
                  <span title="${this.userDisplayName}">
                    ${this.userDisplayName}
                  </span>
                </div>
                <div class="user-org">
                  <span title="${this.orgDisplayName}"
                    >${this.orgDisplayName}</span
                  >
                </div>
              </div>
              ${this.switchOrgPortletUrl !== ''
                ? html`
                    <div class="other-orgs">
                      <a
                        href="${this.switchOrgPortletUrl}"
                        title="${langHelper.localTransation(
                          'userChangeEtabUrl.title',
                          msg(str`Select an other organization`)
                        )}"
                      >
                        ${unsafeHTML(`${icon(faExchangeAlt).html}`)}
                      </a>
                    </div>
                  `
                : html``}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderAvatar(): TemplateResult {
    return this.userAvatarUrl && this.userAvatarUrl.length > 0
      ? html`
          <img
            src="${this.userAvatarUrl}"
            alt="${langHelper.localTransation('user.avatar', msg(str`Avatar`))}"
          />
        `
      : html`${unsafeHTML(`${icon(faUser).html}`)}`;
  }

  static styles = css`
    ${unsafeCSS(ContentUserScss)}
  `;
}
