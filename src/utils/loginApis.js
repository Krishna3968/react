import { BASE_URL } from "../config/apiConfig";

export const getOtp = async (phoneNumber) => {
  try {
    const response = await fetch(`${BASE_URL}/v1/user/getotp/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
