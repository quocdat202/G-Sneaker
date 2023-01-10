import { useState, useEffect } from 'react';
import '../css/Cart.css';
import nike from '../images/nike.png';
import check from '../images/check.png';
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

    function addToCart(id, index) {
        var quantity = 1;
        let productList = localStorage.getItem('productList');

        if (productList) {
            let product = JSON.parse(productList);
            let newCart = { ...(dataShoes.shoes[index]), inCart: true, quantity: quantity };
            product.push((newCart));
            localStorage.setItem('productList', JSON.stringify(product));
            setProductItem(product);
        } else {
            let newCart = { ...(dataShoes.shoes[index]), inCart: true, quantity: quantity };
            localStorage.setItem('productList', JSON.stringify([newCart]));
        }
        setReload(true);
    }

    function addCart(item, index) {
        let productList = localStorage.getItem('productList');
        let product = JSON.parse(productList);
        console.log("item-id", item.id);
        console.log("product list", product);
        if (product !== null) {
            product.map(element => {
                if (element.id === item.id) {
                    console.log("element-id:   ", element.id);
                    return (
                        <img src={check}>Check</img>
                    )
                } else {
                    return (
                        <button type="button" className="btn-add-cart btn-primary" onClick={() => addToCart(index)} >ADD TO CART</button>
                    )
                }
            });
        } else {
            return (
                <button type="button" className="btn-add-cart btn-primary" onClick={() => addToCart(index)} >ADD TO CART</button>
            )
        }

    }
    return (
        <div className="content-cart">
            <div className="cart cart-left">
                <div className="item-top"><img src={nike} /></div>
                <div className="item-title">Sản Phẩm</div>
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
                                            {/* <ButtonAdd item={item} index={index} addToCart={addToCart} /> */}
                                            <button type="button" className="btn-add-cart btn-primary" onClick={() => addToCart(item.id, index)} >ADD TO CART</button>
                                            {/* {addCart(item, index)} */}
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
                            productItem.length > 0 ? <ItemInCart productItem={productItem} addToCart={addToCart} /> : <p>Your cart is empty</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
