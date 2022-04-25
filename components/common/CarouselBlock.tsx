import { ComponentCommonCarousel } from "graphql/types";
import Sub1 from '../../assets/sub1.png'
import OwlCarousel from 'react-owl-carousel2';
type Props = {
  data: ComponentCommonCarousel;
};
const CarouselBlock = ({ data }: Props) => {

  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true
  };

  //TODO : Complete this component
  return (
    <>
      <OwlCarousel options={options} >
        <div>
          <h3>Subscribing institutions:</h3>
          <div >
            <div className="item">
              {data.Item.map((item) => {
                return (
                  <img src={Sub1.src} alt='' />
                )
              })}
            </div>
          </div>
        </div>
      </OwlCarousel>

    </>
  )
};

export default CarouselBlock;
