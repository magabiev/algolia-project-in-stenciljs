import { newSpecPage } from '@stencil/core/testing';
import { FirstPage } from './first-page';

describe('first-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FirstPage],
      html: `<first-page></first-page>`,
    });
    expect(page.root).toEqualHtml(`
      <first-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </first-page>
    `);
  });
});
