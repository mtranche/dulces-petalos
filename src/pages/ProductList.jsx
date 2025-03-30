import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Card from '../components/Card';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch('https://dulces-petalos.jakala.es/api/v1/product');
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message || 'Ocurrió un error al cargar los productos.');
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((p) =>
    `${p.name} ${p.binomialName}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="container">
      <Header />
      <div className='content'>
        <Search query={query} onChange={setQuery} aria-label="Search products" />

        {isLoading && <p aria-live="polite">Cargando productos...</p>}
        {error && <p style={{ color: '#b80000;' }} role="alert">⚠️ {error}</p>}

        {!isLoading && !error && (
          <div className="product-grid" role="region" aria-label="Product list">
            {filteredProducts.map((p) => (
              <Card key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default ProductList;
