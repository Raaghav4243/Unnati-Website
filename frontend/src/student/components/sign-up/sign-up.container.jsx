import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsAllCafesFetching } from '../../redux/allCourses/all-courses.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import SignUp from './sign-up.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsAllCafesFetching,
});

const SignUpContainer = compose(connect(mapStateToProps), WithSpinner)(SignUp);

export default SignUpContainer;
