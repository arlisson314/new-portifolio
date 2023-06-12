import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../components/Home';
import cvMock from './cvMock';

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

  test('renders the download button and clicking the button opens the CV in a new tab', () => {
    render(<Home />);
    const downloadButton = screen.getByText('Curriculum');
    window.open = jest.fn(); // Mock da função window.open

    fireEvent.click(downloadButton);

    expect(downloadButton).toBeVisible();
    expect(window.open).toHaveBeenCalledTimes(1);
    expect(window.open).toHaveBeenCalledWith(cvMock, '_blank');
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
