/*Lit*/
import { html, LitElement, css, TemplateResult, PropertyValueMap } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
/*Mixins*/
import { LitLoggable } from '@mixins/litLoggable';
/*Dependencies*/
import debounce from 'lodash/debounce';
// import striptags from 'striptags';

@customElement('lit-ellipsis')
export class Ellipsis extends LitLoggable(LitElement) {
  @property({ type: String })
  message = '';
  @property({ type: Number, attribute: 'line-clamp' })
  clamp = 0;
  @property({ type: String, attribute: 'line-height' })
  height = '22px';
  @property({ type: String, attribute: 'end-char' })
  endChar = '...';

  @state()
  _ellipsisContent = '';
  @state()
  _nbLines = 'auto';

  @query('#sentence')
  sentence!: HTMLDivElement;

  constructor() {
    super();
    this.debugLog('Component loaded');
  }

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('resize', this.debounceRun.bind(this), false);
  }

  disconnectedCallback(): void {
    super.connectedCallback();
    window.removeEventListener('resize', this.debounceRun.bind(this), false);
  }

  willUpdate(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    if (_changedProperties.has('message')) {
      this._ellipsisContent = this.message;
    }
  }

  firstUpdated(): void {
    this.setLogIdentifier('ellipsis');
    this.debugLog('First update', this);
    this.debounceRun();
  }

  debounceRun = debounce(this.run, 500);

  async run(): Promise<void> {
    this.debugLog('running', this.message);
    await this.updateComplete;
    if (this.sentence.offsetWidth < 1 || this.sentence.offsetHeight < 1) {
      this.messageLog('Component is hidden, stop running');
      return;
    }
    if (this.message?.length <= 0) return;

    const lineHeight = parseInt(this.height, 10);

    this._ellipsisContent = '';
    await this.updateComplete;
    this.sentence.style.height = '100%';
    const availableHeight =
      this.sentence.getBoundingClientRect().height || lineHeight;

    if (availableHeight < lineHeight) return;

    const autoNbLines = Math.floor(availableHeight / lineHeight);

    this._nbLines =
      this.clamp > 0 && this.clamp < autoNbLines
        ? this.clamp.toString()
        : autoNbLines.toString();

    this._ellipsisContent = this.message;
    this.sentence.style.height = 'auto';
  }

  render(): TemplateResult {
    const ellipsis = this.endChar !== '...' ? this.endChar : 'ellipsis';
    const style = {
      '-webkit-line-clamp': this._nbLines,
      'text-overflow': `'${ellipsis}'`,
    };
    return html`
      <div class="autofit-ellipsis" style="${styleMap(style)}" id="sentence">
        ${this._ellipsisContent}
      </div>
    `;
  }

  static styles = css`
    .autofit-ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
  `;
}
