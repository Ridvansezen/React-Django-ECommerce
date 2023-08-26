import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Product from '../component/Product';
import { ListProducts } from '../actions/productListAction'
import { useDispatch, useSelector} from 'react-redux' 
import Loader from '../component/Loader'
import Message from '../component/Message'

function HomeScreen() {
  const dispatch = useDispatch()
  const productList = useSelector(state=>state.productList)
  const {loading, error, products} = productList
  useEffect(()=>{
    dispatch(ListProducts())
    
  }, [dispatch]) 

  return (
    <div>
    <h1>Ürünler</h1>  

    {loading ? <Loader/>
      : error ? <Message className='alert' > Sayfa yüklenirken bir sorun oluştu ! <br/><br/> {error}</Message> 
      : 
            <Row>
                {products.map(product=>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}></Product>
                    </Col>
                ))}
                
            </Row> 
  }
            
                  

    </div>
  )
}

export default HomeScreen