import {Link} from 'react-router-dom';
import ArtworkCard from '../modules/artworks/components/ArtworkCard';
import ArtistCard from '../modules/artists/components/ArtistCard';
import Masonry from 'react-masonry-css';
import SectionTitle from './SectionTitle';

const ElementsGrid = (props) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 2,
    576: 1
  };

  return (
    <div className="elements-grid">
      <SectionTitle title={props.title} />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {props.elements.map((item) =>
          props.artworks === true ? (
            <ArtworkCard
              key={item._id}
              id={item._id}
              url={item.url}
              price={item.price}
              name={item.name}
              category={item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              artist={item.artist}
              artist_Id={item.artist_Id}
              gallery={item.gallery}
              voters={item.voters}
              addedToCart={item.addedToCart}
              purchased={item.purchased}
              artworkPage={false}
            />
          ) : (
            <Link key={item._id} to={'/artists/' + item._id}>
              <ArtistCard
                name={item.name}
                discipline={item.discipline.charAt(0).toUpperCase() + item.discipline.slice(1)}
                pic={item.pic}
                country={item.country}
                likes={item.likes}
              />
            </Link>

          )
        )}
      </Masonry>
    </div>
  );
};

export default ElementsGrid;
