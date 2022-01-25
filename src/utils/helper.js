import { notification } from "antd";

export const delay = (ms) =>
  new Promise((reject) => {
    setTimeout(() => {
      reject(new Error("Request Timeout"));
    }, ms);
  });

export const notifyError = (
  message = "Internal Server Error",
  placement = "topRight",
  key = "505",
  onClose = null,
  type = "error"
) => {
  notification[type]({
    message,
    placement,
    key,
    onClose,
  });
};