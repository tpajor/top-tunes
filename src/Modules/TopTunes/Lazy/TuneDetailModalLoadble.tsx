import Loadable from 'react-loadable';

const TuneDetailModalLoadble = Loadable({
  loader: () => import('../Components/TuneDetailModal'),
  loading: () => null,
});

export default TuneDetailModalLoadble;
