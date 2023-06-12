import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

describe('Home component', () => {
  test('renders the title', () => {
    render(<Home />);
    const title = screen.getByText('Desenvolvedor front-end');
    expect(title).toBeVisible();
  });

  test('renders the subtitle', () => {
    render(<Home />);
    const subtitle = screen.getByText(/Olá, sou Arlisson Nascimento/i);
    expect(subtitle).toBeVisible();
  });

  test('renders the download button', () => {
    render(<Home />);
    const downloadButton = screen.getByText('Curriculum');
    expect(downloadButton).toBeVisible();
  });

  test('renders the GitHub logo', () => {
    render(<Home />);
    const githubLogo = screen.getByLabelText('link github');
    expect(githubLogo).toBeVisible();
  });

  test('renders the LinkedIn logo', () => {
    render(<Home />);
    const linkedinLogo = screen.getByLabelText('link linkdin');
    expect(linkedinLogo).toBeVisible();
  });

  test('renders the hand image', () => {
    render(<Home />);
    const handImage = screen.getByAltText('hand');
    expect(handImage).toBeVisible();
  });
});
