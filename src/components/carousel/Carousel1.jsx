
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './carousel.css'

const Carousel1 = () => {
 
  return (
    <Container className='mt-5 car_container' >
      <h3  className='text-center mb-5 big'>What Our Users Have to say</h3>
    <Row>
      <Col className="text-center">
        <Carousel>
          <Carousel.Item>
           
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">

                <p className="text-muted par">
                <i className="fas fa-quote-left pe-2 icon"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                  nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                  fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                  doloremque.
                </p>
              </div>
            </div>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="far fa-star fa-sm"></i></li>
            </ul>
          </Carousel.Item>

          <Carousel.Item>
        
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
         
                <p className="text-muted par" >
              
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                  nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                  fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                  doloremque.
                </p>
              </div>
            </div>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="far fa-star fa-sm"></i></li>
            </ul>
          </Carousel.Item>

          <Carousel.Item>
         
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
      
        
                <p className="text-muted par">
                  <i className="fas fa-quote-left pe-2"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                  nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                  fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                  doloremque.
                </p>
              </div>
            </div>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="far fa-star fa-sm"></i></li>
            </ul>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  </Container>
  )
}

export default Carousel1