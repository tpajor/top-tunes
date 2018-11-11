import { connect } from 'react-redux';
import { match } from 'react-router';

import { IRootState } from '../../../Store/rootReducer';
import { IProps } from '../Components/TuneDetailModal';
import { params } from '../../../Routing/urls';
import TuneDetailModalLoadble from '../Lazy/TuneDetailModalLoadble';

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

export default connect(mapStateToProps)(TuneDetailModalLoadble);
