import React from 'react'
import {Box, Boxes, ConfirmChanges, MoreCourses, EnrolledCourseDetails, EnrolledCourseImg, EnrolledCourseName} from './DiscoverCard.styles'
import MicrosoftLogo from '../Assets/MicrosoftLogo.png';
function DiscoverCard(props)
{  const { course_name } = props;
return(
  <MoreCourses>
    <Boxes>
      <Box>
      <EnrolledCourseDetails>
        <EnrolledCourseImg src={MicrosoftLogo}/>
        <EnrolledCourseName>{course_name}</EnrolledCourseName>
        </EnrolledCourseDetails>
        <ConfirmChanges>Explore More</ConfirmChanges>
      </Box>
      
    </Boxes>
    </MoreCourses>
   )  
}

export default DiscoverCard;

