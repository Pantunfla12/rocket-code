import axios from "./axios";

export const registerRequest = (user) => axios.post(`/users/register`, user);
