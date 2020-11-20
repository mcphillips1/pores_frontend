import React, { useEffect, useState } from 'react'
import css from './ProductWindow.module.css'
import Link from 'react-router'

const ProductWindow = (props) => {

    const [products, setProducts] = useState(props.products)

   //useEffect to map values to products


    return (
        <div className={css.ProductWindow}>
            {products.length === 0 ? <p>Can't find the product you typed .. </p> : products}

        </div>);
}
export default ProductWindow;