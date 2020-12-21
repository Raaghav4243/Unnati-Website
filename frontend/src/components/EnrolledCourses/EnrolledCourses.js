import React from 'react'
import { EnrolledCourseCard, EnrolledCourseDetails, EnrolledCourseImg, EnrolledCourseName, EnrolledCoursePercentage, EnrolledCoursePercentageInner, EnrolledCoursePercentageOuter, Resume, ResumeButton } from './Enrolled.Course.styles'
import MicrosoftLogo from '../Assets/MicrosoftLogo.png';

const Card = (props) => {
    const { course_percentage, course_name } = props;
    return(
        <>
        <EnrolledCourseCard>
            <EnrolledCourseDetails>
                <EnrolledCourseImg src={MicrosoftLogo}/>
                <EnrolledCourseName>{course_name}</EnrolledCourseName>
                </EnrolledCourseDetails>
                <EnrolledCoursePercentageOuter>
                    <EnrolledCoursePercentageInner />
                </EnrolledCoursePercentageOuter>
                <Resume>
                <EnrolledCoursePercentage course_percentage={course_percentage}>{course_percentage}%</EnrolledCoursePercentage>
                <ResumeButton>Resume</ResumeButton>
                </Resume>


            
        </EnrolledCourseCard>

        </>
    )
}

export default Card