import React, { useState } from 'react';
import { connect } from 'react-redux';

import { FaBook } from 'react-icons/fa';
import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri';
import { MdOndemandVideo, MdAssignment, MdFlag } from 'react-icons/md';
import { IoIosCheckbox } from 'react-icons/io';

import { setCurrentCourseTopicContent } from '../../redux/student/student.actions';

import {
  TopicContainer,
  TopicIconWrapper,
  TopicName,
  ArrowIconWrapper,
  ContentItemContainer,
  ContentIconWrapper,
  ContentName,
  TickIconWrapper,
} from './course-sidenav-submenu.styles';
import { viewedLectureForFirstTimeStart } from '../../redux/course-topic/course-topic.actions';

const CourseSideNavSubmenu = ({
  topicInfo: { topicName, contentOrder: content },
  attemptedTopicsMap,
  setCurrentCourseTopicContent,
  viewedLectureForFirstTimeStart,
}) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  // console.log('attemptedTopicsMap', attemptedTopicsMap);

  return (
    <>
      <TopicContainer onClick={showSubnav}>
        <TopicIconWrapper>
          <FaBook style={{ height: '50%', width: '50%' }} />
        </TopicIconWrapper>
        <TopicName>{topicName}</TopicName>
        <ArrowIconWrapper>
          {subnav ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
        </ArrowIconWrapper>
      </TopicContainer>
      {subnav
        ? content.map((content_item) => {
            // console.log(content_item);
            return (
              <ContentItemContainer
                key={content_item.id}
                onClick={() => {
                  setCurrentCourseTopicContent(
                    content_item.id,
                    content_item.content,
                    content_item.contentName
                  );
                  if (content_item.content === 'LECTURE') {
                    if (attemptedTopicsMap[content_item.id]) {
                    } else {
                      // hence lecture is being viewed for the first time
                      viewedLectureForFirstTimeStart(content_item.id);
                    }
                  } else {
                  }
                }}
                contentType={
                  content_item.content === 'LECTURE'
                    ? 'LECTURE'
                    : content_item.content === 'ASSIGNMENT'
                    ? 'ASSIGNMENT'
                    : content_item.content === 'TEST'
                    ? 'TEST'
                    : null
                }
              >
                <ContentIconWrapper>
                  {content_item.content === 'LECTURE' ? (
                    <MdOndemandVideo style={{ height: '50%', width: '50%' }} />
                  ) : content_item.content === 'ASSIGNMENT' ? (
                    <MdAssignment style={{ height: '50%', width: '50%' }} />
                  ) : content_item.content === 'TEST' ? (
                    <MdFlag style={{ height: '50%', width: '50%' }} />
                  ) : null}
                </ContentIconWrapper>
                <ContentName>{content_item.contentName}</ContentName>
                <TickIconWrapper>
                  {attemptedTopicsMap[content_item.id] ? (
                    <IoIosCheckbox style={{ color: 'green' }} />
                  ) : null}
                </TickIconWrapper>
              </ContentItemContainer>
            );
          })
        : null}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentCourseTopicContent: (
    course_topic_content_id,
    course_topic_content_type,
    course_topic_content_name
  ) =>
    dispatch(
      setCurrentCourseTopicContent(
        course_topic_content_id,
        course_topic_content_type,
        course_topic_content_name
      )
    ),
  viewedLectureForFirstTimeStart: (lectureId) =>
    dispatch(viewedLectureForFirstTimeStart(lectureId)),
});

export default connect(null, mapDispatchToProps)(CourseSideNavSubmenu);
