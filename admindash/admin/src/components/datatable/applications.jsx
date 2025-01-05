import "./datatable.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { Link } from "react-router-dom";  // Import Link

const Applications = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      product: "Norhane",
      img: "https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes_23-2149436185.jpg?w=360",
      teacher: "Bouramoul",
      date: "December",
      theme: "Master themes",
      status: "Approved",
    },
    {
      id: 2,
      product: "Borhane",
      img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611704.jpg?semt=ais_hybrid",
      teacher: "Benali Mohemed",
      date: "December",
      theme: "Food App",
      status: "Declined",
    },
    // Other rows...
  ]);

  const handleStatusChange = (id, newStatus) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, status: newStatus } : row
      )
    );
  };

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="datatable">
          <div className="datatableTitle">Applications</div>
          <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">ID</TableCell>
                  <TableCell className="tableCell">Student</TableCell>
                  <TableCell className="tableCell">Teacher</TableCell>
                  <TableCell className="tableCell">Date</TableCell>
                  <TableCell className="tableCell">Theme</TableCell>
                  <TableCell className="tableCell">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="tableCell">{row.id}</TableCell>
                    <TableCell className="tableCell">
                      <div className="cellWrapper">
                        <img
                          src={row.img}
                          alt={`Avatar of ${row.product}`} 
                          className="image"
                        />
                        {row.product}
                      </div>
                    </TableCell>
                    <TableCell className="tableCell">{row.teacher}</TableCell>
                    <TableCell className="tableCell">{row.date}</TableCell>
                    <TableCell className="tableCell">{row.theme}</TableCell>
                    <TableCell className="tableCell">
                      <button
                        className={`statusButton ${row.status.toLowerCase()}`}
                        onClick={() =>
                          handleStatusChange(
                            row.id,
                            row.status === "Approved" ? "Pending" : "Approved"
                          )
                        }
                      >
                        {row.status}
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Link to="/projects">
            <button className="navigateButton">Go to Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Applications;
