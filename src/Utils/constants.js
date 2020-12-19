const BASE_URL = "http://localhost:3000";

const USERS_URL = `${BASE_URL}/users`;
export const REGISTER_URL = `${USERS_URL}/register`;
export const VERIFY_OTP_URL = `${USERS_URL}/verifyOtp`;
export const RESULTS_URL = `${USERS_URL}/results`;

const ADMIN_URL = `${BASE_URL}/admin`;
export const ADMIN_LOGIN_URL = `${ADMIN_URL}/login`;
export const UPLOAD_GRADES_URL = `${ADMIN_URL}/grades`;