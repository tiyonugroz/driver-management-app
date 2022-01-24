import React, { useState, useEffect } from "react";
import Nprogress from "nprogress";
import ReactPlaceholder from "react-placeholder";
import "nprogress/nprogress.css";
import "react-placeholder/lib/reactPlaceholder.css";

export default function asyncComponent(importComponent) {
  function AsyncFunc(props) {
    const [component, setComponent] = useState(null);

    useEffect(() => {
      let mounted = true;
      Nprogress.start();
      const loading = async () => {
        const { default: Component } =  await importComponent();
        Nprogress.done();
        if (mounted) {
          setComponent(<Component {...props} />);
        }
      };
      loading();

      return () => {
        mounted = false;
      };
    }, [props]);

    const Component = component || <div />;
    return (
      <ReactPlaceholder type="text" rows={7} ready={Component !== null}>
        {Component}
      </ReactPlaceholder>
    );
  }

  return AsyncFunc;
}
