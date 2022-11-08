/*Lit */
import { html, LitElement, css, unsafeCSS, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
/*SCSS*/
import HamburgerMenuScss from '@styles/hamburger-menu.scss';
/*Mixins*/
import { LitLoggable } from '@mixins/litLoggable';
/*Helpers*/
import sizeHelper from '@helpers/sizeHelper';
/*Components*/
import './content-menu';

@customElement('esco-hamburger-menu')
export class HamburgerMenu extends LitLoggable(LitElement) {
  @property({ type: Array })
  messages = [];
  @property({
    type: String,
    hasChanged(newVal: string) {
      return sizeHelper.validate(newVal, true, true);
    },
    attribute: 'favorites-portlet-card-size',
  })
  favoritesPortletCardSize = 'small';
  @property({
    type: String,
    hasChanged(newVal: string) {
      return sizeHelper.validate(newVal, true, true);
    },
    attribute: 'grid-portlet-card-size',
  })
  gridPortletCardSize = 'medium';
  @property({ type: String, attribute: 'default-org-logo' })
  defaultOrgLogo = '';
  @property({ type: String, attribute: 'force-org-logo' })
  forceOrgLogo = '';
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
  @property({ type: String, attribute: 'organization-api-url' })
  organizationApiUrl = '';
  @property({ type: String, attribute: 'user-info-api-url' })
  userInfoApiUrl =
    (process.env.APP_PORTAL_CONTEXT ?? '') +
    (process.env.APP_USER_INFO_URI ?? '');
  @property({ type: String, attribute: 'sign-out-url' })
  signoutUrl = process.env.APP_LOGOUT_URL ?? '';
  @property({ type: String, attribute: 'user-info-portlet-url' })
  userInfoPortletUrl = '';
  @property({ type: String, attribute: 'switch-org-portlet-url' })
  switchOrgPortletUrl = '';
  @property({ type: String, attribute: 'user-org-id-attribute-name' })
  orgAttributeName = 'ESCOSIRENCourant[0]';
  @property({ type: String, attribute: 'org-logo-url-attribute-name' })
  orgLogoUrlAttributeName = 'otherAttributes.ESCOStructureLogo[0]';
  @property({ type: String, attribute: 'user-all-orgs-id-attribute-name' })
  userAllOrgsIdAttributeName = 'ESCOSIREN';
  @property({
    type: String,
    hasChanged(newVal: string) {
      return ['auto', 'always', 'never'].includes(newVal);
    },
    attribute: 'hide-action-mode',
  })
  hideActionMode = 'auto';
  @property({ type: Boolean, attribute: 'show-favorites-in-slider' })
  showFavoritesInSlider = false;
  @property({ type: Boolean, attribute: 'disable-cache' })
  disableCache = false;
  @property({ type: Number, attribute: 'cache-ttl' })
  cacheTTL = process.env.CACHE_TTL ?? 60;
  @property({ type: Boolean })
  debug = false;

  @state()
  _isAppended = false;
  @state()
  _isVisible = false;
  @state()
  _isLoaded = false;

  constructor() {
    super();
    this.debugLog('Component loaded');
  }

  protected shouldUpdate(): boolean {
    if (this.defaultOrgLogo === '') {
      this.errorLog('default-org-logo attribute is required');
      return false;
    }
    return true;
  }

  toggleMenu(e: Event): void {
    e.preventDefault();
    this._isVisible = !this._isVisible;
    if (this._isVisible && !this._isLoaded) {
      this._isLoaded = true;
    }
    const html = document.querySelector('html');
    if (html) {
      html.style.overflowY = this._isVisible ? 'hidden' : 'auto';
    }
    const toggleEvt = new CustomEvent('toggle', {
      detail: {
        isVisible: this._isVisible,
      },
    });
    this.dispatchEvent(toggleEvt);
  }

  render(): TemplateResult {
    return html`
      <div class="hamburger-menu">
        <div
          class="content-menu-toggle"
          aria-label="Menu"
          role="button"
          title="Menu"
          aria-expanded="false"
          aria-haspopup="true"
          aria-controls="content-menu"
          @click=${this.toggleMenu}
        >
          <slot name="menu-icon">
            <div class="menu-wrapper">
              <div class="hm-line"></div>
              <div class="hm-line"></div>
              <div class="hm-line"></div>
            </div>
          </slot>
        </div>
        ${this._isLoaded
          ? html`
              <div>
                <slot name="menu-content">
                  <esco-content-menu
                    class="${classMap({
                      'active-menu': this._isVisible,
                    })}"
                    context-api-url="${this.contextApiUrl}"
                    ?debug="${this.debug}"
                    default-org-logo="${this.defaultOrgLogo}"
                    favorite-api-url="${this.favoriteApiUrl}"
                    favorites-portlet-card-size="${this
                      .favoritesPortletCardSize}"
                    force-org-logo="${this.forceOrgLogo}"
                    grid-portlet-card-size="${this.gridPortletCardSize}"
                    hide-action-mode="${this.hideActionMode}"
                    ?is-hidden="${!this._isVisible}"
                    layout-api-url="${this.layoutApiUrl}"
                    .messages="${this.messages}"
                    organization-api-url="${this.organizationApiUrl}"
                    org-logo-url-attribute-name="${this
                      .orgLogoUrlAttributeName}"
                    portlet-api-url="${this.portletApiUrl}"
                    sign-out-url="${this.signoutUrl}"
                    ?show-favorites-in-slider="${this.showFavoritesInSlider}"
                    switch-org-portlet-url="${this.switchOrgPortletUrl}"
                    user-org-id-attribute-name="${this.orgAttributeName}"
                    user-all-orgs-id-attribute-name="${this
                      .userAllOrgsIdAttributeName}"
                    user-info-api-url="${this.userInfoApiUrl}"
                    user-info-portlet-url="${this.userInfoPortletUrl}"
                    @close=${this.toggleMenu.bind(this)}
                    ?fake-attribute="${true}"
                    ?disable-cache="${this.disableCache}"
                    cache-ttl="${this.cacheTTL}"
                  ></esco-content-menu>
                </slot>
              </div>
            `
          : html``}
      </div>
    `;
  }
  static styles = [
    css`
      ${unsafeCSS(HamburgerMenuScss)}
    `,
  ];
}
