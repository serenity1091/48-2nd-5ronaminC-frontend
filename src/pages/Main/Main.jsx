import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICE_DATA } from './MainData';
import './Main.scss';

const Main = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [showRoomData, setShowRoomData] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('거실');
  const [productData, setProductData] = useState([]);

  const navigate = useNavigate();

  const goToProductDetail = () => {
    navigate('/product-detail');
  };

  //카테고리
  useEffect(() => {
    fetch('/data/mainData.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        // authorization: '토큰',
      },
    })
      .then(res => res.json())
      .then(result => {
        setCategoryData(result.data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/showRoomData.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        // authorization: '토큰',
      },
    })
      .then(res => res.json())
      .then(result => {
        setShowRoomData(result.data);
        setProductData(result.data.product);
      });
  }, [selectedCategory]);

  return (
    <div className="main">
      <div className="mainVisual">
        <h2>공간별 쇼핑하기</h2>
        <ul className="tabBar">
          {categoryData.map(category => (
            <li
              className={`category ${
                selectedCategory === category.categorySpaceName
                  ? 'selected'
                  : ''
              }`}
              key={category.id}
              onClick={() => setSelectedCategory(category.categorySpaceName)}
            >
              {category.categorySpaceName}
            </li>
          ))}
        </ul>
        {console.log(showRoomData.product)}
        <div className="showRoomContainer" key={showRoomData.id}>
          <div className="imageContainer">
            <img src={showRoomData.showroomImageUrl} alt={showRoomData.name} />
          </div>
          <ul className="listWireframe">
            {console.log('결과', productData)}
            {productData.map((product, num) => {
              return (
                <li
                  key={num}
                  style={{
                    top: `${product.coordinateX}%`,
                    left: `${product.coordinateY}%`,
                  }}
                >
                  <div className="dot" onClick={goToProductDetail} />
                  <div className="productDetailToggle">
                    <div className="info">
                      <div className="isNew">{product.new && 'new'}</div>
                      <div className="productName">{product.productName}</div>
                      <div className="categoryTypeName">
                        {product.categoryTypeName}
                      </div>
                      <div className="price">{product.price}원</div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="serviceContainer">
        <h2>다양한 이케아 서비스</h2>
        <ul className="services">
          {SERVICE_DATA.map(service => (
            <li key={service.id}>
              <img src={service.images} alt={`${service.name} 서비스`} />
              <span>{service.name} 서비스</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
