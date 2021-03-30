import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setCurrentCourseTopicContent } from '../../redux/student/student.actions';

import { viewedLectureForFirstTimeStart } from '../../redux/course-topic/course-topic.actions';
import { selectCurrentCourseTopicId } from '../../redux/student/student.selectors';

import { Checkbox } from '@material-ui/core';
import { FaBook } from 'react-icons/fa';
import {
  RiArrowUpSFill,
  // RiArrowDownSFill,
  RiArrowRightSFill,
} from 'react-icons/ri';
import { MdOndemandVideo, MdAssignment, MdFlag } from 'react-icons/md';
// import { IoIosCheckbox } from 'react-icons/io';

import {
  TopicContainer,
  TopicIconWrapper,
  TopicName,
  ArrowIconWrapper,
  ContentWrapper,
  ContentItemContainer,
  ContentIconWrapper,
  ContentName,
  TickIconWrapper,
} from './course-sidenav-submenu.styles';

class CourseSideNavSubmenu extends React.Component {
  constructor() {
    super();
    this.state = {
      subnav: false,
    };
  }
  render() {
    const {
      topicInfo: { topicName, contentOrder: content },
      attemptedTopicsMap,
      setCurrentCourseTopicContent,
      viewedLectureForFirstTimeStart,
      current_topic_content_id,
    } = this.props;
    const { subnav } = this.state;
    // console.log('CURRENT TOPIC ID IS', current_topic_content_id);
    return (
      <>
        <TopicContainer
          onClick={() => {
            this.setState({ subnav: !this.state.subnav });
          }}
        >
          <TopicIconWrapper>
            <FaBook style={{ height: '100%', width: '100%' }} />
          </TopicIconWrapper>
          <TopicName>{topicName}</TopicName>
          <ArrowIconWrapper>
            {subnav ? <RiArrowUpSFill /> : <RiArrowRightSFill />}
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
                  <ContentWrapper
                    currentContent={
                      content_item.id === current_topic_content_id
                    }
                  >
                    <ContentIconWrapper>
                      {content_item.content === 'LECTURE' ? (
                        <MdOndemandVideo
                          style={{ height: '100%', width: '100%' }}
                        />
                      ) : content_item.content === 'ASSIGNMENT' ? (
                        <MdAssignment
                          style={{ height: '100%', width: '100%' }}
                        />
                      ) : content_item.content === 'TEST' ? (
                        <MdFlag style={{ height: '100%', width: '100%' }} />
                      ) : null}
                    </ContentIconWrapper>
                    <ContentName>{content_item.contentName}</ContentName>
                    <TickIconWrapper>
                      {attemptedTopicsMap[content_item.id] ? (
                        <Checkbox
                          checked={true}
                          color='primary'
                          inputProps={{ 'aria-label': 'checked checkbox' }}
                        />
                      ) : (
                        <Checkbox
                          checked={false}
                          color='primary'
                          inputProps={{ 'aria-label': 'disabled checkbox' }}
                        />
                      )}
                    </TickIconWrapper>
                  </ContentWrapper>
                </ContentItemContainer>
              );
            })
          : null}
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  current_topic_content_id: selectCurrentCourseTopicId,
});

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseSideNavSubmenu);
