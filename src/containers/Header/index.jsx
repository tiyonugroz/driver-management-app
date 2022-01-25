import React from "react";
import { useSelector } from "react-redux";
import { Layout, Avatar, Image, Typography } from "antd";
import { Link } from "react-router-dom";
import { Menu, Logo, Profile } from "./style";
import hamburger from "../../images/hamburger.png";
import logo from "../../images/shipper.png";
import avatar from "../../images/avatar.png";

const { Header } = Layout;
const { Text } = Typography;

function HeaderWrapper(props) {
  const app = useSelector((state) => state.App);

  return (
    <Header style={{ background: "#fff" }}>
      <Menu
        onClick={props.onClick}
        style={{ display: app.view === "MobileView" ? "block" : "none" }}
      >
        <img src={hamburger} alt="hamburger manu" />
      </Menu>
      <Link to="/">
        <Logo src={logo} alt="shipper logo" />
      </Link>
      <Profile>
        <div className="profile-item">
          <span className="profile-trigger">
            <span className="anticon">
              Hello, <Text>Shipper User</Text>
            </span>
            <Avatar src={<Image src={avatar} style={{ width: 32 }} />} />
          </span>
        </div>
      </Profile>
    </Header>
  );
}

export default HeaderWrapper;
