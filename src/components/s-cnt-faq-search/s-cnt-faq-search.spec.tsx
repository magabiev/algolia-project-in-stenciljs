import { newSpecPage } from '@stencil/core/testing';
import { SCntFaqSearch } from './s-cnt-faq-search';

describe('s-cnt-faq-search', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntFaqSearch],
      html: `<s-cnt-faq-search></s-cnt-faq-search>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-faq-search>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-faq-search>
    `);
  });
});
