import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-faq-block-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-faq-block-section></s-cnt-faq-block-section>');

    const element = await page.find('s-cnt-faq-block-section');
    expect(element).toHaveClass('hydrated');
  });
});
