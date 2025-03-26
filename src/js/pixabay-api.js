import axios from 'axios';

const API_KEY = '49511859-e69d0a4b83e671b1fc0acb89e';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, per_page = 15) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: per_page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка при завантаженнi зображення', error);
    throw error;
  }
}
