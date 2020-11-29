import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { Navbar } from "../HomePage/components/Navbar_New";
import DueAssignmentsElement from "./Dashboard/DueAssignments";
import MyCoursesElement from "./Dashboard/MyCourses";
import Notifications from "./Dashboard/Notifications";
import UpcomingTestsElement from "./Dashboard/UpcomingTests";
import { DashboardHeading } from "./SideNav/components/DashboardOptions/DashboardElements";
import SideNav from "./SideNav/SideNav";
import { ProgressBar } from "./ProgressBar/ProgressBar";
import NextLogo from "../Icons/next.svg";
import { CourseSideNav } from "./SideNav_Course/SideNav";

import {
  Page,
  SideNavTemp,
  Dashboard,
  DashboardPageHeadingContainer,
  CourseDashboardHeading,
  DashboardElements,
  DashboardLeft,
  CourseProgressWrapper,
  ProgressBarContainer,
  ProgressBarWrapper,
  ProgressBarTitle,
  DoubtWrapper,
  DoubtContainer,
  DashboardRight,
  UpNextContainer,
  UpNextLogo,
  ButtonWrapper,
  ButtonDetails,
  TopicWrapper,
  TopicType,
  TopicDetails,
  PerformanceContainer,
  PerformanceBoxHeading,
  PerformanceTitle,
  PerformanceProgressWrapper,
  FeatureProgressBarContainer,
  FeatureProgressBarWrapper,
  FeatureProgressBarTitle,
  CourseGradeContainer,
  CourseGradeTitle,
  GradeBox,
  Grade,
} from "./CourseDashboardComponents";

import {
  CourseDetails,
  ProgressBarCourse,
  UpNextDetails,
  ProgressBarContent,
  ProgressBarAssignments,
  ProgressBarTest,
} from "./data";

const percentage = 75;

const CourseDashboard = () => {
  return (
    <>
      <Navbar />
      <Page>
        <CourseSideNav />
        <Dashboard>
          <DashboardPageHeadingContainer>
            <CourseDashboardHeading>MS EXCEL</CourseDashboardHeading>
          </DashboardPageHeadingContainer>
          <DashboardElements>
            <DashboardLeft>
              <CourseProgressWrapper>
                <ProgressBarContainer>
                  <ProgressBarWrapper>
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      strokeWidth={5}
                    />
                  </ProgressBarWrapper>
                  <ProgressBarTitle>Course Completed</ProgressBarTitle>
                </ProgressBarContainer>
              </CourseProgressWrapper>
              <DoubtWrapper>
                <DoubtContainer>Have a doubt? Ask an Expert!</DoubtContainer>
              </DoubtWrapper>
            </DashboardLeft>
            <DashboardRight>
              <UpNextContainer>
                <ButtonWrapper>
                  <ButtonDetails>Up Next</ButtonDetails>
                  <UpNextLogo src={NextLogo}></UpNextLogo>
                </ButtonWrapper>
                <TopicWrapper>
                  <TopicType>Assignment</TopicType>
                  <TopicDetails>Name of topic lorem ipsum</TopicDetails>
                </TopicWrapper>
              </UpNextContainer>
              <PerformanceContainer>
                <PerformanceBoxHeading>
                  <PerformanceTitle>performance metrics</PerformanceTitle>
                </PerformanceBoxHeading>
                <PerformanceProgressWrapper>
                  <FeatureProgressBarContainer>
                    <FeatureProgressBarWrapper>
                      {" "}
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={5}
                      />
                    </FeatureProgressBarWrapper>
                    <FeatureProgressBarTitle>
                      Content Completed
                    </FeatureProgressBarTitle>
                  </FeatureProgressBarContainer>
                  <FeatureProgressBarContainer>
                    <FeatureProgressBarWrapper>
                      {" "}
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={5}
                      />
                    </FeatureProgressBarWrapper>
                    <FeatureProgressBarTitle>
                      Assignments
                    </FeatureProgressBarTitle>
                  </FeatureProgressBarContainer>
                  <FeatureProgressBarContainer>
                    <FeatureProgressBarWrapper>
                      {" "}
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={5}
                      />
                    </FeatureProgressBarWrapper>
                    <FeatureProgressBarTitle>Tests</FeatureProgressBarTitle>
                  </FeatureProgressBarContainer>
                </PerformanceProgressWrapper>
                <CourseGradeContainer>
                  <CourseGradeTitle>Course Grade :</CourseGradeTitle>
                  <GradeBox>A+</GradeBox>
                </CourseGradeContainer>
              </PerformanceContainer>
            </DashboardRight>
          </DashboardElements>
        </Dashboard>
      </Page>
    </>
  );
};

export default CourseDashboard;
