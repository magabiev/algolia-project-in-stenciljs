import { newSpecPage } from '@stencil/core/testing';
import { SCntFaqSearchPopUp } from './s-cnt-faq-search-pop-up';

describe('s-cnt-faq-search-pop-up', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntFaqSearchPopUp],
      html: `<s-cnt-faq-search-pop-up></s-cnt-faq-search-pop-up>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-faq-search-pop-up>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-faq-search-pop-up>
    `);
  });
});
