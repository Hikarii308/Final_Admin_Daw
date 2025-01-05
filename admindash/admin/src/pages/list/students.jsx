import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableStudent from "../../components/datatable/tablestudent"

const StudentList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatableStudent/>
      </div>
    </div>
  )
}

export default StudentList