import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import admin from "./images/image.png";


const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Requests</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={30}
            text={"30%"}
            strokeWidth={4}
            styles={{
              path: { stroke: 'rgb(97, 25, 79)' },
              text: { fill: 'rgb(97, 25, 79)', fontSize: '16px', fontWeight: 'bold' },
              trail: { stroke: '#d6d6d6' }
            }}
          />
        </div>
        <p className="title">Total Requests of the week</p>
        <p className="amount">20</p>

       

        <div className="summary">
          <div className="item">
            <div className="itemTitle">Declined</div>
            <div className="itemResult negative">
              <div className="resultAmount">6</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Pending</div>
            <div className="itemResult pending">
              <div className="resultAmount">6</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Accepted</div>
            <div className="itemResult positive">
              <div className="resultAmount">4</div>
            </div>
          </div>
        </div>
       
         <img src={admin} alt="Featured" className="featuredImage" />
      </div>
    </div>
  );
};

export default Featured;
