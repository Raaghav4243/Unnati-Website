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
            Topic 1 <BsCheckBox />
          </CourseTopic>
          <CourseTopic>
            Topic 2 <BsCheckBox />
          </CourseTopic>
          <CourseTopic>Topic 3</CourseTopic>
        </CourseTopicContainer>
        <CourseReturnBtn>
          <CourseSideNavIconWrap>
            <BiHome />
          </CourseSideNavIconWrap>
          Back to Student Dashboard
        </CourseReturnBtn>
      </CourseSideNavContainer>
    </>
  );
};
