export const getView = (width) => {
  let newView = "MobileView";
  if (width > 1220) {
    newView = "DesktopView";
  } else if (width > 767) {
    newView = "TabView";
  }
  return newView;
}

export const TOGGLE_ALL = "TOGGLE_ALL";
export const toggleAll = (width, height) => {
  const view = getView(width);
  const collapsed = view !== "DesktopView";
  return {
    type: TOGGLE_ALL,
    collapsed,
    view,
    height
  };
};
