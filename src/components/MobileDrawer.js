import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./MobileDrawer.css";

export default function MobileDrawer() {
  return (
    <Menu right>
      <Link to="/feed">Feed</Link>
      <Link to="/chat">Chat</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/premium">Premium</Link>
    </Menu>
  );
}
