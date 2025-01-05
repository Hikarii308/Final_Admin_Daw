import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
    <Sidebar />
    <div className="singleContainer">
      <Navbar />
      <div className="top">
        <div className="right">
          <h1 className="title">Information</h1>
          <div className="item">
            <img
              src="https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611740.jpg?semt=ais_hybrid"
              alt="Avatar"
              className="itemImg"
            />
            <div className="details">
              <h1 className="itemTitle">Norhane Benf</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">norhanebenf@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+21312345</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">Constantine</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Date Created:</span>
                <span className="itemValue">2022-01-15</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Major/Specialty:</span>
                <span className="itemValue">M2 STIC</span>
              </div>
             
              
             
            </div>
          </div>
        </div>
        <div className="left">
          <Chart aspect={3 / 1} title="User Projects (Last 4 Months)" />
        </div>
      </div>
      {/*<div className="bottom">
        <h1 className="title">Last Update</h1>
        <List />
      </div>*/}
    </div>
  </div>
  
  );
};

export default Single;
