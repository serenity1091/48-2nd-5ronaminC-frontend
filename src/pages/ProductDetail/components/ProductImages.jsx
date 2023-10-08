import React from 'react';
import './ProductImages.scss';

const ProductImages = ({ productImages }) => {
  return (
    <div className="productImageAll">
      <div className="productImage">
        <img
          src={productImages?.[0] || '/images/bg-white.jpg'}
          alt="제품 1번째 사진"
        />
      </div>
      <div className="productImage">
        <img
          src={productImages?.[1] || '/images/bg-white.jpg'}
          alt="제품 2번째 사진"
        />
      </div>
      <div className="productImage">
        <img
          src={productImages?.[2] || '/images/bg-white.jpg'}
          alt="제품 3번째 사진"
        />
      </div>
      <div className="productImage">
        <img
          src={productImages?.[3] || '/images/bg-white.jpg'}
          alt="제품 4번째 사진"
        />
      </div>
    </div>
  );
};
export default ProductImages;
