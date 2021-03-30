import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsAssignmentFetching } from '../../redux/assignment-page/assignment-page.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import Assignment from './assignment.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsAssignmentFetching,
});

const AssignmentContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Assignment);

export default AssignmentContainer;
