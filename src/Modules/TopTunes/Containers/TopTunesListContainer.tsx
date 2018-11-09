import { connect } from 'react-redux';

import TopTunesList from '../Components/TopTunesList';
import { getiTunesStart, filteriTunes } from '../Store/topTunesActions';
import { IRootState } from '../../../Store/rootReducer';

const mapStateToProps = (state: IRootState) => ({
  filteredIds: state.topTunes.data.filteredIds,
  byIds: state.topTunes.data.byIds,
  isLoading: state.topTunes.ui.isLoading,
  error: state.topTunes.ui.error,
});

const mapDispatchToProps = {
  getiTunesStart,
  filteriTunes,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopTunesList);
