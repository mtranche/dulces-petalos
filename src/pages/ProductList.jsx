import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Card from '../components/Card';
import fallbackData from '../data/fallbackData.json';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingLocalData, setUsingLocalData] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch('https://dulces-petalos.jakala.es/api/v1/product');
        if (!response.ok) {
          setError(true);
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {        
          setError('⚠️ Error al obtener datos de la API');
          setProducts(fallbackData);
          setUsingLocalData(true);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchProducts();
  }, []);

  useEffect(() => {
    const lowerQuery = query.toLowerCase();
    setFiltered(
      products.filter((p) =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.binomialName.toLowerCase().includes(lowerQuery)
      )
    );
  }, [query, products]);

  return (
    <main className="container">
      <Header />
      <div className='content'>
        <Search query={query} onChange={setQuery} aria-label="Buecar productos" />

        {isLoading && <p aria-live="polite">Cargando productos...</p>}
        
        {error && (
          <div className="fallbak-message-product-grid" role='alert' aria-live="assertive">
            <h4 className='fallback-message'> {error}. -  Mostrando datos locales</h4>
            <div className="product-grid">
              {filtered.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>      
        )}

        {!isLoading && !error && (
          <div className="product-grid">
            {filtered.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default ProductList;
