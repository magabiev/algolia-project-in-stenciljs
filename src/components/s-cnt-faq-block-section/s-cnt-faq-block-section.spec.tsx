import { newSpecPage } from '@stencil/core/testing';
import { SCntFaqBlockSection } from './s-cnt-faq-block-section';

describe('s-cnt-faq-block-section', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCntFaqBlockSection],
      html: `<s-cnt-faq-block-section></s-cnt-faq-block-section>`,
    });
    expect(page.root).toEqualHtml(`
      <s-cnt-faq-block-section>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-cnt-faq-block-section>
    `);
  });
});
