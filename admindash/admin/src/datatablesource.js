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
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
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
    status: "active",
    email: "norhanebenf@gmail.com",

  },
  {
    id: 2,
    username: "norhane",
    img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611740.jpg?semt=ais_hybrid",
    status: "active",
    email: "norhanebenf@gmail.com",
  
  },
  {
    id: 3,
    username: "norhane",
    img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611740.jpg?semt=ais_hybrid",
    status: "active",
    email: "norhanebenf@gmail.com",
   
  },
  {
    id: 4,
    username: "norhane",
    img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611740.jpg?semt=ais_hybrid",
    status: "active",
    email: "norhanebenf@gmail.com",
   
  },
  {
    id: 5,
    username: "norhane",
    img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611740.jpg?semt=ais_hybrid",
    status: "active",
    email: "norhanebenf@gmail.com",
   
  },
  {
    id: 6,
    username: "norhane",
    img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611740.jpg?semt=ais_hybrid",
    status: "active",
    email: "norhanebenf@gmail.com",
  
  },
  {
    id: 7,
    username: "norhane",
    img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611740.jpg?semt=ais_hybrid",
    status: "active",
    email: "norhanebenf@gmail.com",

  },
  {
    id: 8,
    username: "norhane",
    img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611740.jpg?semt=ais_hybrid",
    status: "active",
    email: "norhanebenf@gmail.com",

  },
  {
    id: 9,
    username: "norhane",
    img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611740.jpg?semt=ais_hybrid",
    status: "active",
    email: "norhanebenf@gmail.com",
  
  },
  {
    id: 10,
    username: "norhane",
    img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611740.jpg?semt=ais_hybrid",
    status: "active",
    email: "norhanebenf@gmail.com",
 
  },
];
