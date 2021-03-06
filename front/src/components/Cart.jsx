import React from "react"
import {Row,Col,Image,ListGroup,Card} from "react-bootstrap"

export default ({user,order,removeHandler}) => {

    //crea una variable con la suma total de los preccios de los productos en la lista
    if(order.id){
        var totalCompra=order.products.reduce((x,y)=>x+y.price,0)
        
    }
    
    
    return (<>
        <Col xs={4}>
            <Card
            bg='Light'
            text='dark'
            style={{ width: '18rem' }}
            className="mb-2"
        >
            <Card.Header >{user.name} Cart</Card.Header>
            <Card.Body>
            <Card.Img variant="top"className="car-img" src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-png-image-download-pngm-2.png" />

            <Card.Title>Total de compra :{totalCompra ? totalCompra : 0}$</Card.Title>
            
            </Card.Body>
            </Card>
        </Col>
        <Col xs={8}>
            {order.products && order.products.map(prod=>{
                return <Row className="car-prod" key={prod.id}>
                            <Col xs={4}>
                            <Image className="car-img2" src={prod.image}  rounded />
                            </Col>
                            <Col xs={8}>
                            <ListGroup variant="flush">
                            <ListGroup.Item>Producto: {prod.name}</ListGroup.Item>
                            <ListGroup.Item>Precio: {prod.price}</ListGroup.Item>
                            <ListGroup.Item action variant="danger" onClick={()=>removeHandler(user.id,prod.id)}>Remove</ListGroup.Item>
                            </ListGroup>
                            </Col>
                        </Row>
                
                
                
            })}

        </Col>
    </>
)}