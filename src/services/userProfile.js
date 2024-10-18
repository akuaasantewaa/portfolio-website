import { apiClient } from "./config";

export const getProfile = async () => {
  return apiClient.get(`/users/userProfile`);
};
export const createProfile = async (payload) => {
  return apiClient.post(`/users/userProfile`, payload);
};

export const updateProfile = async (userId, payload) => {
  return apiClient.patch(`/users/userProfile/${userId}`, payload);
};
