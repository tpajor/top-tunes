import { connect } from 'react-redux';

import { IRootState } from '../../../Store/rootReducer';
import TuneDetailModal from '../Components/TuneDetailModal';
import { IProps } from '../Components/TuneDetailModal';
import { match } from 'react-router';

interface IRouteParams {
  id: string;
}

interface IOwnProps extends IProps {
  match: match<IRouteParams>;
}

const mapStateToProps = (state: IRootState, ownProps: IOwnProps) => {
  return ({
    tune: state.topTunes.data.byIds[ownProps.match.params.id],
  });
};

export default connect(mapStateToProps)(TuneDetailModal);
