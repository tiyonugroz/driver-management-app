import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

function Beranda() {
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      Beranda
    </Content>
  );
}

export default Beranda;
