import { screen, render } from '@testing-library/react';
import About from '../../pages/About';

describe('About component', () => {
  test('renders the image', () => {
    render(<About />);
    const image = screen.getByAltText('imagem pessoa programdora');
    expect(image).toBeVisible();
  });

  test('renders the title', () => {
    render(<About />);
    const title = screen.getByText('Sobre mim');
    expect(title).toBeVisible();
  });

  test('renders the subtitle', () => {
    render(<About />);
    const title = screen.getByText('Desenvolvedor web formado pela escola Trybe.');
    expect(title).toBeVisible();
  });

  test('renders the text', () => {
    render(<About />);
    const text = screen.getByText(/Como desenvolvedor júnior, possuo um impressionante/i);
    expect(text).toBeVisible();
  });
});
