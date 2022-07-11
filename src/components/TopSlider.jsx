import Carousel from 'react-bootstrap/Carousel';

function TopSlider() {
  return (
    <Carousel variant="dark">
      <Carousel.Item style={{'height':"600px"}}>
        <img
          className="d-block w-100"
          src={'assets/header1.jpg'}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{'height':"600px"}}>
        <img
          className="d-block w-100"
          src={'assets/header2.jpg'}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{'height':"600px"}}>
        <img
          className="d-block w-100"
          src={'assets/header3.jpg'}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default TopSlider;