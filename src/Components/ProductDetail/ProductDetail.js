import React from "react";

const ProductDetail = ({ src, productLocal, productName, price, discountByPercent }) => {
    return (
        <div className="product-container">
            <img src={src} alt={productName} />
            <div className="discount">-{discountByPercent}%</div>
            <div>
                <div className="productLocal">{productLocal}</div>
                <div className="productName">{productName}</div>

                {discountByPercent !== 0 ? (
                    <div>
                        <div className="price">{(price * discountByPercent) / 100}VND</div>
                        <div className="actualPrice">{price}</div>
                    </div>
                ) : (
                    <div className="price">{price}</div>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
