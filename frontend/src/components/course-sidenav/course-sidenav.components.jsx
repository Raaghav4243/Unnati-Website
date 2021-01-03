//libraries used
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCompletedCourseTopicsId,
  selectCourseTopics,
} from '../../redux/course-topic/course-topic.selectors';

//redux used

//components used
import CourseSideNavSubmenu from '../course-sidenav-submenu/course-sidenav-submenu.component';

//styles used
import { SidebarWrap, SideNavContainer } from './course-sidenav.styles';

class CourseSideNav extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { topics, attemptedTopicsMap } = this.props;
    console.log('Topics are', topics);
    return (
      <>
        <SideNavContainer>
          <SidebarWrap>
            {/* allCourses.map((course, index) => (
                <Card course_name={course.subjectName} key={course._id} />
              ))
            ) */}
            {topics
              ? topics.map((topicObj) => (
                  <CourseSideNavSubmenu
                    topicInfo={topicObj}
                    attemptedTopicsMap={attemptedTopicsMap}
                    key={topicObj._id}
                  />
                ))
              : null}
          </SidebarWrap>
        </SideNavContainer>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  topics: selectCourseTopics,
  attemptedTopicsMap: selectCompletedCourseTopicsId,
});

export default connect(mapStateToProps)(CourseSideNav);
