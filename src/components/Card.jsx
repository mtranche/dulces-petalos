import React from 'react';
import { Link } from 'react-router-dom';

function Card({ product }) {
  return (
    <div className="product-card">
      <div className="product-heading">
        <h4>{product.name}</h4>
        <p className="product-binomial">{product.binomialName}</p>
      </div>

      <img
        src={product.imgUrl}
        alt={`Image of ${product.name}`}
        className="product-image"
      />

      <div className="product-price">
        €{product.price.toFixed(2)}
      </div>

      <Link
        to={`/product/${product.id}`}
        className="go-to-button"
        aria-label={`View details for ${product.name}`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path d="M5 19L19 5" stroke="black" strokeWidth="2" />
          <path d="M6 5H19V18" stroke="black" strokeWidth="2" />
        </svg>
      </Link>

      {product.new && (
        <div className="product-tag" aria-label="New product">
          NUEVO
        </div>
      )}
    </div>
  );
}

export default Card;