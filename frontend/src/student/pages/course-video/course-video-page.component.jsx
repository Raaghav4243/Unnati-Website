import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUserId } from '../../redux/user/user.selectors';
import {
  selectLectureDriveId,
  selectLectureNotesLink,
} from '../../redux/lecture-page/lecture-page.selectors';
import { fetchLectureStart } from '../../redux/lecture-page/lecture-page.actions';

import {
  CourseVideoContainer,
  Title,
  // LectureTitleWrapper,
  LectureVideoWrapper,
  LectureNotesWrapper,
} from './course-video-page.styles';
import {
  selectCurrentCourseId,
  selectCurrentCourseTopicId,
  selectCurrentCourseTopicName,
} from '../../redux/student/student.selectors';

export class CourseVideo extends Component {
  componentWillUnmount() {
    console.log('Lecture Page Will unmount now');
  }

  render() {
    const {
      lecture_notes_link,
      lecture_drive_id,
      current_lecture_name,
    } = this.props;
    return (
      <>
        <CourseVideoContainer>
          <LectureVideoWrapper>
            <div
              style={{ width: '100%', height: '100%', position: ' relative' }}
            >
              <iframe
                src={`https://drive.google.com/file/d/${lecture_drive_id}/preview`}
                width='100%'
                height='100%'
                title={`${current_lecture_name}-video`}
              ></iframe>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  position: 'absolute',
                  background: 'red',
                  opacity: 0,
                  right: '0px',
                  top: '0px',
                }}
              >
                {' '}
              </div>
            </div>
          </LectureVideoWrapper>
          <Title>Lecture Notes</Title>
          <LectureNotesWrapper>
            <div
              style={{ width: '100%', height: '100%', position: ' relative' }}
            >
              <iframe
                src={`https://drive.google.com/file/d/${lecture_notes_link}/preview`}
                width='100%'
                height='100%'
                title={`${current_lecture_name}-notes`}

                // frameBorder='0'
                // scrolling='no'
                // seamless=''
              ></iframe>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  position: 'absolute',
                  background: 'red',
                  opacity: 0,
                  right: '0px',
                  top: '0px',
                }}
              >
                {' '}
              </div>
            </div>
          </LectureNotesWrapper>
        </CourseVideoContainer>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  current_lecture_id: selectCurrentCourseTopicId,
  current_lecture_name: selectCurrentCourseTopicName,
  current_user_id: selectCurrentUserId,
  current_course_id: selectCurrentCourseId,
  lecture_drive_id: selectLectureDriveId,
  lecture_notes_link: selectLectureNotesLink,
});

const mapDispatchToProps = (dispatch) => ({
  fetchLectureStart: (user_id, course_id, lecture_id) =>
    dispatch(fetchLectureStart(user_id, course_id, lecture_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseVideo);
