import React from 'react'
import css from './Product.module.css'

const Product = (props) => {
    return (
        <div className={css.Product}>
            <img src={props.imgSrc ? "" : null} alt={props.name} />
            <h3>{props.brand}</h3>
            <h4>{props.name}</h4>
            <h5>{props.price}</h5>
            <p>{props.productType}</p>
        </div>
    )
}
//marked as favourite

export default Product;