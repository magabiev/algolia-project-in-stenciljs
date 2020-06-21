import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-faq-block-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-faq-block-header></s-cnt-faq-block-header>');

    const element = await page.find('s-cnt-faq-block-header');
    expect(element).toHaveClass('hydrated');
  });
});
