export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    hide: true,
  },
  {
    field: "projectName",
    headerName: "Project Name",
    width: 200,
  },
  {
    field: "members",
    headerName: "Team Members",
    width: 300,
    renderCell: (params) => {
      const members = params.row.members || [];
      return (
        <div>
          {members.length > 0 ? members.join(", ") : "No Members"}
        </div>
      );
    },
  },
  {
    field: "memberIDs",
    headerName: "Member IDs",
    width: 200,
    hide: true, // This ensures the column is not visible on the page
    renderCell: (params) => {
      const memberIDs = params.row.memberIDs || [];
      return <div>{memberIDs.join(", ")}</div>;
    },
  },
  {
    field: "numMembers",
    headerName: "Number of Members",
    width: 160,
    renderCell: (params) => {
      return <div>{params.row.members?.length || 0}</div>;
    },
  },
  {
    field: "maxMembers",
    headerName: "Max Members",
    width: 160,
    renderCell: (params) => {
      return <div>{params.row.maxMembers || "Not Set"}</div>;
    },
  },
  {
    field: "approvalStatus",
    headerName: "Approval Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.approvalStatus || "unknown"}`}>
          {params.row.approvalStatus || "Unknown"}
        </div>
      );
    },
  },
];


export const userRows = [
  {
    id: 1,
    projectName: "AI Research",
    members: ["Norhane", "User2"],
    memberIDs: [101, 102], // Add corresponding member IDs
    maxMembers: 5,
    approvalStatus: "Pending",
  },
  {
    id: 2,
    projectName: "Food App Development",
    members: ["Dr. Norhane", "User2", "User3"],
    memberIDs: [201, 202, 203], // Add corresponding member IDs
    maxMembers: 3,
    approvalStatus: "Approved",
  },
  {
    id: 3,
    projectName: "Web App Development",
    members: [],
    memberIDs: [], // Empty array for no members
    maxMembers: 6,
    approvalStatus: "Pending",
  },
];
