import axios from "axios";

import { REGISTER_URL, RESULTS_URL, VERIFY_OTP_URL } from "../Utils/constants";

export const register = async (roll) => {
  try {
    const { data } = await axios.post(REGISTER_URL, { roll });

    return data;
  } catch (err) {
    throw err.response.data;
  }
};

export const verifyOtp = async (roll, otp, pubKey) => {
  try {
    const { data } = await axios.post(VERIFY_OTP_URL, { roll, otp, pubKey });

    return data;
  } catch (err) {
    throw err.response.data;
  }
};

export const fetchResults = async (roll, sem) => {
  try {
    const { data } = await axios.get(`${RESULTS_URL}?roll=${roll}&sem=${sem}`);

    return data;
  } catch (err) {
    throw err.response.data;
  }
};
