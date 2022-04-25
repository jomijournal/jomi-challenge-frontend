// import { Grid } from "@mui/material";
import { Button, Divider } from "antd";
// import { ComponentCommonTwoColumnBlock } from "graphql/types";
import Computer from '../../assets/computer.jpg'
import Doctors_group from '../../assets/doctors_group.jpg'

// type Props = {
//   data: ComponentCommonTwoColumnBlock;
// };
const TwoColumnBlock = (props: any) => {
  var array = [
    { image: Computer }, { image: Doctors_group }
  ]
  //TODO: Implement this component
  return (
    <div style={{ padding: '50px 120px' }}>
      <div>
        <h1 style={{ fontSize: '28px', fontWeight: '400', letterSpacing: '1px', margin: 0, padding: '0 0 70px 0', textAlign: 'center' }}>Access. Anytime, anywhere.</h1>
        {props.data.map((item, index) => {
          console.log('log item.ImagePosition', item.ImagePosition);
          if (item.ImagePosition === 'Left') {
            return (
              <div key={index}>
                <div className='row'>
                  <div className="col-6">
                    <img src={array[index].image.src} alt='' className="img-fluid" style={{ float: 'left', height: 200, width: 300 }}/>
                  </div>
                  <div className="col-6">
                    <div className="box-content">
                      <h2>{item.Title}</h2>
                      <p>{item.Description}</p>
                      <a href="#" className="learn-more">{item.ButtonUrl}</a>
                    </div>
                  </div>
                </div>
                <Divider style={{ border: '2px solid rgba(0, 0, 0, 0.06)' }} />
              </div>
            )
          } else if (item.ImagePosition === 'Right') {
            return (
              <div key={index}>
                <div className='row'>
                <div className="col-6">
                    <div className="box-content">
                      <h2>{item.Title}</h2>
                      <p>{item.Description}</p>
                      <a href="#" className="learn-more">{item.ButtonUrl}</a>
                    </div>
                  </div>
                  <div className="col-6">
                    <img src={array[index].image.src} alt='' className="img-fluid" style={{ float: 'right', height: 200, width: 300 }}/>
                  </div>
                </div>
                <Divider style={{ border: '2px solid rgba(0, 0, 0, 0.06)' }} />
              </div>
            )
          }

        })}
      </div>
    </div>
  )
};

export default TwoColumnBlock;
