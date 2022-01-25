import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { publicRoutes } from "../../App";
import { MenuWrapper } from "./style";

const { Sider } = Layout;

function SidebarWrapper(props) {
  const originalCurrentLocation =
    window && window.location.pathname.substring(1);

  return (
    <Sider
      width={200}
      style={{
        background: "#fff",
        display: props.showSideBar ? "block" : "none",
      }}
    >
      <MenuWrapper>
        <Menu
          mode="inline"
          defaultSelectedKeys={[
            originalCurrentLocation !== ""
              ? originalCurrentLocation
              : "beranda",
          ]}
          style={{ height: "100%", borderRight: 0 }}
        >
          {publicRoutes.map((route) => (
            <Menu.Item key={route.key}>
              <Link to={route.path}>
                {<route.icon />}
                <span>{route.title}</span>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </MenuWrapper>
    </Sider>
  );
}

export default SidebarWrapper;
