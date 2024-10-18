import { apiClient } from "./config";

export const createEducation = async (payload) => {
  return await apiClient.post(`/users/education/`, payload);
};

export const getEducation = async (id) => {
  return await apiClient.get(`/users/education/${id}`);
};

export const getEducationList = async () => {
  return await apiClient.get(`/users/education/`);
};

export const updateEducation = async (id, payload) => {
  return await apiClient.patch(`/users/education/${id}`, payload);
};

export const deleteEducation = async (id) => {
  return await apiClient.delete(`/users/education/${id}`);
};
