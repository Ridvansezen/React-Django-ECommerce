import React from 'react'
import products from '../product';
import {Button} from 'react-bootstrap';
import Rating from './Rating';
import { LinkContainer } from 'react-router-bootstrap'
 
function Product({product}) {
  return (
    <div>
        <div className='card mb-10'>
            <div className='card-body'>
                <div className='card-img-actions'>
                    <img src={product.image} className='card-img img-fluid'></img>

                </div>

            </div>
            <div className='card-body bg-light text-center'>
                <div className='mb-2'>
                    <h6>
                        <a href={`/product/${product._id}`} className='product-title'>{product.name}</a>
                    </h6>
                    <span className='product-category'>{product.category}</span>
                </div>
                <div>
                    <Rating value={product.rating} color={'#dbc42b'}></Rating>
                </div>
            
            <div className='text-muted mb-3'>{product.numReviews} &nbsp;Görüntüleme</div>

            <h3 className='mb-10'>{product.price} TL</h3>

            <LinkContainer to={`/product/${product._id}`}>
                <Button variant='primary' className='addtocart-button'> Sepete Ekle <i className="fa-solid fa-cart-shopping"></i></Button>
            </LinkContainer>

            </div>

        </div>
        
        
        </div>
  )
}

export default Product