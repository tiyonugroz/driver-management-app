import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

function DriverManagement() {
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      Driver Management
    </Content>
  );
}

export default DriverManagement;
