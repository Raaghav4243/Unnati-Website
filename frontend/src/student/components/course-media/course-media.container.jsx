import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import { selectCurrentCourseOverviewIsFetching } from '../../redux/course-overview/course-overview.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CourseMedia from './course-media.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectCurrentCourseOverviewIsFetching,
});

const CourseMediaContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CourseMedia);

export default CourseMediaContainer;
