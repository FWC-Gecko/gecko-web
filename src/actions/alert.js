import { toast } from "react-toastify";

export const setAlert = (msg, alertType, timeout = 5000) => {
  if (alertType === "error") {
    toast.error(msg);
  } else if (alertType === "success") {
    toast.success(msg);
  } else if (alertType === "warning") {
    toast.warn(msg);
  } else if (alertType === "info") {
    toast.info(msg);
  } else {
    toast(msg);
  }
};
