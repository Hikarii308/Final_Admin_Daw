import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const List = () => {
  const rows = [
    {
      id: 1,
      groupName: "Team Alpha",
      members: [
        { name: "Norhane", email: "norhane@gmail.com", img: "https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes_23-2149436185.jpg?w=360" },
        { name: "Borhane", email: "borhane@gmail.com", img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611704.jpg?semt=ais_hybrid" },
      ],
      teacher: "Mr. Bouramoul",
      theme: "Master Themes",
      status: "Approved",
    },
    {
      id: 2,
      groupName: "Team Beta",
      members: [
        { name: "Wahd", email: "wahd@gmail.com", img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611704.jpg?semt=ais_hybrid" },
        { name: "Wahda", email: "wwahda@gmail.com", img: "https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes_23-2149436185.jpg?w=360" },
        { name: "Ana", email: "ana@gmail.com", img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611704.jpg?semt=ais_hybrid" },
      ],
      teacher: "Dr. Benali",
      theme: "AI Research",
      status: "Pending",
    },
    {
      id: 3,
      groupName: "Team Gamma",
      members: [
        { name: "Minhee", email: "minhee@gmail.com", img: "https://img.freepik.com/psd-gratuit/illustration-3d-du-personnage-avatar_23-2149436185.jpg?w=360" },
      ],
      teacher: "Ms. kda",
      theme: "Food App Development",
      status: "Declined",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="group table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Group ID</TableCell>
            <TableCell className="tableCell">Group Name</TableCell>
            <TableCell className="tableCell">Members</TableCell>
            <TableCell className="tableCell">Teacher</TableCell>
            <TableCell className="tableCell">Theme</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.groupName}</TableCell>
              <TableCell className="tableCell">
                {row.members.map((member, index) => (
                  <div key={index} className="memberWrapper">
                    <span>{member.name} ({member.email})</span>
                    <Link to={`teams`} style={{ textDecoration: "none" }}>
  <button className="editButton">View</button>
</Link>
                  </div>
                  
                ))}
              </TableCell>
              <TableCell className="tableCell">{row.teacher}</TableCell>
              <TableCell className="tableCell">{row.theme}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
