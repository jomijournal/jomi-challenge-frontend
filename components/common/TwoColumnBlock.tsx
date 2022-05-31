import { ComponentCommonTwoColumnBlock } from "graphql/types";
import Image from "next/image";

type Props = {
  data: ComponentCommonTwoColumnBlock;
};
const TwoColumnBlock = (props: Props) => {
  console.log(props)
  return (
    <div className={['clm-cntnr', props.data.ImagePosition === 'Right' ? 'img-right' : null].join(' ')}>
      <div className="clm-txt">
        <h4>{props.data.TitleText}</h4>
        <p>{props.data.Description}</p>
        <button>{props.data.ButtonText}</button>
      </div>
      <div className="clm-img">
        <Image
          src={
            process.env.STRAPI_CMS_URL +
            props?.data?.Image?.data?.attributes?.url
          }
          alt={props?.data?.Image?.data?.attributes?.alternativeText}
          title={props?.data?.TitleText}
          width={props?.data?.Image?.data?.attributes?.width}
          height={props?.data?.Image?.data?.attributes?.height}
          layout="intrinsic"
        />
      </div>
    </div>
  );
};

export default TwoColumnBlock;
