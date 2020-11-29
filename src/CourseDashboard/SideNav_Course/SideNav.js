import React from "react";
import { MdAssessment } from "react-icons/md";
import { BiHome } from "react-icons/bi";
// import { IoCheckmarkDoneSharp } from "react-icons/io";
import { BsCheckBox } from "react-icons/bs";

import {
  CourseSideNavContainer,
  CourseProfileWrapper,
  CourseImgWrap,
  CourseUserImage,
  CourseSideNavUserDetails,
  CourseUserName,
  CourseCafeName,
  CourseSideNavTitleContainer,
  CourseSideNavTitle,
  CourseTopicContainer,
  CourseTopicHeader,
  CourseTopic,
  CourseReturnBtn,
  CourseSideNavIconWrap,
} from "./SideNavElements";

import { User } from "./data";
import { Link } from "react-router-dom";

export const CourseSideNav = () => {
  return (
    <>
      <CourseSideNavContainer>
        <CourseProfileWrapper>
          <CourseImgWrap>
            <CourseUserImage src={User.img}></CourseUserImage>
          </CourseImgWrap>
          <CourseSideNavUserDetails>
            <CourseUserName>Aditya</CourseUserName>
            <CourseCafeName>Badarpur Cafe</CourseCafeName>
          </CourseSideNavUserDetails>
        </CourseProfileWrapper>
        <CourseSideNavTitleContainer>
          <CourseSideNavTitle>Course Dashboard</CourseSideNavTitle>
          <MdAssessment />
        </CourseSideNavTitleContainer>
        <CourseTopicContainer>
          <CourseTopicHeader>Topics</CourseTopicHeader>
          <CourseTopic>
          <Link to="/assignmentstart"> Topic 1</Link> <BsCheckBox />
          </CourseTopic>
          <CourseTopic>
          <Link to="/assignmentstart"> Topic 2</Link><BsCheckBox />
          </CourseTopic>
          <CourseTopic><Link to="/videopage"> Topic 3</Link></CourseTopic>
        </CourseTopicContainer>
        <Link to="/studentdashboard"><CourseReturnBtn>
          <CourseSideNavIconWrap>
            <BiHome />
          </CourseSideNavIconWrap>
          Back to Student Dashboard
        </CourseReturnBtn></Link>
      </CourseSideNavContainer>
    </>
  );
};
