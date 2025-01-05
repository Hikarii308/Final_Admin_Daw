const MAX_SUBMISSIONS = 3; // Define the maximum submissions globally

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "currentSubmissions",
    headerName: "Current Submissions",
    width: 160,
  },
  {
    field: "maxSubmissions",
    headerName: "Max Submissions",
    width: 160,
    valueGetter: () => MAX_SUBMISSIONS, // Same max submissions for all
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      const hasReachedLimit = params.row.currentSubmissions >= MAX_SUBMISSIONS;
      return (
        <div
          className={`cellWithStatus ${
            hasReachedLimit ? "limitReached" : "withinLimit"
          }`}
        >
          {hasReachedLimit ? "Limit Reached" : "Within Limit"}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "norhane",
    img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611740.jpg?semt=ais_hybrid",
    email: "norhanebenf@gmail.com",
    currentSubmissions: 2,
  },
  {
    id: 2,
    username: "norhane",
    img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611740.jpg?semt=ais_hybrid",
    email: "norhanebenf@gmail.com",
    currentSubmissions: 3,
  },
  {
    id: 3,
    username: "norhane",
    img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611740.jpg?semt=ais_hybrid",
    email: "norhanebenf@gmail.com",
    currentSubmissions: 1,
  },
  {
    id: 4,
    username: "norhane",
    img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611740.jpg?semt=ais_hybrid",
    email: "norhanebenf@gmail.com",
    currentSubmissions: 3,
  },
  {
    id: 5,
    username: "norhane",
    img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611740.jpg?semt=ais_hybrid",
    email: "norhanebenf@gmail.com",
    currentSubmissions: 0,
  },
 
];
