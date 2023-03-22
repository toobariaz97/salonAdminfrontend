import api from "../utils/api";

export const bookingLog = async (params) => {
  try {
    let { data } = await api.get("/booking-log", { params });
    return data?.detail;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const bookingDetails = async (id) => {
  try {
    let { data } = await api.get(`/booking-details/${id}`);
    return data?.detail;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
