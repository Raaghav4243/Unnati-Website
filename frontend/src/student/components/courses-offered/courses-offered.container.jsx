import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsAllCoursesFetching } from '../../redux/allCourses/all-courses.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import OurCourses from './courses-offered.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsAllCoursesFetching,
});

const OurCoursesContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(OurCourses);

export default OurCoursesContainer;
