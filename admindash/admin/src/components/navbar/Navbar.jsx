import React, { useState } from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { Link } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [newMessages, setNewMessages] = useState([
    { id: 1, text: "Hey, how are you?" },
    { id: 2, text: "I'm doing great, thanks!" },
  ]); // New messages

  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const handleChatClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="searchicon" />
        </div>

        <div className="items">
          <div className="item">
            <NotificationsNoneOutlinedIcon
              className="icon"
              onClick={handleNotificationClick}
            />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon
              className="icon"
              onClick={handleChatClick}
            />
            <div className="counter">{newMessages.length}</div>
          </div>
          <div className="item">
            <Link to="/login">
              <img
                src="https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes_23-2149436185.jpg?w=360"
                alt="Profile"
                className="avatar"
              />
            </Link>
          </div>
        </div>
      </div>

      {isNotificationOpen && (
        <div className="notification-dropdown">
          <div className="header">
            <p>Notifications</p>
            <MdOutlineCancel
              className="close-icon"
              onClick={handleNotificationClick}
            />
          </div>
          <div className="notification-items">
            <div className="notification-item">
              <img
                src="https://imgcdn.stablediffusionweb.com/2024/6/11/94bfd884-0ca7-4e3c-ae60-78460120bf39.jpg"
                alt="Notification"
                className="notification-img"
              />
              <div>
                <p className="notification-title">New Task Assigned</p>
                <p className="notification-desc">
                  You have been assigned a new task for the project.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {isChatOpen && newMessages.length > 0 && (
        <div className="chat-dropdown">
          <div className="header">
            <p>New Messages</p>
            <MdOutlineCancel
              className="close-icon"
              onClick={handleChatClick}
            />
          </div>
          <div className="chat-items">
            {newMessages.map((message) => (
              <div key={message.id} className="chat-item">
                <img
                  src="https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611740.jpg?semt=ais_hybrid"
                  alt="User"
                  className="chat-img"
                />
                <div className="chat-bubble">
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
