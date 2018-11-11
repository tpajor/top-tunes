import IDtoiTune from '../dto/IDtoiTune';

export const dtoiTuneMock: IDtoiTune = {
  category: {
    attributes: {
      'im:id': 'mock',
      label: 'category',
      scheme: 'category schema',
      term: 'category term',
    },
  },

  id: {
    label: 'id',
    attributes: {
      'im:id': 'mock',
    },
  },

  'im:artist': {
    label: 'artist',
    attributes: {
      href: 'http://artist.com',
    },
  },

  'im:contentType': {
    attributes: {
      term: 'constentType term',
      label: 'constentType',
    },
    'im:contentType': {
      attributes: {
        term: 'constentType term',
        label: 'constentType',
      },
    },
  },

  'im:image': [
    {
      label: 'http://image.com',
      attributes: {
        height: '13',
      },
    },
  ],

  'im:itemCount': {
    label: '13',
  },

  'im:name': {
    label: 'name',
  },

  'im:price': {
    label: '$13.13',
    attributes: {
      amount: '13.13',
      currency: 'dollar',
    },
  },

  'im:releaseDate': {
    label: '1999-09-09',
    attributes: {
      label: '1999-09-09',
    },
  },

  link: {
    attributes: {
      href: 'http://link.com',
      rel: 'link',
      type: 'link type',
    },
  },

  rights: {
    label: 'rights',
  },

  title: {
    label: 'title',
  },
};
