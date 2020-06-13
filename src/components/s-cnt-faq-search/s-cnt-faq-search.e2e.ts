import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-faq-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-faq-search></s-cnt-faq-search>');

    const element = await page.find('s-cnt-faq-search');
    expect(element).toHaveClass('hydrated');
  });
});
