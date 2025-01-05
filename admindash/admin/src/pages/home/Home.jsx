import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="req" />
          <Widget type="projects" />
          <Widget type="themes" />
        </div>
        <div className="charts">
          
          <Chart title="Projects Progress in last 4 months" aspect={2 / 1} />
          <Featured />
        </div>
        <div className="listContainer">
          <div className="listTitle">Projects Status</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
