import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';
import ProductList from './ProductList';

vi.mock('../data/fallbackData.json', () => ({
  default: [
    {
      id: '1',
      name: 'Orquídea',
      binomialName: 'Ophrys tenthredinifera',
      price: 4.95,
      imgUrl: 'https://example.com/orquidea.jpg',
    },
  ],
}));

// Mock para fetch
global.fetch = vi.fn();

describe('ProductList Component', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  const renderWithRouter = (ui) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
  };

  it('renders loading state initially', () => {
    renderWithRouter(<ProductList />);
    const loadingMessage = screen.getByText(/cargando productos/i);
    expect(loadingMessage).toBeInTheDocument();
  });

  it('renders error message when API call fails', async () => {
    fetch.mockRejectedValueOnce(new Error('Error al obtener datos de la API'));

    renderWithRouter(<ProductList />);

    const errorMessage = await screen.findByRole('alert');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('⚠️ Error al obtener datos de la API');
  });

  it('renders products when API call succeeds', async () => {
    const mockProducts = [
      { id: 1, name: 'Rosa', binomialName: 'Rosa gallica', imgUrl: '', price: 12.99, new: true },
      { id: 2, name: 'Tulipán', binomialName: 'Tulipa gesneriana', imgUrl: '', price: 9.99, new: false },
    ];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    });
  
    renderWithRouter(<ProductList />);
  
    // Verifica que los productos se rendericen correctamente
    const productName = await screen.findByRole('heading', { name: /rosa/i });
    expect(productName).toBeInTheDocument();
  
    const anotherProductName = await screen.findByRole('heading', { name: /tulipán/i });
    expect(anotherProductName).toBeInTheDocument();
  
    // Verifica que los precios también se rendericen
    expect(screen.getByText(/€12.99/i)).toBeInTheDocument();
    expect(screen.getByText(/€9.99/i)).toBeInTheDocument();
  });

  it('filters products based on the search query', async () => {
    const mockProducts = [
      { id: 1, name: 'Rosa', binomialName: 'Rosa gallica', imgUrl: '', price: 12.99, new: true },
      { id: 2, name: 'Tulipán', binomialName: 'Tulipa gesneriana', imgUrl: '', price: 9.99, new: false },
    ];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    });
  
    renderWithRouter(<ProductList />);
  
    // Espera a que los productos se carguen
    await waitFor(() => {
      const productName = screen.getByRole('heading', { name: /rosa/i });
      expect(productName).toBeInTheDocument();
    
      const binomialName = screen.getByText(/rosa gallica/i);
      expect(binomialName).toBeInTheDocument();
    });
  
    // Simula un filtro de búsqueda
    const searchInput = screen.getByRole('searchbox', { name: /busca en nuestra tienda/i });
    fireEvent.change(searchInput, { target: { value: 'Rosa' } });
  
    // Verifica que solo el producto filtrado se muestre
    await waitFor(() => {
      const productHeadings = screen.getAllByRole('heading');
      const productName = productHeadings.find((heading) => heading.textContent === 'Rosa');
      expect(productName).toBeInTheDocument();
    
      const nonMatchingProduct = productHeadings.find((heading) => heading.textContent === 'Tulipán');
      expect(nonMatchingProduct).toBeUndefined();
    });
  });
});

it('uses fallback data when API call fails', async () => {
  const renderWithRouter = (ui) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
  };

  fetch.mockRejectedValueOnce(new Error('Error al obtener datos de la API'));

  renderWithRouter(<ProductList />);

  // Espera a que el mensaje de error aparezca
  const errorMessage = await screen.findByRole('alert');
  expect(errorMessage).toBeInTheDocument();
  expect(errorMessage).toHaveTextContent('⚠️ Error al obtener datos de la API');

  // Verifica que los datos de fallback se usen
  await waitFor(() => {
    const fallbackProduct = screen.getByRole('heading', { name: /Orquídea/i });
    expect(fallbackProduct).toBeInTheDocument();
  });
});