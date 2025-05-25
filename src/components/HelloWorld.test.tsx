import { HelloWorld } from './HelloWorld';
import { expect, it } from 'vitest';
import { render } from 'vitest-browser-react';

it('Should render hello world', async () => {
  const screen = render(<HelloWorld />);
  const element = screen.getByText('Hello world!');

  await expect.element(element).toBeInTheDocument();
});
