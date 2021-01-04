import React, { Component } from 'react';
import CourseVideoPlayer from '../../components/course-video/course-video.component';
import CourseNotesDownload from '../../components/course-video/course-notes.component';
import {
  CourseVideoPDFContainer,
  CourseVideoContainer,
  NavBar,
} from './course-video-page.styles';
import pdf from '../../assets/TopicNotes.pdf';
import SideNav from '../../components/SideNav/SideNav';

export class CourseVideo extends Component {
  componentDidMount() {
    console.log('Lecture Page has mounted');
  }
  componentWillUnmount() {
    console.log('Lecture Page Will unmount now');
  }

  render() {
    console.log('Lecture Page has rendered');
    return (
      <>
        <NavBar>NAVBAR</NavBar>
        <CourseVideoContainer>
          <SideNav />
          <CourseVideoPDFContainer>
            <CourseVideoPlayer url='https://www.youtube.com/watch?v=YqQx75OPRa0'></CourseVideoPlayer>
            <CourseNotesDownload download={pdf}></CourseNotesDownload>
          </CourseVideoPDFContainer>
        </CourseVideoContainer>
      </>
    );
  }
}

export default CourseVideo;
