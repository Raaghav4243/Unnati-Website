import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsTestEvaluationFetching } from '../../redux/test-evaluation/test-evaluation-list.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import EvaluateTestPage from './evaluate-test';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsTestEvaluationFetching,
});

const EvaluateTestPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(EvaluateTestPage);

export default EvaluateTestPageContainer;
