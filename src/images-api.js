import axios from 'axios';

const API_KEY = 'z9QY60bbEnUBa14KveThyRB-b3TkR1Mt0Dgp3UzOMc0';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const getImages = async (searchWord, currentPage) => {
  const response = await axios.get('/search/photos', {
    params: {
      client_id: API_KEY,
      query: searchWord,
      page: currentPage,
      per_page: 12,
    },
  });

  return response.data;
};