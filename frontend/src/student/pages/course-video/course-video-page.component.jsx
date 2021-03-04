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
  // LectureNotesTitleWrapper,
} from './course-video-page.styles';
// import pdf from '../../assets/TopicNotes.pdf';
// import SideNav from '../../components/SideNav/SideNav';
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
      lecture_youtube_id,
      lecture_notes_link,
      lecture_drive_id,
    } = this.props;
    console.log('Lecture Page has rendered');
    console.log('Lecture Notes Link', lecture_notes_link);
    return (
      <>
        <CourseVideoContainer>
          <LectureVideoWrapper>
            <div
              style={{ width: '100%', height: '100%', position: ' relative' }}
            >
              <iframe
                // src='https://drive.google.com/file/d/0BxLbnVHP6GWpV2ZIZEc4SkNTOTQ/preview'
                src={`https://drive.google.com/file/d/${lecture_drive_id}/preview`}
                width='100%'
                height='100%'
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
          </LectureVideoWrapper>
          <Title>Lecture Notes</Title>
          <LectureNotesWrapper>
            {/* <iframe
              src={`https://drive.google.com/file/d/${lecture_notes_link}/preview`}
              width='100%'
              height='100%'
            ></iframe> */}
            <div
              style={{ width: '100%', height: '100%', position: ' relative' }}
            >
              <iframe
                // src='https://drive.google.com/file/d/0BxLbnVHP6GWpV2ZIZEc4SkNTOTQ/preview'
                src={`https://drive.google.com/file/d/${lecture_notes_link}/preview`}
                width='100%'
                height='100%'
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
