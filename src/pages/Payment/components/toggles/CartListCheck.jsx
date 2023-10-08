import React from 'react';
import './CartListCheck.scss';

const CartListCheck = ({ cartInfoData }) => {
  return (
    <div className="cartListAll">
      {cartInfoData.map(tab => {
        return (
          <div className="cartListRow" key={tab.productId}>
            <div className="cartImg">
              <img src={tab.productImageUrl} alt="장바구니 제품 사진" />
            </div>
            <div className="cartListInfo">
              <div className="cartListProductName">
                <p>{tab.productName}</p>
              </div>
              <div className="cartlistInfoDetail">
                <div className="cartListProducDetail">
                  <div className="productItem">{tab.categoryTypeName}</div>,
                  <div className="productColor">{tab.colorName}</div>,
                </div>
                <div className="cartListProducLength">
                  <div className="productWidth">{tab.width}</div>X
                  <div className="productDepth">{tab.depth}</div>X
                  <div className="productHeight">{tab.height}</div>
                </div>
              </div>
            </div>
            <div className="productlistInfoRight">
              <div className="productlistPrice">
                <p className="productlistMoney">
                  {Number(tab.subtotalPrice).toLocaleString()}
                </p>
                <p className="productlistUnit">원</p>
              </div>
              <div className="productlistQuantity">
                <p>수량 : {tab.productQuantity} 개</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CartListCheck;
