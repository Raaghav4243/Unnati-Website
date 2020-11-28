import React from 'react'
import { MyCoursesCard1 } from './data'
import MyCourseCard from './MyCoursesCard'
import { MyCourses, MyCoursesDiv, MyCoursesHeading } from './MyCoursesElements'

const MyCoursesElement = () => {
    return (
        <>
            <MyCourses>
                <MyCoursesHeading>My Courses</MyCoursesHeading>
                <MyCoursesDiv>
                    <MyCourseCard {...MyCoursesCard1} />
                    <MyCourseCard {...MyCoursesCard1} />
                    <MyCourseCard {...MyCoursesCard1} />
                </MyCoursesDiv>
            </MyCourses>
        </>
    )
}

export default MyCoursesElement;