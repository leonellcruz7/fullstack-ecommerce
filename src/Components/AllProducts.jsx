import React from 'react'
import './AllProducts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import ProductView from './ProductView'

export default function AllProducts({ productProp }) {
    const img = productProp.image
    const navigate = useNavigate()

    function view(e) {
        e.preventDefault()

        fetch('http://localhost:4000/products/getbyid', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: productProp._id
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            localStorage.setItem('productName', data.name)
            localStorage.setItem('productId', productProp._id)
            localStorage.setItem('description', data.description)
            localStorage.setItem('price', data.price)
            localStorage.setItem('stock', data.availableStock)
            localStorage.setItem('image', data.image)
            navigate(`/product/${productProp._id}`)
        })

    }
    return (

        <div className="col5 all">
            <div className="content">
                <img src={img} onClick={view} />
                <h4>{productProp.name}</h4>
                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                <p>Price: ${productProp.price}.00</p>
            </div>
        </div>

    )
}
