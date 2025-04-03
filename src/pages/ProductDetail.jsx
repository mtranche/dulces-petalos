import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import fallbackData from '../data/fallbackData.json';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);        
        setError(null);

        const res = await fetch(`https://dulces-petalos.jakala.es/api/v1/product/${id}`);
        if (!res.ok) throw new Error('⚠️ Error al obtener el producto');

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        const fallback = fallbackData.find(item => item.id === id);
        if (fallback) {
          setProduct(fallback);
        } else {
          setError('⚠️ Error al obtener el producto');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <p role="status">Cargando producto…</p>;
  if (!product && error) return <p role="alert">{error}</p>;

  return (
    <main className="container" role="main" aria-labelledby="product-title">
      {error && <p role="alert">{error} - Mostrando datos locales</p>}
      <Header />
      <div className="product-detail">        
        <Breadcrumb name={product.name} />
        <div className="detail-content">
          <div className="image">
            <img src={product.imgUrl} alt={`Imagen de ${product.name}`} />
          </div>

          <div className="info">
            <h1 id="product-title">{product.name}</h1>
            <p className="binomial">{product.binomialName}</p>
            <h4 className="price">€{product.price.toFixed(2)}</h4>
            <ul className="details bodyb2">
              <li>· Regar {product.wateringsPerWeek} vez{product.wateringsPerWeek > 1 && 'es'} por semana</li>
              <li>· Fertilizar con {product.fertilizerType}</li>
            </ul>
            <button className="add-to-cart" aria-label={`Añadir ${product.name} al carrito`} onClick={() => alert(`Añadido ${product.name} al carrito`)}>
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;
