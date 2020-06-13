import { newE2EPage } from '@stencil/core/testing';

describe('s-cnt-faq-blocks', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-cnt-faq-blocks></s-cnt-faq-blocks>');

    const element = await page.find('s-cnt-faq-blocks');
    expect(element).toHaveClass('hydrated');
  });
});
