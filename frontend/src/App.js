import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import AssignmentPage from './student/pages/assignment-page/assignment-page.component';
// import CourseOverview from './pages/course-overview/course-overview.component';
// import CourseVideo from './pages/course-video/course-video-page.component';
// import DemoPage from './pages/demo-page/demo-page.component';
// import HomePage from './pages/homepage/homepage.component';

// //import { SideNav } from './pages/Profile-page/profile-page.styled.components';
// import StudentDashboard from './pages/student-dashboard/StudentDashboard';
// import SideNav from './components/SideNav/SideNav';
// import CourseSideNav from './components/course-sidenav/course-sidenav.components';
// //import StudentCoursePage from './pages/demo-student-course-page/demo-student-course-page';
// import TestPage from './pages/test-page/test-page.component';
// import UserProfileCard from './components/SideNav/UserProfile/UserProfileCard';
// import FeesPage from './pages/FeesPage/App';
// // import StudentCourseTopicPage from './pages/student-course-topic-page/student-course-topic-page';
// import StudentPage from './pages/student-page/student-page.component';
// // import StudentCoursePage from './pages/demo-student-course-page/demo-student-course-page';

import HomePage from './student/pages/homepage/homepage.component';
import StudentPage from './student/pages/student-page/student-page.component';
import FeesPage from './student/pages/FeesPage/App';
// import SignUpForm from './student/pages/Signup-page/SignupForm';
// import SignUpForm from './student/components/signup/signup.component';
// import LogInForm from './student/components/login/LoginForm.page';
import Profile from './student/pages/Profile-page/profile-page.component';
import TestPage from './student/pages/test-page/test-page.component';
import cafeteacher from './teacher/pages/teacher-enrolledstudent/teacher-enrolledstudent';
import SignInAndSignUpPage from './student/pages/signup-and-signin-page/signup-and-signin-page.component';

import TeacherDashboardAssignPage from './teacher/pages/assign-courses/assign-courses';
import TeacherDashboardFeesPage from './teacher/pages/course-fees/course-fees-page';

import TeacherEnrolledStudents from './teacher/pages/teacher-enrolledstudent/teacher-enrolledstudent';
import TeacherApproval from './teacher/pages/teacher-approval/teacher-approval.page';
import TeacherTestCheck from './teacher/pages/teacher-testCheck/teacher-test-check.page';

import TeacherProfile from './teacher/pages/Profile-page/profile-page.component';
import TeacherChangePassword from './teacher/pages/change-password/change-password';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/student' component={StudentPage} />
        <Route path='/test' component={TestPage} />
        <Route path='/signup' component={SignInAndSignUpPage} />
        {/* <Route path='/login' component={LogInForm} /> */}
        <Route path='/teacher' component={cafeteacher} />
        {/* <Route path='/signup' component={SignUpForm} />
        <Route path='/login' component={LogInForm} /> */}
        <Route path='/teacher/enrolled' component={TeacherEnrolledStudents} />
        <Route path='/teacher/approve' component={TeacherApproval} />
        <Route path='/teacher/testcheck' component={TeacherTestCheck} />
        <Route path='/teacher/assign' component={TeacherDashboardAssignPage} />


        <Route
          path='/teacher/studentfees'
          component={TeacherDashboardFeesPage}
        />
        <Route path='/teacher/profile' component={TeacherProfile} />
        <Route
          path='/teacher/changepassword'
          component={TeacherChangePassword}
        />
      </Switch>
    </BrowserRouter>
  );
}

// import './App.css';

// function App() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path='/' exact component={HomePage} />
//         <Route path='/student' component={StudentPage} />
//         <Route path='/test' component={FeesPage} />
//         <Route path='/teacher' component={TeacherDashboard} />
//       </Switch>
//     </BrowserRouter>
//   );
// }

export default App;
