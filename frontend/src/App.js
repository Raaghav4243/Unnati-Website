import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './student/pages/homepage/homepage.component';
import StudentPage from './student/pages/student-page/student-page.component';
import FeesPage from './student/pages/FeesPage/App';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/student' component={StudentPage} />
        <Route path='/test' component={FeesPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
