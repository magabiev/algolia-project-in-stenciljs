import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-faq-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-faq-header></s-cnt-faq-header>');

    const element = await page.find('s-cnt-faq-header');
    expect(element).toHaveClass('hydrated');
  });
});
