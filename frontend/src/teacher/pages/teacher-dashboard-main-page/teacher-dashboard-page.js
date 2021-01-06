// import React from 'react';
// import CafeOverview from '../../../student/components/CafeDetails/CafeDetails';
// import ClassOverview from '../../../student/components/CafeDetails/classmate';
// import DiscoverCard from '../../../student/components/DiscoverCourses/DiscoverCourses';
// import {
//   HorizontalFlexBox,
//   VerticleFlexBox,
//   CafeDetail,
//   CafeDetail1,
//   CafeDetail2,
//   VerticleFlexBox2,
//   EnrolledCoursesWrapper,
// } from '../../../student/pages/student-dashboard/student.styles';

// //libraries used
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// //redux used
// import { selectUserCafeDetails } from '../../../student/redux/cafe/cafe.selectors';
// import { fetchAllCoursesStartAsync } from '../../../student/redux/courses/courses.actions';
// import { selectAllCourses } from '../../../student/redux/courses/courses.selectors'
// class TeacherDashboard extends React.Component {
//     componentDidMount() {
//       const { fetchAllCoursesStartAsync} = this.props;
//       // console.log('Component Mounted');
//       fetchAllCoursesStartAsync();
//     }

//     render() {
//       const { userCafe, allCourses } = this.props;
//       // console.log(allCourses);
//       // console.log(userCafe);
//       return (
//         <>
//           <HorizontalFlexBox>
//             <VerticleFlexBox>
//               <CafeDetail>Cafe Details</CafeDetail>
//               <CafeOverview
//                 cafe_name='hi'
//                 cafe_address={userCafe ? userCafe.location : null}
//                 faculty_incharge='hi'
//               />
//             </VerticleFlexBox>
//             <VerticleFlexBox>
//               <CafeDetail1>You Have</CafeDetail1>
//               <ClassOverview student_number='hihi' />
//             </VerticleFlexBox>
//           </HorizontalFlexBox>
//           <VerticleFlexBox2>
//             <CafeDetail2>Discover More Courses</CafeDetail2>
//             <EnrolledCoursesWrapper>
//               {allCourses ? (
//                 allCourses.map((course) => (
//                   <DiscoverCard
//                     course_name={course.subjectName}
//                     key={course._id}
//                   />
//                 ))
//               ) : (
//                 <h2>Loading...</h2>
//               )}
//             </EnrolledCoursesWrapper>
//           </VerticleFlexBox2>
//         </>
//       );
//     }
//   }
//   const mapStateToProps = createStructuredSelector({
//     userCafe: selectUserCafeDetails,
//     allCourses : selectAllCourses,
// });

//   const mapDispatchToProps = (dispatch) => ({
//     fetchAllCoursesStartAsync: () => dispatch(fetchAllCoursesStartAsync()),
//   });

//   export default connect(mapStateToProps, mapDispatchToProps)(TeacherDashboard);
