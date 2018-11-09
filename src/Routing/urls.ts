export const params = {
  topTunesDetail: [
    'id',
  ],
};

export const urls = {
  api: {
    getiTunes: 'https://itunes.apple.com/us/rss/topalbums/limit=100/json',
  },
  reactRouter: {
    topTunes: '/topTunes',
    topTunesDetail: `/topTunes/:${params.topTunesDetail[0]}`,
    topTunesDetailCreate: (id: number) => `/topTunes/${id}`,
  },
};
