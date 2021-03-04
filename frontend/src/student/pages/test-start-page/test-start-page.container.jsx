import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsTestFetching } from '../../redux/testpage/testpage.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import TestStartPage from './test-start-page.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsTestFetching,
});

const TestStartPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(TestStartPage);

export default TestStartPageContainer;
