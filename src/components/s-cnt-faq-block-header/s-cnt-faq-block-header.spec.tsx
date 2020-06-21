import { newSpecPage } from '@stencil/core/testing';
import { SCntFaqBlockHeader } from './s-cnt-faq-block-header';

describe('s-cnt-faq-block-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntFaqBlockHeader],
      html: `<s-cnt-faq-block-header></s-cnt-faq-block-header>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-faq-block-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-faq-block-header>
    `);
  });
});
