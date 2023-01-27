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
import oidc, { type Response as OIDCResponse } from '@uportal/open-id-connect';
import portletService from '@services/portletService';
import favoritesService from '@services/favoritesService';
import OrganizationService from '@services/organizationService';
/*Helpers*/
import sizeHelper from '@helpers/sizeHelper';
import pathHelper from '@helpers/pathHelper';
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
  @property({ type: String, attribute: 'portal-base-url' })
  portalBaseUrl = process.env.APP_PORTAL_BASE_URL ?? '';
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
  @property({ type: Boolean, attribute: 'disable-cache' })
  disableCache = false;
  @property({ type: Number, attribute: 'cache-ttl' })
  cacheTTL = parseInt(process.env.CACHE_TTL ?? '60');
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

  shouldUpdate(
    changedProperties: Map<string | number | symbol, unknown>
  ): boolean {
    if (this.defaultOrgLogo === '') {
      this.errorLog('default-org-logo attribute is required');
      return false;
    }
    if (changedProperties.has('cacheTTL')) {
      portletService.cacheTtl = this.cacheTTL;
      favoritesService.cacheTtl = this.cacheTTL;
      OrganizationService.cacheTtl = this.cacheTTL;
    }
    if (changedProperties.has('disableCache')) {
      portletService.enabled = !this.disableCache;
      favoritesService.enabled = !this.disableCache;
      OrganizationService.enabled = !this.disableCache;
    }
    return true;
  }

  updated(changedProperties: Map<string | number | symbol, unknown>): void {
    this.loadDatas(changedProperties);
    if (changedProperties.has('isHidden')) {
      this.calculateSize();
    }
  }

  async loadDatas(
    changedProperties: Map<string | number | symbol, unknown>
  ): Promise<void> {
    if (changedProperties.has('userInfoApiUrl')) {
      let userInfos: OIDCResponse | null = null;
      if (!this.debug) {
        userInfos = await oidc({
          userInfoApiUrl: this.userInfoApiUrl,
        });
      }
      if (changedProperties.has('portletApiUrl')) {
        if (!this._portlets) this.fetchPortlets(userInfos);
      }
      if (changedProperties.has('layoutApiUrl')) {
        if (!this._favorites) this.fetchFavorites(userInfos);
      }
      if (
        changedProperties.has('organizationApiUrl') ||
        changedProperties.has('userAllOrgsIdAttributeName')
      ) {
        this.fetchUserInfo(userInfos);
      }
    }
  }

  async fetchPortlets(userInfos: OIDCResponse | null): Promise<void> {
    const portlets = await portletService.fetch(
      pathHelper.getUrl(this.userInfoApiUrl, this.portalBaseUrl, this.debug),
      pathHelper.getUrl(this.portletApiUrl, this.portalBaseUrl, this.debug),
      userInfos,
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
  async fetchFavorites(userInfos: OIDCResponse | null): Promise<void> {
    const favoritesTree = await favoritesService.fetch(
      pathHelper.getUrl(this.userInfoApiUrl, this.portalBaseUrl, this.debug),
      pathHelper.getUrl(this.layoutApiUrl, this.portalBaseUrl, this.debug),
      userInfos,
      this.debug
    );
    if (favoritesTree) {
      this._favorites = favoritesService.flattenFavorites(favoritesTree);
    }
  }
  async fetchUserInfo(userInfos: OIDCResponse | null): Promise<void> {
    const fetchResult = await OrganizationService.fetch(
      pathHelper.getUrl(this.userInfoApiUrl, this.portalBaseUrl, this.debug),
      pathHelper.getUrl(
        this.organizationApiUrl,
        this.portalBaseUrl,
        this.debug
      ),
      this.userAllOrgsIdAttributeName,
      userInfos,
      this.debug
    );
    if (fetchResult) {
      this.debugLog('userInfo API result', fetchResult);
      this._currentUser = fetchResult?.user as UserInfo;
      this._currentUserOrgs = fetchResult?.organizations as OrgInfo;
      if (this._currentUser && this._currentUserOrgs)
        this._currentOrg = OrganizationService.getCurrentOrganization(
          this._currentUser,
          this.orgAttributeName,
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
    if (!this.debug && !e.detail.send && e.detail?.chanId !== undefined) {
      if (e.detail?.isFavorite) {
        favoritesService.add(
          pathHelper.getUrl(
            this.userInfoApiUrl,
            this.portalBaseUrl,
            this.debug
          ),
          pathHelper.getUrl(
            this.favoriteApiUrl,
            this.portalBaseUrl,
            this.debug
          ),
          e.detail.chanId
        );
      } else {
        favoritesService.remove(
          pathHelper.getUrl(
            this.userInfoApiUrl,
            this.portalBaseUrl,
            this.debug
          ),
          pathHelper.getUrl(
            this.favoriteApiUrl,
            this.portalBaseUrl,
            this.debug
          ),
          e.detail.chanId
        );
      }
      favoritesService.deleteCachedData(this.layoutApiUrl);
    }
  }

  render(): TemplateResult {
    this.debugLog('Render');
    const orgImageUrl = pathHelper.getUrl(
      this.getOrgImage(),
      this.portalBaseUrl,
      this.debug
    );
    const signOutUrl = pathHelper.getUrl(
      this.signoutUrl,
      this.portalBaseUrl,
      this.debug
    );
    const avatarUrl = this._currentUser?.picture
      ? pathHelper.getUrl(
          this._currentUser.picture,
          this.portalBaseUrl,
          this.debug
        )
      : '';
    const userInfoUrl = pathHelper.getUrl(
      this.userInfoPortletUrl,
      this.portalBaseUrl,
      this.debug
    );
    const switchOrgUrl = pathHelper.getUrl(
      this.switchOrgPortletUrl,
      this.portalBaseUrl,
      this.debug
    );
    const headerBGImg = {
      backgroundImage: `linear-gradient(0deg, rgba(0,0,0,.2),rgba(0,0,0,.2)), url(${orgImageUrl})`,
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
                    sign-out-url="${signOutUrl}"
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
                    user-avatar-url="${avatarUrl}"
                    org-display-name="${this._currentOrg?.displayName ?? ''}"
                    org-img-url="${orgImageUrl}"
                    user-info-portlet-url="${userInfoUrl}"
                    switch-org-portlet-url="${this.isOtherOrgs()
                      ? switchOrgUrl
                      : ''}"
                  ></esco-content-user>
                </slot>
                <esco-content-favorites
                  .messages=${this.messages}
                  portal-base-url="${this.portalBaseUrl}"
                  .portlets="${this._portlets}"
                  .favorites="${this._favorites}"
                  parent-screen-size="${this._screenSize}"
                  card-size="${this.favoritesPortletCardSize}"
                  ?hide-action="${this._hideAction}"
                  favorite-api-url="${this.favoriteApiUrl}"
                  ?hide="${this.isHidden}"
                  user-info-api-url="${this.userInfoApiUrl}"
                  context-api-url="${this.contextApiUrl}"
                  ?debug="${this.debug}"
                  ?disable-swiper="${!this.showFavoritesInSlider}"
                  ?disable-cache="${this.disableCache}"
                  cache-ttl="${this.cacheTTL}"
                  @toggle-favorite=${this.actionToggleFav}
                ></esco-content-favorites>
              </div>
              <div style="${styleMap(headerBGImg)}" class="background"></div>
            </header>
            <esco-content-grid
              .messages=${this.messages}
              portal-base-url="${this.portalBaseUrl}"
              .portlets="${this._portlets}"
              .favorites="${this._favorites}"
              parent-screen-size="${this._screenSize}"
              portlet-card-size="${this.gridPortletCardSize}"
              ?hide-action="${this._hideAction}"
              favorite-api-url="${this.favoriteApiUrl}"
              layout-api-url="${this.layoutApiUrl}"
              user-info-api-url="${this.userInfoApiUrl}"
              context-api-url="${this.contextApiUrl}"
              portlet-api-url="${this.portletApiUrl}"
              card-hover-src="${this.cardHoverSrc}"
              ?disable-cache="${this.disableCache}"
              cache-ttl="${this.cacheTTL}"
              ?debug="${this.debug}"
              @toggle-favorite=${this.actionToggleFav}
            ></esco-content-grid>
          </div>
        `
      : this._inError
      ? html`<div id="content-menu" class="content-menu error">
          <header>
            <esco-header-buttons
              .messages=${this.messages}
              only-close
              @close=${this.onClose}
            ></esco-header-buttons>
          </header>
          <section>
            <p class="error-message">${this._errorMessage}</p>
          </section>
        </div>`
      : html`<div id="content-menu" class="content-menu spinner">
          <header>
            <esco-header-buttons
              .messages=${this.messages}
              only-close
              @close=${this.onClose}
            ></esco-header-buttons>
          </header>
          <section>
            <lit-spinner></lit-spinner>
          </section>
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
