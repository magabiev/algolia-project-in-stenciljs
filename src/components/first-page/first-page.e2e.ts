import { newE2EPage } from '@stencil/core/testing';

describe('first-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<first-page></first-page>');

    const element = await page.find('first-page');
    expect(element).toHaveClass('hydrated');
  });
});
