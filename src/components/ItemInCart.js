import { useState, useEffect } from 'react';
import trash from '../images/trash.png'
export default function ItemInCart({ productItem }) {
    const [reload, setReload] = useState(false);
    useEffect(() => {
        setReload(false);
    })
    function removeItem(index) {
        productItem.splice(index, 1);
        localStorage.setItem('productList', JSON.stringify(productItem));
        setReload(true);
    }
    if (productItem.length > 0) {
        return (
            <div>
                {
                    productItem.map((item, index) => {
                        return (
                            <div className="inCart" key={index}>
                                <div className="inCart-left">
                                    <div className="inCart-left-img" style={{ backgroundColor: item.color }}>
                                        <img src={item.image} />
                                    </div>
                                </div>
                                <div className="inCart-right">
                                    <div className="inCart-right-name">{item.name}</div>
                                    <div className="inCart-right-price">${item.price}</div>
                                    <div className="inCart-right-quantity-btn">
                                        <div className="inCart-right-btn-quantity">
                                            <button className="inCart-right-btn">-</button>
                                            <div className="inCart-right-quantity">1</div>
                                            <button className="inCart-right-btn">+</button>
                                        </div>
                                        <div className="inCart-right-btn-del" onClick={() => removeItem(index)}>
                                            <img src={trash} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    } else {
        return (
            <div>
                <p>Cart is empty</p>
            </div>
        )
    }
}
