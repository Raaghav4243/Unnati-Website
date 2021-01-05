import React from 'react'
import './course-title.styles'
import { CourseDetails, CourseLogo, CourseName } from './course-title.styles'

const CourseTile = (props) => {
    return(
        <>
            <CourseDetails>
                <CourseName>{coursename}</CourseName>
                <CourseLogo />
            </CourseDetails>
        </>
    )
}

export default CourseTile