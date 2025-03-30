import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';
import ProductDetail from './ProductDetail';

// Mock para fetch
global.fetch = vi.fn();

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('ProductDetail Component', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders loading state initially', () => {
    renderWithRouter(<ProductDetail />);
    const loadingMessage = screen.getByRole('status');
    expect(loadingMessage).toHaveTextContent(/cargando producto/i);
  });

  it('renders error message when API call fails', async () => {
    fetch.mockRejectedValueOnce(new Error('No se pudo cargar el producto'));

    renderWithRouter(<ProductDetail />);

    const errorMessage = await screen.findByRole('alert');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Error: No se pudo cargar el producto');
  });

  it('renders product details when API call succeeds', async () => {
    const mockProduct = {
      id: 1,
      name: 'Rosa',
      binomialName: 'Rosa gallica',
      imgUrl: '/images/rosa.png',
      price: 12.99,
      wateringsPerWeek: 2,
      fertilizerType: 'orgánico',
    };
  
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProduct,
    });
  
    renderWithRouter(<ProductDetail />);
  
    // Espera a que los detalles del producto se carguen
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /rosa/i })).toBeInTheDocument();
    });
  
    // Verifica que los detalles del producto se rendericen correctamente
    expect(screen.getByText(/rosa gallica/i)).toBeInTheDocument();
    expect(screen.getByText(/€12.99/i)).toBeInTheDocument();
    expect(screen.getByText(/regar.*por semana/i)).toBeInTheDocument(); // Selector más flexible
    expect(screen.getByText(/fertilizar con orgánico/i)).toBeInTheDocument();
  
    // Verifica que la imagen del producto se renderice correctamente
    const productImage = screen.getByAltText(/imagen de rosa/i);
    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute('src', '/images/rosa.png');
  
    // Verifica que el botón "Añadir al carrito" esté presente
    const addToCartButton = screen.getByRole('button', { name: /añadir rosa al carrito/i });
    expect(addToCartButton).toBeInTheDocument();
  });
});