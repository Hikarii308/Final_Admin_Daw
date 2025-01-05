import "./addteam.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";

const Team = () => {
  const [newTeam, setNewTeam] = useState({
    students: [],
    major: "",
    project: "",
  });
  const [numStudents, setNumStudents] = useState(0);

  const majorsList = ["Computer Science", "idk", "idk"];
  const projectsList = ["Project A", "Project B", "Project C"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTeam((prev) => ({ ...prev, [name]: value }));
  };

  const handleStudentChange = (index, e) => {
    const { name, value } = e.target;
    const updatedStudents = [...newTeam.students];
    updatedStudents[index] = { ...updatedStudents[index], [name]: value };
    setNewTeam((prev) => ({ ...prev, students: updatedStudents }));
  };

  const handleNumStudentsChange = (e) => {
    const num = parseInt(e.target.value, 10);
    setNumStudents(num);
    const updatedStudents = Array(num).fill({ id: "", name: "", major: "", project: "" });
    setNewTeam((prev) => ({ ...prev, students: updatedStudents }));
  };

  const handleAddTeam = () => {
    if (newTeam.students.length && newTeam.major && newTeam.project) {
      alert("Team added successfully!");
      //add logic hna.
      setNewTeam({ students: [], major: "", project: "" });
      setNumStudents(0);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="addTeam">
      <Sidebar />
      <div className="addTeamContainer">
        <Navbar />
        <div className="formContainer">
          <h1>Add New Team</h1>

          <label>
            Select Number of Students:
            <input
              type="number"
              value={numStudents}
              min="1"
              max="5"
              onChange={handleNumStudentsChange}
            />
          </label>

          {newTeam.students.map((student, index) => (
            <div key={index} className="studentFields">
              <h3>Student {index + 1}</h3>
              <label>
                Student ID:
                <input
                  type="text"
                  name="id"
                  value={student.id}
                  onChange={(e) => handleStudentChange(index, e)}
                />
              </label>
              <label>
                Student Name:
                <input
                  type="text"
                  name="name"
                  value={student.name}
                  onChange={(e) => handleStudentChange(index, e)}
                />
              </label>
            </div>
          ))}

          <label>
            Select Major for Team:
            <select
              name="major"
              value={newTeam.major}
              onChange={handleInputChange}
            >
              <option value="">--Select Major--</option>
              {majorsList.map((major, index) => (
                <option key={index} value={major}>
                  {major}
                </option>
              ))}
            </select>
          </label>

          <label>
            Select Project for Team:
            <select
              name="project"
              value={newTeam.project}
              onChange={handleInputChange}
            >
              <option value="">--Select Project--</option>
              {projectsList.map((project, index) => (
                <option key={index} value={project}>
                  {project}
                </option>
              ))}
            </select>
          </label>

          <div className="formActions">
            <button onClick={handleAddTeam}>Add Team</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
