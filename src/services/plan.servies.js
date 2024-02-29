// plan.servies.js
import axios from "axios";

const baseURL = "https://assignment2-server-cdgy.onrender.com";

const instance = axios.create({
  baseURL,
  timeout: 20000, 
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

  export const createPlan = async (newPlan) => {
    try {
      const response = await instance.post("/plan", newPlan);
      return response.data;
    } catch (error) {
      console.error("Error creating plan:", error.message);
      throw error;
    }
  };

  export const deletePlanById = async (id) => {
    try {
      const response = await instance.delete(`/plan/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting plan with ID ${id}:`, error.message);
      throw error;
    }
  };

export const updatePlan = async (id, updatedPlan) => {
    try {
      const response = await instance.put(`/plan/${id}`, updatedPlan);
      return response.data;
    } catch (error) {
      console.error(`Error updating plan with ID ${id}:`, error.message);
      throw error;
    }
  };
  