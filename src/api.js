import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/t4lp8zGDXK0rNLGEOoEJRiWww8EiRb1o',
});

const api = {
  async loadRestaurants() {
    const response = await client.get('/restaurants');
    return response.data;
  },
};

export default api;
