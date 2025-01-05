import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Projects from "./pages/projects/projects";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import Teams from "./components/datatable/tableteams";
import Applications from "./components/datatable/applications";
import Themes from "./components/datatable/themes";
import StudentList from "./pages/list/students";
import TeacherDatatable from "./components/datatable/teachertable"; 
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>

          
          <Route path="students" element={<StudentList />} />
          <Route path="teams" element={<Teams />} />
          <Route path="applications" element={<Applications />} />
          <Route path="themes" element={<Themes />} />
          <Route path="teacher" element={<TeacherDatatable />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
