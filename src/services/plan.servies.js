// plan.servies.js
import axios from "axios";

const baseURL = "https://assignment2-server-cdgy.onrender.com";

const instance = axios.create({
  baseURL,
  timeout: 10000, 
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


export const getPlanById = async (id) => {
    try {
      const response = await instance.get(`/plan/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching plan with ID ${id}:`, error.message);
      throw error;
    }
  };