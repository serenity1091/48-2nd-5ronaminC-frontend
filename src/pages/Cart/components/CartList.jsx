import React from 'react';
import './CartList.scss';

const CartList = ({ cartListData, getCart, apiUrl }) => {
  const cartDeleting = item => {
    fetch(`${apiUrl}/carts/${item}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => {
        if (res.ok) {
          alert('삭제 완료');
          getCart();
          // return;
        }
        return res.json();
      })
      .then(result => {
        console.log(result);
      });
  };

  return (
    <div className="cartListAll">
      {cartListData.map(tab => {
        return (
          <div className="cartListRow" key={tab.productId}>
            <div className="cartImg">
              <img src={tab.productImageUrl} alt="장바구니 제품 사진" />
            </div>
            <div className="cartListInfo">
              <div className="cartListDelete">
                <button onClick={() => cartDeleting(tab.productId)}>
                  <img src="images/close.png" alt="삭제 버튼" />
                </button>
              </div>
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
              <div className="productlistQuantity">
                <p>수량 : {tab.productQuantity} 개</p>
              </div>
              <div className="productlistInfoBottom">
                <div className="productlistPrice">
                  <p className="productlistMoney">
                    {' '}
                    {Number(tab.subtotalPrice).toLocaleString()}
                  </p>
                  <p className="productlistUnit">원</p>
                </div>
                <div className="productlistButton">
                  <div className="productlistHeart">
                    <button>
                      <img src="images/heart.png" alt="찜하기 버튼" />
                    </button>
                  </div>
                  <div className="productlistDirect">
                    <button>
                      <p>바로구매</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CartList;
