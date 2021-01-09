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
  selectLectureNotesLink,
  selectLectureYoutubeId,
} from '../../redux/lecture-page/lecture-page.selectors';

export class CourseVideo extends Component {
  componentDidMount() {
    console.log('Lecture Page has mounted');
  }
  componentWillUnmount() {
    console.log('Lecture Page Will unmount now');
  }

  render() {
    const { lecture_youtube_id } = this.props;
    console.log('Lecture Page has rendered');
    return (
      <>
        {/* <NavBar>NAVBAR</NavBar> */}
        <CourseVideoContainer>
          {/* <SideNav /> */}
          <CourseVideoPDFContainer>
            {/* <CourseVideoPlayer url={`https://www.youtube.com/watch?v=YqQx75OPRa0`}></CourseVideoPlayer> */}
            <CourseVideoPlayer
              url={`https://www.youtube.com/watch?v=${lecture_youtube_id}`}
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
  lecture_youtube_id: selectLectureYoutubeId,
  lecture_notes_link: selectLectureNotesLink,
});

export default connect(mapStateToProps)(CourseVideo);
