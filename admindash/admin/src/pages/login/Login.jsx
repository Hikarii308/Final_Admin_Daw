import "./login.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Login = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="listlogin">
          <div className="container">
            <div className="profile-card">
              <div className="profile-pic">
                <img
                  src="https://pbs.twimg.com/media/FqGqu9naYAA6Knt?format=jpg&name=4096x4096"
                  alt="user avatar"
                />
              </div>
              <div className="row">
                <input
                  type="file"
                  id="image-upload"
                  style={{ display: "none" }}
                  accept="image/*"
                />
                <label htmlFor="image-upload">
                  <button className="edit-btn">Edit</button>
                </label>
              </div>
              <div className="profile-details">
                <div className="intro">
                  <h2>Norhane Benfetima</h2>
                  <h4>Admin </h4>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook" style={{ color: "white" }}></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" style={{ color: "var(--skyblue)" }}></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-dribbble" style={{ color: "var(--dark-pink)" }}></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" style={{ color: "var(--light-blue)" }}></i>
                    </a>
                  </div>
                </div>

                <div className="contact-info">
                  <div className="row">
                    <div className="icon">
                      <i className="fa fa-phone" style={{ color: "#fff" }}></i>
                    </div>
                    <div className="content">
                      <span>Phone</span>
                      <h5>+123 456 789</h5>
                    </div>
                    <button className="edit-btn">Edit</button>
                  </div>

                  <div className="row">
                    <div className="icon">
                      <i className="fa fa-envelope" style={{ color: "#fff" }}></i>
                    </div>
                    <div className="content">
                      <span>Email</span>
                      <h5>benfnorhane@gmail.com</h5>
                    </div>
                    <button className="edit-btn">Edit</button>
                  </div>

                  <div className="row">
                    <div className="icon">
                      <i className="fa fa-briefcase" style={{ color: "#fff" }}></i>
                    </div>
                    <div className="content">
                      <span>Position</span>
                      <h5>Admin and Teacher</h5>
                    </div>
                    <button className="edit-btn">Edit</button>
                  </div>
                </div>

                <button className="logout-btn">
                  <i className="fa fa-logout"></i> LOG OUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
