import IITune from '../models/IITune';

const iTune1: IITune = {
  category: 'Jazz',
  artist: 'Various',
  photo: 'http://photo-url.com',
  numberOfSongs: 14,
  name: 'Some Album',
  price: '$6.67',
  releaseDate: new Date(2, 2, 2, 2, 2, 2, 2),
  link: 'http://profile-url.com',
  rights: 'copyleft',
  title: 'Various - Some Album',
};

const iTune2: IITune = {
  category: 'Rock',
  artist: 'Artist Name',
  photo: 'http://photo-url-1.com',
  numberOfSongs: 8,
  name: 'Some Other Album',
  price: '$13.13',
  releaseDate: new Date(4, 4, 4, 4, 4, 4, 4),
  link: 'http://profile-url-1.com',
  rights: 'copyleft rights',
  title: 'Artist Name - Some Other Album',
};

const iTune3: IITune = {
  category: 'Pop',
  artist: 'Lazy Artist Name',
  photo: 'http://photo-url-2.com',
  numberOfSongs: 11,
  name: 'Yet Another Album',
  price: '$1.09',
  releaseDate: new Date(8, 8, 8, 8, 8, 8, 8),
  link: 'http://profile-url-2.com',
  rights: 'copyleft rights reversed',
  title: 'Lazy Artist Name - Yet Another Album',
};

export const iTunes: IITune[] = [
  iTune1,
  iTune2,
  iTune3,
];
