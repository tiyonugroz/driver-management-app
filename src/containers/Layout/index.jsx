import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "antd";
import { Debounce } from "react-throttle";
import WindowResizeListener from "react-window-size-listener";
import { toggleAll } from "../../redux/app/actions";
import { default as Header } from "../Header";
import { default as Sidebar } from "../Sidebar";

function LayoutWrapper({ children }) {
  const [isToggled, setIsToggled] = useState(true);
  const toggle = useCallback(
    () => setIsToggled(!isToggled),
    [isToggled, setIsToggled]
  );

  const dispatch = useDispatch();
  const changeToggleAll = (width, height) => dispatch(toggleAll(width, height));
  const app = useSelector((state) => state.App);
  const appHeight = window.innerHeight;

  useEffect(() => {
    setIsToggled(app.view === "MobileView" ? false : true);
  }, [app.view]);

  return (
    <Layout style={{ height: appHeight }}>
      <Debounce time="1000" handler="onResize">
        <WindowResizeListener
          onResize={(windowSize) =>
            changeToggleAll(windowSize.windowWidth, windowSize.windowHeight)
          }
        />
      </Debounce>
      <Header onClick={toggle} />
      <Layout>
        <Sidebar showSideBar={isToggled} />
        <Layout style={{ height: app.height - 48, padding: "0 24px 48px" }}>
          {children}
        </Layout>
      </Layout>
    </Layout>
  );
}

export default LayoutWrapper;
