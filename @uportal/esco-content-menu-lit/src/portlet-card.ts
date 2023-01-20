/*Lit*/
import { html, LitElement, css, unsafeCSS, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
/*SCSS*/
import PortletCardScss from '@styles/portlet-card.scss';
/*Mixins*/
import { LitLoggable } from '@mixins/litLoggable';
/*Helpers*/
import sizeHelper from '@helpers/sizeHelper';
import pathHelper from '@helpers/pathHelper';
import textHelper from '@helpers/textHelper';
/*Components*/
import './lit-ellipsis';
import './action-favorites';
import { Ellipsis } from './lit-ellipsis';

@customElement('esco-portlet-card')
export class PortletCard extends LitLoggable(LitElement) {
  @property({ type: Array })
  messages = [];
  @property({ type: String, attribute: 'base-url' })
  baseUrl = '';
  @property({ type: Object, attribute: 'portlet-desc' })
  portletDesc: Portlet | undefined;
  @property({ type: String, attribute: 'css-class' })
  cssClass = 'portlet-card';
  @property({ type: String, attribute: 'icon-background-color' })
  iconBackgroundColor = 'transparent';
  @property({
    type: String,
    hasChanged(newVal: string) {
      return sizeHelper.validate(newVal, true, true);
    },
  })
  size = 'medium';
  @property({ type: String, attribute: 'card-hover-src' })
  cardHoverSrc = 'none';
  @property({ type: Boolean, attribute: 'background-is-dark' })
  backgroundIsDark = false;
  @property({ type: Boolean, attribute: 'is-favorite' })
  isFavorite = false;
  @property({ type: Boolean, attribute: 'hide-action' })
  hideAction = false;
  @property({ type: Boolean })
  debug = false;

  @state()
  _dataIsParsed = false;

  private _fname = '';
  private _chanId = 0;
  private _pTitle = '';
  private _description = '';
  private _portletTitle = '';
  private _canFavorite = false;
  private _iconUrl = '';

  shouldUpdate(): boolean {
    if (this.portletDesc !== undefined) return true;
    this.errorLog(
      'Attribute portlet-desc or property portletDesc must be defined'
    );
    return false;
  }

  willUpdate(changedProperties: Map<string | number | symbol, unknown>): void {
    if (changedProperties.has('portletDesc')) {
      this.parseDesc();
      this.debugLog('portletDesc update', this.portletDesc);
    }
  }

  firstUpdated(): void {
    this.setLogIdentifier(this._fname);
    this.debugLog('First update', this);
  }

  protected updated(): void {
    this.debugLog('Updated', this);
    const ellipsis: Ellipsis = this.shadowRoot?.querySelector(
      'lit-ellipsis'
    ) as Ellipsis;
    ellipsis.forceRender();
  }

  parseDesc(): void {
    if (this.portletDesc !== undefined) {
      this._fname = this.portletDesc?.fname ?? '';
      this._chanId = this.portletDesc?.id ?? 0;
      this._pTitle = this.portletDesc?.title ?? '';
      this._description = this.portletDesc?.description ?? '';
      this._portletTitle = this.portletDesc?.title ?? '';
      this._canFavorite = this.portletDesc?.canAdd
        ? this.portletDesc.canAdd
        : true;
      this._iconUrl = this.portletDesc.parameters?.iconUrl?.value
        ? pathHelper.getUrl(
            this.portletDesc.parameters.iconUrl.value,
            this.baseUrl,
            this.debug
          )
        : '';
      this._dataIsParsed = true;
    }
  }

  getHoverText(): string {
    switch (this.cardHoverSrc) {
      case 'title':
        return this._pTitle;
      case 'desc':
      case 'description':
        return this._description;
      default:
        return '';
    }
  }

  toggleFavorite(e: CustomEvent): void {
    const toggleEvt = new CustomEvent('toggle-favorite', {
      detail: e.detail,
    });
    this.dispatchEvent(toggleEvt);
  }

  render(): TemplateResult {
    const appClasses = {
      [this.cssClass.toLowerCase()]: true,
      [textHelper.sanitize(this._fname.toLowerCase())]: true,
      [this.size.toLowerCase() + '-card']: true,
      'background-dark': this.backgroundIsDark,
      'hide-action': this.hideAction,
    };
    if (this.portletDesc && this.portletDesc.categories)
      this.portletDesc.categories.forEach((cat: string) => {
        const sanCat = textHelper.sanitize(cat);
        appClasses[sanCat] = true;
      });

    return html`
      <div class="${classMap(appClasses)}" title="${this.getHoverText()}">
        <div class="portlet-card-icon">${this.renderIcon()}</div>
        <div class="portlet-card-title">${this._portletTitle}</div>
        <div class="portlet-card-description">${this.renderEllipsis()}</div>
        ${this.renderActionFavorites()}
      </div>
    `;
  }

  renderIcon(): TemplateResult {
    const style = {
      'background-color': this.iconBackgroundColor,
    };
    const img = html`<img
      src="${this._iconUrl}"
      alt="${this._portletTitle}"
    />`;
    return html`
      <div style=${styleMap(style)} class="img-wrapper">
        ${this._iconUrl
          ? img
          : html`<div class="defaultIcon">
              <p>${textHelper.getAcronym(this._portletTitle)}</p>
            </div>`}
      </div>
    `;
  }

  renderEllipsis(): TemplateResult {
    if (this._dataIsParsed) {
      return html`
        <lit-ellipsis
          message="${textHelper.truncate(this._description)}"
          line-height="20px"
          end-char="..."
        ></lit-ellipsis>
      `;
    } else {
      return html``;
    }
  }

  renderActionFavorites(): TemplateResult {
    let returnHTML = html``;
    let afHTML = html``;
    if (this._canFavorite) {
      afHTML = html`
        <esco-action-favorites
          .messages="${this.messages}"
          fname="${this._fname}"
          chan-id="${this._chanId}"
          .isFavorite="${this.isFavorite}"
          ?background-is-dark="${this.backgroundIsDark}"
          @toggle=${this.toggleFavorite}
        /></esco-action-favorites>
      `;
    }
    if (!this.hideAction) {
      returnHTML = html`<div class="portlet-card-action">${afHTML}</div> `;
    }
    return returnHTML;
  }

  static styles = css`
    ${unsafeCSS(PortletCardScss)}
  `;
}
