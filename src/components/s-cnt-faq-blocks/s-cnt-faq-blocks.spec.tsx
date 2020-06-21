import { newSpecPage } from '@stencil/core/testing';
import { SCntFaqBlocks } from './s-cnt-faq-blocks';

describe('s-cnt-faq-blocks', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntFaqBlocks],
      html: `<s-cnt-faq-blocks></s-cnt-faq-blocks>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-faq-blocks>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-faq-blocks>
    `);
  });
});
