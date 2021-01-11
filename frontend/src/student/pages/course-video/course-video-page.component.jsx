import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CourseVideoPlayer from '../../components/course-video/course-video.component';
import CourseNotesDownload from '../../components/course-video/course-notes.component';
import {
  CourseVideoPDFContainer,
  CourseVideoContainer,
  NavBar,
} from './course-video-page.styles';
import pdf from '../../assets/TopicNotes.pdf';
import SideNav from '../../components/SideNav/SideNav';
import {
  selectCurrentCourseId,
  selectCurrentCourseTopicId,
  selectCurrentCourseTopicName,
} from '../../redux/student/student.selectors';
import { selectCurrentUserId } from '../../redux/user/user.selectors';
import {
  selectLectureDriveId,
  selectLectureNotesLink,
} from '../../redux/lecture-page/lecture-page.selectors';
import { fetchLectureStart } from '../../redux/lecture-page/lecture-page.actions';

export class CourseVideo extends Component {
  componentWillUnmount() {
    console.log('Lecture Page Will unmount now');
  }

  render() {
    const { lecture_youtube_id, lecture_notes_link } = this.props;
    console.log('Lecture Page has rendered');
    console.log('Lecture Notes Link', lecture_notes_link);
    return (
      <>
        {/* <NavBar>NAVBAR</NavBar> */}
        <CourseVideoContainer>
          {/* <SideNav /> */}
          <CourseVideoPDFContainer>
            {/* <CourseVideoPlayer url={`https://www.youtube.com/watch?v=YqQx75OPRa0`}></CourseVideoPlayer> */}
            <CourseVideoPlayer
              // url={`https://www.youtube.com/watch?v=${lecture_youtube_id}`}
              url={lecture_notes_link}
            ></CourseVideoPlayer>
            <CourseNotesDownload download={pdf}></CourseNotesDownload>
          </CourseVideoPDFContainer>
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
