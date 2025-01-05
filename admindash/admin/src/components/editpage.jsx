import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./editProfile.scss";

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    name: "Norhane Benf",
    email: "norhanebenf@gmail.com",
    phone: "+21312345",
    address: "Constantine",
    dateCreated: "2022-01-15",
    major: "M2 STIC",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated profile data: ", profileData);
  };

  return (
    <div className="editProfile">
      <Sidebar />
      <div className="editProfileContainer">
        <Navbar />
        <div className="top">
          <h1>Edit Profile</h1>
        </div>
        <div className="bottom">
          <form onSubmit={handleSubmit}>
            <div className="formInput">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleChange}
              />
            </div>
            <div className="formInput">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
              />
            </div>
            <div className="formInput">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={profileData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="formInput">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={profileData.address}
                onChange={handleChange}
              />
            </div>
            <div className="formInput">
              <label>Date Created</label>
              <input
                type="text"
                name="dateCreated"
                value={profileData.dateCreated}
                onChange={handleChange}
                disabled
              />
            </div>
            <div className="formInput">
              <label>Major/Specialty</label>
              <input
                type="text"
                name="major"
                value={profileData.major}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
