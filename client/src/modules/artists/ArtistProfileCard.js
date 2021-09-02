import {Card} from 'antd';
import {AiOutlineHeart} from 'react-icons/ai';

const {Meta} = Card;

const ArtistProfileCard = (props) => {
  return (
    <Card
      style={{textAlign: 'center'}}
      bordered
      cover={<img alt={props.name} src={props.pic} />}
      actions={[
        <AiOutlineHeart key="vote" style={props.style} />,
      ]}
    >
      <Meta description={<em><h3>{props.discipline.charAt(0).toUpperCase() + props.discipline.slice(1)}</h3></em>} />
    </Card>
  );
};

export default ArtistProfileCard;
