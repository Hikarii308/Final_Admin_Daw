export const themeColumns = [
  {
    field: "theme",
    headerName: "Project Name",
    width: 200,
  },
  {
    field: "projectStatus",
    headerName: "Project Status",
    width: 250,
    renderCell: (params) => {
      return (
        <div className={`status ${params.row.status}`}> 
          {params.row.status}
        </div>
      );
    },
  },
  {
    field: "teacher",
    headerName: "Teacher Name",
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
];

export const themeRows = [
  {
    id: 1,
    teacherName: "Mr. Bouramoul",
    img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611704.jpg?semt=ais_hybrid",
    theme: "Master Themes",
    status: "Pending",
  },
  {
    id: 2,
    teacherName: "Ms. Benali",
    img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611704.jpg?semt=ais_hybrid",
    theme: "AI Research",
    status: "Approved",
  },
  {
    id: 3,
    teacherName: "Dr. Norhane",
    img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611704.jpg?semt=ais_hybrid",
    theme: "Food App",
    status: "Disapproved",
  },
  {
    id: 4,
    teacherName: "Dr. Amari",
    img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611704.jpg?semt=ais_hybrid",
    theme: "E-Commerce",
    status: "Pending",
  },
  {
    id: 5,
    teacherName: "Ms. Bellab",
    img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611704.jpg?semt=ais_hybrid",
    theme: "Machine Learning",
    status: "Pending",
  },
];
