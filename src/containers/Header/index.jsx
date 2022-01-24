import React from "react";
import { Layout, Avatar, Image, Typography } from "antd";
import { Link } from "react-router-dom";
import { Logo, Profile } from "./style";
import logo from "../../images/shipper.png";
import avatar from "../../images/avatar.png";

const { Header } = Layout;
const { Text } = Typography;

function HeaderWrapper() {
  return (
    <Header style={{ background: "#fff" }}>
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
