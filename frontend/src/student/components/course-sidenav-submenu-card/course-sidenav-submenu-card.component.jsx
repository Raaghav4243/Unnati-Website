import React from 'react';
import { connect } from 'react-redux';

import { MdOndemandVideo, MdAssignment, MdFlag } from 'react-icons/md';

import { setCurrentCourseTopicContent } from '../../redux/student/student.actions';

import {
  ContentItemContainer,
  ContentIconWrapper,
  ContentName,
} from './course-sidenav-submenu-card.styles';

const SideNavSubmenuCard = (content_item) => {
  console.log(content_item);
  const { id, content, contentName } = content_item;
  const handleClick = () => setCurrentCourseTopicContent(id, content);
  return (
    <>
      {/* <ContentItemContainer key={id} onClick={handleClick}>
        <ContentIconWrapper>
          {content === 'LECTURE' ? (
            <MdOndemandVideo />
          ) : content === 'ASSIGNMENT' ? (
            <MdAssignment />
          ) : content === 'TEST' ? (
            <MdFlag />
          ) : null}
        </ContentIconWrapper>
        <ContentName>{contentName}</ContentName>
      </ContentItemContainer> */}
      {/* <div>Hi</div> */}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentCourseTopicContent: (
    course_topic_content_id,
    course_topic_content_type
  ) =>
    dispatch(
      setCurrentCourseTopicContent(
        course_topic_content_id,
        course_topic_content_type
      )
    ),
});

export default connect(null, mapDispatchToProps)(SideNavSubmenuCard);
