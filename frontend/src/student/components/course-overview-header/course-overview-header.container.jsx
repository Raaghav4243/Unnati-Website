import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import { selectCurrentCourseOverviewIsFetching } from '../../redux/course-overview/course-overview.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CourseOverviewHeader from './course-overview-header.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectCurrentCourseOverviewIsFetching,
});

const CourseOverviewHeaderContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CourseOverviewHeader);

export default CourseOverviewHeaderContainer;
