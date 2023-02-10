import { setAlert } from "../actions/alert";

import api from "../utils/api";

export default function usePosition() {
  const getPositions = async () => {
    try {
      const res = await api.get("/global/listtoken/positions");
      if (res?.data?.success) {
        return res?.data?.data?.positions;
      }
      return [];
    } catch (error) {
      setAlert(error?.response?.data.message, "warn");
      return [];
    }
  };

  return { getPositions };
}
