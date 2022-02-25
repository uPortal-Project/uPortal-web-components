/*Lit*/
import { html, LitElement, css, unsafeCSS, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/*SCSS*/
import ContentGridExtFilterScss from '@styles/content-grid-filter.scss';
/*Localization*/
import { msg, localized, str } from '@lit/localize';
import { setLocale } from '@helpers/localization';
import langHelper from '@helpers/langHelper';
/*Mixins*/
import { LitLoggable } from '@mixins/litLoggable';

@localized()
@customElement('esco-content-grid-filter')
export class ContentGridFilter extends LitLoggable(LitElement) {
  @property({ type: Array })
  categories: string[] = [];
  @property({
    type: String,
    attribute: 'filter-Category',
    reflect: true,
  })
  filterCategory: string | null = null;

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
      'esco-cm-categories',
      this.getCategories.bind(this) as EventListener
    );
  }

  disconnectedCallback(): void {
    super.connectedCallback();

    window.removeEventListener(
      'esco-cm-grid-filter',
      this.getExternalFilter.bind(this) as EventListener
    );

    window.removeEventListener(
      'esco-cm-request-grid-filter',
      this.sendExternalFilter as EventListener
    );

    window.removeEventListener(
      'esco-cm-categories',
      this.getCategories.bind(this) as EventListener
    );
  }

  protected firstUpdated(): void {
    if (this.categories.length == 0) {
      this.requestCategories();
    }

    if (this.filterCategory !== null) {
      this.sendExternalFilter();
    }
  }

  getCategories(e: CustomEvent): void {
    if (e.detail?.categories) {
      this.categories = e.detail.categories;
    }
  }

  getExternalFilter(e: CustomEvent): void {
    if (
      e.detail?.category &&
      this.categories.includes(e.detail.category) &&
      this.filterCategory != e.detail.category
    ) {
      this.filterCategory = e.detail.category;
    }
  }

  requestCategories(): void {
    const reqCatEvt = new CustomEvent('esco-cm-request-categories');
    window.dispatchEvent(reqCatEvt);
  }

  sendExternalFilter(): void {
    const filterEvt = new CustomEvent('esco-cm-grid-filter', {
      detail: {
        category: this.filterCategory,
      },
    });
    window.dispatchEvent(filterEvt);
  }

  onFilter(e: Event): void {
    const target = (e.target || e.srcElement) as HTMLInputElement;
    this.filterCategory = target?.value;
    this.sendExternalFilter();
  }

  render(): TemplateResult {
    return html`
      <select @change=${this.onFilter.bind(this)} class="grid-categories">
        <option class="default" selected value="">
          ${langHelper.localTransation(
            'message.filter.selectOption',
            msg(str`Search a service...`)
          )}
        </option>
        ${this.categories.map((cat) => {
          return html`
            <option
              value="${cat}"
              label="${cat}"
              ?selected="${cat == this.filterCategory}"
            >
              ${cat}
            </option>
          `;
        })}
      </select>
    `;
  }
  static styles = css`
    ${unsafeCSS(ContentGridExtFilterScss)}
  `;
}
