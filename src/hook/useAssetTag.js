import { setAlert } from "../actions/alert";

import api from "../utils/api";

export default function useAssetTag() {
  const getAssettags = async () => {
    try {
      const res = await api.get("/global/listtoken/assettags");
      if (res?.data?.success) {
        return res?.data?.data?.assetTags;
      }
      return [];
    } catch (error) {
      setAlert(error?.response?.data.message, "warn");
      return [];
    }
  };

  return { getAssettags };
}
