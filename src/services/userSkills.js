import { apiClient } from "./config";

export const createSkill = async (payload) => {
  return await apiClient.post(`/users/skills`, payload);
};

export const getSkill = async (id) => {
  return await apiClient.get(`/users/skills/${id}`);
};

export const getSkillList = async () => {
  return await apiClient.get(`/users/skills/`);
};

export const updateSkill = async (id, payload) => {
  return await apiClient.patch(`/users/skills/${id}`, payload);
};

export const deleteSkill = async (id) => {
  return await apiClient.delete(`/users/skills/${id}`);
};
