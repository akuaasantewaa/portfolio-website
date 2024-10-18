import { apiClient } from "./config";

export const createAchievement = async (payload) => {
  return await apiClient.post(`/users/achievements/`, payload);
};

export const getAchievement = async (id) => {
  return await apiClient.get(`/users/achievements/${id}`);
};

export const getAchievementList = async () => {
  return await apiClient.get(`/users/achievements/`);
};

export const updateAchievement = async (id, payload) => {
  return await apiClient.patch(`/users/achievements/${id}`, payload);
};

export const deleteAchievement = async (id) => {
  return await apiClient.delete(`/users/achievements/${id}`);
};
