import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { default as Layout } from "./containers/Layout";
import {
  HomeOutlined,
  UserOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import asyncComponent from "./utils/AsyncFunc";
import './App.less';


const Beranda = asyncComponent(() => import("./pages/Beranda"));
const DriverManagement = asyncComponent(() =>
  import("./pages/DriverManagement")
);
const Pickup = asyncComponent(() => import("./pages/Pickup"));
const Page404 = asyncComponent(() => import("./pages/404"));

export const publicRoutes = [
  {
    key: "beranda",
    exact: true,
    path: "/",
    component: Beranda,
    title: "Beranda",
    icon: HomeOutlined,
  },
  {
    key: "driver_management",
    path: "/driver-management",
    exact: false,
    component: DriverManagement,
    title: "Driver Management",
    icon: UserOutlined,
  },
  {
    key: "pickup",
    path: "/pickup",
    exact: false,
    component: Pickup,
    title: "Pickup",
    icon: CalendarOutlined,
  },
];

function App({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Layout>
          {/* public */}
          {publicRoutes.map((route) => (
            <Route
              key={route.key}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
        </Layout>
        <Route component={Page404} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
