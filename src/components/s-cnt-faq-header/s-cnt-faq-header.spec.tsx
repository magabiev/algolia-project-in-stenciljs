import { newSpecPage } from '@stencil/core/testing';
import { SCntFaqHeader } from './s-cnt-faq-header';

describe('s-cnt-faq-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntFaqHeader],
      html: `<s-cnt-faq-header></s-cnt-faq-header>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-faq-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-faq-header>
    `);
  });
});
