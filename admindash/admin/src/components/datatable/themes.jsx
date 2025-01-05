import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { themeColumns, themeRows } from "../../datatablesourceThemes";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";

const Themes = () => {
  const [data, setData] = useState(themeRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleStatusUpdate = (id, newStatus) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        const currentStatus = params.row.status;

        return (
          <div className="cellAction">
            <select
              value={currentStatus}
              onChange={(e) =>
                handleStatusUpdate(params.row.id, e.target.value)
              }
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Disapproved">Disapproved</option>
            </select>
            <button
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </button>
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
          <div className="datatableTitle">Themes Management</div>
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

export default Themes;
