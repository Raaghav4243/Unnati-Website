import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsLectureFetching } from '../../redux/lecture-page/lecture-page.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CourseVideoPage from './course-video-page.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLectureFetching,
});

const CourseVideoPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CourseVideoPage);

export default CourseVideoPageContainer;
