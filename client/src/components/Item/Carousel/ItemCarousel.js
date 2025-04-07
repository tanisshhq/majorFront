import Carousel from 'react-bootstrap/Carousel';
import './ItemCarousel.css'

const ProductCarousel = (props) => {
    return (
      <div className="product__carousel__container">
        <div className="product__carousel">
        <Carousel variant="dark" interval={4000}>
  {props.item.image.map((image, index) => (
    <Carousel.Item key={index}>
      <div className="carousel__image__container">
        <img className="carousel__image" src={`http://localhost:5000/${props.item.category}/${image.filename}`} alt="item" />
      </div>
    </Carousel.Item>
  ))}
</Carousel>

        </div>
      </div>
     );
}
 
export default ProductCarousel;