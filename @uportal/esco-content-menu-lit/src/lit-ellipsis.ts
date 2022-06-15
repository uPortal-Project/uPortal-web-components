/*Lit*/
import { html, LitElement, css, TemplateResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
/*Mixins*/
import { LitLoggable } from '@mixins/litLoggable';
/*Dependencies*/
import debounce from 'lodash/debounce';
import striptags from 'striptags';

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
  @property({ type: String, attribute: 'end-html' })
  endHtml = '';

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

  firstUpdated(): void {
    this.debounceRun();
  }

  debounceRun = debounce(this.run, 500);

  run(): void {
    if (this.message?.length <= 0) return;
    const lineHeight = parseInt(this.height, 10);

    this.sentence.innerHTML = '';
    this.sentence.style.height = '100%';
    const availableHeight =
      this.sentence.getBoundingClientRect().height || lineHeight;
    if (availableHeight < lineHeight) return;

    this.sentence.innerHTML = this.message;
    this.sentence.style.height = 'auto';
    let height = this.sentence.getBoundingClientRect().height || lineHeight;
    const start = 0;
    let end = this.message.length;

    const maxHeight = lineHeight * Math.trunc(availableHeight / lineHeight);
    const goalMaxHeight = lineHeight * (this.clamp > 0 ? this.clamp : 1);
    const finalMaxHeight =
      this.clamp > 0 && goalMaxHeight < availableHeight
        ? goalMaxHeight
        : maxHeight;

    if (height < finalMaxHeight) return;

    while (Math.abs(end - start) > 1) {
      const half = Math.ceil((end - start) / 2);
      this.sentence.innerHTML = this.message.substring(0, half).trim();
      height = this.sentence.getBoundingClientRect().height || lineHeight;
      if (height <= finalMaxHeight) {
        break;
      } else {
        end = half;
      }
    }
    while (height > finalMaxHeight) {
      this.sentence.innerHTML = this.sentence.innerHTML
        .substring(0, this.sentence.innerHTML.trimEnd().length - 1)
        .trim();
      height = this.sentence.getBoundingClientRect().height || lineHeight;
    }

    const endStr = this.endHtml !== '' ? striptags(this.endHtml) : '';
    const endLen =
      this.endChar === '...' ? 3 : endStr.length + this.endChar.length;

    const nodeLen = this.sentence.innerHTML.trimRight().length;
    const nodeDelStr = this.sentence.innerHTML
      .substring(nodeLen - endLen, nodeLen)
      .trim();
    const match = nodeDelStr.match(/\s+/g);
    const extraLen = match && match.length ? match.length : 0;
    this.sentence.innerHTML =
      this.sentence.innerHTML.substring(0, nodeLen - endLen - extraLen).trim() +
      this.endChar +
      this.endHtml;
  }

  render(): TemplateResult {
    return html` <div class="autofit-ellipsis" id="sentence">...</div> `;
  }

  static styles = css`
    .autofit-ellipsis {
      height: 100%;
    }
  `;
}
