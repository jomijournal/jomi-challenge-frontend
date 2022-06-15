import { ComponentCommonCarousel } from "graphql/types";
import ReactSimplyCarousel from 'react-simply-carousel';
import { useState } from 'react';
import Typography from '@mui/material/Typography';

type Props = {
  data: ComponentCommonCarousel;
};

const styles = {
  parent: {
    width: 250,
    height: 100,
    background: 'grey',
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    display: 'flex'
  }
}
const CarouselBlock = ({ data: { Item: items } }: Props) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div style={{marginTop: "3%"}}>
        <Typography variant="h4" component="div" gutterBottom>
          Carousel Block
        </Typography>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 4,
            itemsToScroll: 1,
            minWidth: 600,
          },
        ]}
        speed={400}
        easing="linear"
      >
       {items.map((item, i) => 
        <div style={styles.parent}>
          <div>
            <img
            key={i}
            src={`http://localhost:1337${item.Image.data.attributes.url}`}
            alt="hello world"
            style={{ objectFit: 'contain', width: '90%',height: "90%", marginTop: '5px' }}
            />
          </div>
          <div style={{alignItems: 'center', flexDirection: 'column', background: 'grey', display: 'flex', margin: '10px', color: 'white'}}>
            <label >{item.TitleText}</label>
            <label >{item.Description}</label>
          </div>
        </div>
        )}
      </ReactSimplyCarousel>
    </div>
  );
}

export default CarouselBlock;
