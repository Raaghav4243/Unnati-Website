import React, { useState } from 'react';
import { connect } from 'react-redux';

import { FaBook } from 'react-icons/fa';
import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri';
import { MdOndemandVideo, MdAssignment, MdFlag } from 'react-icons/md';

import { setCurrentCourseTopicContent } from '../../redux/student/student.actions';

import SidenavSubMenuCard from '../course-sidenav-submenu-card/course-sidenav-submenu-card.component';

import {
  TopicContainer,
  TopicIconWrapper,
  TopicName,
  ArrowIconWrapper,
  ContentItemContainer,
  ContentIconWrapper,
  ContentName,
} from './course-sidenav-submenu.styles';

const CourseSideNavSubmenu = ({
  topicInfo: { topicName, contentOrder: content },
  attemptedTopicsMap,
}) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <TopicContainer onClick={showSubnav}>
        <TopicIconWrapper>
          <FaBook />
        </TopicIconWrapper>
        <TopicName>{topicName}</TopicName>
        <ArrowIconWrapper>
          {subnav ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
        </ArrowIconWrapper>
      </TopicContainer>
      {subnav
        ? content.map((content_item) => {
            return (
              <ContentItemContainer
                key={content_item.id}
                onClick={() =>
                  setCurrentCourseTopicContent(
                    content_item.id,
                    content_item.content
                  )
                }
              >
                <ContentIconWrapper>
                  {content_item.content === 'LECTURE' ? (
                    <MdOndemandVideo />
                  ) : content_item.content === 'ASSIGNMENT' ? (
                    <MdAssignment />
                  ) : content_item.content === 'TEST' ? (
                    <MdFlag />
                  ) : null}
                </ContentIconWrapper>
                <ContentName>{content_item.contentName}</ContentName>
              </ContentItemContainer>
            );
            //   <SidenavSubMenuCard content_item />
            // );
          })
        : null}
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

export default connect(null, mapDispatchToProps)(CourseSideNavSubmenu);
