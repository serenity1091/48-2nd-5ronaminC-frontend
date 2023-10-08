import React, { useState } from 'react';
import './ProductDetailInfo.scss';

const ProductDetailInfo = ({ productDetailData }) => {
  const { id, name, description, width, depth, height } = productDetailData;

  const [isSizeInfo, setSizeInfo] = useState(false);

  return (
    <div key={id} className="productDetailInfo">
      <h1>제품 설명</h1>
      <div className="productInfoContent">
        <p className="productName">{name}</p>
        <p>{description}</p>
      </div>
      <div className="size">
        <p>치수</p>
        <button
          onClick={() => {
            setSizeInfo(e => !e);
          }}
        >
          {isSizeInfo ? (
            <img src="/images/chevron.png" alt="사이즈 정보 up 토글 버튼" />
          ) : (
            <img
              src="/images/down-chevron.png"
              alt="사이즈 정보 down 토글 버튼"
            />
          )}
        </button>
      </div>
      {isSizeInfo && (
        <div className="sizeToggle">
          <div className="productLength">
            <p className="productWidth">{width}</p>X
            <p className="productDepth">{depth}</p>X
            <p className="productHeight">{height}</p>
          </div>
        </div>
      )}
      <div className="assemblyMethod">
        <p>조립 방법</p>
        <button>
          <img src="/images/down-chevron.png" alt="조립 방법 토글 버튼" />
        </button>
      </div>
      <div className="recoProduct">
        <p>추천 제품</p>
        <button>
          <img src="/images/down-chevron.png" alt="조립 방법 토글 버튼" />
        </button>
      </div>
    </div>
  );
};
export default ProductDetailInfo;
