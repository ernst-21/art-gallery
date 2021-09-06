import {forCarousel} from '../../../mockData';

const StoriesPage = () => {
  return (
    <div className="artwork-data">
      <div className="artwork-data__container">
        <div className="artwork-info__container">
          <h1>{forCarousel[0].promo}</h1>
          <p className="artwork-info__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur et facere quam ratione temporibus. Alias dolor dolores enim ex, facere modi nesciunt nostrum quas, sed tempore veniam vero voluptate voluptatem!</p><br/>
          <p className="artwork-info__description"> Trabore modi numquam ratione reiciendis repellat rerum sed totam veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem cupiditate deserunt dolores doloribus, eligendi eos eum facere hic inventore.</p>
        </div>
        <div className="artwork-photo__container">
          <img style={{ width: '100%', height: 'auto' }} src={forCarousel[0].url} alt='story-1'/>
        </div>
      </div>
      <div className="artwork-data__container reverse">
        <div className="artwork-photo__container">
          <img style={{ width: '100%', height: 'auto' }} src={forCarousel[1].url} alt='story-2'/>
        </div>
        <div className="artwork-info__container">
          <h1>{forCarousel[1].promo}</h1>
          <p className="artwork-info__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur et facere quam ratione temporibus. Alias dolor dolores enim ex, facere modi nesciunt nostrum quas, sed tempore veniam vero voluptate voluptatem!</p><br/>
          <p className="artwork-info__description"> Trabore modi numquam ratione reiciendis repellat rerum sed totam veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem cupiditate deserunt dolores doloribus, eligendi eos eum facere hic inventore.</p>
        </div>
      </div>
      <div className="artwork-data__container">
        <div className="artwork-info__container">
          <h1>{forCarousel[2].promo}</h1>
          <p className="artwork-info__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur et facere quam ratione temporibus. Alias dolor dolores enim ex, facere modi nesciunt nostrum quas, sed tempore veniam vero voluptate voluptatem!</p><br/>
          <p className="artwork-info__description"> Trabore modi numquam ratione reiciendis repellat rerum sed totam veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem cupiditate deserunt dolores doloribus, eligendi eos eum facere hic inventore.</p>
        </div>
        <div className="artwork-photo__container">
          <img style={{ width: '100%', height: 'auto' }} src={forCarousel[2].url} alt='story-2'/>
        </div>
      </div>
    </div>
  );
};

export default StoriesPage;
