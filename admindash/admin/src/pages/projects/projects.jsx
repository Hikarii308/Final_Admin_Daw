import React, { useState } from "react";
import "./projects.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      name: "Project A",
      description: "Description of Project A",
      teacher: "Teacher X",
      maxStudents: 3,
      deadline: "2025-01-15",
      members: ["Student 1", "Student 2"],
      status: "Open",
      major: "Computer Science",
    },
    {
      name: "Project B",
      description: "Description of Project B",
      teacher: "Teacher Y",
      maxStudents: 5,
      deadline: "2025-02-01",
      members: ["Student 3", "Student 4", "Student 5"],
      status: "Assigned",
      major: "mena melhih",
    },
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    teacher: "",
    major: "",
    pdf: null,
  });

  const teachersList = ["Teacher X", "Teacher Y", "Teacher Z"];
  const majorsList = ["Computer Science", "mena", "mena melhih"];

  const handleProjectChange = (e) => {
    const projectName = e.target.value;
    const project = projects.find((p) => p.name === projectName);
    setSelectedProject(project);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setNewProject((prev) => ({ ...prev, pdf: e.target.files[0] }));
  };

  const handleAddProject = () => {
    if (newProject.name && newProject.teacher && newProject.major) {
      const newProjectData = {
        ...newProject,
        maxStudents: 0,
        deadline: "",
        members: [],
        status: "Open",
      };
      setProjects([...projects, newProjectData]);
      setNewProject({ name: "", description: "", teacher: "", major: "", pdf: null });
      setShowPopup(false);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handleProjectSettingsChange = (e) => {
    const { name, value } = e.target;
    setSelectedProject((prev) => ({ ...prev, [name]: value }));
    setProjects((prev) =>
      prev.map((project) =>
        project.name === selectedProject.name ? { ...project, [name]: value } : project
      )
    );
  };

  const handleAddStudent = (studentName) => {
    if (selectedProject && studentName) {
      const updatedMembers = [...selectedProject.members, studentName];
      setSelectedProject((prev) => ({ ...prev, members: updatedMembers }));
      setProjects((prev) =>
        prev.map((project) =>
          project.name === selectedProject.name
            ? { ...project, members: updatedMembers }
            : project
        )
      );
    }
  };

  const handleRemoveStudent = (studentName) => {
    if (selectedProject) {
      const updatedMembers = selectedProject.members.filter((member) => member !== studentName);
      setSelectedProject((prev) => ({ ...prev, members: updatedMembers }));
      setProjects((prev) =>
        prev.map((project) =>
          project.name === selectedProject.name
            ? { ...project, members: updatedMembers }
            : project
        )
      );
    }
  };

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="whole">
          <div className="projectManagement">
            <h1>Manage Projects</h1>
           {/* <button className="addProjectButton" onClick={() => setShowPopup(true)}>
              Add Project
            </button>
*/}
            <div className="projectSelector">
              <label htmlFor="projectSelect">Select Project:</label>
              <select id="projectSelect" onChange={handleProjectChange}>
                <option value="">--Select a Project--</option>
                {projects.map((project, index) => (
                  <option key={index} value={project.name}>
                    {project.name}
                  </option>
                ))}
              </select>
            </div>

            {selectedProject && (
              <div className="projectDetails">
                <h2>Project Details</h2>
                <p><strong>Name:</strong> {selectedProject.name}</p>
                <p><strong>Description:</strong> {selectedProject.description}</p>
                <p><strong>Teacher:</strong> {selectedProject.teacher}</p>
                <p><strong>Major:</strong> {selectedProject.major || "N/A"}</p>
                <p><strong>Max Students:</strong> {selectedProject.maxStudents}</p>
                <p><strong>Deadline:</strong> {selectedProject.deadline || "No deadline set"}</p>
                <p><strong>Status:</strong> {selectedProject.status}</p>
                <p><strong>Team:</strong> {selectedProject.members.join(", ") || "No members yet"}</p>

                <div className="settings">
                  <label>
                    Max Students:
                    <input
                      type="number"
                      name="maxStudents"
                      value={selectedProject.maxStudents}
                      onChange={handleProjectSettingsChange}
                    />
                  </label>
                  <label>
                    Deadline:
                    <input
                      type="date"
                      name="deadline"
                      value={selectedProject.deadline || ""}
                      onChange={handleProjectSettingsChange}
                    />
                  </label>
                </div>

                <div className="teamManagement">
                  <h3>Manage Team</h3>
                  <input
                    type="text"
                    placeholder="Add student name"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleAddStudent(e.target.value);
                    }}
                  />
                  <ul>
                    {selectedProject.members.map((member, index) => (
                      <li key={index}>
                        {member}
                        <button onClick={() => handleRemoveStudent(member)}>Remove</button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="projectsList">
              <h2>Projects Overview</h2>
              {projects.map((project, index) => (
                <div key={index} className="projectItem">
                  <h3>{project.name}</h3>
                  <p><strong>Teacher:</strong> {project.teacher}</p>
                  <p><strong>Status:</strong> {project.status}</p>
                  <p><strong>Max Students:</strong> {project.maxStudents}</p>
                  <p><strong>Deadline:</strong> {project.deadline || "No deadline set"}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {showPopup && (
          <div className="popup">
            <div className="popupContent">
              <h2>Add New Project</h2>
              <label>
                Project Name:
                <input
                  type="text"
                  name="name"
                  value={newProject.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  name="description"
                  value={newProject.description}
                  onChange={handleInputChange}
                />
              </label>
              <div className="selecting">
              <label>
                Teacher:
                <select
                  name="teacher"
                  value={newProject.teacher}
                  onChange={handleInputChange}
                  required
                ><div className="teacher">
                  <option value="">--Select Teacher--</option>
                  </div>
                  {teachersList.map((teacher, index) => (
                    <option key={index} value={teacher}>
                      {teacher}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Major:
                <select
                  name="major"
                  value={newProject.major}
                  onChange={handleInputChange}
                  required
                ><div className="teacher">
                  <option value="">--Select Major--</option>
                  </div>
                  {majorsList.map((major, index) => (
                    <option key={index} value={major}>
                      {major}
                    </option>
                  ))}
                </select>
              </label>
                 
</div>
              <label>
                Upload PDF:
                <div className="pdff">

                <input className="pdf"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                />
                </div>
              </label>
              <div className="popupActions">
                <button onClick={handleAddProject}>Add</button>
                <button onClick={() => setShowPopup(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
