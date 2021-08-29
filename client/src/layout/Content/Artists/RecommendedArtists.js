import ArtistCard from './ArtistCard';
import { Row, Col } from 'antd';
import { artists } from '../../../mockData';
import SectionTitle from '../../../components/SectionTitle';

const RecommendedArtists = () => {
  const recommended = artists.filter((item) => item.recommended === true);
  return (
    <div className="recommended-section">
      <SectionTitle title='Recommended' />
      <div className="recommended-artists__container">
        <Row gutter={[16, 8]}>
          {recommended.map((item) => (
            <Col
              key={item.id}
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              xl={{ span: 6 }}
            >
              <ArtistCard
                pic={item.pic}
                country={item.country}
                name={item.name}
                likes={item.likes}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default RecommendedArtists;
