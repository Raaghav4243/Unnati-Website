import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsTestFetching } from '../../redux/testpage/testpage.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import Test from './test.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsTestFetching,
});

const TestContainer = compose(connect(mapStateToProps), WithSpinner)(Test);

export default TestContainer;
