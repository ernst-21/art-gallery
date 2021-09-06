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
    style: {
      backgroundColor: 'maroon',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    color: 'maroon',
    width: '1.2rem',
    height: '1.2rem'
  },
  {
    id: 2,
    style: {
      backgroundColor: 'red',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    color: 'red',
    width: '1.2rem',
    height: '1.2rem'
  },
  {
    id: 3,
    style: {
      backgroundColor: 'orange',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    color: 'orange',
    width: '1.2rem',
    height: '1.2rem'
  },
  {
    id: 4,
    style: {
      backgroundColor: 'yellow',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    color: 'yellow',
    width: '1.2rem',
    height: '1.2rem'
  },
  {
    id: 5,
    style: {
      backgroundColor: 'limegreen',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    color: 'limegreen',
    width: '1.2rem',
    height: '1.2rem'
  },
  {
    id: 6,
    style: {
      backgroundColor: 'olive',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    color: 'olive',
    width: '1.2rem',
    height: '1.2rem'
  },
  {
    id: 7,
    style: {
      backgroundColor: 'green',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    color: 'green',
    width: '1.2rem',
    height: '1.2rem'
  },
  {
    id: 8,
    style: {
      backgroundColor: 'darkcyan',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    color: 'darkcyan',
    width: '1.2rem',
    height: '1.2rem'
  },
  {
    id: 9,
    style: {
      backgroundColor: 'blue',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    color: 'blue',
    width: '1.2rem',
    height: '1.2rem'
  },
  {
    id: 10,
    style: {
      backgroundColor: 'darkblue',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    color: 'darkblue',
    width: '1.2rem',
    height: '1.2rem'
  },
  {
    id: 11,
    style: {
      backgroundColor: 'darkviolet',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    color: 'darkviolet',
    width: '1.2rem',
    height: '1.2rem'
  },
  {
    id: 12,
    style: {
      backgroundColor: 'pink',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    color: 'pink',
    width: '1.2rem',
    height: '1.2rem'
  },
  {
    id: 13,
    style: {
      backgroundColor: 'magenta',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    color: 'magenta',
    width: '1.2rem',
    height: '1.2rem'
  },
  {
    id: 14,
    style: {
      backgroundColor: 'white',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    color: 'white',
    width: '1.2rem',
    height: '1.2rem'
  },
  {
    id: 15,
    style: {
      backgroundColor: 'gray',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    color: 'gray',
    width: '1.2rem',
    height: '1.2rem'
  },
  {
    id: 16,
    style: {
      backgroundColor: 'black',
      width: '1.2rem',
      height: '1.2rem',
      border: '1px solid lightgray'
    },
    color: 'black',
    width: '1.2rem',
    height: '1.2rem'
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
