import { ComponentCommonCarousel } from "graphql/types";
import { Box, Container, Typography } from "@mui/material";
import React, { useState, useEffect } from 'react';
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';

type Props = {
  data: ComponentCommonCarousel;
};

const CarouselBlock = ({data}: Props) => {
  const [displaySlider, setdisplaySlider] = useState(false);
  
  useEffect(() => {
    setdisplaySlider(true);
  },[]);

  //TODO : Complete this component
  return <>
    <section className="logo-section">
      <Container>
        <div className="logos">
          <div className="f-heading">
            <h3>Subscribing institutions:</h3>
          </div>
          <div className="f-heading carousel-div">
            {/* start carousel code */}
            {displaySlider ? <OwlCarousel items={4}  
                className="owl-theme"  
                loop
                nav  
                margin={8}
                 autoplayTimeout={2000} autoplaySpeed={2000} autoplayHoverPause={false} >  
                 {data.Item.map((item, index) => (
                  <div className="item">
                    <div className="logo-box">
                      <img src={`${process.env.STRAPI_CMS_URL}`+item.Image.data.attributes.url} alt="" />
                    </div>
                  </div>  
                 ))} 
            </OwlCarousel> : ''}
            {/* end carousel code */}
          </div>
        </div>
      </Container>
      </section>
  </>;
};

export default CarouselBlock;
