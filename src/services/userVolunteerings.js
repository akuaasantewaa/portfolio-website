import { apiClient } from "./config";

export const createVolunteering = async (payload) => {
  return await apiClient.post(`/users/volunteering`, payload);
};

export const getVolunteering = async (id) => {
  return await apiClient.get(`/users/volunteering/${id}`);
};

export const getVolunteeringsList = async () => {
  return await apiClient.get(`/users/volunteering/`);
};

export const updateVolunteering = async (id, payload) => {
  return await apiClient.patch(`/users/volunteering/${id}`, payload);
};

export const deleteVolunteering = async (id) => {
  return await apiClient.delete(`/users/volunteering/${id}`);
};
