export const themeColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "teacher",
    headerName: "Teacher",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.teacherName}
        </div>
      );
    },
  },
  {
    field: "theme",
    headerName: "Theme Name",
    width: 200,
  },
  {
    field: "proposedTheme",
    headerName: "Proposed Status",
    width: 250,
    renderCell: (params) => {
      return (
        <div>{params.row.theme ? "Proposed" : "Not Proposed"}</div>
      );
    },
  },
  {
    field: "proposedCount",
    headerName: "Proposed Count",
    width: 200,
  },
];

export const themeRows = [
  {
    id: 1,
    teacherName: "Mr. Bouramoul",
    img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611704.jpg?semt=ais_hybrid",
    theme: "Master Themes",
    proposedCount: 2,
    maxProjects: 3,
  },
  {
    id: 2,
    teacherName: "Ms. Benali",
    img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611704.jpg?semt=ais_hybrid",
    theme: "",
    proposedCount: 0,
    maxProjects: 3,
  },
  {
    id: 3,
    teacherName: "Dr. Norhane",
    img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611704.jpg?semt=ais_hybrid",
    theme: "Food App Development",
    proposedCount: 3,
    maxProjects: 3,
  },
];
