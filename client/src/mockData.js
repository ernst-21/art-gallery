import cyclope from './assets/images/cyclope.jfif';
import spontaneous from './assets/images/spontaneous.jfif';
import kidHand from './assets/images/kidHand.jfif';
import painting from './assets/images/PaintingCategory.jfif';
import print from './assets/images/PrintCategory.jfif';
import sculpture from './assets/images/SculptureCategory.jfif';
import photography from './assets/images/PhotoCategory.jfif';

export const forCarousel = [
  {
    promo: 'Best art from Paris exhibition',
    url: cyclope
  },
  {
    promo: 'Spontaneous Artworks in Berlin Summer Collection',
    url: spontaneous
  },
  {
    promo: 'Photography Collection exposed in New York Gallery',
    url: kidHand
  }
];

export const galleries = ['All', 'Paris', 'Berlin', 'London', 'New York'];

export const discipline = ['All', 'Painter', 'Printmaker', 'Sculptor', 'Photographer'];

export const artists = [
  'All',
  'William Shakespeare',
  'Alice Walker',
  'Jane Eyre',
  'Victor Hugo',
  'Walt Whitman',
  'John Doe',
  'Alexandre Dumas'
];

export const themes = [
  'All',
  'Flowers',
  'Sea',
  'Beach',
  'Nature',
  'Man',
  'Men',
  'Woman',
  'Women',
  'Abstract',
  'Boat',
  'River',
  'Lake',
  'Statue',
  'Head',
  'Children',
  'Dog',
  'Naked',
  'Dish',
  'Bottle',
  'Pottery',
  'Relaxing',
  'Jump',
  'Skating',
  'Colorful',
  'Road',
  'Camera',
  'People',
  'Animals',
  'Village',
  'Mythology'
];

export const colors = [
  {
    id: 1,
    content: '',
    style: {
      backgroundColor: 'maroon',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    value: 'maroon'
  },
  {
    id: 2,
    content: '',
    style: {
      backgroundColor: 'red',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    value: 'red'
  },
  {
    id: 3,
    content: '',
    style: {
      backgroundColor: 'orange',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    value: 'orange'
  },
  {
    id: 4,
    content: '',
    style: {
      backgroundColor: 'yellow',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    value: 'yellow'
  },
  {
    id: 5,
    content: '',
    style: {
      backgroundColor: 'limegreen',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    value: 'limegreen'
  },
  {
    id: 6,
    content: '',
    style: {
      backgroundColor: 'olive',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    value: 'olive'
  },
  {
    id: 7,
    content: '',
    style: {
      backgroundColor: 'green',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    value: 'green'
  },
  {
    id: 8,
    content: '',
    style: {
      backgroundColor: 'darkcyan',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    value: 'darkcyan'
  },
  {
    id: 9,
    content: '',
    style: {
      backgroundColor: 'blue',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    value: 'blue'
  },
  {
    id: 10,
    content: '',
    style: {
      backgroundColor: 'darkblue',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    value: 'darkblue'
  },
  {
    id: 11,
    content: '',
    style: {
      backgroundColor: 'darkviolet',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    value: 'darkviolet'
  },
  {
    id: 12,
    content: '',
    style: {
      backgroundColor: 'pink',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    value: 'pink'
  },
  {
    id: 13,
    content: '',
    style: {
      backgroundColor: 'magenta',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    value: 'magenta'
  },
  {
    id: 14,
    content: '',
    style: {
      backgroundColor: 'white',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    value: 'white'
  },
  {
    id: 15,
    content: '',
    style: {
      backgroundColor: 'gray',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    value: 'gray'
  },
  {
    id: 16,
    content: '',
    style: {
      backgroundColor: 'black',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    value: 'black'
  }
];

export const categories = [
  {
    id: 3,
    category: 'Sculpture',
    value: 'sculpture',
    content: (
      <img
        style={{ width: '100%', height: '100%' }}
        src={sculpture}
        alt="sculpture"
      />
    ),
    style: { width: '8rem', height: '6rem', marginTop: '1rem' }
  },
  {
    id: 1,
    category: 'Painting',
    value: 'painting',
    content: (
      <img
        style={{ width: '100%', height: '100%' }}
        src={painting}
        alt="painting"
      />
    ),
    style: { width: '8rem', height: '6rem', marginTop: '1rem' }
  },
  {
    id: 2,
    category: 'Photography',
    value: 'photography',
    content: (
      <img
        style={{ width: '100%', height: '100%' }}
        src={photography}
        alt="photography"
      />
    ),
    style: { width: '8rem', height: '6rem', marginTop: '1rem' }
  },
  {
    id: 4,
    category: 'Print',
    value: 'print',
    content: (
      <img style={{ width: '100%', height: '100%' }} src={print} alt="print" />
    ),
    style: { width: '8rem', height: '6rem', marginTop: '1rem' }
  }
];

export const orientation = [
  {
    id: 1,
    value: 'landscape',
    content: '',
    style: {
      width: '1.8rem',
      height: '1rem',
      backgroundColor: '#929292'
    }
  },
  {
    id: 2,
    value: 'portrait',
    content: '',
    style: {
      width: '1rem',
      height: '1.6rem',
      backgroundColor: '#929292'
    }
  },
  {
    id: 3,
    value: 'square',
    content: '',
    style: {
      width: '1.2rem',
      height: '1.2rem',
      backgroundColor: '#929292'
    }
  }
];

export const sizes = [
  {
    id: 1,
    value: 'small',
    content: '',
    style: {
      width: '1.2rem',
      height: '1.2rem',
      backgroundColor: '#929292'
    }
  },
  {
    id: 2,
    value: 'medium',
    content: '',
    style: {
      width: '1.4rem',
      height: '1.4rem',
      backgroundColor: '#929292'
    }
  },
  {
    id: 3,
    value: 'big',
    content: '',
    style: {
      width: '1.6rem',
      height: '1.6rem',
      backgroundColor: '#929292'
    }
  }
];

export const filterDefaults = {
  category: ['painting', 'print', 'sculpture', 'photography'],
  orientation: ['landscape', 'portrait', 'square'],
  size: ['big', 'small', 'medium'],
  gallery: ['Paris', 'London', 'Berlin', 'New York'],
  price: [0, 10000],
  artist: [
    'William Shakespeare',
    'Alice Walker',
    'Jane Eyre',
    'Victor Hugo',
    'Walt Whitman',
    'John Doe',
    'Alexandre Dumas'
  ],
  tags: [
    'flowers',
    'sea',
    'beach',
    'nature',
    'man',
    'men',
    'woman',
    'women',
    'abstract',
    'boat',
    'river',
    'lake',
    'statue',
    'head',
    'children',
    'dog',
    'naked',
    'dish',
    'bottle',
    'pottery',
    'relaxing',
    'jump',
    'skating',
    'colorful',
    'road',
    'camera',
    'people',
    'animals',
    'village',
    'mythology'
  ],
  colors : ['maroon', 'orange', 'yellow', 'limegreen','olive',  'green', 'darkcyan', 'blue','darkblue','darkviolet', 'pink', 'magenta', 'white', 'gray','black']};

export const artistFiltersDefaults = {
  discipline : ['painter', 'sculptor', 'photographer', 'printmaker'],
  recommended: [true, false],
  likes: [0, 10]
};
