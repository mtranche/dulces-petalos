import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
  it('renders the logo with correct alt text and link', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    // Verifica que el logo esté presente
    const logo = screen.getByRole('img', { name: /dulces pétalos/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src'); // Verifica que el atributo src exista
    expect(logo.getAttribute('src')).toMatch(/logo\.png$/i); // Verifica que termine en "logo.png"

    // Verifica que el logo esté envuelto en un enlace al inicio
    const link = screen.getByRole('link', { name: /Ir a la página de inicio/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});