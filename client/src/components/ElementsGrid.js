import ArtworkCard from '../modules/artworks/ArtworkCard';
import ArtistCard from '../modules/artists/ArtistCard';
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
              url={item.url}
              price={item.price}
              name={item.name}
              category={item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              artist={item.artist}
              gallery={item.gallery}
            />
          ) : (
            <ArtistCard
              key={item._id}
              name={item.name}
              discipline={item.discipline.charAt(0).toUpperCase() + item.discipline.slice(1)}
              pic={item.pic}
              country={item.country}
              likes={item.likes}
            />
          )
        )}
      </Masonry>
    </div>
  );
};

export default ElementsGrid;
