import "./widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
  let data;

  const amount = 20;
  const iconStyles = {
    user: { backgroundColor: "rgba(255, 255, 255, 0.2)", color: "white" },
    req: { backgroundColor: "rgba(235, 204, 225, 0.2)", color: "white" },
    projects: { backgroundColor: "rgba(255, 255, 255, 0.2)", color: "white" },
    themes: { backgroundColor: "rgba(255, 255, 255, 0.2)", color: "white" },
  };

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        link: "See all users",
        linkPath: "/users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={iconStyles.user}
          />
        ),
      };
      break;
    case "req":
      data = {
        title: "Requests",
        link: "View all requests",
        linkPath: "/teams",
        icon: (
          <BorderColorIcon
            className="icon"
            style={iconStyles.req}
          />
        ),
      };
      break;
    case "projects":
      data = {
        title: "Projects",
        link: "View ongoing projects",
        linkPath: "/projects",
        icon: (
          <EngineeringIcon
            className="icon"
            style={iconStyles.projects}
          />
        ),
      };
      break;
    case "themes":
      data = {
        title: "Themes",
        link: "See details",
        linkPath: "/themes",
        icon: (
          <ReceiptLongIcon
            className="icon"
            style={iconStyles.themes}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{amount}</span>
        <span className="link">
          <Link to={data.linkPath}>{data.link}</Link>
        </span>
      </div>
      <div className="right">{data.icon}</div>
    </div>
  );
};

export default Widget;
