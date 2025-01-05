import { useState } from "react";
import "./datatable.scss";
import "./teams.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatableteams";

const Team = () => {
  const [data, setData] = useState(userRows);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [currentTeam, setCurrentTeam] = useState(null);

  const [showAddFields, setShowAddFields] = useState(false);
  const [newTeam, setNewTeam] = useState({
    projectName: "",
    members: [],
    maxMembers: 0,
    approvalStatus: "Pending",
  });

  const handleAddNewGroup = () => {
    setShowAddFields(true);
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewTeam((prev) => ({
      ...prev,
      [name]: name === "members" ? value.split(",").map((m) => m.trim()) : value,
    }));
  };

  const handleSaveNewGroup = () => {
    const newGroup = {
      ...newTeam,
      id: data.length + 1, // Generate a new ID
    };
    setData([...data, newGroup]);
    setShowAddFields(false);
    setNewTeam({
      projectName: "",
      members: [],
      maxMembers: 0,
      approvalStatus: "Pending",
    });
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleEdit = (team) => {
    setCurrentTeam(team);
    setShowEditPopup(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentTeam((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveEdit = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === currentTeam.id ? currentTeam : item
      )
    );
    setShowEditPopup(false);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="editButton"
              onClick={() => handleEdit(params.row)}
            >
              Edit
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
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
          <div className="datatableTitle">Teams List</div>
          <DataGrid
            className="datagrid"
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </div>

       
        {!showAddFields && (
          <div className="addButtonContainer">
            <button className="addGroupButton" onClick={handleAddNewGroup}>
              
              Add New Group
            </button>
          </div>
        )}

        {/* Input Fields for Adding New Group */}
        {showAddFields && (
          <div className="addFieldsContainer">
            <h2>Add New Group</h2>
            <label>
              Project Name:
              <input
                type="text"
                name="projectName"
                value={newTeam.projectName}
                onChange={handleAddChange}
                required
              />
            </label>

            <label>
              Members (comma-separated):
              <input
                type="text"
                name="members"
                value={newTeam.members.join(", ")}
                onChange={handleAddChange}
                required
              />
            </label>

            <label>
              Max Members:
              <input
                type="number"
                name="maxMembers"
                value={newTeam.maxMembers}
                onChange={handleAddChange}
                required
              />
            </label>

            <button className="saveGroupButton" onClick={handleSaveNewGroup}>
              Add
            </button>
          </div>
        )}

        {/* Edit Popup */}
        {showEditPopup && (
          <div className="popup">
            <div className="popupContent">
              <h2>Edit Team</h2>

              <label>
                Project Name:
                <input
                  type="text"
                  name="projectName"
                  value={currentTeam?.projectName || ""}
                  onChange={handleEditChange}
                  required
                />
              </label>

              <label>
                Members (comma-separated):
                <input
                  type="text"
                  name="members"
                  value={currentTeam?.members.join(", ") || ""}
                  onChange={(e) =>
                    setCurrentTeam((prev) => ({
                      ...prev,
                      members: e.target.value.split(",").map((m) => m.trim()),
                    }))
                  }
                  required
                />
              </label>

              <label>
                Max Members:
                <input
                  type="number"
                  name="maxMembers"
                  value={currentTeam?.maxMembers || ""}
                  onChange={handleEditChange}
                  required
                />
              </label>

              <label>
                Approval Status:
                <select
                  name="approvalStatus"
                  value={currentTeam?.approvalStatus || ""}
                  onChange={handleEditChange}
                  required
                >
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </label>

              <div className="popupActions">
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={() => setShowEditPopup(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
