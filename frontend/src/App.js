import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import AssignmentPage from './pages/assignment-page/assignment-page.component';
import CourseOverview from './pages/course-overview/course-overview.component';
import CourseVideo from './pages/course-video/course-video-page.component';
import DemoPage from './pages/demo-page/demo-page.component';
import HomePage from './pages/homepage/homepage.component';
import Profile from './pages/Profile-page/profile-page.component';
//import { SideNav } from './pages/Profile-page/profile-page.styled.components';
import StudentDashboard from './pages/student-dashboard/StudentDashboard';
import SideNav from './components/SideNav/SideNav';
import CourseSideNav from './components/course-sidenav/course-sidenav.components';
import StudentCoursePage from './pages/demo-student-course-page/demo-student-course-page';
import TestPage from './pages/test-page/test-page.component';
import UserProfileCard from './components/SideNav/UserProfile/UserProfileCard';
// import StudentCoursePage from './pages/demo-student-course-page/demo-student-course-page';

function App({ user_id, course_id }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/student' exact component={StudentDashboard} />
        <Route
          path='/student/course'
          exact
          render={() => (
            <StudentCoursePage course_id='5fa6bd6f4afbc52538b49afb' />
          )}
        />
        <Route path='/test' component={TestPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
