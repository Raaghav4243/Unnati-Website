import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import { selectCurrentCourseOverviewIsFetching } from '../../redux/course-overview/course-overview.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CourseSummary from './course-summary.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectCurrentCourseOverviewIsFetching,
});

const CourseSummaryContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CourseSummary);

export default CourseSummaryContainer;
