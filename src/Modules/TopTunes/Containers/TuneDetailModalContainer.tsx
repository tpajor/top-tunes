import { connect } from 'react-redux';

import { IRootState } from '../../../Store/rootReducer';
import TuneDetailModal from '../Components/TuneDetailModal';
import { IProps } from '../Components/TuneDetailModal';
import { match } from 'react-router';
import { params } from '../../../Routing/urls';

interface IRouteParams {
  [kay: string]: string;
}

interface IOwnProps extends IProps {
  match: match<IRouteParams>;
}

const mapStateToProps = (state: IRootState, ownProps: IOwnProps) => {
  return ({
    tune: state.topTunes.data.byIds[ownProps.match.params[params.topTunesDetail[0]]],
  });
};

export default connect(mapStateToProps)(TuneDetailModal);
