import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { publicRoutes } from "../../App";

const { Sider } = Layout;

function SidebarWrapper() {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
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
    </Sider>
  );
}

export default SidebarWrapper;
