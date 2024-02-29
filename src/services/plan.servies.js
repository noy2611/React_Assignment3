// plan.servies.js
import axios from "axios";

const baseURL = "https://assignment2-server-cdgy.onrender.com";

const instance = axios.create({
  baseURL,
  timeout: 10000, // Adjust the timeout as needed
});

export const getAllPlans = async () => {
  try {
    const response = await instance.get("/plan");
    return response.data;
  } catch (error) {
    console.error("Error fetching plans:", error.message);
    throw error;
  }
};
