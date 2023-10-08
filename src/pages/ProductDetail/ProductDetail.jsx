import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailInfo from './components/toggles/ProductDetailInfo';
import ProductReview from './components/toggles/ProductReview';
import ProductImages from './components/ProductImages';
import ProductNameInfo from './components/ProductNameInfo';
import './ProductDetail.scss';

const ProductDetail = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [productDetailData, setProductDetailData] = useState({});
  const [currentInfo, setCurrentInfo] = useState('');
  const { id } = useParams();

  useEffect(() => {
    fetch(`${apiUrl}/products/showproductdetail/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => res.json())
      .then(result => {
        setProductDetailData(result.data[0]);
      });
  }, []);

  const DETAIL_TABS = [
    {
      id: 1,
      title: '제품 설명',
      engTitle: 'productInfo',
      component: <ProductDetailInfo productDetailData={productDetailData} />,
    },
    {
      id: 2,
      title: '상품평',
      engTitle: 'review',
      component: <ProductReview key={productDetailData.id} apiUrl={apiUrl} />,
    },
    {
      id: 3,
      title: '제품 Q&A',
      engTitle: 'qna',
      component: (
        <ProductDetailInfo
          productDetailData={productDetailData}
          apiUrl={apiUrl}
        />
      ),
    },
  ];

  if (Object.keys(productDetailData).length === 0) return null;

  return (
    <div className="productInfo">
      <div className="productDetailAll">
        <div className="productImages">
          <ProductImages
            productImages={productDetailData.imageUrl.split(',')}
          />
        </div>
        <div className="productDetail">
          {DETAIL_TABS.map(tab => (
            <button
              key={tab.id}
              className="detailTab"
              onClick={() => {
                if (currentInfo === tab.engTitle) {
                  setCurrentInfo('');

                  return;
                }

                setCurrentInfo(tab.engTitle);
              }}
            >
              <div className="productInfoName">
                <p>{tab.title}</p>
              </div>
              <div className="productInfoNameImg">
                {currentInfo === tab.engTitle ? (
                  <img src="/images/back.png" alt="제품 설명 back 토글 버튼" />
                ) : (
                  <img src="/images/next.png" alt="제품 설명 토글 버튼" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="productNames">
        {DETAIL_TABS.find(tab => currentInfo === tab.engTitle)?.component || (
          <ProductNameInfo
            productDetailData={productDetailData}
            apiUrl={apiUrl}
          />
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
