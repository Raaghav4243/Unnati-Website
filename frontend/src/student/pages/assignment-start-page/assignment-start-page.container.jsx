import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsAssignmentFetching } from '../../redux/assignment-page/assignment-page.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import AssignmentStartPage from './assignment-start-page.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsAssignmentFetching,
});

const AssignmentStartPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(AssignmentStartPage);

export default AssignmentStartPageContainer;
