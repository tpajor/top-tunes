export const urls = {
  api: {
    getiTunes: 'https://itunes.apple.com/us/rss/topalbums/limit=100/json',
  },
  reactRouter: {
    topTunes: '/topTunes',
    topTunesDetail: '/topTunes/:id',
    topTunesDetailCreate: (id: number) => `/topTunes/${id}`,
  },
};
