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

@customElement('esco-portlet-card')
export class PortletCard extends LitLoggable(LitElement) {
  @property({ type: Array })
  messages = [];
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
  @property({ type: Boolean, attribute: 'background-is-dark' })
  backgroundIsDark = false;
  @property({ type: Boolean, attribute: 'is-favorite' })
  isFavorite = false;
  @property({ type: Boolean, attribute: 'hide-action' })
  hideAction = false;
  @property({ type: Boolean })
  debug = false;

  @state()
  dataIsParsed = false;

  private fname = '';
  private chanId = 0;
  private description = '';
  private portletTitle = '';
  private canFavorite = false;
  private iconUrl = '';

  willUpdate(changedProperties: Map<string | number | symbol, unknown>): void {
    if (changedProperties.has('portletDesc')) {
      this.parseDesc();
      this.debugLog('portletDesc update', this.portletDesc);
    }
  }

  firstUpdated(): void {
    this.setLogIdentifier(this.fname);
    this.debugLog('First update', this);
  }

  parseDesc(): void {
    if (this.portletDesc !== undefined) {
      this.fname = this.portletDesc?.fname ?? '';
      this.chanId = this.portletDesc?.id ?? 0;
      this.description = this.portletDesc?.description ?? '';
      this.portletTitle = this.portletDesc?.title ?? '';
      this.canFavorite = this.portletDesc?.canAdd
        ? this.portletDesc.canAdd
        : true;
      this.iconUrl = this.portletDesc.parameters?.iconUrl?.value
        ? pathHelper.getUrl(this.portletDesc.parameters.iconUrl.value)
        : '';
      this.dataIsParsed = true;
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
      [textHelper.sanitize(this.fname.toLowerCase())]: true,
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
      <div class="${classMap(appClasses)}">
        <div class="portlet-card-icon">${this.renderIcon()}</div>
        <div class="portlet-card-title">${this.portletTitle}</div>
        <div class="portlet-card-description">${this.renderEllipsis()}</div>
        ${this.renderActionFavorites()}
      </div>
    `;
  }

  renderIcon(): TemplateResult {
    const style = {
      'background-color': this.iconBackgroundColor,
    };
    const img = html`<img src="${this.iconUrl}" alt="${this.portletTitle}" />`;
    return html`
      <div style=${styleMap(style)} class="img-wrapper">
        ${this.iconUrl
          ? img
          : html`<div class="defaultIcon">
              <p>${textHelper.getAcronym(this.fname)}</p>
            </div>`}
      </div>
    `;
  }

  renderEllipsis(): TemplateResult {
    if (this.dataIsParsed) {
      return html`
        <lit-ellipsis
          message="${textHelper.truncate(this.description)}"
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
    if (this.canFavorite) {
      afHTML = html`
        <esco-action-favorites
          .messages="${this.messages}"
          fname="${this.fname}"
          chan-id="${this.chanId}"
          .isFavorite="${this.isFavorite}"
          ?background-is-dark="${this.backgroundIsDark}"
          ?debug="${this.debug}"
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
