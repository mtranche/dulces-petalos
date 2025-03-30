import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const res = await fetch(`https://dulces-petalos.jakala.es/api/v1/product/${id}`);
        if (!res.ok) throw new Error('No se pudo cargar el producto');
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <p role="status">Cargando producto…</p>;
  if (error) return <p role="alert">Error: {error}</p>;
  if (!product) return null;

  return (
    <main className="container" role="main" aria-labelledby="product-title">
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
            <button className="add-to-cart" aria-label={`Añadir ${product.name} al carrito`}>
              Añadir al carrito
            </button>
          </div>
          </div>
      </div>
    </main>
  );
}

export default ProductDetail;
