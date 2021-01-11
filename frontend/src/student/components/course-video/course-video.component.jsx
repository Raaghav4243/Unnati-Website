import React from 'react';
import ReactPlayer from 'react-player';
import { PlayerWrapper } from './course-video.style';

function CourseVideoPlayer(props) {
  return (
    <PlayerWrapper>
      <ReactPlayer width='65vw' height='70vh' controls url={props.url} />
    </PlayerWrapper>
  );
}
export default CourseVideoPlayer;
