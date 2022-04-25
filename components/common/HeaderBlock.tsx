import { ComponentCommonHeader } from "graphql/types";
type Props = {
  data: ComponentCommonHeader;
};
const HeaderBlock = ({ data }: Props) => {

  //TODO: Complete this component
  return (
    <div style={{ maxWidth: 1320, margin: '0 auto', background: '#FFF' }}>
      <header style={{ fontSize: 28, fontWeight: 400, letterSpacing: 1, height: 99, lineHeight: '99px', textAlign: 'center', background: '#FFF', boxShadow: '0 0 10px 0 rgba(109,110,113,.10)' }}>
        {data.Text}
      </header>
    </div>
  )
};

export default HeaderBlock;
