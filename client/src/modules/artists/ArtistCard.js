import {Card} from 'antd';

const { Meta } = Card;

const ArtistCard = (props) => {
  return (
    <Card
      hoverable
      style={{padding: '1em 1em 0 1em'}}
      cover={<img alt={props.name} src={props.pic} />}
    >
      <Meta title={props.name} description={['Name: ' + props.name, <br key={1}/>,'Country: ' + props.country, <br key={2}/>, 'likes: ' + props.likes]} />
    </Card>
  );
};

export default ArtistCard;
