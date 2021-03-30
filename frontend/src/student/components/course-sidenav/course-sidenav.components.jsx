//libraries used
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';

//redux used

import {
  selectCompletedCourseTopicsId,
  selectCourseTopics,
  selectIsCourseTopicsFetching,
} from '../../redux/course-topic/course-topic.selectors';

//components used
import CourseSideNavSubmenu from '../course-sidenav-submenu/course-sidenav-submenu.component';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

//styles used
import { SidebarWrap, SideNavContainer } from './course-sidenav.styles';

const useStyles = (theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
});

class CourseSideNav extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    const {
      topics,
      attemptedTopicsMap,
      isCourseTopicsFetching,
      classes,
    } = this.props;
    return (
      <>
        <SideNavContainer>
          <SidebarWrap>
            {topics ? (
              <>
                {topics.map((topicObj) => (
                  <CourseSideNavSubmenu
                    topicInfo={topicObj}
                    attemptedTopicsMap={attemptedTopicsMap}
                    key={topicObj._id}
                  />
                ))}
                <Backdrop
                  className={classes.backdrop}
                  open={isCourseTopicsFetching}
                >
                  <CircularProgress color='inherit' />
                </Backdrop>
              </>
            ) : null}
          </SidebarWrap>
        </SideNavContainer>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  topics: selectCourseTopics,
  attemptedTopicsMap: selectCompletedCourseTopicsId,
  isCourseTopicsFetching: selectIsCourseTopicsFetching,
});

export default connect(mapStateToProps)(withStyles(useStyles)(CourseSideNav));
