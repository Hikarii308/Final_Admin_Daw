import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TeacherDatatable from "../../components/datatable/teachertable";

const TeacherList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <TeacherDatatable />
      </div>
    </div>
  );
};

export default TeacherList;
