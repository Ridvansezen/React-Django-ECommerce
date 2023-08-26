import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import {addToCart, removeFromCart} from '../actions/cartAction'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Message from '../component/Message'
import { Button,Form  , FormControl, ListGroup, Image, Card, ListGroupItem } from 'react-bootstrap';

function CartScreen() {

  const {id} = useParams();
  const useQty = useLocation()
  const qty = useQty.search ? Number (useQty.search.split('=')[1]):1

  console.log({id, qty})

  const dispatch = useDispatch()

  const cart = useSelector(state=> state.cart)
  const {cartItems} = cart

  const removeFromCartHandler = (id)=>{
    dispatch(removeFromCart(id))
  }

  useEffect(()=> 
  {
    if(id) {
      dispatch(addToCart(id, qty))
    }

  }, [dispatch, id, qty]
  
  )

  return (
    <div>
        <Row>
            <Col md={8}>
              <h1 className='product-title'>Sepetim</h1>
              {cartItems.length === 0 ?(
                  <Message variant='info'>
                      Sepetiniz boş  
                  </Message>
              ): (
                <ListGroup variant='flush'>
                  {cartItems.map(item=>(
                  <ListGroup.Item key={String(item.product)} data={item}>
                    <Row>
                        <Col md={2}>
                          <Image className='cart-image' src={item.image} width='100' alt={item.image} />
                        </Col>
                        <Col md={2}>
                          {item.name}
                        </Col>
                        <Col md={2}>
                          {item.price} TL
                        </Col>

                        <Col md={3}>
                        <FormControl as="select" value={item.qty || ''} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                            {
                              [...Array(item.countInStock).keys()].map((x) =>
                                <option key={x + 1} value={x + 1} data={item}>{x + 1}</option>
                              )
                            }
                          </FormControl>
                        </Col>

                        <Col md={1}>
                              <Button onClick={()=>removeFromCartHandler(item.product)} type='button' variant='danger'><i className='fa fa-trash'></i></Button>
                        </Col>

                    </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )

              }
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant='flush'>
                      <ListGroupItem>
                        <h2>Toplam ({cartItems.reduce((acc , item)=> acc+item.qty,0)}) Ürün</h2>
                        ({cartItems.reduce((acc , item)=> acc + item.qty*item.price,0).toFixed(2)}) TL
                      </ListGroupItem>
                </ListGroup>
                <ListGroupItem>
                  <Button type='button' className='btn-block' disabled={cartItems.length===0}>Alışverişi Tamamla</Button>
                </ListGroupItem>
              </Card>
            </Col>
        </Row>



    </div>
  )
}

export default CartScreen