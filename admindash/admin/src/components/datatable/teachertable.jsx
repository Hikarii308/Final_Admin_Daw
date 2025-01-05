import "./datatable.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import { themeColumns, themeRows } from "../../datatablesourceTeacher";
import { useState } from "react";
import { Link } from "react-router-dom";

const TeacherTable = () => {
  const [data, setData] = useState(themeRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        const isDisabled = params.row.proposedCount >= params.row.maxProjects;

        return (
          <div className="cellAction">
            
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="datatable">
          <div className="datatableTitle">Teacher's List</div>
          <DataGrid
            className="datagrid"
            rows={data}
            columns={themeColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default TeacherTable;
