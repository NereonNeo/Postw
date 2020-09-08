import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
// import {reRender} from '../index.js'
const Product = (props) => {
  const coun = React.createRef();
  const [counter, setCounter] = useState(0)
  const Answer = () => {
    setCounter(counter+1)
    //******! */
    // props.prod.like++
    // reRender()
  }
  const Clear = () => {
    return coun.current.className='d-none'
  }
  return (
    <div ref={coun}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.prod.img}
          alt="IMG"
        />
        <div className='round' ><span >{/*props.prod.like*/}{counter}</span></div> 
        <Card.Body>
          <Card.Title>
            <Container>
              <Row>
                <Col>
                  <div className="bg-dark rounded text-center text-white p-1">
                    {props.prod.price}$
                  </div>
                </Col>
                <Col>
                  <div className="bg-dark rounded text-center text-white p-1">
                    Доступно:{props.prod.left}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="bg-dark rounded text-center text-white p-1 mt-2">
                    Оченка:{props.prod.Assessment} 
                    <img
                      src="https://icons-for-free.com/iconfiles/png/512/best+bookmark+premium+rating+select+star+icon-1320168257340660520.png"
                      width="25px"
                      alt="STAR"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </Card.Title>
          <Card.Text>
            <Row>
              <Col>
                <div className="bg-dark rounded text-center text-white p-1">
                {props.prod.des} 
                </div>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col>
              <Button variant="success" onClick={Answer}>Buy this</Button>
            </Col>
            <Col>
              <Button variant="danger" onClick={Clear}>Dislike this</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
