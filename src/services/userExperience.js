import { apiClient } from "./config";

export const createExperience = async (payload) => {
  return await apiClient.post(`/users/experiences`, payload);
};

export const getExperience = async (id) => {
  return await apiClient.get(`/users/experiences/${id}`);
};

export const getExperienceList = async () => {
  return await apiClient.get(`/users/experiences/`);
};

export const updateExperience = async (id, payload) => {
  return await apiClient.patch(`/users/experiences/${id}`, payload);
};

export const deleteExperience = async (id) => {
  return await apiClient.delete(`/users/experiences/${id}`);
};
