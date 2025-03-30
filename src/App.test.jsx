import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  it('renders ProductList for the root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Verifica que el componente ProductList se renderice
    expect(screen.getByText(/cargando productos/i)).toBeInTheDocument();
  });

  it('renders ProductDetail for the product detail route', () => {
    render(
      <MemoryRouter initialEntries={['/product/1']}>
        <App />
      </MemoryRouter>
    );

    // Verifica que el componente ProductDetail se renderice
    expect(screen.getByText(/cargando producto/i)).toBeInTheDocument();
  });

  it('renders 404 page for an unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>
    );

    // Verifica que se muestre un mensaje de "Página no encontrada" o similar
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});