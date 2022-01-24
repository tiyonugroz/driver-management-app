import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { ControlOutlined } from "@ant-design/icons";

const Beranda = lazy(() => import("./pages/Beranda"));
const DriverManagement = lazy(() => import("./pages/DriverManagement"));
const Pickup = lazy(() => import("./pages/Pickup"));
const Page404 = lazy(() => import("./pages/404"));

const publicRoutes = [
  {
    key: "beranda",
    exact: true,
    path: "/",
    component: Beranda,
    title: "Beranda",
    icon: <ControlOutlined />,
  },
  {
    key: "driver_management",
    path: "/driver-management",
    exact: false,
    component: DriverManagement,
    title: "Driver Management",
    icon: <ControlOutlined />,
  },
  {
    key: "pickup",
    path: "/pickup",
    exact: false,
    component: Pickup,
    title: "Pickup",
    icon: <ControlOutlined />,
  },
];

function App({ history }) {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <ConnectedRouter history={history}>
        <Switch>
          {/* public */}
          {publicRoutes.map((route) => (
            <Route
              key={route.key}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}

          <Route component={Page404} />
        </Switch>
      </ConnectedRouter>
    </Suspense>
  );
}

export default App;
