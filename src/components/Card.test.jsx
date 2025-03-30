import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Card from './Card';

describe('Card Component', () => {
  const mockProduct = {
    id: 1,
    name: 'Rosa',
    binomialName: 'Rosa gallica',
    imgUrl: 'https://example.com/rosa.jpg',
    price: 12.99,
    new: true,
  };

  it('renders the product name and binomial name', () => {
    render(
      <BrowserRouter>
        <Card product={mockProduct} />
      </BrowserRouter>
    );  
    
    const productName = screen.getByRole('heading', { name: /rosa/i });
    expect(productName).toBeInTheDocument();  
    
    const binomialName = screen.getByText(/rosa gallica/i);
    expect(binomialName).toBeInTheDocument();
  });

  it('renders the product image with correct alt text', () => {
    render(
      <BrowserRouter>
        <Card product={mockProduct} />
      </BrowserRouter>
    );

    const productImage = screen.getByRole('img', { name: /image of rosa/i });
    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute('src', mockProduct.imgUrl);
  });

  it('renders the product price', () => {
    render(
      <BrowserRouter>
        <Card product={mockProduct} />
      </BrowserRouter>
    );

    const productPrice = screen.getByText(/€12.99/i);
    expect(productPrice).toBeInTheDocument();
  });

  it('renders the link to the product details', () => {
    render(
      <BrowserRouter>
        <Card product={mockProduct} />
      </BrowserRouter>
    );

    const productLink = screen.getByRole('link', { name: /view details for rosa/i });
    expect(productLink).toBeInTheDocument();
    expect(productLink).toHaveAttribute('href', `/product/${mockProduct.id}`);
  });

  it('renders the "NUEVO" tag if the product is new', () => {
    render(
      <BrowserRouter>
        <Card product={mockProduct} />
      </BrowserRouter>
    );

    const newTag = screen.getByText(/nuevo/i);
    expect(newTag).toBeInTheDocument();
  });

  it('does not render the "NUEVO" tag if the product is not new', () => {
    const nonNewProduct = { ...mockProduct, new: false };

    render(
      <BrowserRouter>
        <Card product={nonNewProduct} />
      </BrowserRouter>
    );

    const newTag = screen.queryByText(/nuevo/i);
    expect(newTag).not.toBeInTheDocument();
  });
});