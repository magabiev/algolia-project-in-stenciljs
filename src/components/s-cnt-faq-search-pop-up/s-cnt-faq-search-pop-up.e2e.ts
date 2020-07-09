import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-faq-search-pop-up', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-faq-search-pop-up></s-cnt-faq-search-pop-up>');

    const element = await page.find('s-cnt-faq-search-pop-up');
    expect(element).toHaveClass('hydrated');
  });
});
