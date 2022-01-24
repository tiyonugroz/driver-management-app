import React from "react";
import { Layout } from "antd";

import { default as Header } from "../Header";
import { default as Sidebar } from "../Sidebar";

function LayoutWrapper({ children }) {
  return (
    <Layout>
      <Header />
      <Layout>
        <Sidebar />
        <Layout style={{ padding: "0 24px 24px" }}>{children}</Layout>
      </Layout>
    </Layout>
  );
}

export default LayoutWrapper;
