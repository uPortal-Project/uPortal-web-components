/*Lit*/
import { html, LitElement, css, unsafeCSS, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
/*SCSS*/
import ContentMenuScss from '@styles/content-menu.scss';
/*Mixins*/
import { LitLoggable } from '@mixins/litLoggable';
/*Services*/
import portletService from '@services/portletService';
import favoritesService from '@services/favoritesService';
import OrganizationService from '@services/organizationService';
/*Helpers*/
import sizeHelper from '@helpers/sizeHelper';
/*Components*/
import './content-user';
import './content-favorites';
import './content-grid';
import './header-buttons';
import './lit-spinner';

@customElement('esco-content-menu')
export class ContentMenu extends LitLoggable(LitElement) {
  @property({ type: Array })
  messages = [];
  @property({
    type: String,
    hasChanged(newVal: string) {
      return sizeHelper.validate(newVal, true, true);
    },
    attribute: 'favorites-Portlet-card-size',
  })
  favoritesPortletCardSize = 'small';
  @property({
    type: String,
    hasChanged(newVal: string) {
      return sizeHelper.validate(newVal, true, true);
    },
    attribute: 'grid-Portlet-card-size',
  })
  gridPortletCardSize = 'auto';
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
  signoutUrl = process.env.APP_LOGOUT_URL;
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
  @property({ type: String, attribute: 'card-hover-src' })
  cardHoverSrc = 'none';
  @property({
    type: String,
    hasChanged(newVal: string) {
      return ['auto', 'always', 'never'].includes(newVal);
    },
    attribute: 'hide-action-mode',
  })
  hideActionMode = 'auto';
  @property({ type: Boolean, attribute: 'is-hidden' })
  isHidden = false;
  @property({ type: Boolean, attribute: 'show-favorites-in-slider' })
  showFavoritesInSlider = false;
  @property({ type: Boolean })
  debug = false;
  @property({ type: Boolean, attribute: 'fake-attribute' })
  fakeAttribute = false;

  @state()
  _screenSize = 'medium';
  @state()
  _hideAction = false;
  @state()
  _currentOrg: Organization | null = null;
  @state()
  _currentUser: UserInfo | null = null;
  @state()
  _currentUserOrgs: OrgInfo | null = null;
  @state()
  _portlets: Portlet[] | null = null;
  @state()
  _favorites: string[] | null = null;
  @state()
  _inError = false;

  private _errorMessage = '';

  constructor() {
    super();
    this.debugLog('Component loaded');
  }

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('resize', this.calculateSize.bind(this));
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.calculateSize.bind(this));
  }

  shouldUpdate(): boolean {
    if (this.defaultOrgLogo === '') {
      this.errorLog('default-org-logo attribute is required');
      return false;
    }
    return true;
  }

  updated(changedProperties: Map<string | number | symbol, unknown>): void {
    if (changedProperties.has('userInfoApiUrl')) {
      if (changedProperties.has('portletApiUrl')) {
        if (!this._portlets) this.fetchPortlets();
      }
      if (changedProperties.has('layoutApiUrl')) {
        if (!this._favorites) this.fetchFavorites();
      }
      if (
        changedProperties.has('organizationApiUrl') ||
        changedProperties.has('userAllOrgsIdAttributeName')
      ) {
        this.fetchUserInfo();
      }
    }

    if (changedProperties.has('isHidden')) {
      this.calculateSize();
    }
  }

  async fetchPortlets(): Promise<void> {
    const portlets = await portletService.fetch(
      this.userInfoApiUrl,
      this.portletApiUrl,
      this.debug
    );
    if (portlets) {
      this._portlets = portletService
        .portletRegistryToArray(portlets)
        .sort(portletService.sortPortlets);
    } else {
      this._error('No portlets fetch from API');
    }
  }
  async fetchFavorites(): Promise<void> {
    const favoritesTree = await favoritesService.fetch(
      this.userInfoApiUrl,
      this.layoutApiUrl,
      this.debug
    );
    if (favoritesTree) {
      this._favorites = favoritesService.flattenFavorites(favoritesTree);
    }
  }
  async fetchUserInfo(): Promise<void> {
    const fetchResult = await OrganizationService.fetch(
      this.userInfoApiUrl,
      this.organizationApiUrl,
      this.userAllOrgsIdAttributeName,
      this.debug
    );
    if (fetchResult) {
      this.debugLog('userInfo API result', fetchResult);
      this._currentUser = fetchResult?.user as UserInfo;
      this._currentUserOrgs = fetchResult?.organizations as OrgInfo;
      if (this._currentUser && this._currentUserOrgs)
        this._currentOrg = OrganizationService.getCurrentOrganization(
          this._currentUser,
          this.userAllOrgsIdAttributeName,
          this._currentUserOrgs
        );
    } else {
      this._error('No user infos fetch from API');
    }
  }

  calculateSize(): void {
    if (this.isHidden) return;
    this._screenSize = sizeHelper.breakPointName(
      sizeHelper.elementWidth(this.shadowRoot?.querySelector('#content-menu'))
    );
    this.debugLog(
      'calculateSize',
      this.shadowRoot?.querySelector('#content-menu')
    );
    switch (this.hideActionMode) {
      case 'auto':
        this._hideAction =
          this._screenSize === 'small' || this._screenSize === 'smaller';
        break;
      case 'never':
        this._hideAction = false;
        break;
      default:
        // case of 'always' hidden
        this._hideAction = true;
    }
    this.debugLog('calculateSize', this._screenSize);
  }

  onClose(e: Event): void {
    e.preventDefault();
    const closeEvt = new CustomEvent('close');
    this.dispatchEvent(closeEvt);
  }

  isOtherOrgs(): boolean {
    return (
      (this._currentUserOrgs &&
        Object.keys(this._currentUserOrgs).length > 1) ??
      false
    );
  }

  getOrgImage(): string {
    const orgImage =
      this.forceOrgLogo != ''
        ? this.forceOrgLogo
        : OrganizationService.getOrganizationLogo(
            this._currentOrg,
            this.orgLogoUrlAttributeName
          ) ?? this.defaultOrgLogo;
    return orgImage;
  }

  actionToggleFav(e: CustomEvent): void {
    if (!this._favorites) this._favorites = [];
    if (!this._favorites.includes(e.detail.fname)) {
      this._favorites = [...this._favorites, e.detail.fname];
    } else {
      this._favorites = this._favorites.filter(
        (name) => name != e.detail.fname
      );
    }
    if (!this.debug && e.detail?.chanId !== undefined) {
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
    this.debugLog('Render');
    const orgImage = this.getOrgImage();
    const headerBGImg = {
      backgroundImage: `linear-gradient(0deg, rgba(0,0,0,.2),rgba(0,0,0,.2)), url(${orgImage})`,
    };
    return this._portlets && this._favorites && this._currentUser
      ? html`
          <div
            id="content-menu"
            class="content-menu toggler-menu ${classMap({
              [this._screenSize]: true,
              'active-menu': !this.isHidden,
            })}"
          >
            <header>
              <div id="header-buttons">
                <slot name="header-buttons">
                  <esco-header-buttons
                    .messages=${this.messages}
                    sign-out-url="${this.signoutUrl ?? ''}"
                    @close=${this.onClose}
                  ></esco-header-buttons>
                </slot>
              </div>

              <div class="wrapper">
                <slot name="content-user">
                  <esco-content-user
                    .messages=${this.messages}
                    parent-screen-size="${this._screenSize}"
                    user-display-name="${this._currentUser?.name ?? ''}"
                    user-avatar-url="${this._currentUser?.picture ?? ''}"
                    org-display-name="${this._currentOrg?.displayName ?? ''}"
                    org-img-url="${orgImage}"
                    user-info-portlet-url="${this.userInfoPortletUrl}"
                    switch-org-portlet-url="${this.isOtherOrgs()
                      ? this.switchOrgPortletUrl
                      : ''}"
                  ></esco-content-user>
                </slot>
                <esco-content-favorites
                  .messages=${this.messages}
                  .portlets="${this._portlets as never[]}"
                  .favorites="${this._favorites as never[]}"
                  parent-screen-size="${this._screenSize}"
                  card-size="${this.favoritesPortletCardSize}"
                  ?hide-action="${this._hideAction}"
                  favorite-api-url="${this.favoriteApiUrl}"
                  ?hide="${this.isHidden}"
                  user-info-api-url="${this.userInfoApiUrl}"
                  context-api-url="${this.contextApiUrl}"
                  ?debug="${this.debug}"
                  ?disable-swiper="${!this.showFavoritesInSlider}"
                  @toggle-favorite=${this.actionToggleFav}
                ></esco-content-favorites>
              </div>
              <div style="${styleMap(headerBGImg)}" class="background"></div>
            </header>
            <esco-content-grid
              .messages=${this.messages}
              .portlets="${this._portlets as never[]}"
              .favorites="${this._favorites as never[]}"
              parent-screen-size="${this._screenSize}"
              portlet-card-size="${this.gridPortletCardSize}"
              ?hide-action="${this._hideAction}"
              favorite-api-url="${this.favoriteApiUrl}"
              layout-api-url="${this.layoutApiUrl}"
              user-info-api-url="${this.userInfoApiUrl}"
              context-api-url="${this.contextApiUrl}"
              portlet-api-url="${this.portletApiUrl}"
              card-hover-src="${this.cardHoverSrc}"
              ?debug="${this.debug}"
              @toggle-favorite=${this.actionToggleFav}
            ></esco-content-grid>
          </div>
        `
      : this._inError
      ? html`<div id="content-menu" class="content-menu error">
          <p class="error-message">${this._errorMessage}</p>
        </div>`
      : html`<div id="content-menu" class="content-menu spinner">
          <lit-spinner></lit-spinner>
        </div>`;
  }

  static styles = [
    css`
      ${unsafeCSS(ContentMenuScss)}
    `,
  ];

  _error(errorMessage: string): void {
    this._inError = true;
    this._errorMessage = errorMessage;
    this.errorLog(errorMessage);
  }
}
