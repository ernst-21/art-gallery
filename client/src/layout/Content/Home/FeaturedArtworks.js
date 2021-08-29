import ArtworkCard from '../Artworks/ArtworkCard';
import { Row, Col } from 'antd';
import { artworks } from '../../../mockData';
import SectionTitle from '../../../components/SectionTitle';

const FeaturedArtworks = () => {
  const featured = artworks.filter((item) => item.featured === true);
  return (
    <div className="featured-section">
      <SectionTitle title='Featured' />
      <div className="featured-artworks__container">
        <Row gutter={[16, 8]}>
          {featured.map((item) => (
            <Col
              key={item.id}
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              xl={{ span: 6 }}
            >
              <ArtworkCard
                url={item.url}
                price={item.price}
                name={item.name}
                artist={item.artist}
                gallery={item.gallery}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default FeaturedArtworks;
