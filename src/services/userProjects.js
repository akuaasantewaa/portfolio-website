import { apiClient } from "./config";

export const createProject = async (payload) => {
  return await apiClient.post(`/users/projects`, payload);
};

export const getProject = async (id) => {
  return await apiClient.get(`/users/projects/${id}`);
};

export const getProjectList = async () => {
  return await apiClient.get(`/users/projects`);
};

export const updateProject = async (id, payload) => {
  return await apiClient.patch(`/users/projects/${id}`, payload);
};

export const deleteProject = async (id) => {
  return await apiClient.delete(`/users/projects/${id}`);
};
