import { useState, useEffect } from 'react';
import '../css/Cart.css';
import nike from '../images/nike.png';
import dataShoes from '../data/Products.js'
import ItemInCart from './ItemInCart.js'
export default function Cart() {
    const [productItem, setProductItem] = useState({});
    const [reload, setReload] = useState(false);
    useEffect(() => {
        let productList = localStorage.getItem('productList');
        if (productList !== undefined && productList !== null) {
            setProductItem(JSON.parse(productList));
        }
        setReload(false);
    }, [reload]);

    function addToCart(index) {
        let productList = localStorage.getItem('productList');

        if (productList) {
            let product = JSON.parse(productList);
            setProductItem(product);
            let newCart = { ...(dataShoes.shoes[index]), inCart: true };
            product.push((newCart));
            localStorage.setItem('productList', JSON.stringify(product));
            console.log("bcbcbcbcb", productItem);
        } else {
            let newCart = { ...(dataShoes.shoes[index]), inCart: true };
            localStorage.setItem('productList', JSON.stringify([newCart]));
        }
        setReload(true);
    }

    function addCart(item, index) {
        let productList = localStorage.getItem('productList');
        let product = JSON.parse(productList);
        console.log("cccccccccccc", item.id);

        product.forEach(element => {
            console.log(element.id);

            if (element.id === item.id) {
                return (
                    <button type="button" className="btn-add-cart btn-primary" onClick={() => addToCart(index)} >ADD TO CART</button>

                )
            } if (element.id !== item.id) {
                return (
                    <p className="check">abc</p>

                )
            }
        });

    }
    return (
        <div className="content-cart">
            <div className="cart cart-left">
                <div className="item-top"><img src={nike} /></div>
                <div className="item-title">Our Products</div>
                <div className="item-content">
                    <div className="products-item">
                        {
                            dataShoes.shoes.map((item, index) => {
                                return (
                                    <div className="pro-item" key={index}>
                                        <div className="item-shoes-img" style={{ backgroundColor: item.color }}>
                                            <img src={item.image} />
                                        </div>
                                        <div className="item-shoes-name">
                                            <p>{item.name}</p>
                                        </div>
                                        <div className="item-shoes-description">
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="item-shoes-price-btn">
                                            <p>${item.price}</p>
                                            <button type="button" className="btn-add-cart btn-primary" onClick={() => addToCart(index)} >ADD TO CART</button>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="cart cart-right">
                <div className="item-top"><img src={nike} /></div>
                <div className="item-title">Your cart</div>
                <div className="item-content">
                    <div className="products-item">
                        {
                            productItem.length > 0 ? <ItemInCart productItem={productItem} /> : <p>Cart is empty</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
