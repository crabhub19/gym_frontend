// api.js
import axios from 'axios';
const url = import.meta.env.VITE_API_URL;
// Create an Axios instance
const api = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to include the token in headers if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
  
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const refreshResponse = await axios.post('/account/api/token/refresh/', {
            refresh: localStorage.getItem('refreshToken'), // Assumes you store refresh token
          });
          const newAccessToken = refreshResponse.data.access;
          localStorage.setItem('token', newAccessToken);
  
          // Update the Authorization header and retry the original request
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        } catch (refreshError) {
          localStorage.removeItem('token'); 
          localStorage.removeItem('refreshToken'); 
          window.location.href = '/login'; // Redirect to login pa
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );



export default api;
