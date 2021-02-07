import { Route, Switch, BrowserRouter } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import StudentForm from './Components/StudentForm';
import StaffForm from './Components/StaffForm';
import Page from './Components/Page';
import StudentsTable from './Components/StudentsTable';
import TeachersTable from './Components/TeachersTable';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/student-form" component={StudentForm} />
          <Route exact path="/staff-form" component={StaffForm} />
          <Route exact path="/page" component={Page} />
          <Route exact path="/students-table" component={StudentsTable} />
          <Route exact path="/teacher-table" component={TeachersTable} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
